import React, { useState } from 'react';
import { 
  X, 
  Bookmark, 
  Eye, 
  MapPin, 
  Star, 
  Award, 
  Layers, 
  DownloadCloud, 
  Check, 
  Calendar, 
  Clock, 
  Ticket, 
  ShieldAlert, 
  Sparkles, 
  Volume2, 
  Camera, 
  Compass, 
  Send, 
  ThumbsUp, 
  User, 
  Share2
} from 'lucide-react';
import { HistoricalPlace, Language, UserReview } from '../types';
import { translations } from '../data/translations';

interface PlaceDetailModalProps {
  place: HistoricalPlace;
  language: Language;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (placeId: string) => void;
  isOfflineCached: boolean;
  onToggleOfflineCache: (placeId: string) => void;
  onStartVirtualTour: (place: HistoricalPlace) => void;
  onAddReview: (placeId: string, review: Omit<UserReview, 'id' | 'date' | 'helpfulCount'>) => void;
}

export const PlaceDetailModal: React.FC<PlaceDetailModalProps> = ({
  place,
  language,
  onClose,
  isBookmarked,
  onToggleBookmark,
  isOfflineCached,
  onToggleOfflineCache,
  onStartVirtualTour,
  onAddReview
}) => {
  const t = translations[language];
  const [activeTab, setActiveTab] = useState<'architecture' | 'history' | 'tips' | 'reviews'>('architecture');
  
  // New review form state
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newTitle, setNewTitle] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newTips, setNewTips] = useState('');
  const [newTravelerType, setNewTravelerType] = useState<'Solo' | 'Family' | 'Architecture Student' | 'International Tourist' | 'History Buff'>('History Buff');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newComment) return;

    onAddReview(place.id, {
      authorName: newAuthor,
      authorLocation: newLocation || 'India',
      rating: newRating,
      title: newTitle || 'Incredible Heritage Experience',
      comment: newComment,
      travelerType: newTravelerType,
      categoryRatings: {
        architecture: newRating,
        accessibility: 4,
        photography: 5,
        guideQuality: 4
      },
      visitedSeason: 'Current Season',
      tipsShared: newTips || 'Always visit during early morning hours.'
    });

    setSubmittedMessage(true);
    setTimeout(() => {
      setShowReviewForm(false);
      setSubmittedMessage(false);
      setNewAuthor('');
      setNewComment('');
      setNewTips('');
    }, 1500);
  };

  return (
    <div 
      id="place-detail-modal-backdrop"
      className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="place-detail-dialog"
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-stone-900 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl border border-stone-200 dark:border-stone-800 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header Visual Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-stone-900 shrink-0">
          <img 
            src={place.imageUrl} 
            alt={place.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

          {/* Action Top Controls */}
          <div className="absolute top-4 inset-x-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {place.architecture.unescoWorldHeritage && (
                <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-stone-950 shadow-lg">
                  <Award className="w-3.5 h-3.5" />
                  <span>UNESCO Heritage</span>
                </span>
              )}
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-900/80 text-amber-300 backdrop-blur-md border border-amber-400/20">
                {place.focusRegion !== 'Other' ? place.focusRegion : place.state} Circuit
              </span>
            </div>

            <div className="flex items-center space-x-2">
              {/* Offline cache button */}
              <button
                id="modal-offline-cache-btn"
                onClick={() => onToggleOfflineCache(place.id)}
                title={isOfflineCached ? t.removeOffline : t.downloadOffline}
                className={`p-2.5 rounded-full backdrop-blur-md transition-all ${
                  isOfflineCached
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-stone-900/70 text-stone-200 hover:bg-stone-900'
                }`}
              >
                {isOfflineCached ? <Check className="w-4 h-4" /> : <DownloadCloud className="w-4 h-4" />}
              </button>

              {/* Bookmark button */}
              <button
                id="modal-bookmark-btn"
                onClick={() => onToggleBookmark(place.id)}
                title={isBookmarked ? t.bookmarked : t.bookmarkPlace}
                className={`p-2.5 rounded-full backdrop-blur-md transition-all ${
                  isBookmarked
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-stone-900/70 text-stone-200 hover:bg-stone-900'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-white' : ''}`} />
              </button>

              {/* Close button */}
              <button
                id="modal-close-btn"
                onClick={onClose}
                className="p-2.5 rounded-full bg-stone-900/70 text-stone-200 hover:bg-stone-900 hover:text-white backdrop-blur-md transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Title & Quick Stats Over Image */}
          <div className="absolute bottom-4 inset-x-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="flex items-center space-x-2 text-xs text-stone-300 mb-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{place.city}, {place.state}</span>
                <span>•</span>
                <span>{place.century}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-heritage font-bold tracking-wide">
                {place.name}
              </h2>
              {place.nativeNames[language] && place.nativeNames[language] !== place.name && (
                <p className="text-sm text-amber-200 font-medium">
                  {place.nativeNames[language]}
                </p>
              )}
            </div>

            {/* Virtual Tour Action Button */}
            <button
              id="modal-start-virtual-tour-btn"
              onClick={() => onStartVirtualTour(place)}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 hover:text-white shadow-xl shadow-amber-500/30 transition-all cursor-pointer whitespace-nowrap self-start sm:self-auto"
            >
              <Eye className="w-4 h-4" />
              <span>{t.startVirtualTour}</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/60 px-6 flex space-x-4 overflow-x-auto shrink-0">
          <button
            id="tab-architecture-btn"
            onClick={() => setActiveTab('architecture')}
            className={`py-3.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'border-amber-600 text-amber-600 dark:text-amber-400'
                : 'border-transparent text-stone-500 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            {t.architecturalSignificance}
          </button>
          <button
            id="tab-history-btn"
            onClick={() => setActiveTab('history')}
            className={`py-3.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'history'
                ? 'border-amber-600 text-amber-600 dark:text-amber-400'
                : 'border-transparent text-stone-500 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            {t.historicalContext}
          </button>
          <button
            id="tab-tips-btn"
            onClick={() => setActiveTab('tips')}
            className={`py-3.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'tips'
                ? 'border-amber-600 text-amber-600 dark:text-amber-400'
                : 'border-transparent text-stone-500 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            {t.touristGuide}
          </button>
          <button
            id="tab-reviews-btn"
            onClick={() => setActiveTab('reviews')}
            className={`py-3.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'reviews'
                ? 'border-amber-600 text-amber-600 dark:text-amber-400'
                : 'border-transparent text-stone-500 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            {t.userReviews} ({place.reviews.length})
          </button>
        </div>

        {/* Tab Content Body (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 text-stone-800 dark:text-stone-200 flex-1">
          
          {/* TAB 1: Architectural Significance */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Primary Style & Era Card */}
                <div className="p-4 rounded-2xl bg-stone-100 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/60 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-amber-700 dark:text-amber-400">
                    <Layers className="w-4 h-4" />
                    <span>Architectural Style & School:</span>
                  </div>
                  <p className="text-base font-serif-heritage font-bold text-stone-900 dark:text-stone-100">
                    {place.architecture.primaryStyle}
                  </p>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    Era: {place.architecture.structuralEra}
                  </p>
                  {place.architecture.architectOrMasterArtisan && (
                    <p className="text-xs text-stone-600 dark:text-stone-300 font-medium pt-1 border-t border-stone-200 dark:border-stone-700">
                      Master Craftsman: {place.architecture.architectOrMasterArtisan}
                    </p>
                  )}
                </div>

                {/* Geometry & Mathematical Alignment */}
                <div className="p-4 rounded-2xl bg-stone-100 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/60 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-amber-700 dark:text-amber-400">
                    <Compass className="w-4 h-4" />
                    <span>Mathematical Geometry & Symmetry:</span>
                  </div>
                  <p className="text-xs leading-relaxed text-stone-700 dark:text-stone-300">
                    {place.architecture.geometryAndSymmetry}
                  </p>
                </div>
              </div>

              {/* Acoustic & Sound Resonance (Crucial for Taj, Hampi, Belur) */}
              {place.architecture.acousticFeatures && (
                <div className="p-4 rounded-2xl bg-amber-500/10 dark:bg-amber-950/30 border border-amber-500/30 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-amber-800 dark:text-amber-300">
                    <Volume2 className="w-4 h-4" />
                    <span>Acoustics & Sound Engineering:</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-stone-800 dark:text-stone-200">
                    {place.architecture.acousticFeatures}
                  </p>
                </div>
              )}

              {/* Materials & Stone Quarrying */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Materials Used & Geological Provenance
                </h4>
                <div className="flex flex-wrap gap-2">
                  {place.architecture.materialsUsed.map((mat, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-300"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Unique Sculptures, Jali Screens & Friezes */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Stone Sculptures, Jali Screens & Ornamentation
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-stone-700 dark:text-stone-300 bg-stone-50 dark:bg-stone-800/40 p-4 rounded-2xl border border-stone-200 dark:border-stone-800">
                  {place.architecture.uniqueCarvingsOrJaliWork}
                </p>
              </div>

              {/* Subterranean & Hydraulic Engineering */}
              {place.architecture.subterraneanOrWaterEngineering && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                    Hydraulic Engineering & Foundation Dynamics
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-stone-700 dark:text-stone-300 bg-stone-50 dark:bg-stone-800/40 p-4 rounded-2xl border border-stone-200 dark:border-stone-800">
                    {place.architecture.subterraneanOrWaterEngineering}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Historical Context */}
          {activeTab === 'history' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                  <span className="text-[11px] uppercase font-bold text-stone-500 dark:text-stone-400">Ruling Dynasty</span>
                  <p className="text-sm font-bold text-stone-900 dark:text-stone-100 mt-0.5">{place.dynasty}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                  <span className="text-[11px] uppercase font-bold text-stone-500 dark:text-stone-400">Builder & Patron</span>
                  <p className="text-sm font-bold text-stone-900 dark:text-stone-100 mt-0.5">{place.builder}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                  <span className="text-[11px] uppercase font-bold text-stone-500 dark:text-stone-400">Era of Construction</span>
                  <p className="text-sm font-bold text-stone-900 dark:text-stone-100 mt-0.5">{place.century}</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Historical Chronicle & Cultural Significance
                </h4>
                <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300 whitespace-pre-line">
                  {place.historicalContext}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-stone-800/60 border border-amber-200 dark:border-stone-700 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-amber-800 dark:text-amber-400">Legal Heritage Status</div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 mt-0.5">{place.architecture.preservationStatus}</p>
                </div>
                <Award className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 ml-3" />
              </div>
            </div>
          )}

          {/* TAB 3: Tourist Travel Guide */}
          {activeTab === 'tips' && (
            <div className="space-y-6">
              {/* Insider Travel Tip Highlight */}
              <div className="p-4 rounded-2xl bg-amber-500/10 dark:bg-amber-950/30 border border-amber-500/30 space-y-1.5">
                <div className="flex items-center space-x-2 text-xs font-bold text-amber-800 dark:text-amber-300">
                  <Sparkles className="w-4 h-4" />
                  <span>Curated Tourist Insider Tip:</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
                  {place.practicalTips.insiderTravelTip}
                </p>
              </div>

              {/* Grid of logistics: Timings, Fees, Season */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Timings & Calendar */}
                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700/60 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-stone-700 dark:text-stone-300">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span>Visiting Hours & Schedule:</span>
                  </div>
                  <p className="text-xs font-semibold text-stone-800 dark:text-stone-200">
                    {place.practicalTips.timings}
                  </p>
                  <p className="text-xs text-amber-700 dark:text-amber-400 font-medium">
                    Weekly Closure: {place.practicalTips.closedOn}
                  </p>
                  <p className="text-xs text-stone-500">
                    Recommended Duration: {place.practicalTips.recommendedDuration}
                  </p>
                </div>

                {/* Entry Tickets */}
                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700/60 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-stone-700 dark:text-stone-300">
                    <Ticket className="w-4 h-4 text-amber-600" />
                    <span>Ticket Fees & Pricing:</span>
                  </div>
                  <div className="text-xs space-y-1 text-stone-700 dark:text-stone-300">
                    <div className="flex justify-between">
                      <span>Indian Citizens:</span>
                      <span className="font-bold text-stone-900 dark:text-white">{place.practicalTips.entryFees.domestic}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Foreign Tourists:</span>
                      <span className="font-bold text-stone-900 dark:text-white">{place.practicalTips.entryFees.foreign}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SAARC / BIMSTEC:</span>
                      <span className="font-bold text-stone-900 dark:text-white">{place.practicalTips.entryFees.saarc}</span>
                    </div>
                  </div>
                </div>

                {/* Best Season */}
                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700/60 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-stone-700 dark:text-stone-300">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    <span>Best Time of Year to Visit:</span>
                  </div>
                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                    {place.practicalTips.bestTimeToVisit}
                  </p>
                </div>

                {/* Dress Code & Photography Rules */}
                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700/60 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-stone-700 dark:text-stone-300">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    <span>Etiquette & Photography:</span>
                  </div>
                  <p className="text-xs text-stone-700 dark:text-stone-300">
                    Dress: {place.practicalTips.dressCode}
                  </p>
                  <p className="text-xs text-stone-700 dark:text-stone-300">
                    Photography: {place.practicalTips.photographyAllowed ? 'Allowed (Handheld)' : 'Restricted in sanctum / mural rooms'}
                  </p>
                  <p className="text-xs text-stone-500">
                    Wheelchair Accessible: {place.practicalTips.wheelchairAccessible ? 'Yes' : 'Partial / Stone Terrain'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: User Reviews & Tips */}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              
              {/* Header with aggregate score & write review button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold text-xl">
                    {place.rating.toFixed(1)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Based on {place.reviewCount} traveler ratings
                    </p>
                  </div>
                </div>

                <button
                  id="write-review-btn"
                  onClick={() => setShowReviewForm(!showReviewForm)}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-md transition-colors"
                >
                  {showReviewForm ? 'Cancel Review' : t.writeReview}
                </button>
              </div>

              {/* Review Submission Form */}
              {showReviewForm && (
                <form 
                  onSubmit={handleSubmitReview}
                  className="p-5 rounded-2xl bg-stone-100 dark:bg-stone-800 border border-amber-500/30 space-y-4 animate-in fade-in"
                >
                  <h4 className="font-serif-heritage font-bold text-sm text-stone-900 dark:text-stone-100">
                    Share Your Historical Visit & Tips
                  </h4>

                  {submittedMessage && (
                    <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center space-x-2">
                      <Check className="w-4 h-4" />
                      <span>Thank you! Your heritage review and tip have been published.</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-stone-600 dark:text-stone-400 block mb-1">Your Name</label>
                      <input 
                        type="text"
                        required
                        value={newAuthor}
                        onChange={(e) => setNewAuthor(e.target.value)}
                        placeholder="e.g. Priya Sharma"
                        className="w-full px-3 py-2 rounded-xl text-xs bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 focus:outline-amber-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-stone-600 dark:text-stone-400 block mb-1">Your City / Country</label>
                      <input 
                        type="text"
                        value={newLocation}
                        onChange={(e) => setNewLocation(e.target.value)}
                        placeholder="e.g. Kochi, India"
                        className="w-full px-3 py-2 rounded-xl text-xs bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 focus:outline-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-stone-600 dark:text-stone-400 block mb-1">Star Rating (1 - 5)</label>
                      <select
                        value={newRating}
                        onChange={(e) => setNewRating(Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-xl text-xs bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700"
                      >
                        <option value={5}>5 Stars - Architectural Marvel</option>
                        <option value={4}>4 Stars - Great Heritage Site</option>
                        <option value={3}>3 Stars - Good, crowded</option>
                        <option value={2}>2 Stars - Needs maintenance</option>
                        <option value={1}>1 Star - Poor experience</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-stone-600 dark:text-stone-400 block mb-1">Traveler Type</label>
                      <select
                        value={newTravelerType}
                        onChange={(e) => setNewTravelerType(e.target.value as any)}
                        className="w-full px-3 py-2 rounded-xl text-xs bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700"
                      >
                        <option value="History Buff">History Buff</option>
                        <option value="Architecture Student">Architecture Student</option>
                        <option value="Solo">Solo Explorer</option>
                        <option value="Family">Family Vacation</option>
                        <option value="International Tourist">International Tourist</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-stone-600 dark:text-stone-400 block mb-1">Review Headline</label>
                    <input 
                      type="text"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="e.g. Sublime geometry and peaceful sunrise atmosphere"
                      className="w-full px-3 py-2 rounded-xl text-xs bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-stone-600 dark:text-stone-400 block mb-1">Detailed Review</label>
                    <textarea 
                      required
                      rows={3}
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Describe what struck you about the architecture, stone carvings, acoustics, or experience..."
                      className="w-full px-3 py-2 rounded-xl text-xs bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-stone-600 dark:text-stone-400 block mb-1">Helpful Travel Tip for Others</label>
                    <input 
                      type="text"
                      value={newTips}
                      onChange={(e) => setNewTips(e.target.value)}
                      placeholder="e.g. Arrive 20 minutes before gate opening and wear shoes that slip on and off easily."
                      className="w-full px-3 py-2 rounded-xl text-xs bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-600 text-white hover:bg-amber-700 shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Heritage Review</span>
                  </button>
                </form>
              )}

              {/* Reviews List */}
              <div className="space-y-4">
                {place.reviews.map((rev) => (
                  <div 
                    key={rev.id}
                    className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700/60 space-y-2.5"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-xs text-stone-900 dark:text-stone-100">{rev.authorName}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300 font-medium">
                            {rev.travelerType}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-500">{rev.authorLocation} • Visited {rev.visitedSeason}</p>
                      </div>

                      <div className="flex items-center space-x-1 text-amber-500">
                        {[...Array(rev.rating)].map((_, idx) => (
                          <Star key={idx} className="w-3.5 h-3.5 fill-amber-500" />
                        ))}
                      </div>
                    </div>

                    <h5 className="text-xs font-bold text-stone-900 dark:text-stone-200">
                      "{rev.title}"
                    </h5>

                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                      {rev.comment}
                    </p>

                    {rev.tipsShared && (
                      <div className="p-2.5 rounded-xl bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/20 text-xs">
                        <span className="font-bold text-amber-700 dark:text-amber-400">Visitor Tip: </span>
                        <span className="text-stone-700 dark:text-stone-300">{rev.tipsShared}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
