import React, { useState, useMemo } from 'react';
import { 
  Landmark, 
  Award, 
  Eye, 
  MapPin, 
  Search, 
  SlidersHorizontal, 
  Sparkles, 
  Layers, 
  Calendar, 
  Filter, 
  Check, 
  ArrowRight,
  Compass
} from 'lucide-react';
import { HistoricalPlace, Language, ArchitecturalStyle, FocusRegion } from '../types';
import { PlaceCard } from './PlaceCard';
import { translations } from '../data/translations';

interface DashboardProps {
  places: HistoricalPlace[];
  language: Language;
  bookmarkedPlaceIds: string[];
  onToggleBookmark: (placeId: string) => void;
  cachedPlaceIds: string[];
  onToggleOfflineCache: (placeId: string) => void;
  onSelectPlace: (place: HistoricalPlace) => void;
  onStartVirtualTour: (place: HistoricalPlace) => void;
  onOpenMap: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  places,
  language,
  bookmarkedPlaceIds,
  onToggleBookmark,
  cachedPlaceIds,
  onToggleOfflineCache,
  onSelectPlace,
  onStartVirtualTour,
  onOpenMap
}) => {
  const t = translations[language];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedStyle, setSelectedStyle] = useState<string>('All');
  const [selectedDynastyEra, setSelectedDynastyEra] = useState<string>('All');
  const [unescoOnly, setUnescoOnly] = useState(false);

  // Dynasties for the interactive chronological timeline
  const timelineEras = [
    { id: 'All', name: 'All Eras', years: 'All Dynasties' },
    { id: 'Karkota', name: 'Karkota Dynasty', years: '8th c. CE (Kashmir)' },
    { id: 'Rashtrakuta', name: 'Rashtrakuta Dynasty', years: '8th c. CE (Deccan)' },
    { id: 'Hoysala', name: 'Hoysala Empire', years: '12th c. CE (Karnataka)' },
    { id: 'Eastern Ganga', name: 'Eastern Ganga', years: '13th c. CE (Odisha)' },
    { id: 'Vijayanagara', name: 'Vijayanagara', years: '14th-16th c. (Karnataka)' },
    { id: 'Mughal', name: 'Mughal Empire', years: '16th-17th c. (Agra & Kashmir)' },
    { id: 'Cochin', name: 'Kingdom of Cochin & Nayakas', years: '16th-17th c. (Kerala)' },
  ];

  // Filter logic
  const filteredPlaces = useMemo(() => {
    return places.filter(place => {
      // Search text match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || (
        place.name.toLowerCase().includes(q) ||
        place.city.toLowerCase().includes(q) ||
        place.state.toLowerCase().includes(q) ||
        place.dynasty.toLowerCase().includes(q) ||
        place.builder.toLowerCase().includes(q) ||
        place.architecture.primaryStyle.toLowerCase().includes(q) ||
        place.architecture.materialsUsed.some(m => m.toLowerCase().includes(q)) ||
        (place.architecture.acousticFeatures && place.architecture.acousticFeatures.toLowerCase().includes(q)) ||
        place.tags.some(tag => tag.toLowerCase().includes(q))
      );

      // Focus region match
      const matchesRegion = selectedRegion === 'All' || place.focusRegion === selectedRegion;

      // Architectural style match
      const matchesStyle = selectedStyle === 'All' || place.architecture.primaryStyle === selectedStyle;

      // Dynastic timeline match
      const matchesDynasty = selectedDynastyEra === 'All' || place.dynasty.toLowerCase().includes(selectedDynastyEra.toLowerCase());

      // UNESCO filter
      const matchesUnesco = !unescoOnly || place.architecture.unescoWorldHeritage;

      return matchesSearch && matchesRegion && matchesStyle && matchesDynasty && matchesUnesco;
    });
  }, [places, searchQuery, selectedRegion, selectedStyle, selectedDynastyEra, unescoOnly]);

  // Featured Monument Spotlight
  const spotlightPlace = places.find(p => p.id === 'taj-mahal-agra') || places[0];

  return (
    <div id="dashboard-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Hero Spotlight Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xl min-h-[360px] flex flex-col justify-end p-6 sm:p-10 text-white">
        <img 
          src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1600&auto=format&fit=crop" 
          alt="Indian Heritage"
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-stone-950 shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Monument Spotlight</span>
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-900/80 text-amber-300 backdrop-blur-md border border-amber-400/20">
              Kashmir • Agra • Karnataka • Kerala
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-heritage font-extrabold tracking-wide leading-tight">
            Discover India’s Architectural Marvels & Living History
          </h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed line-clamp-2">
            Explore acoustic domes, monolithic rock carvings, star-shaped Hoysala platforms, and centuries-old hydraulic gardens with immersive 360° virtual tours and offline travel guides.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              id="hero-start-virtual-tour-btn"
              onClick={() => onStartVirtualTour(spotlightPlace)}
              className="flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-900/30 transition-all cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>Launch Spotlight 360° Tour</span>
            </button>

            <button
              id="hero-open-map-btn"
              onClick={onOpenMap}
              className="flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-bold bg-stone-900/80 hover:bg-stone-800 text-white border border-stone-700 backdrop-blur-md transition-all cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Explore Interactive Map</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-400">
            <Landmark className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold font-serif-heritage text-stone-900 dark:text-white">
              {places.length}+
            </div>
            <div className="text-xs text-stone-500 dark:text-stone-400">
              Documented Monuments
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-400">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold font-serif-heritage text-stone-900 dark:text-white">
              {places.filter(p => p.architecture.unescoWorldHeritage).length} Sites
            </div>
            <div className="text-xs text-stone-500 dark:text-stone-400">
              UNESCO World Heritage
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-400">
            <Eye className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold font-serif-heritage text-stone-900 dark:text-white">
              100%
            </div>
            <div className="text-xs text-stone-500 dark:text-stone-400">
              Interactive 360° Tours
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-400">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold font-serif-heritage text-stone-900 dark:text-white">
              4 Regions
            </div>
            <div className="text-xs text-stone-500 dark:text-stone-400">
              Kashmir • Agra • Karnataka • Kerala
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Dynastic Timeline Explorer */}
      <div className="p-5 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <Calendar className="w-4 h-4" />
            <span>Chronological Dynastic Timeline:</span>
          </div>
          <span className="text-xs text-stone-500">Filter places by royal empire</span>
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto pb-1">
          {timelineEras.map(era => (
            <button
              key={era.id}
              onClick={() => setSelectedDynastyEra(era.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex flex-col items-start ${
                selectedDynastyEra === era.id
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
              }`}
            >
              <span className="font-bold">{era.name}</span>
              <span className="text-[10px] opacity-80">{era.years}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Search & Comprehensive Filters */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-sm text-stone-900 dark:text-stone-100 focus:outline-amber-500 shadow-sm"
            />
          </div>

          {/* Regional Circuit Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 md:pb-0">
            {[
              { id: 'All', label: 'All India' },
              { id: 'Agra', label: 'Agra' },
              { id: 'Karnataka', label: 'Karnataka' },
              { id: 'Kerala', label: 'Kerala' },
              { id: 'Kashmir', label: 'Kashmir' },
              { id: 'Other', label: 'More Marvels' },
            ].map(reg => (
              <button
                key={reg.id}
                onClick={() => setSelectedRegion(reg.id)}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedRegion === reg.id
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-100'
                }`}
              >
                {reg.label}
              </button>
            ))}
          </div>

          {/* UNESCO Toggle */}
          <button
            onClick={() => setUnescoOnly(!unescoOnly)}
            className={`px-3.5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap border transition-all flex items-center space-x-1.5 ${
              unescoOnly
                ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-sm'
                : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-100'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>UNESCO Only</span>
          </button>
        </div>

        {/* Architectural Style Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 text-xs">
          <span className="text-stone-500 font-bold uppercase tracking-wider shrink-0 text-[11px]">
            Style:
          </span>
          {[
            'All',
            'Mughal & Indo-Islamic',
            'Dravidian',
            'Hoysala Stellate',
            'Kashmiri Classical & Wooden',
            'Kerala Indigenous & Vernacular',
            'Kalinga (Nagara)',
            'Rock-Cut & Monolithic'
          ].map(style => (
            <button
              key={style}
              onClick={() => setSelectedStyle(style)}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition-all ${
                selectedStyle === style
                  ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 font-bold'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200'
              }`}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count & Reset Filter */}
      <div className="flex items-center justify-between text-xs text-stone-500">
        <div>
          Showing <span className="font-bold text-stone-900 dark:text-stone-100">{filteredPlaces.length}</span> {t.placesFound}
        </div>

        {(searchQuery || selectedRegion !== 'All' || selectedStyle !== 'All' || selectedDynastyEra !== 'All' || unescoOnly) && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedRegion('All');
              setSelectedStyle('All');
              setSelectedDynastyEra('All');
              setUnescoOnly(false);
            }}
            className="text-amber-600 dark:text-amber-400 font-semibold hover:underline"
          >
            Reset all filters
          </button>
        )}
      </div>

      {/* Places Cards Grid */}
      {filteredPlaces.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.map((place) => (
            <PlaceCard
              key={place.id}
              place={place}
              language={language}
              isBookmarked={bookmarkedPlaceIds.includes(place.id)}
              onToggleBookmark={onToggleBookmark}
              isOfflineCached={cachedPlaceIds.includes(place.id)}
              onToggleOfflineCache={onToggleOfflineCache}
              onSelectPlace={onSelectPlace}
              onStartVirtualTour={onStartVirtualTour}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3">
          <Landmark className="w-12 h-12 text-stone-400 mx-auto" />
          <h3 className="font-serif-heritage font-bold text-lg text-stone-800 dark:text-stone-200">
            No Historical Places Found
          </h3>
          <p className="text-xs text-stone-500 max-w-md mx-auto">
            Try adjusting your search keywords, clearing regional or architectural style filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedRegion('All');
              setSelectedStyle('All');
              setSelectedDynastyEra('All');
              setUnescoOnly(false);
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 text-white"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
