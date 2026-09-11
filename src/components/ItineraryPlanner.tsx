import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Plus, 
  Trash2, 
  Printer, 
  Compass, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Bookmark, 
  Check, 
  ChevronRight,
  Download
} from 'lucide-react';
import { HistoricalPlace, Itinerary, Language } from '../types';
import { translations } from '../data/translations';

interface ItineraryPlannerProps {
  itineraries: Itinerary[];
  places: HistoricalPlace[];
  bookmarkedPlaceIds: string[];
  language: Language;
  onSaveItinerary: (itinerary: Itinerary) => void;
  onDeleteItinerary: (id: string) => void;
  onSelectPlace: (place: HistoricalPlace) => void;
}

export const ItineraryPlanner: React.FC<ItineraryPlannerProps> = ({
  itineraries,
  places,
  bookmarkedPlaceIds,
  language,
  onSaveItinerary,
  onDeleteItinerary,
  onSelectPlace
}) => {
  const t = translations[language];
  const [selectedItineraryId, setSelectedItineraryId] = useState<string>(itineraries[0]?.id || '');
  const [showCreateModal, setShowCreateModal] = useState(false);

  // New Itinerary form state
  const [newTitle, setNewTitle] = useState('');
  const [newRegion, setNewRegion] = useState('Agra, Kashmir, Karnataka or Kerala');
  const [newDaysCount, setNewDaysCount] = useState(3);
  const [newDescription, setNewDescription] = useState('');
  const [newBudget, setNewBudget] = useState('₹10,000 - ₹15,000 per person');

  const selectedItinerary = itineraries.find(it => it.id === selectedItineraryId) || itineraries[0];

  const handleCreateItinerary = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;

    const days = [];
    for (let i = 1; i <= newDaysCount; i++) {
      days.push({
        dayNumber: i,
        title: `Day ${i}: Heritage Explorations`,
        placeIds: bookmarkedPlaceIds.slice(0, 2),
        notes: `Explore the morning architectural marvels, sample regional cuisine, and witness evening aarti/illumination.`,
        estimatedHours: 5
      });
    }

    const newItin: Itinerary = {
      id: `itin-${Date.now()}`,
      title: newTitle,
      description: newDescription || 'A custom curated architectural journey through India’s legendary monuments.',
      region: newRegion,
      targetDays: newDaysCount,
      budgetEstimate: newBudget,
      seasonRecommendation: 'October to March',
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      days
    };

    onSaveItinerary(newItin);
    setSelectedItineraryId(newItin.id);
    setShowCreateModal(false);
    setNewTitle('');
    setNewDescription('');
  };

  const handleAddPlaceToDay = (dayNumber: number, placeId: string) => {
    if (!selectedItinerary) return;
    const updatedDays = selectedItinerary.days.map(d => {
      if (d.dayNumber === dayNumber && !d.placeIds.includes(placeId)) {
        return { ...d, placeIds: [...d.placeIds, placeId] };
      }
      return d;
    });

    onSaveItinerary({
      ...selectedItinerary,
      days: updatedDays,
      updatedAt: new Date().toISOString().split('T')[0]
    });
  };

  const handleRemovePlaceFromDay = (dayNumber: number, placeId: string) => {
    if (!selectedItinerary) return;
    const updatedDays = selectedItinerary.days.map(d => {
      if (d.dayNumber === dayNumber) {
        return { ...d, placeIds: d.placeIds.filter(id => id !== placeId) };
      }
      return d;
    });

    onSaveItinerary({
      ...selectedItinerary,
      days: updatedDays,
      updatedAt: new Date().toISOString().split('T')[0]
    });
  };

  const handlePrintItinerary = () => {
    window.print();
  };

  return (
    <div id="itinerary-planner-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-6">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
            <Compass className="w-4 h-4" />
            <span>Personalized Travel Circuits</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif-heritage font-bold text-stone-900 dark:text-white">
            {t.itineraryPlanner}
          </h1>
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
            Plan multi-day architectural journeys with day-by-day routing, timing, and budget planning.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            id="print-itinerary-btn"
            onClick={handlePrintItinerary}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print Trip Guide</span>
          </button>

          <button
            id="create-itinerary-btn"
            onClick={() => setShowCreateModal(true)}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-900/20 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Plan</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Itinerary Selector List (Left) and Active Itinerary Detail (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Itinerary Cards List */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            Available Itineraries ({itineraries.length})
          </h3>

          <div className="space-y-3">
            {itineraries.map((itin) => {
              const isSelected = itin.id === selectedItinerary?.id;
              return (
                <div
                  key={itin.id}
                  onClick={() => setSelectedItineraryId(itin.id)}
                  className={`p-4 rounded-2xl cursor-pointer border transition-all relative ${
                    isSelected
                      ? 'bg-amber-500/10 border-amber-500 dark:bg-amber-950/30 shadow-md ring-1 ring-amber-500/30'
                      : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-amber-400/50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                        {itin.targetDays} Days • {itin.region}
                      </span>
                      <h4 className="font-serif-heritage font-bold text-sm text-stone-900 dark:text-white mt-1.5 leading-snug">
                        {itin.title}
                      </h4>
                    </div>

                    {itineraries.length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDeleteItinerary(itin.id);
                        }}
                        className="text-stone-400 hover:text-red-500 p-1"
                        title="Delete Plan"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-2 mt-2">
                    {itin.description}
                  </p>

                  <div className="mt-3 pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-[11px] text-stone-500">
                    <span>Est: {itin.budgetEstimate}</span>
                    <span className="font-semibold text-amber-600 dark:text-amber-400 flex items-center">
                      View Days <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Selected Itinerary Detail & Day-by-Day Timeline */}
        <div className="lg:col-span-8 space-y-6">
          {selectedItinerary && (
            <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-sm space-y-6">
              
              {/* Header Info */}
              <div className="space-y-2 border-b border-stone-200 dark:border-stone-800 pb-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-800 dark:text-amber-300">
                    {selectedItinerary.targetDays} Days Itinerary
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    Region: {selectedItinerary.region}
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    Best Season: {selectedItinerary.seasonRecommendation}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-serif-heritage font-bold text-stone-900 dark:text-white">
                  {selectedItinerary.title}
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {selectedItinerary.description}
                </p>
                <div className="text-xs font-semibold text-amber-700 dark:text-amber-400">
                  Approximate Budget: {selectedItinerary.budgetEstimate}
                </div>
              </div>

              {/* Day-by-Day Schedule */}
              <div className="space-y-6">
                {selectedItinerary.days.map((day) => {
                  const dayPlaces = places.filter(p => day.placeIds.includes(p.id));

                  return (
                    <div 
                      key={day.dayNumber}
                      className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="w-8 h-8 rounded-xl bg-amber-600 text-white font-bold text-sm flex items-center justify-center">
                            {day.dayNumber}
                          </span>
                          <h3 className="font-serif-heritage font-bold text-base text-stone-900 dark:text-stone-100">
                            {day.title}
                          </h3>
                        </div>

                        <span className="text-xs text-stone-500 font-medium flex items-center space-x-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>~{day.estimatedHours} Hours</span>
                        </span>
                      </div>

                      {/* Day Notes / Logistics */}
                      <p className="text-xs text-stone-600 dark:text-stone-300 bg-white dark:bg-stone-900/60 p-3 rounded-xl border border-stone-200 dark:border-stone-800">
                        <span className="font-bold text-amber-700 dark:text-amber-400">Travel Notes: </span>
                        {day.notes}
                      </p>

                      {/* Scheduled Places for this Day */}
                      <div className="space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                          Monuments & Stops ({dayPlaces.length}):
                        </span>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {dayPlaces.map((pl) => (
                            <div 
                              key={pl.id}
                              className="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700/80 flex items-center justify-between group"
                            >
                              <div 
                                onClick={() => onSelectPlace(pl)}
                                className="flex items-center space-x-2.5 cursor-pointer flex-1 min-w-0"
                              >
                                <img 
                                  src={pl.imageUrl} 
                                  alt={pl.name}
                                  className="w-10 h-10 rounded-lg object-cover shrink-0"
                                />
                                <div className="min-w-0">
                                  <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 truncate group-hover:text-amber-600">
                                    {pl.name}
                                  </h4>
                                  <p className="text-[10px] text-stone-500 truncate">
                                    {pl.city} • {pl.architecture.primaryStyle}
                                  </p>
                                </div>
                              </div>

                              <button
                                onClick={() => handleRemovePlaceFromDay(day.dayNumber, pl.id)}
                                className="p-1.5 text-stone-400 hover:text-red-500 rounded-md shrink-0 ml-2"
                                title="Remove from Day"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quick Add Saved Bookmark to this Day */}
                      {bookmarkedPlaceIds.length > 0 && (
                        <div className="pt-2 border-t border-stone-200 dark:border-stone-700/60">
                          <span className="text-[11px] text-stone-500 font-medium block mb-1.5">
                            Add from your saved bookmarks to Day {day.dayNumber}:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {places
                              .filter(p => bookmarkedPlaceIds.includes(p.id) && !day.placeIds.includes(p.id))
                              .map(p => (
                                <button
                                  key={p.id}
                                  onClick={() => handleAddPlaceToDay(day.dayNumber, p.id)}
                                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-stone-200/60 dark:bg-stone-800 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 dark:hover:text-stone-950 transition-colors flex items-center space-x-1"
                                >
                                  <Plus className="w-3 h-3" />
                                  <span>{p.name}</span>
                                </button>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Itinerary Modal Dialog */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <form 
            onSubmit={handleCreateItinerary}
            className="bg-white dark:bg-stone-900 rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-stone-200 dark:border-stone-800 space-y-4 animate-in fade-in"
          >
            <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
              <h3 className="font-serif-heritage font-bold text-lg text-stone-900 dark:text-white">
                Create Personalized Travel Circuit
              </h3>
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="text-stone-400 hover:text-stone-600"
              >
                ✕
              </button>
            </div>

            <div>
              <label className="text-xs font-medium text-stone-700 dark:text-stone-300 block mb-1">Itinerary Title</label>
              <input 
                type="text"
                required
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="e.g. 5-Day Kashmir & Mughal Gardens Expedition"
                className="w-full px-3 py-2 rounded-xl text-xs bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-stone-700 dark:text-stone-300 block mb-1">Target Region</label>
                <input 
                  type="text"
                  value={newRegion}
                  onChange={(e) => setNewRegion(e.target.value)}
                  placeholder="e.g. Kashmir Valley"
                  className="w-full px-3 py-2 rounded-xl text-xs bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-stone-700 dark:text-stone-300 block mb-1">Total Days</label>
                <input 
                  type="number"
                  min={1}
                  max={14}
                  value={newDaysCount}
                  onChange={(e) => setNewDaysCount(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl text-xs bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-stone-700 dark:text-stone-300 block mb-1">Short Description</label>
              <textarea 
                rows={2}
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="What is the focus of this circuit? (e.g. Ancient stone architecture, photography, or royal courts)"
                className="w-full px-3 py-2 rounded-xl text-xs bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-stone-700 dark:text-stone-300 block mb-1">Estimated Budget per Traveler</label>
              <input 
                type="text"
                value={newBudget}
                onChange={(e) => setNewBudget(e.target.value)}
                placeholder="e.g. ₹12,000 - ₹20,000"
                className="w-full px-3 py-2 rounded-xl text-xs bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700"
              />
            </div>

            <div className="flex justify-end space-x-2 pt-3 border-t border-stone-200 dark:border-stone-800">
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-stone-600 dark:text-stone-400 hover:bg-stone-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-md"
              >
                Generate Itinerary
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
