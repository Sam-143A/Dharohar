import React, { useState } from 'react';
import { 
  Cloud, 
  Copy, 
  Check, 
  Smartphone, 
  Laptop, 
  RefreshCw, 
  ArrowDownCircle, 
  ArrowUpCircle, 
  X, 
  ShieldCheck, 
  FileText
} from 'lucide-react';

interface CloudSyncModalProps {
  syncKey: string;
  onSetSyncKey: (newKey: string) => void;
  onTriggerSyncPush: () => Promise<boolean>;
  onTriggerSyncPull: (keyToPull: string) => Promise<boolean>;
  lastSyncedAt: string | null;
  syncStatus: 'idle' | 'syncing' | 'synced' | 'error';
  onClose: () => void;
  bookmarksCount: number;
  itinerariesCount: number;
}

export const CloudSyncModal: React.FC<CloudSyncModalProps> = ({
  syncKey,
  onSetSyncKey,
  onTriggerSyncPush,
  onTriggerSyncPull,
  lastSyncedAt,
  syncStatus,
  onClose,
  bookmarksCount,
  itinerariesCount
}) => {
  const [copied, setCopied] = useState(false);
  const [inputKey, setInputKey] = useState('');
  const [pullMessage, setPullMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isPulling, setIsPulling] = useState(false);

  const handleCopyKey = () => {
    navigator.clipboard.writeText(syncKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLinkDevice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputKey.trim()) return;

    setIsPulling(true);
    setPullMessage(null);
    try {
      const ok = await onTriggerSyncPull(inputKey.trim().toUpperCase());
      if (ok) {
        onSetSyncKey(inputKey.trim().toUpperCase());
        setPullMessage({ type: 'success', text: 'Successfully linked and restored all plans from cloud!' });
      } else {
        setPullMessage({ type: 'error', text: 'No cloud record found for this Sync Key.' });
      }
    } catch (err) {
      setPullMessage({ type: 'error', text: 'Cloud connection error. Please try again.' });
    } finally {
      setIsPulling(false);
    }
  };

  return (
    <div 
      id="cloud-sync-modal-backdrop"
      className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        id="cloud-sync-dialog"
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-stone-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 dark:border-stone-800 space-y-6 animate-in fade-in"
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-600 flex items-center justify-center font-bold border border-amber-500/30">
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-heritage font-bold text-xl text-stone-900 dark:text-white">
                Multi-Device Cloud Sync
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Seamlessly synchronize bookmarks, itineraries, and reviews across mobile & desktop.
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

        {/* Current Device Sync Key Card */}
        <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/60 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-600 dark:text-stone-300">
              Your Universal Sync Key:
            </span>
            <span className="text-[11px] text-emerald-600 font-semibold flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Encrypted & Safe</span>
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex-1 px-3.5 py-2.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 font-mono font-bold text-sm tracking-widest text-amber-700 dark:text-amber-400">
              {syncKey}
            </div>

            <button
              id="copy-sync-key-btn"
              onClick={handleCopyKey}
              className="px-3.5 py-2.5 rounded-xl bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 text-stone-800 dark:text-white text-xs font-semibold flex items-center space-x-1.5 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <div className="flex items-center justify-between text-[11px] text-stone-500">
            <span>Payload: {bookmarksCount} bookmarks, {itinerariesCount} itineraries</span>
            <span>Last sync: {lastSyncedAt ? new Date(lastSyncedAt).toLocaleTimeString() : 'Pending'}</span>
          </div>

          <button
            id="trigger-cloud-push-btn"
            onClick={onTriggerSyncPush}
            disabled={syncStatus === 'syncing'}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-md transition-all cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${syncStatus === 'syncing' ? 'animate-spin' : ''}`} />
            <span>{syncStatus === 'syncing' ? 'Backing Up to Cloud...' : 'Back Up All Data to Cloud Now'}</span>
          </button>
        </div>

        {/* Link Another Device Section */}
        <div className="space-y-3 pt-2 border-t border-stone-200 dark:border-stone-800">
          <div className="flex items-center space-x-2 text-xs font-bold text-stone-800 dark:text-stone-200">
            <Smartphone className="w-4 h-4 text-amber-600" />
            <span>Open on Mobile or Another Device?</span>
          </div>

          <p className="text-xs text-stone-500 dark:text-stone-400">
            Enter the Sync Key from your other device to pull down all your saved historical places, custom circuits, and travel tips instantly.
          </p>

          <form onSubmit={handleLinkDevice} className="flex items-center space-x-2">
            <input 
              type="text"
              value={inputKey}
              onChange={(e) => setInputKey(e.target.value)}
              placeholder="e.g. DHAROHAR-4921"
              className="flex-1 px-3.5 py-2.5 rounded-xl text-xs bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 font-mono uppercase focus:outline-amber-500"
            />
            <button
              type="submit"
              disabled={isPulling}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 hover:bg-stone-800 transition-colors shrink-0 disabled:opacity-50"
            >
              {isPulling ? 'Restoring...' : 'Restore Device'}
            </button>
          </form>

          {pullMessage && (
            <div className={`p-3 rounded-xl text-xs font-semibold ${
              pullMessage.type === 'success' 
                ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30' 
                : 'bg-red-500/15 text-red-700 dark:text-red-300 border border-red-500/30'
            }`}>
              {pullMessage.text}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
