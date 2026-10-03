import React, { useState } from 'react';
import { Phone, Droplets, Flame, ShieldCheck, Clock, MapPin, CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface LeadCaptureFormProps {
  initialService?: 'water' | 'gas' | 'both' | 'inspection';
  compact?: boolean;
  onSuccess?: () => void;
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  initialService = 'water',
  compact = false
}) => {
  const [serviceType, setServiceType] = useState<'water' | 'gas'>(
    initialService === 'gas' ? 'gas' : 'water'
  );

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden text-slate-800" id="dispatch-hub-card">
      {/* Header Banner */}
      <div className={`p-5 text-white ${
        serviceType === 'gas'
          ? 'bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900'
          : 'bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900'
      }`}>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-cyan-300 flex items-center gap-1.5">
                <span>Live Dispatch Hub</span>
                <span className="text-slate-400">&bull;</span>
                <span className="text-emerald-400">Technicians On Call</span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-white mt-0.5">
                {serviceType === 'gas' ? 'Emergency Gas Leak Dispatch' : 'Water & Slab Leak Dispatch'}
              </h3>
            </div>
          </div>
          <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            92105 Corridor
          </span>
        </div>
      </div>

      {/* Service Selector Tabs */}
      <div className="p-3 bg-slate-100 border-b border-slate-200">
        <div className="grid grid-cols-2 gap-2 bg-slate-200/70 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setServiceType('water')}
            className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              serviceType === 'water'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
            }`}
            id="tab-water-dispatch"
          >
            <Droplets className="w-3.5 h-3.5" />
            <span>Water / Slab Leak</span>
          </button>
          <button
            type="button"
            onClick={() => setServiceType('gas')}
            className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              serviceType === 'gas'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
            }`}
            id="tab-gas-dispatch"
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Gas Leak / Odor</span>
          </button>
        </div>
      </div>

      {/* Main Dispatch Details */}
      <div className="p-5 sm:p-6 space-y-4">
        {serviceType === 'water' ? (
          <div className="space-y-3">
            <div className="p-3.5 bg-blue-50/80 rounded-xl border border-blue-100 text-xs text-blue-950 space-y-1.5">
              <div className="font-bold flex items-center gap-1.5 text-blue-900">
                <Droplets className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Non-Invasive Diagnostic Water Locating</span>
              </div>
              <p className="text-slate-700 leading-relaxed text-[11px] sm:text-xs">
                Matched specialists utilize acoustic listening sensors and FLIR thermal cameras to locate hidden slab pinholes, warm floor spots, and high water bill causes without damaging walls or tearing up foundations.
              </p>
            </div>

            <ul className="text-xs text-slate-700 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Slab &amp; Foundation Leaks:</strong> Under concrete tile &amp; hardwood</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Pressurized Main Lines:</strong> Yard supply lines &amp; irrigation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Priority Arrival:</strong> Dispatched in 45-90 min across 92105</span>
              </li>
            </ul>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="p-3.5 bg-amber-50/80 rounded-xl border border-amber-200 text-xs text-amber-950 space-y-1.5">
              <div className="font-bold flex items-center gap-1.5 text-amber-900">
                <Flame className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Urgent Gas Line Safety &amp; Testing</span>
              </div>
              <p className="text-slate-700 leading-relaxed text-[11px] sm:text-xs">
                If you smell sulfur/rotten eggs, evacuate immediately! Our network provides certified digital gas sniffing, pressure decay testing, and SDG&amp;E red-tag clearance repairs.
              </p>
            </div>

            <ul className="text-xs text-slate-700 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span><strong>SDG&amp;E Red Tag Clearances:</strong> Safe gas line pressure certification</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span><strong>Appliance Flex Lines:</strong> Water heaters, stoves, wall heaters</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span><strong>Digital Sniffer Wands:</strong> PPM trace detection</span>
              </li>
            </ul>
          </div>
        )}

        {/* Primary Direct Call Action Button */}
        <div className="pt-2">
          <a
            href={BUSINESS_INFO.telLink}
            className={`w-full py-4 px-4 rounded-xl text-white font-extrabold text-base flex items-center justify-center gap-2.5 shadow-lg active:scale-98 transition-all text-center ${
              serviceType === 'gas'
                ? 'bg-amber-600 hover:bg-amber-700 shadow-amber-600/30'
                : 'bg-red-600 hover:bg-red-700 shadow-red-600/30'
            }`}
            id="dispatch-card-call-btn"
          >
            <Phone className="w-5 h-5 animate-pulse shrink-0" />
            <span className="truncate">Call 24/7 Dispatch: {BUSINESS_INFO.phoneFormatted}</span>
          </a>
          <p className="text-[11px] text-center text-slate-500 mt-2">
            ⚡ Instant phone connection &bull; No automated hold &bull; Direct contractor referral
          </p>
        </div>

        {/* Trust Badges Bar */}
        <div className="pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-[10px] sm:text-[11px] text-slate-600 font-medium">
          <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-slate-50">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>CSLB Licensed</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-slate-50">
            <Clock className="w-4 h-4 text-emerald-600" />
            <span>24/7 Available</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-slate-50">
            <MapPin className="w-4 h-4 text-red-500" />
            <span>City Heights Local</span>
          </div>
        </div>
      </div>

      {/* Footer Location Strip */}
      <div className="px-5 py-2.5 bg-slate-900 text-slate-300 text-[11px] flex items-center justify-between">
        <span className="flex items-center gap-1 text-slate-300">
          <MapPin className="w-3 h-3 text-red-400" />
          <span>{BUSINESS_INFO.address}, San Diego CA 92105</span>
        </span>
        <span className="text-emerald-400 font-bold">Fast Response</span>
      </div>
    </div>
  );
};
