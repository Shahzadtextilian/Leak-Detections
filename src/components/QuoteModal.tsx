import React from 'react';
import { X, Phone, ShieldCheck, Clock, MapPin, Droplets, Flame, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType?: 'water' | 'gas' | 'both' | 'inspection';
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  serviceType = 'water'
}) => {
  if (!isOpen) return null;

  const isGas = serviceType === 'gas';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-lg my-6 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800 animate-in fade-in zoom-in-95">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 bg-slate-800/80 hover:bg-slate-900 text-white rounded-full flex items-center justify-center shadow-md transition-transform active:scale-95"
          aria-label="Close modal"
          id="close-quote-modal-btn"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className={`p-6 text-white ${
          isGas
            ? 'bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900'
            : 'bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900'
        }`}>
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-cyan-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>24/7 City Heights Priority Dispatch</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            {isGas ? 'Emergency Gas Leak Hotline' : 'Water & Slab Leak Dispatch'}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Serving 3431 43rd St, City Heights &amp; San Diego 92105
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          <div className={`p-4 rounded-xl border text-xs leading-relaxed space-y-1 ${
            isGas
              ? 'bg-amber-50/80 border-amber-200 text-amber-950'
              : 'bg-blue-50/80 border-blue-200 text-blue-950'
          }`}>
            <div className="font-bold text-sm flex items-center gap-1.5">
              {isGas ? (
                <>
                  <Flame className="w-4 h-4 text-amber-600" />
                  <span>Immediate Gas Odor Response</span>
                </>
              ) : (
                <>
                  <Droplets className="w-4 h-4 text-blue-600" />
                  <span>Non-Invasive Diagnostic Water Locating</span>
                </>
              )}
            </div>
            <p className="text-slate-600 text-xs">
              {isGas
                ? 'For natural gas odors, line pressure testing, and SDG&E red-tag clearance, speak with our certified emergency dispatch coordinator immediately.'
                : 'For unexplained high water bills, hot spots on floors, or hidden slab pipe leaks, speak directly with our local contractor dispatch team.'}
            </p>
          </div>

          <div className="space-y-2 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>Average Arrival:</strong> 45 to 90 minutes in City Heights (92105)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>Licensed Contractors:</strong> CSLB certified plumbing &amp; gas specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>Modern Equipment:</strong> FLIR thermal cameras &amp; acoustic microphones</span>
            </div>
          </div>

          {/* Direct Call Button */}
          <div className="pt-2">
            <a
              href={BUSINESS_INFO.telLink}
              className={`w-full py-4 px-4 rounded-xl text-white font-extrabold text-base flex items-center justify-center gap-2.5 shadow-lg active:scale-98 transition-all text-center ${
                isGas
                  ? 'bg-amber-600 hover:bg-amber-700 shadow-amber-600/30'
                  : 'bg-red-600 hover:bg-red-700 shadow-red-600/30'
              }`}
              id="modal-call-btn"
            >
              <Phone className="w-5 h-5 animate-pulse shrink-0" />
              <span>Call Dispatch: {BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <p className="text-[11px] text-center text-slate-500 mt-2">
              Available 24 hours a day, 7 days a week, 365 days a year.
            </p>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              <span>3431 43rd St, City Heights CA</span>
            </span>
            <span className="flex items-center gap-1 text-emerald-600 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CSLB Verified Network</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
