export type Language = 'en' | 'hi' | 'kn' | 'ml' | 'ta' | 'ur' | 'mr' | 'bn';

export type IndianRegion = 'North' | 'South' | 'West' | 'East' | 'Central';

export type FocusRegion = 'Agra' | 'Kashmir' | 'Karnataka' | 'Kerala' | 'Other';

export type ArchitecturalStyle =
  | 'Mughal & Indo-Islamic'
  | 'Dravidian'
  | 'Hoysala Stellate'
  | 'Kashmiri Classical & Wooden'
  | 'Kerala Indigenous & Vernacular'
  | 'Kalinga (Nagara)'
  | 'Rock-Cut & Monolithic'
  | 'Indo-Saracenic';

export interface VirtualTourHotspot {
  id: string;
  title: string;
  xPercent: number; // 0 to 100 for interactive positioning on panorama
  yPercent: number;
  description: string;
  architecturalSecret: string;
}

export interface VirtualTourScene {
  id: string;
  title: string;
  roomOrArea: string;
  panoramaUrl: string; // High res panoramic or architectural visual
  ambientAudioUrl?: string;
  audioNarrationText: string;
  hotspots: VirtualTourHotspot[];
}

export interface UserReview {
  id: string;
  authorName: string;
  authorLocation: string;
  rating: number; // 1-5
  date: string;
  title: string;
  comment: string;
  travelerType: 'Solo' | 'Family' | 'Architecture Student' | 'International Tourist' | 'History Buff';
  categoryRatings: {
    architecture: number;
    accessibility: number;
    photography: number;
    guideQuality: number;
  };
  helpfulCount: number;
  visitedSeason: string;
  tipsShared: string;
}

export interface PracticalTip {
  bestTimeToVisit: string;
  recommendedDuration: string;
  timings: string;
  closedOn: string;
  entryFees: {
    domestic: string;
    foreign: string;
    saarc: string;
    cameraFee?: string;
  };
  dressCode: string;
  photographyAllowed: boolean;
  audioGuideAvailable: boolean;
  wheelchairAccessible: boolean;
  insiderTravelTip: string;
}

export interface ArchitecturalDetails {
  primaryStyle: ArchitecturalStyle;
  structuralEra: string;
  geometryAndSymmetry: string;
  materialsUsed: string[];
  acousticFeatures?: string;
  uniqueCarvingsOrJaliWork: string;
  subterraneanOrWaterEngineering?: string;
  preservationStatus: string;
  unescoWorldHeritage: boolean;
  architectOrMasterArtisan?: string;
}

export interface HistoricalPlace {
  id: string;
  name: string;
  nativeNames: Partial<Record<Language, string>>;
  shortDescription: string;
  historicalContext: string;
  dynasty: string;
  builder: string;
  century: string;
  state: string;
  city: string;
  region: IndianRegion;
  focusRegion: FocusRegion;
  coordinates: {
    lat: number;
    lng: number;
  };
  imageUrl: string;
  additionalImages: string[];
  architecture: ArchitecturalDetails;
  practicalTips: PracticalTip;
  virtualTour: {
    title: string;
    totalStops: number;
    scenes: VirtualTourScene[];
  };
  reviews: UserReview[];
  rating: number;
  reviewCount: number;
  tags: string[];
  isOfflineCached?: boolean;
}

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  placeIds: string[];
  notes: string;
  estimatedHours: number;
}

export interface Itinerary {
  id: string;
  title: string;
  description: string;
  region: string;
  targetDays: number;
  days: ItineraryDay[];
  createdAt: string;
  updatedAt: string;
  budgetEstimate: string;
  seasonRecommendation: string;
}

export interface HeritageNotification {
  id: string;
  title: string;
  message: string;
  type: 'event' | 'discount' | 'nearby' | 'guide' | 'alert';
  placeName?: string;
  region?: string;
  discountCode?: string;
  discountAmount?: string;
  timestamp: string;
  isRead: boolean;
  actionUrl?: string;
  relatedPlaceId?: string;
}

export interface CloudSyncState {
  syncKey: string;
  deviceId: string;
  lastSyncedAt: string | null;
  status: 'idle' | 'syncing' | 'synced' | 'error';
  autoSyncEnabled: boolean;
}
