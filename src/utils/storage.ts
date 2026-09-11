import { HistoricalPlace, Itinerary, HeritageNotification, Language, UserReview } from '../types';

const STORAGE_KEYS = {
  BOOKMARKS: 'dharohar_bookmarks',
  OFFLINE_PLACES: 'dharohar_offline_places',
  CUSTOM_REVIEWS: 'dharohar_custom_reviews',
  ITINERARIES: 'dharohar_itineraries',
  NOTIFICATIONS: 'dharohar_notifications',
  SYNC_KEY: 'dharohar_sync_key',
  LAST_SYNCED: 'dharohar_last_synced',
  DARK_MODE: 'dharohar_dark_mode',
  LANGUAGE: 'dharohar_language',
  SIMULATE_OFFLINE: 'dharohar_simulate_offline'
};

export function getStoredBookmarks(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    return raw ? JSON.parse(raw) : ["taj-mahal-agra", "hampi-vijayanagara", "chennakeshava-belur", "mattancherry-palace-kochi", "martand-sun-temple-kashmir"];
  } catch (e) {
    return [];
  }
}

export function setStoredBookmarks(ids: string[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(ids));
  } catch (e) {
    console.error("Failed to save bookmarks", e);
  }
}

export const saveStoredBookmarks = setStoredBookmarks;

export function getStoredOfflinePlaces(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.OFFLINE_PLACES);
    return raw ? JSON.parse(raw) : ["taj-mahal-agra", "hampi-vijayanagara", "mattancherry-palace-kochi", "martand-sun-temple-kashmir"];
  } catch (e) {
    return [];
  }
}

export function setStoredOfflinePlaces(ids: string[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.OFFLINE_PLACES, JSON.stringify(ids));
  } catch (e) {
    console.error("Failed to save offline places", e);
  }
}

export const getStoredOfflinePlaceIds = getStoredOfflinePlaces;
export const saveStoredOfflinePlaceIds = setStoredOfflinePlaces;

export function getStoredLanguage(): Language {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    return (raw as Language) || 'en';
  } catch (e) {
    return 'en';
  }
}

export function setStoredLanguage(lang: Language): void {
  try {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
  } catch (e) {
    console.error("Failed to save language", e);
  }
}

export function getStoredTheme(): 'light' | 'dark' {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.DARK_MODE);
    if (raw === 'dark' || raw === 'light') return raw;
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  } catch (e) {
    return 'light';
  }
}

export function setStoredTheme(theme: 'light' | 'dark'): void {
  try {
    localStorage.setItem(STORAGE_KEYS.DARK_MODE, theme);
  } catch (e) {
    console.error("Failed to save theme", e);
  }
}

export function getStoredCustomItineraries(): Itinerary[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ITINERARIES);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function setStoredCustomItineraries(itineraries: Itinerary[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.ITINERARIES, JSON.stringify(itineraries));
  } catch (e) {
    console.error("Failed to save itineraries", e);
  }
}

export const getStoredItineraries = getStoredCustomItineraries;
export const saveStoredItineraries = setStoredCustomItineraries;

export function getStoredReviews(): Record<string, UserReview[]> {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CUSTOM_REVIEWS);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

export function setStoredReviews(reviews: Record<string, UserReview[]>): void {
  try {
    localStorage.setItem(STORAGE_KEYS.CUSTOM_REVIEWS, JSON.stringify(reviews));
  } catch (e) {
    console.error("Failed to save reviews", e);
  }
}

export function generateSyncKey(): string {
  return "DHAROHAR-" + Math.floor(1000 + Math.random() * 9000);
}

export function getStoredSyncKey(): string {
  try {
    let key = localStorage.getItem(STORAGE_KEYS.SYNC_KEY);
    if (!key) {
      key = generateSyncKey();
      localStorage.setItem(STORAGE_KEYS.SYNC_KEY, key);
    }
    return key;
  } catch (e) {
    return "DHAROHAR-DEV";
  }
}

export function setStoredSyncKey(key: string): void {
  try {
    localStorage.setItem(STORAGE_KEYS.SYNC_KEY, key);
  } catch (e) {
    console.error("Failed to set sync key", e);
  }
}

export function getLastSyncedAt(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEYS.LAST_SYNCED);
  } catch (e) {
    return null;
  }
}

export function setLastSyncedAt(timestamp: string): void {
  try {
    localStorage.setItem(STORAGE_KEYS.LAST_SYNCED, timestamp);
  } catch (e) {
    console.error("Failed to set last synced time", e);
  }
}

export function getSimulateOffline(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEYS.SIMULATE_OFFLINE) === 'true';
  } catch (e) {
    return false;
  }
}

export function setSimulateOffline(val: boolean): void {
  try {
    localStorage.setItem(STORAGE_KEYS.SIMULATE_OFFLINE, String(val));
  } catch (e) {
    console.error("Failed to set simulate offline", e);
  }
}
