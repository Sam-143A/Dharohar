import React from 'react';
import { 
  Bookmark, 
  Eye, 
  MapPin, 
  Star, 
  Award, 
  Layers, 
  DownloadCloud, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { HistoricalPlace, Language } from '../types';
import { translations } from '../data/translations';

interface PlaceCardProps {
  place: HistoricalPlace;
  language: Language;
  isBookmarked: boolean;
  onToggleBookmark: (placeId: string) => void;
  isOfflineCached: boolean;
  onToggleOfflineCache: (placeId: string) => void;
  onSelectPlace: (place: HistoricalPlace) => void;
  onStartVirtualTour: (place: HistoricalPlace) => void;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({
  place,
  language,
  isBookmarked,
  onToggleBookmark,
  isOfflineCached,
  onToggleOfflineCache,
  onSelectPlace,
  onStartVirtualTour
}) => {
  const t = translations[language];
  const nativeName = place.nativeNames[language] || place.name;

  return (
    <div 
      id={`place-card-${place.id}`}
      className="group bg-white dark:bg-stone-900 rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-stone-200 dark:bg-stone-800 cursor-pointer" onClick={() => onSelectPlace(place)}>
        <img 
          src={place.imageUrl} 
          alt={place.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

        {/* Top Badges: UNESCO, Region, and Bookmark */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
          <div className="flex items-center space-x-1.5 flex-wrap gap-y-1">
            {place.architecture.unescoWorldHeritage && (
              <span className="flex items-center space-x-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/95 text-stone-950 shadow-md backdrop-blur-sm">
                <Award className="w-3.5 h-3.5" />
                <span>UNESCO</span>
              </span>
            )}
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-stone-900/80 text-amber-300 backdrop-blur-md border border-amber-400/20">
              {place.focusRegion !== 'Other' ? place.focusRegion : place.state}
            </span>
          </div>

          <div className="flex items-center space-x-1.5 pointer-events-auto">
            {/* Offline cache button */}
            <button
              id={`offline-cache-btn-${place.id}`}
              onClick={(e) => {
                e.stopPropagation();
                onToggleOfflineCache(place.id);
              }}
              title={isOfflineCached ? t.removeOffline : t.downloadOffline}
              className={`p-2 rounded-full backdrop-blur-md transition-all ${
                isOfflineCached
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-stone-900/60 text-stone-300 hover:text-white hover:bg-stone-900/90'
              }`}
            >
              {isOfflineCached ? (
                <Check className="w-4 h-4" />
              ) : (
                <DownloadCloud className="w-4 h-4" />
              )}
            </button>

            {/* Bookmark button */}
            <button
              id={`bookmark-btn-${place.id}`}
              onClick={(e) => {
                e.stopPropagation();
                onToggleBookmark(place.id);
              }}
              title={isBookmarked ? t.bookmarked : t.bookmarkPlace}
              className={`p-2 rounded-full backdrop-blur-md transition-all ${
                isBookmarked 
                  ? 'bg-amber-600 text-white shadow-md' 
                  : 'bg-stone-900/60 text-stone-300 hover:text-white hover:bg-stone-900/90'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-white' : ''}`} />
            </button>
          </div>
        </div>

        {/* Bottom Banner on Image */}
        <div className="absolute bottom-3 inset-x-3 flex items-end justify-between pointer-events-none text-white">
          <div>
            <div className="flex items-center space-x-1.5 text-xs text-stone-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{place.city}, {place.state}</span>
            </div>
            <h3 className="text-lg font-serif-heritage font-bold text-white leading-tight drop-shadow-sm">
              {place.name}
            </h3>
            {nativeName !== place.name && (
              <p className="text-xs text-amber-200 font-medium">{nativeName}</p>
            )}
          </div>

          <div className="flex items-center space-x-1 px-2 py-1 rounded-lg bg-stone-900/80 backdrop-blur-md border border-stone-700 text-xs font-bold text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>{place.rating.toFixed(1)}</span>
            <span className="text-[10px] text-stone-400 font-normal">({place.reviewCount})</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Architectural Style & Era */}
          <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
            <span className="flex items-center space-x-1 font-semibold text-amber-800 dark:text-amber-400">
              <Layers className="w-3.5 h-3.5" />
              <span>{place.architecture.primaryStyle}</span>
            </span>
            <span>{place.century}</span>
          </div>

          {/* Short Narrative */}
          <p className="text-sm text-stone-600 dark:text-stone-300 line-clamp-2 leading-relaxed">
            {place.shortDescription}
          </p>

          {/* Architectural Secret Teaser */}
          <div className="p-2.5 rounded-xl bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/15 text-xs space-y-1">
            <div className="flex items-center space-x-1.5 font-bold text-amber-800 dark:text-amber-300">
              <Sparkles className="w-3 h-3 text-amber-600 dark:text-amber-400" />
              <span>Structural Secret:</span>
            </div>
            <p className="text-stone-600 dark:text-stone-400 line-clamp-2 leading-tight">
              {place.architecture.geometryAndSymmetry || place.architecture.uniqueCarvingsOrJaliWork}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-2 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between gap-2">
          {/* 360 Virtual Tour Button */}
          <button
            id={`start-tour-btn-${place.id}`}
            onClick={() => onStartVirtualTour(place)}
            className="flex-1 flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-amber-500/10 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 dark:hover:text-stone-950 transition-colors"
          >
            <Eye className="w-4 h-4" />
            <span>360° Tour</span>
          </button>

          {/* Detailed Guide Button */}
          <button
            id={`view-details-btn-${place.id}`}
            onClick={() => onSelectPlace(place)}
            className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 rounded-xl text-xs font-semibold bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
          >
            <span>Heritage Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
