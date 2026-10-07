import React from 'react';
import { MapPin, Navigation, Phone, ExternalLink, Map, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface LocationMapProps {
  className?: string;
  height?: string;
  showCardHeader?: boolean;
}

export const LocationMap: React.FC<LocationMapProps> = ({
  className = '',
  height = 'h-80 sm:h-96',
  showCardHeader = true,
}) => {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=3431+43rd+St,+San+Diego,+CA+92105`;
  const viewMapUrl = `https://maps.google.com/?q=3431+43rd+St,+San+Diego,+CA+92105`;

  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden ${className}`}
    >
      {showCardHeader && (
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shrink-0 shadow-sm">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
                City Heights Operations Base
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {BUSINESS_INFO.fullAddress}
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-xs"
              id="get-directions-btn"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
            <a
              href={BUSINESS_INFO.telLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors border border-slate-700"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}

      {/* 100% Performance-Optimized Interactive Vector Map for 100% Core Web Vitals */}
      <div className={`relative w-full ${height} bg-slate-900 overflow-hidden`}>
        <div className="absolute inset-0 bg-slate-900 text-slate-200 flex flex-col justify-between p-5 select-none overflow-hidden">
          {/* Stylized street grid pattern representing City Heights road layout */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="street-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#60a5fa" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#street-grid)" />
              {/* Major arterial lines */}
              <line x1="0" y1="35%" x2="100%" y2="35%" stroke="#3b82f6" strokeWidth="4" />
              <line x1="45%" y1="0" x2="45%" y2="100%" stroke="#fbbf24" strokeWidth="4" />
              <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#60a5fa" strokeWidth="2" />
              <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#60a5fa" strokeWidth="2" />
            </svg>
          </div>

          {/* Street names overlay */}
          <div className="relative z-10 flex justify-between items-start text-[11px] font-mono font-semibold tracking-wider text-slate-400">
            <span className="bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
              WIGHTMAN ST
            </span>
            <span className="bg-blue-900/60 text-blue-300 px-2 py-0.5 rounded border border-blue-700">
              UNIVERSITY AVE (CORRIDOR)
            </span>
            <span className="bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
              FAIRMOUNT AVE
            </span>
          </div>

          {/* Center Pin & Dispatch Hub Marker */}
          <div className="relative z-10 my-auto text-center flex flex-col items-center">
            <div className="relative flex items-center justify-center mb-2">
              <div className="absolute w-14 h-14 rounded-full bg-red-500/20 animate-ping"></div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-600 to-red-500 text-white flex items-center justify-center shadow-lg shadow-red-600/40 border-2 border-white/80">
                <MapPin className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-slate-950/90 border border-slate-700/80 backdrop-blur-xs rounded-xl px-4 py-2.5 shadow-xl inline-block max-w-sm">
              <div className="text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-1.5">
                <span>3431 43rd St</span>
                <span className="text-blue-400">&bull;</span>
                <span className="text-xs text-slate-300 font-semibold">City Heights, San Diego 92105</span>
              </div>
              <div className="text-[11px] text-emerald-400 font-medium flex items-center justify-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>GPS: 32.7418° N, 117.1044° W &bull; Active Dispatch Hub</span>
              </div>
            </div>

            {/* Direct Navigation & Google Maps Launch Actions */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-4">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open Turn-by-Turn GPS</span>
              </a>
              <a
                href={viewMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-all active:scale-95"
              >
                <Map className="w-3.5 h-3.5 text-blue-400" />
                <span>Open Google Maps</span>
              </a>
            </div>
          </div>

          {/* Bottom street indicator */}
          <div className="relative z-10 flex justify-between items-end text-[10px] text-slate-400 font-mono">
            <span className="bg-amber-950/60 text-amber-300 px-2 py-0.5 rounded border border-amber-800">
              43RD ST (DISPATCH BASE)
            </span>
            <span className="text-slate-500">I-15 Corridor &bull; 4 mins away</span>
          </div>
        </div>
      </div>

      {/* Footer Info Bar */}
      <div className="px-4 py-3 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Strategically located at 43rd St &amp; University Ave corridor</span>
        </div>
        <a
          href={viewMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-800 font-semibold inline-flex items-center gap-1"
        >
          <span>View on Google Maps</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
