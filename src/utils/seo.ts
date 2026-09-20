import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string[];
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  schema?: Record<string, unknown>;
}

/**
 * Updates DOM meta tags and title for search engines and social platforms.
 */
export function updateMetaTags({
  title,
  description,
  canonicalPath = '',
  keywords,
  ogType = 'website',
  schema
}: SEOProps): void {
  // Update document title
  document.title = title;

  // Helper to safely set or create standard meta tags
  const setMeta = (name: string, content: string, isProperty = false) => {
    const attribute = isProperty ? 'property' : 'name';
    let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  // Primary descriptions
  setMeta('description', description);
  if (keywords && keywords.length > 0) {
    setMeta('keywords', keywords.join(', '));
  }

  // OpenGraph tags
  setMeta('og:title', title, true);
  setMeta('og:description', description, true);
  setMeta('og:type', ogType, true);

  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://techstackgist.com';
  const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
  const fullUrl = `${origin}${cleanPath === '/' ? '' : cleanPath}`;
  setMeta('og:url', fullUrl, true);

  // Twitter cards
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);

  // Canonical link tag
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', fullUrl);

  // Optional dynamic JSON-LD structured data for the current route
  const existingRouteSchema = document.getElementById('route-schema');
  if (schema) {
    let scriptTag = existingRouteSchema as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'route-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schema);
  } else if (existingRouteSchema) {
    existingRouteSchema.remove();
  }
}

/**
 * React hook to set route-specific SEO metadata on component mount and updates.
 */
export function useSEO(props: SEOProps): void {
  useEffect(() => {
    updateMetaTags(props);
  }, [props.title, props.description, props.canonicalPath]);
}
