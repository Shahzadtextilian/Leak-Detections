import React from 'react';
import { X } from 'lucide-react';
import { LeadCaptureForm } from './LeadCaptureForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType?: 'water' | 'gas' | 'both' | 'inspection';
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, serviceType = 'water' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl my-8">
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 w-9 h-9 bg-white text-slate-700 hover:text-slate-950 rounded-full flex items-center justify-center shadow-lg border border-slate-200"
          aria-label="Close form"
          id="close-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        <LeadCaptureForm initialService={serviceType} onSuccess={() => {}} />
      </div>
    </div>
  );
};
