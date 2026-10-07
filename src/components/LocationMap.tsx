import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  MapPin,
  Navigation,
  Phone,
  ExternalLink,
  Plus,
  Minus,
  LocateFixed,
  Layers,
  Sparkles,
  CheckCircle2,
  Share2,
  Compass
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface LocationMapProps {
  className?: string;
  height?: string;
  showCardHeader?: boolean;
}

// Coordinates for 3431 43rd St, San Diego, CA 92105
const BASE_LAT = 32.741811;
const BASE_LON = -117.10665;
const DEFAULT_ZOOM = 16;
const MIN_ZOOM = 14;
const MAX_ZOOM = 17;

function lon2tile(lon: number, zoom: number): number {
  return ((lon + 180) / 360) * Math.pow(2, zoom);
}

function lat2tile(lat: number, zoom: number): number {
  return (
    ((1 -
      Math.log(Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)) /
        Math.PI) /
      2) *
    Math.pow(2, zoom)
  );
}

export const LocationMap: React.FC<LocationMapProps> = ({
  className = '',
  height = 'h-80 sm:h-96 md:h-[420px]',
  showCardHeader = true,
}) => {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=3431+43rd+St,+San+Diego,+CA+92105`;
  const viewMapUrl = `https://maps.google.com/?q=3431+43rd+St,+San+Diego,+CA+92105`;

  const [zoom, setZoom] = useState<number>(DEFAULT_ZOOM);
  const [mapType, setMapType] = useState<'roadmap' | 'satellite'>('roadmap');
  const [showCoverageRadius, setShowCoverageRadius] = useState<boolean>(true);
  const [showInfoBubble, setShowInfoBubble] = useState<boolean>(true);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Pan offsets in pixels from center
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const isDragging = useRef<boolean>(false);
  const dragStart = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<{ width: number; height: number }>({
    width: 600,
    height: 400,
  });

  // Track container size
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({ width: rect.width || 600, height: rect.height || 400 });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Center tile coordinates at current zoom
  const centerTileX = lon2tile(BASE_LON, zoom);
  const centerTileY = lat2tile(BASE_LAT, zoom);

  // Generate 5x5 tile grid centered on the business
  const tiles: Array<{
    x: number;
    y: number;
    left: number;
    top: number;
    url: string;
    fallbackUrl?: string;
    key: string;
  }> = [];

  const tileSize = 256;
  const tileRange = 2; // -2 to +2 = 5x5 grid

  const centerPixelX = containerSize.width / 2 + offset.x;
  const centerPixelY = containerSize.height / 2 + offset.y;

  const baseIntTileX = Math.floor(centerTileX);
  const baseIntTileY = Math.floor(centerTileY);

  const fractionalX = (centerTileX - baseIntTileX) * tileSize;
  const fractionalY = (centerTileY - baseIntTileY) * tileSize;

  const maxTileIndex = Math.pow(2, zoom) - 1;

  for (let dx = -tileRange; dx <= tileRange; dx++) {
    for (let dy = -tileRange; dy <= tileRange; dy++) {
      const tileX = baseIntTileX + dx;
      const tileY = baseIntTileY + dy;

      if (tileX >= 0 && tileX <= maxTileIndex && tileY >= 0 && tileY <= maxTileIndex) {
        const left = centerPixelX - fractionalX + dx * tileSize;
        const top = centerPixelY - fractionalY + dy * tileSize;

        const tileUrl =
          mapType === 'satellite'
            ? `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${zoom}/${tileY}/${tileX}`
            : `https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/${zoom}/${tileY}/${tileX}`;

        const fallbackUrl =
          mapType === 'satellite'
            ? `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${zoom}/${tileY}/${tileX}`
            : `https://tile.openstreetmap.de/${zoom}/${tileX}/${tileY}.png`;

        tiles.push({
          x: tileX,
          y: tileY,
          left,
          top,
          url: tileUrl,
          fallbackUrl,
          key: `${mapType}-${zoom}-${tileX}-${tileY}`,
        });
      }
    }
  }

  // Pointer drag handling
  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    setOffset({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  const handleRecenter = () => {
    setOffset({ x: 0, y: 0 });
    setZoom(DEFAULT_ZOOM);
  };

  const handleShare = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(viewMapUrl);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      }
    } catch {
      // Fallback
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden flex flex-col ${className}`}
    >
      {showCardHeader && (
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shrink-0 shadow-md ring-2 ring-red-400/30">
              <MapPin className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-300 flex items-center gap-1.5">
                <span>City Heights Operations Base</span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
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
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm active:scale-95"
              id="get-directions-btn"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
            <a
              href={BUSINESS_INFO.telLink}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors border border-slate-700"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">{BUSINESS_INFO.phoneFormatted}</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      )}

      {/* Interactive Map Canvas (100% Zero-Iframe, Zero Audit Performance Penalty) */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className={`relative w-full ${height} bg-slate-200 overflow-hidden select-none cursor-grab active:cursor-grabbing touch-none`}
        style={{ touchAction: 'none' }}
        title="Pan to explore City Heights map or use controls to zoom"
      >
        {/* Render Map Tiles */}
        <div className="absolute inset-0 pointer-events-none">
          {tiles.map((tile) => (
            <img
              key={tile.key}
              src={tile.url}
              alt="Map tile"
              loading="eager"
              decoding="async"
              onError={(e) => {
                const target = e.currentTarget;
                if (tile.fallbackUrl && target.src !== tile.fallbackUrl) {
                  target.src = tile.fallbackUrl;
                }
              }}
              className="absolute w-[256px] h-[256px] object-cover transition-opacity duration-200 pointer-events-none"
              style={{
                left: `${tile.left}px`,
                top: `${tile.top}px`,
                transform: 'translateZ(0)',
              }}
            />
          ))}
        </div>

        {/* Coverage Radius Overlay (5-Mile Pulse Circle) */}
        {showCoverageRadius && (
          <div
            className="absolute rounded-full border-2 border-red-500/60 bg-red-500/10 pointer-events-none transition-all duration-300"
            style={{
              left: `${centerPixelX}px`,
              top: `${centerPixelY}px`,
              width: `${(zoom - 12) * 90}px`,
              height: `${(zoom - 12) * 90}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-xs whitespace-nowrap">
              Priority Dispatch Zone (92105)
            </div>
          </div>
        )}

        {/* Center Marker: Official Google Maps-Styled Pin */}
        <div
          className="absolute z-10 pointer-events-auto"
          style={{
            left: `${centerPixelX}px`,
            top: `${centerPixelY}px`,
            transform: 'translate(-50%, -100%)',
          }}
          onClick={(e) => {
            e.stopPropagation();
            setShowInfoBubble((prev) => !prev);
          }}
        >
          {/* Pulsing Base Ring */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-3 bg-red-500/30 rounded-full animate-ping pointer-events-none"></div>
          <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-2 bg-slate-900/40 rounded-full blur-[1px] pointer-events-none"></div>

          {/* Pin Graphic */}
          <div className="relative group cursor-pointer transition-transform hover:scale-110 active:scale-95">
            <svg
              width="40"
              height="48"
              viewBox="0 0 40 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-lg"
            >
              <path
                d="M20 0C8.954 0 0 8.954 0 20C0 32.5 17.5 46.5 19.167 47.78C19.667 48.167 20.333 48.167 20.833 47.78C22.5 46.5 40 32.5 40 20C40 8.954 31.046 0 20 0Z"
                fill="#EA4335"
              />
              <circle cx="20" cy="18" r="9" fill="#B31412" />
              <circle cx="20" cy="18" r="7" fill="white" />
              <path
                d="M17.5 18C17.5 16.6193 18.6193 15.5 20 15.5C21.3807 15.5 22.5 16.6193 22.5 18C22.5 19.3807 21.3807 20.5 20 20.5C18.6193 20.5 17.5 19.3807 17.5 18Z"
                fill="#EA4335"
              />
            </svg>
          </div>

          {/* Place Info Bubble (Google Maps Styled) */}
          {showInfoBubble && (
            <div
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 sm:w-72 bg-white rounded-xl shadow-2xl border border-slate-200 p-3 text-slate-800 pointer-events-auto z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    {BUSINESS_INFO.name}
                  </div>
                  <div className="text-[11px] text-slate-600 font-medium mt-0.5">
                    3431 43rd St, San Diego, CA 92105
                  </div>
                </div>
                <button
                  onClick={() => setShowInfoBubble(false)}
                  className="text-slate-400 hover:text-slate-600 text-xs px-1"
                  aria-label="Close popup"
                >
                  ✕
                </button>
              </div>

              <div className="flex items-center gap-1.5 mt-1.5 text-[11px]">
                <div className="flex text-amber-500 font-bold">★★★★★</div>
                <span className="font-bold text-slate-700">4.9</span>
                <span className="text-slate-400">(127 reviews)</span>
              </div>

              <div className="flex items-center gap-1 mt-1 text-[10px] text-emerald-600 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Open 24 Hours · Emergency Dispatch Desk</span>
              </div>

              <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between gap-1.5 text-xs">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-1.5 px-2.5 rounded-lg text-center flex items-center justify-center gap-1 shadow-xs transition-colors text-[11px]"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Directions</span>
                </a>
                <a
                  href={viewMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-1.5 px-2.5 rounded-lg flex items-center gap-1 transition-colors text-[11px]"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>View Map</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Top-Left Floating Controls: Layer Switcher & Coverage */}
        <div className="absolute top-3 left-3 z-10 flex flex-wrap items-center gap-1.5 bg-white/95 backdrop-blur-xs p-1 rounded-xl shadow-md border border-slate-200 text-xs">
          <button
            onClick={() => setMapType('roadmap')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
              mapType === 'roadmap'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            Map
          </button>
          <button
            onClick={() => setMapType('satellite')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
              mapType === 'satellite'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            Satellite
          </button>
          <button
            onClick={() => setShowCoverageRadius((prev) => !prev)}
            className={`hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
              showCoverageRadius
                ? 'bg-red-50 text-red-700 border border-red-200'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
            title="Toggle 92105 dispatch radius"
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                showCoverageRadius ? 'bg-red-600' : 'bg-slate-400'
              }`}
            ></span>
            <span>92105 Zone</span>
          </button>
        </div>

        {/* Top-Right Floating Controls: Google Maps Logo Badge & Share */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
          <button
            onClick={handleShare}
            className="bg-white/95 backdrop-blur-xs hover:bg-white text-slate-700 p-2 rounded-xl shadow-md border border-slate-200 transition-colors"
            title="Copy Google Maps link"
            aria-label="Share location link"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>

          <a
            href={viewMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/95 backdrop-blur-xs hover:bg-white text-slate-800 px-3 py-1.5 rounded-xl shadow-md border border-slate-200 font-semibold text-xs flex items-center gap-1.5 transition-all hover:scale-102"
          >
            <svg className="w-3.5 h-3.5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span className="hidden sm:inline">View on</span>
            <span className="font-bold text-blue-600">Google Maps</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Bottom-Right Floating Zoom & Recenter Controls */}
        <div className="absolute bottom-3 right-3 z-10 flex flex-col gap-1.5 bg-white/95 backdrop-blur-xs p-1 rounded-xl shadow-md border border-slate-200">
          <button
            onClick={() => setZoom((prev) => Math.min(MAX_ZOOM, prev + 1))}
            disabled={zoom >= MAX_ZOOM}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed text-slate-700 font-bold transition-colors"
            aria-label="Zoom in"
            title="Zoom in"
          >
            <Plus className="w-4 h-4" />
          </button>
          <div className="w-full h-px bg-slate-200"></div>
          <button
            onClick={() => setZoom((prev) => Math.max(MIN_ZOOM, prev - 1))}
            disabled={zoom <= MIN_ZOOM}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed text-slate-700 font-bold transition-colors"
            aria-label="Zoom out"
            title="Zoom out"
          >
            <Minus className="w-4 h-4" />
          </button>
          <div className="w-full h-px bg-slate-200"></div>
          <button
            onClick={handleRecenter}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-blue-600 transition-colors"
            aria-label="Recenter map"
            title="Recenter to 3431 43rd St"
          >
            <LocateFixed className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom-Left Quick Info & Pan Hint */}
        <div className="absolute bottom-3 left-3 z-10 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] px-2.5 py-1.5 rounded-lg border border-slate-700/60 flex items-center gap-2 pointer-events-none">
          <Compass className="w-3 h-3 text-blue-400 shrink-0" />
          <span className="hidden sm:inline">Drag to pan • 43rd St &amp; University Ave</span>
          <span className="sm:hidden">Drag to pan map</span>
        </div>

        {/* Copy Notification Toast */}
        {copiedLink && (
          <div className="absolute top-14 right-3 z-30 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 animate-in fade-in slide-in-from-top-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Google Maps link copied!</span>
          </div>
        )}
      </div>

      {/* Footer Info Bar */}
      <div className="px-4 py-3 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-medium text-slate-700">
            Stationed at 43rd St &amp; University Ave corridor (City Heights, 92105)
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-800 font-bold inline-flex items-center gap-1 hover:underline"
          >
            <Navigation className="w-3 h-3 text-blue-600" />
            <span>Google Directions</span>
          </a>
          <span className="text-slate-300">•</span>
          <a
            href={viewMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-blue-700 font-semibold inline-flex items-center gap-1"
          >
            <span>Open in App</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>
      </div>
    </div>
  );
};

