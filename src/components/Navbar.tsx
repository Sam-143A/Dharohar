import React, { useState } from 'react';
import { 
  Landmark, 
  Map as MapIcon, 
  Eye, 
  CalendarDays, 
  Bookmark, 
  Cloud, 
  Wifi, 
  WifiOff, 
  Bell, 
  Sun, 
  Moon, 
  Globe, 
  Menu, 
  X,
  CheckCircle2
} from 'lucide-react';
import { Language } from '../types';
import { translations, languageNames } from '../data/translations';

interface NavbarProps {
  currentView: 'explore' | 'map' | 'tours' | 'itineraries' | 'saved' | 'offline';
  onSelectView: (view: 'explore' | 'map' | 'tours' | 'itineraries' | 'saved' | 'offline') => void;
  language: Language;
  onSelectLanguage: (lang: Language) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  isOffline: boolean;
  onToggleOfflineModal: () => void;
  onOpenSyncModal: () => void;
  onOpenNotificationDrawer: () => void;
  unreadNotificationsCount: number;
  savedCount: number;
  syncStatus: 'idle' | 'syncing' | 'synced' | 'error';
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onSelectView,
  language,
  onSelectLanguage,
  isDarkMode,
  onToggleDarkMode,
  isOffline,
  onToggleOfflineModal,
  onOpenSyncModal,
  onOpenNotificationDrawer,
  unreadNotificationsCount,
  savedCount,
  syncStatus
}) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const navItems = [
    { id: 'explore', label: t.exploreHeritage, icon: Landmark },
    { id: 'map', label: t.interactiveMap, icon: MapIcon },
    { id: 'tours', label: t.virtualTours, icon: Eye },
    { id: 'itineraries', label: t.itineraryPlanner, icon: CalendarDays },
    { id: 'saved', label: `${t.savedPlaces} (${savedCount})`, icon: Bookmark },
  ];

  return (
    <header className="sticky top-0 z-40 bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Brand Identity */}
          <div 
            id="brand-logo"
            onClick={() => onSelectView('explore')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 via-amber-700 to-stone-900 flex items-center justify-center text-white shadow-md shadow-amber-900/20 group-hover:scale-105 transition-transform">
              <Landmark className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-serif-heritage text-xl font-bold tracking-wider text-stone-900 dark:text-stone-100">
                  {t.appName}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                  Heritage
                </span>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400 hidden sm:block font-medium">
                {t.tagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => onSelectView(item.id as any)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-amber-600 text-white shadow-sm shadow-amber-900/20'
                      : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/60 dark:hover:bg-stone-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Utility Tools: Offline, Cloud Sync, Language, Notifications, Dark Mode */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Offline Status Pill */}
            <button
              id="offline-status-pill"
              onClick={onToggleOfflineModal}
              title="Manage Offline Access for Remote Regions"
              className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                isOffline
                  ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30'
                  : 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20'
              }`}
            >
              {isOffline ? (
                <>
                  <WifiOff className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span className="hidden sm:inline">Offline Mode</span>
                </>
              ) : (
                <>
                  <Wifi className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="hidden sm:inline">Online & Synced</span>
                </>
              )}
            </button>

            {/* Cloud Sync Button */}
            <button
              id="cloud-sync-btn"
              onClick={onOpenSyncModal}
              title="Cloud Sync Across Devices"
              className="relative p-2 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/60 dark:hover:bg-stone-800/60 rounded-lg transition-colors"
            >
              <Cloud className={`w-4.5 h-4.5 ${syncStatus === 'syncing' ? 'animate-pulse text-amber-500' : ''}`} />
              {syncStatus === 'synced' && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-500" />
              )}
            </button>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                id="language-dropdown-btn"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-stone-700 dark:text-stone-200 hover:bg-stone-200/60 dark:hover:bg-stone-800/60 border border-stone-300 dark:border-stone-700 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span className="font-semibold">{languageNames[language].native}</span>
              </button>

              {isLangOpen && (
                <div 
                  id="language-dropdown-menu"
                  className="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-stone-900 rounded-xl shadow-xl border border-stone-200 dark:border-stone-800 z-50 text-sm"
                >
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 border-b border-stone-100 dark:border-stone-800">
                    Indian Languages
                  </div>
                  {Object.entries(languageNames).map(([code, names]) => (
                    <button
                      key={code}
                      onClick={() => {
                        onSelectLanguage(code as Language);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors ${
                        language === code
                          ? 'text-amber-700 dark:text-amber-400 font-semibold bg-amber-50/60 dark:bg-amber-950/40'
                          : 'text-stone-700 dark:text-stone-300'
                      }`}
                    >
                      <span>{names.native}</span>
                      <span className="text-xs text-stone-600 dark:text-stone-400">{names.english}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Notification Alerts */}
            <button
              id="heritage-notifications-btn"
              onClick={onOpenNotificationDrawer}
              title="Heritage Alerts & Discounts"
              className="relative p-2 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/60 dark:hover:bg-stone-800/60 rounded-lg transition-colors"
            >
              <Bell className="w-4.5 h-4.5" />
              {unreadNotificationsCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-amber-600 rounded-full animate-bounce">
                  {unreadNotificationsCount}
                </span>
              )}
            </button>

            {/* Dark Mode Toggle */}
            <button
              id="dark-mode-toggle-btn"
              onClick={onToggleDarkMode}
              title={isDarkMode ? t.lightMode : t.darkMode}
              className="p-2 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/60 dark:hover:bg-stone-800/60 rounded-lg transition-colors"
            >
              {isDarkMode ? (
                <Sun className="w-4.5 h-4.5 text-amber-400" />
              ) : (
                <Moon className="w-4.5 h-4.5 text-stone-700" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-600 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800/60 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div 
            id="mobile-nav-menu"
            className="lg:hidden py-3 border-t border-stone-200 dark:border-stone-800 space-y-1"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectView(item.id as any);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                    isActive
                      ? 'bg-amber-600 text-white'
                      : 'text-stone-700 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};
