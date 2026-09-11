import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { InteractiveMap } from './components/InteractiveMap';
import { VirtualTourViewer } from './components/VirtualTourViewer';
import { PlaceDetailModal } from './components/PlaceDetailModal';
import { ItineraryPlanner } from './components/ItineraryPlanner';
import { OfflineManager } from './components/OfflineManager';
import { CloudSyncModal } from './components/CloudSyncModal';
import { NotificationDrawer } from './components/NotificationDrawer';
import { historicalPlaces } from './data/historicalPlaces';
import { defaultItineraries } from './data/defaultItineraries';
import { defaultNotifications } from './data/defaultNotifications';
import { HistoricalPlace, Language, Itinerary, HeritageNotification, UserReview } from './types';
import { 
  getStoredBookmarks, 
  setStoredBookmarks, 
  getStoredOfflinePlaces, 
  setStoredOfflinePlaces,
  getStoredLanguage,
  setStoredLanguage,
  getStoredTheme,
  setStoredTheme,
  getStoredSyncKey,
  setStoredSyncKey,
  getStoredCustomItineraries,
  setStoredCustomItineraries,
  getStoredReviews,
  setStoredReviews,
  generateSyncKey
} from './utils/storage';

export default function App() {
  // Theme & Language
  const [theme, setTheme] = useState<'light' | 'dark'>(getStoredTheme);
  const [language, setLanguage] = useState<Language>(getStoredLanguage);

  // Active view navigation: 'dashboard' | 'map' | 'itineraries' | 'bookmarks'
  const [activeTab, setActiveTab] = useState<'dashboard' | 'map' | 'itineraries' | 'bookmarks'>('dashboard');

  // Core Data
  const [places, setPlaces] = useState<HistoricalPlace[]>(historicalPlaces);
  const [itineraries, setItineraries] = useState<Itinerary[]>(() => {
    const saved = getStoredCustomItineraries();
    return saved.length > 0 ? saved : defaultItineraries;
  });
  const [notifications, setNotifications] = useState<HeritageNotification[]>(defaultNotifications);

  // Bookmarks & Offline Caches
  const [bookmarkedPlaceIds, setBookmarkedPlaceIds] = useState<string[]>(getStoredBookmarks);
  const [cachedPlaceIds, setCachedPlaceIds] = useState<string[]>(getStoredOfflinePlaces);
  const [isSimulatedOffline, setIsSimulatedOffline] = useState(false);
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);

  // Modals & Drawers
  const [selectedPlaceForModal, setSelectedPlaceForModal] = useState<HistoricalPlace | null>(null);
  const [activeTourPlace, setActiveTourPlace] = useState<HistoricalPlace | null>(null);
  const [showOfflineModal, setShowOfflineModal] = useState(false);
  const [showCloudSyncModal, setShowCloudSyncModal] = useState(false);
  const [showNotificationsDrawer, setShowNotificationsDrawer] = useState(false);

  // Cloud Sync
  const [syncKey, setSyncKey] = useState<string>(getStoredSyncKey);
  const [lastSyncedAt, setLastSyncedAt] = useState<string | null>(null);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'synced' | 'error'>('idle');

  // Apply dark mode class to documentElement
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    setStoredTheme(theme);
  }, [theme]);

  // Handle browser online/offline detection
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Sync custom reviews from local storage into places
  useEffect(() => {
    const storedReviews = getStoredReviews();
    if (Object.keys(storedReviews).length > 0) {
      setPlaces(prev => prev.map(p => {
        const extra = storedReviews[p.id];
        if (extra && extra.length > 0) {
          return {
            ...p,
            reviews: [...extra, ...p.reviews],
            reviewCount: p.reviewCount + extra.length
          };
        }
        return p;
      }));
    }
  }, []);

  // Toggle Theme
  const handleToggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Change Language
  const handleChangeLanguage = (lang: Language) => {
    setLanguage(lang);
    setStoredLanguage(lang);
  };

  // Toggle Bookmark
  const handleToggleBookmark = (placeId: string) => {
    setBookmarkedPlaceIds(prev => {
      const next = prev.includes(placeId)
        ? prev.filter(id => id !== placeId)
        : [...prev, placeId];
      setStoredBookmarks(next);
      return next;
    });
  };

  // Toggle Offline Cache
  const handleToggleOfflineCache = (placeId: string) => {
    setCachedPlaceIds(prev => {
      const next = prev.includes(placeId)
        ? prev.filter(id => id !== placeId)
        : [...prev, placeId];
      setStoredOfflinePlaces(next);
      return next;
    });
  };

  // Cache all places for remote offline travel
  const handleCacheAllPlaces = () => {
    const allIds = places.map(p => p.id);
    setCachedPlaceIds(allIds);
    setStoredOfflinePlaces(allIds);
  };

  // Clear offline cache
  const handleClearOfflineCache = () => {
    setCachedPlaceIds([]);
    setStoredOfflinePlaces([]);
  };

  // Save or Update Itinerary
  const handleSaveItinerary = (itin: Itinerary) => {
    setItineraries(prev => {
      const exists = prev.some(i => i.id === itin.id);
      const next = exists
        ? prev.map(i => i.id === itin.id ? itin : i)
        : [itin, ...prev];
      setStoredCustomItineraries(next);
      return next;
    });
  };

  // Delete Itinerary
  const handleDeleteItinerary = (id: string) => {
    setItineraries(prev => {
      const next = prev.filter(i => i.id !== id);
      setStoredCustomItineraries(next);
      return next;
    });
  };

  // Add User Review
  const handleAddReview = (placeId: string, reviewData: Omit<UserReview, 'id' | 'date' | 'helpfulCount'>) => {
    const newRev: UserReview = {
      ...reviewData,
      id: `rev-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      helpfulCount: 0
    };

    // Update place in state
    setPlaces(prev => prev.map(p => {
      if (p.id === placeId) {
        return {
          ...p,
          reviews: [newRev, ...p.reviews],
          reviewCount: p.reviewCount + 1,
          rating: ((p.rating * p.reviewCount) + newRev.rating) / (p.reviewCount + 1)
        };
      }
      return p;
    }));

    // Persist in localStorage
    const currentStored = getStoredReviews();
    const existingForPlace = currentStored[placeId] || [];
    currentStored[placeId] = [newRev, ...existingForPlace];
    setStoredReviews(currentStored);
  };

  // Cloud Sync: Push to Server
  const handleTriggerSyncPush = async (): Promise<boolean> => {
    setSyncStatus('syncing');
    try {
      const payload = {
        syncKey,
        bookmarks: bookmarkedPlaceIds,
        itineraries,
        offlinePlaces: cachedPlaceIds,
        theme,
        language
      };

      const res = await fetch('/api/sync/push', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setSyncStatus('synced');
        setLastSyncedAt(new Date().toISOString());
        setTimeout(() => setSyncStatus('idle'), 3000);
        return true;
      } else {
        setSyncStatus('error');
        return false;
      }
    } catch (err) {
      console.error("Sync push error", err);
      setSyncStatus('error');
      return false;
    }
  };

  // Cloud Sync: Pull from Server
  const handleTriggerSyncPull = async (keyToPull: string): Promise<boolean> => {
    setSyncStatus('syncing');
    try {
      const res = await fetch(`/api/sync/pull/${encodeURIComponent(keyToPull)}`);
      if (res.ok) {
        const data = await res.json();
        if (data.bookmarks) {
          setBookmarkedPlaceIds(data.bookmarks);
          setStoredBookmarks(data.bookmarks);
        }
        if (data.itineraries) {
          setItineraries(data.itineraries);
          setStoredCustomItineraries(data.itineraries);
        }
        if (data.offlinePlaces) {
          setCachedPlaceIds(data.offlinePlaces);
          setStoredOfflinePlaces(data.offlinePlaces);
        }
        if (data.theme) {
          setTheme(data.theme);
        }
        if (data.language) {
          setLanguage(data.language);
          setStoredLanguage(data.language);
        }
        setSyncKey(keyToPull);
        setStoredSyncKey(keyToPull);
        setLastSyncedAt(new Date().toISOString());
        setSyncStatus('synced');
        setTimeout(() => setSyncStatus('idle'), 3000);
        return true;
      } else {
        setSyncStatus('error');
        return false;
      }
    } catch (err) {
      console.error("Sync pull error", err);
      setSyncStatus('error');
      return false;
    }
  };

  // Simulate nearby event/discount trigger
  const handleSimulateNearbyAlert = (regionName: string, placeName: string, discountCode: string) => {
    const newAlert: HeritageNotification = {
      id: `alert-${Date.now()}`,
      title: `Near ${placeName}: Exclusive Heritage Offer`,
      message: `You are within proximity of ${placeName} (${regionName}). Use your visitor code for priority heritage access or discount guide tours!`,
      type: 'discount',
      timestamp: 'Just now',
      isRead: false,
      relatedPlaceId: placeName,
      discountCode,
      discountAmount: '25% OFF / Complimentary Guide'
    };

    setNotifications(prev => [newAlert, ...prev]);

    // Send native browser notification if granted
    if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
      new Notification(`Near ${placeName}`, {
        body: newAlert.message,
        icon: '/icon.png'
      });
    }
  };

  const handleMarkNotificationRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  // Places to display when 'bookmarks' view is active
  const displayedPlaces = activeTab === 'bookmarks'
    ? places.filter(p => bookmarkedPlaceIds.includes(p.id))
    : places;

  const effectiveOffline = !isOnline || isSimulatedOffline;

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors flex flex-col font-sans">
      
      {/* Offline Alert Banner if offline or simulated */}
      {effectiveOffline && (
        <div className="bg-amber-600 text-white text-xs font-semibold px-4 py-1.5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>
              {isSimulatedOffline 
                ? 'Simulated Remote Offline Mode Active — Accessing Cached Heritage Data' 
                : 'Offline Connection Detected — Relying on Local Stored Travel Guides'}
            </span>
          </div>
          <button
            onClick={() => setIsSimulatedOffline(false)}
            className="text-[11px] underline hover:text-amber-100 font-bold"
          >
            Switch to Online
          </button>
        </div>
      )}

      {/* Main App Navigation Bar */}
      <Navbar
        language={language}
        onChangeLanguage={handleChangeLanguage}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        activeTab={activeTab}
        onChangeTab={setActiveTab}
        bookmarkedCount={bookmarkedPlaceIds.length}
        unreadNotificationsCount={notifications.filter(n => !n.isRead).length}
        onOpenNotifications={() => setShowNotificationsDrawer(true)}
        onOpenCloudSync={() => setShowCloudSyncModal(true)}
        onOpenOffline={() => setShowOfflineModal(true)}
        isOffline={effectiveOffline}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {/* VIEW 1: Dashboard or Bookmarks */}
        {(activeTab === 'dashboard' || activeTab === 'bookmarks') && (
          <Dashboard
            places={displayedPlaces}
            language={language}
            bookmarkedPlaceIds={bookmarkedPlaceIds}
            onToggleBookmark={handleToggleBookmark}
            cachedPlaceIds={cachedPlaceIds}
            onToggleOfflineCache={handleToggleOfflineCache}
            onSelectPlace={setSelectedPlaceForModal}
            onStartVirtualTour={setActiveTourPlace}
            onOpenMap={() => setActiveTab('map')}
          />
        )}

        {/* VIEW 2: Interactive Map */}
        {activeTab === 'map' && (
          <InteractiveMap
            places={places}
            language={language}
            onSelectPlace={setSelectedPlaceForModal}
            onStartVirtualTour={setActiveTourPlace}
          />
        )}

        {/* VIEW 3: Itinerary Planner */}
        {activeTab === 'itineraries' && (
          <ItineraryPlanner
            itineraries={itineraries}
            places={places}
            bookmarkedPlaceIds={bookmarkedPlaceIds}
            language={language}
            onSaveItinerary={handleSaveItinerary}
            onDeleteItinerary={handleDeleteItinerary}
            onSelectPlace={setSelectedPlaceForModal}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 dark:border-stone-800/80 bg-white dark:bg-stone-900 py-8 px-6 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-serif-heritage font-bold text-stone-800 dark:text-stone-200 text-sm">
              Dharohar (धरोहर) • Indian Architectural Heritage & Travel Guide
            </div>
            <p>
              Documenting architectural geometry, acoustic phenomena, and dynastic history across Kashmir, Agra, Karnataka, and Kerala.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowOfflineModal(true)}
              className="hover:text-amber-600 dark:hover:text-amber-400 font-medium"
            >
              Remote Offline Pack
            </button>
            <span>•</span>
            <button
              onClick={() => setShowCloudSyncModal(true)}
              className="hover:text-amber-600 dark:hover:text-amber-400 font-medium"
            >
              Cloud Sync ({syncKey})
            </button>
          </div>
        </div>
      </footer>

      {/* MODAL 1: Place Details & Architectural Guide */}
      {selectedPlaceForModal && (
        <PlaceDetailModal
          place={selectedPlaceForModal}
          language={language}
          onClose={() => setSelectedPlaceForModal(null)}
          isBookmarked={bookmarkedPlaceIds.includes(selectedPlaceForModal.id)}
          onToggleBookmark={handleToggleBookmark}
          isOfflineCached={cachedPlaceIds.includes(selectedPlaceForModal.id)}
          onToggleOfflineCache={handleToggleOfflineCache}
          onStartVirtualTour={(place) => {
            setSelectedPlaceForModal(null);
            setActiveTourPlace(place);
          }}
          onAddReview={handleAddReview}
        />
      )}

      {/* MODAL 2: 360° Virtual Tour Viewer */}
      {activeTourPlace && (
        <VirtualTourViewer
          place={activeTourPlace}
          language={language}
          onClose={() => setActiveTourPlace(null)}
        />
      )}

      {/* MODAL 3: Offline Access Manager */}
      {showOfflineModal && (
        <OfflineManager
          isOffline={effectiveOffline}
          onToggleSimulateOffline={setIsSimulatedOffline}
          cachedPlaceIds={cachedPlaceIds}
          places={places}
          onCacheAllPlaces={handleCacheAllPlaces}
          onClearOfflineCache={handleClearOfflineCache}
          onClose={() => setShowOfflineModal(false)}
          language={language}
        />
      )}

      {/* MODAL 4: Cloud Sync Modal */}
      {showCloudSyncModal && (
        <CloudSyncModal
          syncKey={syncKey}
          onSetSyncKey={setSyncKey}
          onTriggerSyncPush={handleTriggerSyncPush}
          onTriggerSyncPull={handleTriggerSyncPull}
          lastSyncedAt={lastSyncedAt}
          syncStatus={syncStatus}
          onClose={() => setShowCloudSyncModal(false)}
          bookmarksCount={bookmarkedPlaceIds.length}
          itinerariesCount={itineraries.length}
        />
      )}

      {/* DRAWER: Nearby Events, Discounts & Geofence Proximity */}
      {showNotificationsDrawer && (
        <NotificationDrawer
          notifications={notifications}
          onMarkAsRead={handleMarkNotificationRead}
          onSimulateNearbyAlert={handleSimulateNearbyAlert}
          onClose={() => setShowNotificationsDrawer(false)}
        />
      )}
    </div>
  );
}
