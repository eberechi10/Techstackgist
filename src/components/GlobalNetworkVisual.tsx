import React, { useState } from 'react';
import { NETWORK_CORRIDORS } from '../data/mockData';
import { Globe, Clock, ShieldCheck, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export const GlobalNetworkVisual: React.FC = () => {
  const [activeCorridorIndex, setActiveCorridorIndex] = useState<number>(0);
  const active = NETWORK_CORRIDORS[activeCorridorIndex];

  // SVG Coordinates on an 800x420 projection canvas
  // Africa & Connected Global Cities
  const cities: Record<string, { x: number; y: number; label: string; flag: string }> = {
    'Lagos': { x: 405, y: 220, label: 'Lagos', flag: '🇳🇬' },
    'Nairobi': { x: 480, y: 240, label: 'Nairobi', flag: '🇰🇪' },
    'Accra': { x: 390, y: 222, label: 'Accra', flag: '🇬🇭' },
    'Abuja': { x: 415, y: 212, label: 'Abuja', flag: '🇳🇬' },
    'Cape Town': { x: 445, y: 345, label: 'Cape Town', flag: '🇿🇦' },
    'Kigali': { x: 465, y: 248, label: 'Kigali', flag: '🇷🇼' },

    'London': { x: 395, y: 110, label: 'London', flag: '🇬🇧' },
    'Berlin': { x: 430, y: 105, label: 'Berlin', flag: '🇩🇪' },
    'Amsterdam': { x: 412, y: 108, label: 'Amsterdam', flag: '🇳🇱' },
    'Toronto': { x: 235, y: 130, label: 'Toronto', flag: '🇨🇦' },
    'New York': { x: 250, y: 140, label: 'New York', flag: '🇺🇸' },
    'San Francisco': { x: 140, y: 145, label: 'SF Bay Area', flag: '🇺🇸' }
  };

  const arcs = [
    { from: 'Lagos', to: 'London', color: '#38BDF8' },
    { from: 'Nairobi', to: 'Berlin', color: '#60A5FA' },
    { from: 'Accra', to: 'Amsterdam', color: '#818CF8' },
    { from: 'Abuja', to: 'Toronto', color: '#34D399' },
    { from: 'Cape Town', to: 'New York', color: '#F472B6' },
  ];

  return (
    <div id="global-network-section" className="rounded-2xl bg-slate-950 border border-slate-800 text-white p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      
      {/* Glow backgrounds */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Section Header */}
      <div className="max-w-3xl mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/80 text-blue-300 text-xs font-semibold mb-3">
          <Globe className="w-3.5 h-3.5" />
          Global Talent Network
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
          Connecting African talent with opportunities worldwide.
        </h3>
        <p className="text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed">
          High-performance distributed teams thrive on seamless timezones, native English fluency, and proven engineering fundamentals. Our corridors link major African tech capitals to tech epicenters across Europe, North America, and beyond.
        </p>
      </div>

      {/* Interactive Map Visual */}
      <div className="relative rounded-xl bg-slate-900/90 border border-slate-800 p-4 sm:p-6 overflow-hidden mb-8">
        
        {/* SVG World Canvas */}
        <div className="w-full aspect-[16/9] sm:aspect-[21/9] max-h-[420px] relative">
          <svg viewBox="0 0 800 420" className="w-full h-full select-none">
            <defs>
              <linearGradient id="corridorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.2" />
              </linearGradient>

              <radialGradient id="nodePulse">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Grid Lines for high-tech aesthetic */}
            <g stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3">
              <line x1="100" y1="0" x2="100" y2="420" />
              <line x1="250" y1="0" x2="250" y2="420" />
              <line x1="400" y1="0" x2="400" y2="420" />
              <line x1="550" y1="0" x2="550" y2="420" />
              <line x1="700" y1="0" x2="700" y2="420" />

              <line x1="0" y1="100" x2="800" y2="100" />
              <line x1="0" y1="210" x2="800" y2="210" />
              <line x1="0" y1="320" x2="800" y2="320" />
            </g>

            {/* Stylized continent landmass outlines (minimal geometric representation) */}
            {/* Africa */}
            <path
              d="M 370,180 Q 430,165 470,195 Q 510,230 490,280 Q 460,350 440,360 Q 420,330 400,280 Q 350,230 370,180 Z"
              fill="#0f172a"
              stroke="#334155"
              strokeWidth="1.2"
              className="transition-colors hover:fill-slate-800"
            />
            {/* Europe */}
            <path
              d="M 360,90 Q 420,70 460,95 Q 440,140 380,140 Q 360,110 360,90 Z"
              fill="#0f172a"
              stroke="#334155"
              strokeWidth="1"
            />
            {/* North America */}
            <path
              d="M 120,90 Q 230,70 270,130 Q 240,190 190,200 Q 130,160 120,90 Z"
              fill="#0f172a"
              stroke="#334155"
              strokeWidth="1"
            />
            {/* South America */}
            <path
              d="M 220,230 Q 280,240 270,320 Q 240,370 220,340 Q 205,270 220,230 Z"
              fill="#0f172a"
              stroke="#1e293b"
              strokeWidth="0.8"
            />

            {/* Connection Arcs */}
            {arcs.map((arc, idx) => {
              const start = cities[arc.from];
              const end = cities[arc.to];
              const isSelected = idx === activeCorridorIndex;
              
              // Calculate curved arc control point
              const midX = (start.x + end.x) / 2;
              const midY = Math.min(start.y, end.y) - (Math.abs(start.x - end.x) * 0.25);
              const pathData = `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;

              return (
                <g key={`${arc.from}-${arc.to}`}>
                  <path
                    d={pathData}
                    fill="none"
                    stroke={isSelected ? arc.color : '#334155'}
                    strokeWidth={isSelected ? '2.5' : '1'}
                    strokeDasharray={isSelected ? 'none' : '4 4'}
                    opacity={isSelected ? 1 : 0.4}
                  />
                  {/* Glowing pulse on selected arc */}
                  {isSelected && (
                    <circle r="4" fill={arc.color} className="animate-pulse">
                      <animateMotion
                        path={pathData}
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              );
            })}

            {/* Render City Nodes */}
            {Object.entries(cities).map(([name, city]) => {
              const isHighlighted = 
                name === active.from || name === active.to;

              return (
                <g 
                  key={name} 
                  transform={`translate(${city.x}, ${city.y})`}
                  className="cursor-pointer"
                  onClick={() => {
                    const foundIdx = NETWORK_CORRIDORS.findIndex(c => c.from === name || c.to === name);
                    if (foundIdx !== -1) setActiveCorridorIndex(foundIdx);
                  }}
                >
                  {isHighlighted && (
                    <circle r="12" fill="url(#nodePulse)" className="animate-ping" />
                  )}
                  <circle
                    r={isHighlighted ? 5 : 3.5}
                    fill={isHighlighted ? '#38BDF8' : '#64748B'}
                    stroke="#020617"
                    strokeWidth="1.5"
                  />
                  <text
                    y={city.y > 250 ? 14 : -10}
                    textAnchor="middle"
                    className={`text-[9px] sm:text-[10px] select-none font-semibold ${
                      isHighlighted ? 'fill-white font-bold' : 'fill-slate-400'
                    }`}
                  >
                    {city.flag} {city.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Corridor Selector Tabs */}
        <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
          <div className="text-xs text-slate-400 font-medium">
            Active Remote Corridors:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {NETWORK_CORRIDORS.map((corridor, idx) => {
              const isSelected = idx === activeCorridorIndex;
              return (
                <button
                  key={`${corridor.from}-${corridor.to}`}
                  onClick={() => setActiveCorridorIndex(idx)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer border ${
                    isSelected
                      ? 'bg-blue-600 border-blue-400 text-white font-bold shadow-xs'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <span>{corridor.from}</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                  <span>{corridor.to}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Selected Corridor Live Telemetry Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-4">
          <div className="text-xs text-slate-400 mb-1 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            Active Corridor
          </div>
          <div className="text-base font-bold text-white flex items-center gap-2">
            <span>{active.fromCountry}</span>
            <ArrowRight className="w-4 h-4 text-slate-500" />
            <span>{active.toCountry}</span>
          </div>
          <div className="text-xs text-slate-400 mt-1">
            Distance: {active.distance}
          </div>
        </div>

        <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-4">
          <div className="text-xs text-slate-400 mb-1 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            Timezone Delta
          </div>
          <div className="text-base font-bold text-white">
            {active.timeDiff} Overlap
          </div>
          <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            Full business day collaboration
          </div>
        </div>

        <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-4">
          <div className="text-xs text-slate-400 mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
            Screened Talent Depth
          </div>
          <div className="text-base font-bold text-white">
            {active.activeTalent}
          </div>
          <div className="text-xs text-slate-400 mt-1">
            Senior Frontend, Backend & Data
          </div>
        </div>

        <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-4">
          <div className="text-xs text-slate-400 mb-1 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            English Fluency
          </div>
          <div className="text-base font-bold text-white">
            100% Professional Native
          </div>
          <div className="text-xs text-slate-400 mt-1">
            Standard business communication
          </div>
        </div>

      </div>

    </div>
  );
};
