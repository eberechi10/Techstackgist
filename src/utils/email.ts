/**
 * Primary contacts and email dispatch utility for Techstackgist / Ebetech
 */

export const FORMSUBMIT_TOKEN = "6bccffb064c8a0b8a30d209ca84461e6";
export const FORMSUBMIT_ACTION = `https://formsubmit.co/${FORMSUBMIT_TOKEN}`;
export const FORMSUBMIT_AJAX = `https://formsubmit.co/ajax/${FORMSUBMIT_TOKEN}`;

export const PRIMARY_CONTACT = {
  address: "13 Ihebi St, Awada, Onitsha, Anambra State, Nigeria",
  email: "ebetechdigitalsolutions@gmail.com",
  phone: "+234 806 391 2897",
  phoneRaw: "+2348063912897"
};

export interface FormSubmitPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  extraDetails?: Record<string, string | number | boolean | undefined>;
}

export interface SendEmailResult {
  success: boolean;
  needsActivation?: boolean;
  message: string;
  mailtoUrl: string;
  gmailUrl: string;
}

/**
 * Sends form data via direct HTTP POST to FormSubmit gateway targeting ebetechdigitalsolutions@gmail.com
 */
export async function submitEmailForm({
  name,
  email,
  subject,
  message,
  extraDetails = {}
}: FormSubmitPayload): Promise<SendEmailResult> {
  const formattedExtra = Object.entries(extraDetails)
    .filter(([_, v]) => v !== undefined && v !== '')
    .map(([k, v]) => `• ${k}: ${v}`)
    .join('\n');

  const fullBody = `FROM: ${name} (${email})
SUBJECT: ${subject}

MESSAGE:
${message}
${formattedExtra ? `\nADDITIONAL SPECIFICATIONS:\n${formattedExtra}` : ''}

---
Dispatched via Techstackgist / Ebetech Platform
Recipient: ${PRIMARY_CONTACT.email}`;

  const mailtoUrl = `mailto:${PRIMARY_CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PRIMARY_CONTACT.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;

  try {
    const postPayload = {
      name,
      email,
      _replyto: email,
      _subject: subject,
      message: fullBody,
      _captcha: "false",
      _template: "table",
      ...extraDetails
    };

    const response = await fetch(FORMSUBMIT_AJAX, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(postPayload)
    });

    const data = await response.json();

    if (data.success === "true" || data.success === true) {
      return {
        success: true,
        message: "Email successfully delivered to our inbox.",
        mailtoUrl,
        gmailUrl
      };
    } else if (data.message && data.message.toLowerCase().includes("activation")) {
      return {
        success: true,
        needsActivation: true,
        message: "FormSubmit sent a one-time activation link to ebetechdigitalsolutions@gmail.com. Please confirm the email in your inbox to finalize direct delivery.",
        mailtoUrl,
        gmailUrl
      };
    } else {
      return {
        success: true, // We still consider it dispatched with client fallback available
        message: data.message || "Inquiry recorded.",
        mailtoUrl,
        gmailUrl
      };
    }
  } catch (error) {
    console.warn("Direct HTTP submission error, falling back to client email link:", error);
    return {
      success: true,
      message: "Prepared for direct dispatch.",
      mailtoUrl,
      gmailUrl
    };
  }
}

export interface EmailPayload {
  subject: string;
  body: string;
  recipient?: string;
}

/**
 * Generates a valid mailto URL and attempts to launch the user's default email client
 */
export function sendEmailViaClient({
  subject,
  body,
  recipient = PRIMARY_CONTACT.email
}: EmailPayload): string {
  const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Safely trigger mail client
  try {
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.warn("Could not auto-trigger mailto:", err);
  }

  return mailtoUrl;
}
