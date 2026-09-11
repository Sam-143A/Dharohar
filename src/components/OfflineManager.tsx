import React from 'react';
import { 
  WifiOff, 
  Wifi, 
  DownloadCloud, 
  Trash2, 
  HardDrive, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  X,
  Mountain,
  Compass
} from 'lucide-react';
import { HistoricalPlace, Language } from '../types';
import { translations } from '../data/translations';

interface OfflineManagerProps {
  isOffline: boolean;
  onToggleSimulateOffline: (active: boolean) => void;
  cachedPlaceIds: string[];
  places: HistoricalPlace[];
  onCacheAllPlaces: () => void;
  onClearOfflineCache: () => void;
  onClose: () => void;
  language: Language;
}

export const OfflineManager: React.FC<OfflineManagerProps> = ({
  isOffline,
  onToggleSimulateOffline,
  cachedPlaceIds,
  places,
  onCacheAllPlaces,
  onClearOfflineCache,
  onClose,
  language
}) => {
  const t = translations[language];
  const cachedPlaces = places.filter(p => cachedPlaceIds.includes(p.id));
  const estimatedStorageMB = (cachedPlaces.length * 0.45).toFixed(1);

  return (
    <div 
      id="offline-manager-modal-backdrop"
      className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        id="offline-manager-dialog"
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-stone-900 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 dark:border-stone-800 space-y-6 animate-in fade-in"
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold shadow-md ${
              isOffline 
                ? 'bg-amber-500/20 text-amber-600 border border-amber-500/30' 
                : 'bg-emerald-500/20 text-emerald-600 border border-emerald-500/30'
            }`}>
              {isOffline ? <WifiOff className="w-5 h-5" /> : <Wifi className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-serif-heritage font-bold text-xl text-stone-900 dark:text-white">
                Remote Offline Center
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Ensure full access to guides & architectural data in remote valleys and hills.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Network & Simulation Switch */}
        <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/60 flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="text-xs font-bold text-stone-900 dark:text-stone-100 flex items-center space-x-1.5">
              <Mountain className="w-4 h-4 text-amber-600" />
              <span>Simulate Remote Offline Mode</span>
            </div>
            <p className="text-[11px] text-stone-500 dark:text-stone-400">
              Test app behavior when exploring deep areas without 4G/5G mobile signals.
            </p>
          </div>

          <button
            onClick={() => onToggleSimulateOffline(!isOffline)}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
              isOffline ? 'bg-amber-600' : 'bg-stone-300 dark:bg-stone-700'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                isOffline ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Storage Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700/60">
            <div className="flex items-center space-x-1.5 text-stone-500 text-xs mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Offline Ready Sites</span>
            </div>
            <div className="text-xl font-bold text-stone-900 dark:text-white">
              {cachedPlaces.length} of {places.length}
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700/60">
            <div className="flex items-center space-x-1.5 text-stone-500 text-xs mb-1">
              <HardDrive className="w-3.5 h-3.5 text-amber-500" />
              <span>Local Storage Used</span>
            </div>
            <div className="text-xl font-bold text-stone-900 dark:text-white">
              ~{estimatedStorageMB} MB
            </div>
          </div>
        </div>

        {/* Quick Batch Actions */}
        <div className="flex flex-col sm:flex-row gap-2.5">
          <button
            id="download-all-offline-btn"
            onClick={onCacheAllPlaces}
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-md transition-colors"
          >
            <DownloadCloud className="w-4 h-4" />
            <span>Download All Heritage Sites</span>
          </button>

          <button
            id="clear-offline-cache-btn"
            onClick={onClearOfflineCache}
            className="flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-stone-600 dark:text-stone-300 hover:text-red-600 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-300 dark:border-stone-700 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Local Storage</span>
          </button>
        </div>

        {/* List of currently cached monuments */}
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            Cached Locations Available Offline ({cachedPlaces.length}):
          </span>

          <div className="max-h-40 overflow-y-auto space-y-1.5 pr-1">
            {cachedPlaces.map((pl) => (
              <div 
                key={pl.id}
                className="flex items-center justify-between p-2 rounded-xl bg-stone-50 dark:bg-stone-800/40 text-xs border border-stone-200 dark:border-stone-800"
              >
                <div className="flex items-center space-x-2 truncate">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="font-semibold text-stone-800 dark:text-stone-200 truncate">{pl.name}</span>
                  <span className="text-stone-500">({pl.focusRegion !== 'Other' ? pl.focusRegion : pl.state})</span>
                </div>
                <span className="text-[10px] text-stone-600 dark:text-stone-400 shrink-0 ml-2">Audio & Architecture Saved</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
