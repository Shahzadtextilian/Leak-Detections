import React, { useState } from 'react';
import { Droplets, Flame } from 'lucide-react';
import { LeadSmartEmbed } from './LeadSmartEmbed';

interface LeadCaptureFormProps {
  initialService?: 'water' | 'gas' | 'both' | 'inspection';
  compact?: boolean;
  onSuccess?: () => void;
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  initialService = 'water',
}) => {
  const [serviceType, setServiceType] = useState<'water' | 'gas'>(
    initialService === 'gas' ? 'gas' : 'water'
  );

  const category = serviceType === 'gas' ? '75' : '1';

  return (
    <div className="w-full space-y-3" id="lead-match-form">
      {/* Leak Type Switcher */}
      <div className="flex bg-slate-100 p-1 rounded-xl gap-1 border border-slate-200/80 shadow-xs">
        <button
          type="button"
          onClick={() => setServiceType('water')}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            serviceType === 'water'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
          id="select-water-match-btn"
        >
          <Droplets className="w-3.5 h-3.5" />
          <span>Water Leak Match</span>
        </button>
        <button
          type="button"
          onClick={() => setServiceType('gas')}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            serviceType === 'gas'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
          id="select-gas-match-btn"
        >
          <Flame className="w-3.5 h-3.5" />
          <span>Gas Leak Match</span>
        </button>
      </div>

      {/* Main Leak Detection Pro Matching Form */}
      <LeadSmartEmbed 
        category={category} 
        zipCode="92105" 
      />
    </div>
  );
};
