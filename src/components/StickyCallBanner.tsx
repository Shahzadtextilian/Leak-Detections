import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const StickyCallBanner: React.FC = () => {
  return (
    <aside aria-label="Emergency call action" className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-t border-slate-700/80 p-2.5 sm:hidden shadow-2xl">
      <a
        href={BUSINESS_INFO.telLink}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2.5 text-sm shadow-md active:scale-95 transition-transform"
        id="sticky-mobile-call-btn"
      >
        <div className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center animate-pulse shrink-0">
          <Phone className="w-3.5 h-3.5" />
        </div>
        <span className="truncate">Emergency Call: {BUSINESS_INFO.phoneFormatted}</span>
      </a>
    </aside>
  );
};
