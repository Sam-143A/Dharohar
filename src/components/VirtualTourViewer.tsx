import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  RotateCcw, 
  Maximize2, 
  Minimize2, 
  Sparkles, 
  Layers, 
  Compass, 
  Info, 
  ChevronLeft, 
  ChevronRight,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import { HistoricalPlace, VirtualTourScene, VirtualTourHotspot, Language } from '../types';

interface VirtualTourViewerProps {
  place: HistoricalPlace;
  language: Language;
  onClose: () => void;
}

export const VirtualTourViewer: React.FC<VirtualTourViewerProps> = ({
  place,
  language,
  onClose
}) => {
  const tour = place.virtualTour;
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const currentScene: VirtualTourScene = tour.scenes[currentSceneIndex] || tour.scenes[0];

  // Panoramic drag & zoom state
  const [panX, setPanX] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [selectedHotspot, setSelectedHotspot] = useState<VirtualTourHotspot | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Audio narration state using Web Speech API
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [speechSynthesisAvailable, setSpeechSynthesisAvailable] = useState(false);
  const [showTranscript, setShowTranscript] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSpeechSynthesisAvailable(true);
    }

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Handle scene change
  const goToScene = (index: number) => {
    if (index >= 0 && index < tour.scenes.length) {
      stopAudio();
      setCurrentSceneIndex(index);
      setSelectedHotspot(null);
      setPanX(0);
    }
  };

  // Audio playback handler
  const togglePlayAudio = () => {
    if (!speechSynthesisAvailable) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentScene.audioNarrationText);
      utterance.rate = 0.95; // Natural documentary cadence
      utterance.pitch = 1.0;

      // Try selecting an English or Indian voice
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(v => v.lang.includes('en-IN') || v.lang.includes('hi-IN') || v.lang.includes('en-GB'));
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.onend = () => {
        setIsPlayingAudio(false);
      };
      utterance.onerror = () => {
        setIsPlayingAudio(false);
      };

      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  const stopAudio = () => {
    if (speechSynthesisAvailable) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    }
  };

  // Drag pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX - panX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const newPan = e.clientX - dragStartX;
    // Keep panning within bounds
    setPanX(Math.max(-250, Math.min(250, newPan)));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  return (
    <div 
      id="virtual-tour-modal-backdrop"
      className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-xl flex flex-col text-stone-100 overflow-hidden"
    >
      {/* Top Bar */}
      <div className="h-16 px-6 bg-stone-900/80 border-b border-stone-800 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
            <Compass className="w-5 h-5 animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="font-serif-heritage text-lg font-bold text-white tracking-wide">
                {place.name}
              </h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
                360° Virtual Tour
              </span>
            </div>
            <p className="text-xs text-stone-400">
              Stop {currentSceneIndex + 1} of {tour.scenes.length}: {currentScene.title}
            </p>
          </div>
        </div>

        {/* Controls: Fullscreen, Close */}
        <div className="flex items-center space-x-2">
          <button
            id="tour-fullscreen-btn"
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Tour"}
            className="p-2 rounded-lg bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-4.5 h-4.5" /> : <Maximize2 className="w-4.5 h-4.5" />}
          </button>
          <button
            id="tour-close-btn"
            onClick={() => {
              stopAudio();
              onClose();
            }}
            title="Exit Tour"
            className="p-2 rounded-lg bg-stone-800 text-stone-300 hover:text-white hover:bg-red-500/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Panoramic Viewport */}
      <div 
        ref={containerRef}
        id="tour-panoramic-viewport"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={`relative flex-1 bg-stone-950 overflow-hidden select-none cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
      >
        {/* Panoramic Scene Image with transform */}
        <div 
          className="absolute inset-0 w-full h-full flex items-center justify-center transition-transform duration-100 ease-out"
          style={{
            transform: `scale(${zoomLevel}) translateX(${panX}px)`
          }}
        >
          <img 
            src={currentScene.panoramaUrl} 
            alt={currentScene.title}
            className="w-full h-full object-cover pointer-events-none"
          />

          {/* Interactive Hotspots Overlaid */}
          {currentScene.hotspots.map((spot) => (
            <button
              key={spot.id}
              id={`hotspot-pin-${spot.id}`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedHotspot(spot);
              }}
              style={{
                top: `${spot.yPercent}%`,
                left: `${spot.xPercent}%`
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer focus:outline-none"
            >
              {/* Pulsing ring */}
              <span className="absolute -inset-2 rounded-full bg-amber-400/40 animate-ping" />
              <div className="relative w-8 h-8 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center shadow-lg shadow-amber-500/50 group-hover:scale-125 transition-transform border-2 border-white">
                <Sparkles className="w-4 h-4" />
              </div>

              {/* Tooltip Label */}
              <span className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-bold bg-stone-900/90 text-amber-300 border border-stone-700 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {spot.title}
              </span>
            </button>
          ))}
        </div>

        {/* Pan Direction Hint */}
        <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-stone-900/70 backdrop-blur-md border border-stone-700/50 text-xs text-stone-300 pointer-events-none flex items-center space-x-2">
          <Compass className="w-3.5 h-3.5 text-amber-400" />
          <span>Click & drag horizontally to inspect architectural angles</span>
        </div>

        {/* Zoom Controls */}
        <div className="absolute top-4 right-4 z-10 flex flex-col space-y-1.5">
          <button
            onClick={() => setZoomLevel(prev => Math.min(2.0, prev + 0.25))}
            className="p-2 rounded-lg bg-stone-900/80 backdrop-blur-md border border-stone-700 text-stone-300 hover:text-white hover:bg-stone-800"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel(prev => Math.max(1.0, prev - 0.25))}
            className="p-2 rounded-lg bg-stone-900/80 backdrop-blur-md border border-stone-700 text-stone-300 hover:text-white hover:bg-stone-800"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
        </div>

        {/* Selected Hotspot Drawer / Card */}
        {selectedHotspot && (
          <div 
            id="hotspot-detail-card"
            className="absolute bottom-24 left-6 right-6 sm:left-auto sm:right-6 sm:w-96 z-30 p-5 rounded-2xl bg-stone-900/95 backdrop-blur-xl border border-amber-500/40 shadow-2xl space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                  <Sparkles className="w-4 h-4" />
                </span>
                <h4 className="font-bold text-sm text-white">{selectedHotspot.title}</h4>
              </div>
              <button
                onClick={() => setSelectedHotspot(null)}
                className="p-1 text-stone-400 hover:text-white rounded-md"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              {selectedHotspot.description}
            </p>

            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs">
              <div className="font-semibold text-amber-300 mb-0.5">Architectural Secret:</div>
              <p className="text-stone-300 leading-tight">
                {selectedHotspot.architecturalSecret}
              </p>
            </div>
          </div>
        )}

        {/* Bottom Tour Navigation & Audio Bar */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950 via-stone-950/90 to-transparent p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 z-20">
          
          {/* Scene Carousel Selector */}
          <div className="flex items-center space-x-2 overflow-x-auto max-w-full pb-1 sm:pb-0">
            <button
              onClick={() => goToScene(currentSceneIndex - 1)}
              disabled={currentSceneIndex === 0}
              className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-2">
              {tour.scenes.map((scene, idx) => (
                <button
                  key={scene.id}
                  onClick={() => goToScene(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    idx === currentSceneIndex
                      ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20 font-bold'
                      : 'bg-stone-900/80 border border-stone-800 text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  {idx + 1}. {scene.roomOrArea}
                </button>
              ))}
            </div>

            <button
              onClick={() => goToScene(currentSceneIndex + 1)}
              disabled={currentSceneIndex === tour.scenes.length - 1}
              className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Audio Guide Narration Controls */}
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            {speechSynthesisAvailable && (
              <button
                id="tour-audio-toggle-btn"
                onClick={togglePlayAudio}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md ${
                  isPlayingAudio
                    ? 'bg-amber-600 text-white animate-pulse'
                    : 'bg-stone-800 text-amber-300 hover:bg-stone-700 border border-amber-500/30'
                }`}
              >
                {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPlayingAudio ? 'Pause Narration' : 'Play Audio Guide'}</span>
              </button>
            )}

            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className="px-3 py-2 rounded-xl text-xs font-medium bg-stone-900 border border-stone-800 text-stone-300 hover:text-white"
            >
              {showTranscript ? 'Hide Transcript' : 'Show Transcript'}
            </button>
          </div>
        </div>
      </div>

      {/* Audio Transcript Drawer */}
      {showTranscript && (
        <div className="h-28 bg-stone-900 border-t border-stone-800 px-6 py-3 shrink-0 overflow-y-auto">
          <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 mb-1">
            <Volume2 className="w-3.5 h-3.5" />
            <span>Audio Guide Narration Transcript:</span>
          </div>
          <p className="text-xs text-stone-300 leading-relaxed">
            "{currentScene.audioNarrationText}"
          </p>
        </div>
      )}
    </div>
  );
};
