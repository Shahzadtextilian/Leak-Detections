import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, Compass, Phone, ExternalLink, Play } from 'lucide-react';
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
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=3431+43rd+St,+San+Diego,+CA+92105`;
  const viewMapUrl = `https://maps.google.com/?q=3431+43rd+St,+San+Diego,+CA+92105`;

  // Lazy-load iframe via IntersectionObserver to eliminate initial render blocking & network payload
  useEffect(() => {
    if (isMapLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsMapLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isMapLoaded]);

  return (
    <div
      ref={containerRef}
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-xs"
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

      {/* Embedded Google Map with Performance Facade */}
      <div className={`relative w-full ${height} bg-slate-100 overflow-hidden`}>
        {isMapLoaded ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2189.2012590745026!2d-117.10440609105784!3d32.741810585678635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9541320d585a7%3A0x2d9fadd495afaa8e!2s3431%2043rd%20St%2C%20San%20Diego%2C%20CA%2092105%2C%20USA!5e1!3m2!1sen!2s!4v1789736966061!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Leak Detection Pro - 3431 43rd St, San Diego CA 92105 Google Maps Location"
            className="w-full h-full"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50/40 to-slate-200 flex flex-col items-center justify-center p-6 text-center">
            <div className="relative mb-3">
              <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-500/30 animate-bounce">
                <MapPin className="w-8 h-8" />
              </div>
            </div>
            <div className="font-extrabold text-slate-900 text-base sm:text-lg">
              3431 43rd St, San Diego, CA 92105
            </div>
            <p className="text-xs text-slate-500 mt-1 max-w-sm">
              City Heights dispatch base between University Ave and Fairmount Ave corridor.
            </p>
            <button
              onClick={() => setIsMapLoaded(true)}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Load Interactive Google Map</span>
            </button>
          </div>
        )}
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
          <span>View larger map</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
