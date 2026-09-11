import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { 
  MapPin, 
  Layers, 
  Award, 
  ExternalLink, 
  Eye, 
  Navigation,
  Compass
} from 'lucide-react';
import { HistoricalPlace, Language } from '../types';
import { translations } from '../data/translations';

interface InteractiveMapProps {
  places: HistoricalPlace[];
  language: Language;
  onSelectPlace: (place: HistoricalPlace) => void;
  onStartVirtualTour: (place: HistoricalPlace) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  places,
  language,
  onSelectPlace,
  onStartVirtualTour
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<HistoricalPlace | null>(places[0] || null);
  const [activeRegionFilter, setActiveRegionFilter] = useState<string>('All');
  const t = translations[language];

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Centered on central India
    const map = L.map(mapContainerRef.current, {
      center: [21.8, 78.5],
      zoom: 5,
      zoomControl: true,
      minZoom: 4,
      maxZoom: 18,
    });

    // OpenStreetMap CartoDB Positron tiles for clean heritage aesthetic
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Markers when places or filter changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear old markers
    markersRef.current.forEach(m => m.remove());
    markersRef.current = [];

    const filtered = activeRegionFilter === 'All' 
      ? places 
      : places.filter(p => p.focusRegion === activeRegionFilter);

    filtered.forEach((place) => {
      // Color-code markers by region
      let colorClass = '#d97706'; // amber
      if (place.focusRegion === 'Agra') colorClass = '#dc2626'; // red sandstone
      if (place.focusRegion === 'Kashmir') colorClass = '#0284c7'; // alpine blue
      if (place.focusRegion === 'Karnataka') colorClass = '#b45309'; // granite gold
      if (place.focusRegion === 'Kerala') colorClass = '#059669'; // emerald spice

      const customIcon = L.divIcon({
        className: 'custom-heritage-marker',
        html: `
          <div style="
            background: ${colorClass}; 
            color: white; 
            width: 32px; 
            height: 32px; 
            border-radius: 50%; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            border: 2px solid white;
            cursor: pointer;
            transition: transform 0.2s;
          ">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 21h18"/>
              <path d="M5 21V7l7-4 7 4v14"/>
              <path d="M9 10a3 3 0 0 1 6 0v11H9z"/>
            </svg>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      const marker = L.marker([place.coordinates.lat, place.coordinates.lng], { icon: customIcon })
        .addTo(map)
        .on('click', () => {
          setSelectedPlace(place);
          map.setView([place.coordinates.lat, place.coordinates.lng], 8, { animate: true });
        });

      markersRef.current.push(marker);
    });
  }, [places, activeRegionFilter]);

  // Jump to predefined historical regions
  const jumpToRegion = (region: string, lat: number, lng: number, zoom: number) => {
    setActiveRegionFilter(region);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([lat, lng], zoom, { animate: true });
    }
  };

  return (
    <div id="interactive-heritage-map-container" className="h-[calc(100vh-5rem)] flex flex-col md:flex-row relative overflow-hidden">
      
      {/* Map Filter Bar & Sidebar */}
      <div className="w-full md:w-96 bg-white dark:bg-stone-900 border-r border-stone-200 dark:border-stone-800 flex flex-col z-20 shrink-0 shadow-lg">
        
        {/* Quick Regional Circuit Selector */}
        <div className="p-4 border-b border-stone-200 dark:border-stone-800 space-y-2.5">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            <Compass className="w-4 h-4 text-amber-600" />
            <span>Select Regional Circuit:</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 text-xs">
            <button
              onClick={() => jumpToRegion('All', 21.8, 78.5, 5)}
              className={`px-2.5 py-1.5 rounded-lg font-semibold transition-colors ${
                activeRegionFilter === 'All'
                  ? 'bg-amber-600 text-white'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
              }`}
            >
              All India
            </button>
            <button
              onClick={() => jumpToRegion('Agra', 27.1751, 78.0421, 10)}
              className={`px-2.5 py-1.5 rounded-lg font-semibold transition-colors ${
                activeRegionFilter === 'Agra'
                  ? 'bg-red-600 text-white'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
              }`}
            >
              Agra (Mughal)
            </button>
            <button
              onClick={() => jumpToRegion('Karnataka', 14.5, 76.2, 7)}
              className={`px-2.5 py-1.5 rounded-lg font-semibold transition-colors ${
                activeRegionFilter === 'Karnataka'
                  ? 'bg-amber-600 text-white'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
              }`}
            >
              Karnataka
            </button>
            <button
              onClick={() => jumpToRegion('Kerala', 10.5, 76.0, 7)}
              className={`px-2.5 py-1.5 rounded-lg font-semibold transition-colors ${
                activeRegionFilter === 'Kerala'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
              }`}
            >
              Kerala
            </button>
            <button
              onClick={() => jumpToRegion('Kashmir', 34.0, 75.0, 8)}
              className={`px-2.5 py-1.5 rounded-lg font-semibold transition-colors ${
                activeRegionFilter === 'Kashmir'
                  ? 'bg-sky-600 text-white'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
              }`}
            >
              Kashmir
            </button>
            <button
              onClick={() => jumpToRegion('Other', 19.0, 78.0, 5)}
              className={`px-2.5 py-1.5 rounded-lg font-semibold transition-colors ${
                activeRegionFilter === 'Other'
                  ? 'bg-purple-600 text-white'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
              }`}
            >
              More Sites
            </button>
          </div>
        </div>

        {/* Place List on Map */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {places
            .filter(p => activeRegionFilter === 'All' || p.focusRegion === activeRegionFilter)
            .map((place) => {
              const isSelected = selectedPlace?.id === place.id;
              return (
                <div
                  key={place.id}
                  onClick={() => {
                    setSelectedPlace(place);
                    if (mapInstanceRef.current) {
                      mapInstanceRef.current.setView([place.coordinates.lat, place.coordinates.lng], 8, { animate: true });
                    }
                  }}
                  className={`p-3 rounded-xl cursor-pointer border transition-all flex space-x-3 items-center ${
                    isSelected
                      ? 'bg-amber-500/10 border-amber-500 dark:bg-amber-950/40 shadow-sm'
                      : 'bg-stone-50 dark:bg-stone-800/40 border-stone-200 dark:border-stone-800 hover:border-amber-400/50'
                  }`}
                >
                  <img 
                    src={place.imageUrl} 
                    alt={place.name}
                    className="w-14 h-14 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-1.5">
                      <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 truncate">
                        {place.name}
                      </h4>
                      {place.architecture.unescoWorldHeritage && (
                        <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      )}
                    </div>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400 truncate">
                      {place.city}, {place.state}
                    </p>
                    <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400">
                      {place.architecture.primaryStyle}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Main Map Viewport */}
      <div className="flex-1 relative h-full">
        <div ref={mapContainerRef} className="w-full h-full" />

        {/* Selected Monument Detail Card Overlay (Bottom Right) */}
        {selectedPlace && (
          <div 
            id="map-selected-place-popup"
            className="absolute bottom-6 right-6 left-6 md:left-auto md:w-96 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-amber-500/40 z-30 animate-in fade-in slide-in-from-bottom-3"
          >
            <div className="flex space-x-3">
              <img 
                src={selectedPlace.imageUrl} 
                alt={selectedPlace.name}
                className="w-20 h-20 rounded-xl object-cover shrink-0"
              />
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center space-x-1 text-[11px] text-stone-500">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>{selectedPlace.city}, {selectedPlace.state}</span>
                </div>
                <h3 className="font-serif-heritage font-bold text-sm text-stone-900 dark:text-white leading-tight">
                  {selectedPlace.name}
                </h3>
                <p className="text-[11px] text-amber-700 dark:text-amber-400 font-semibold truncate">
                  {selectedPlace.dynasty} ({selectedPlace.century})
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-2 mt-2">
              {selectedPlace.shortDescription}
            </p>

            <div className="mt-3 pt-2 border-t border-stone-200 dark:border-stone-800 flex items-center space-x-2">
              <button
                onClick={() => onStartVirtualTour(selectedPlace)}
                className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 rounded-xl text-xs font-bold bg-amber-600 text-white hover:bg-amber-700 shadow-md transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>360° Tour</span>
              </button>
              <button
                onClick={() => onSelectPlace(selectedPlace)}
                className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 rounded-xl text-xs font-semibold bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-200 transition-colors"
              >
                <span>Full Guide</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
