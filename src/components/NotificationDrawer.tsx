import React, { useState } from 'react';
import { 
  Bell, 
  Tag, 
  Calendar, 
  MapPin, 
  Copy, 
  Check, 
  X, 
  Sparkles, 
  Navigation, 
  Radio, 
  Compass, 
  CheckCircle2
} from 'lucide-react';
import { HeritageNotification } from '../types';

interface NotificationDrawerProps {
  notifications: HeritageNotification[];
  onMarkAsRead: (id: string) => void;
  onSimulateNearbyAlert: (regionName: string, placeName: string, discountCode: string) => void;
  onClose: () => void;
}

export const NotificationDrawer: React.FC<NotificationDrawerProps> = ({
  notifications,
  onMarkAsRead,
  onSimulateNearbyAlert,
  onClose
}) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [permissionState, setPermissionState] = useState<NotificationPermission>(
    typeof window !== 'undefined' && 'Notification' in window ? Notification.permission : 'default'
  );

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleRequestPushPermission = async () => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      try {
        const perm = await Notification.requestPermission();
        setPermissionState(perm);
        if (perm === 'granted') {
          new Notification("Dharohar Heritage Alerts Enabled", {
            body: "You will now receive alerts for nearby cultural events, festival passes, and ASI monument discounts!",
            icon: "/icon.png"
          });
        }
      } catch (err) {
        console.error("Error requesting notifications", err);
      }
    }
  };

  return (
    <div 
      id="notification-drawer-backdrop"
      className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex justify-end"
      onClick={onClose}
    >
      <div 
        id="notification-drawer-panel"
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:w-[480px] bg-white dark:bg-stone-900 h-full shadow-2xl flex flex-col border-l border-stone-200 dark:border-stone-800 animate-in slide-in-from-right duration-300"
      >
        {/* Header */}
        <div className="p-6 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-heritage font-bold text-lg text-stone-900 dark:text-white">
                Nearby Events & Discounts
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Exclusive passes for Kashmir, Agra, Karnataka & Kerala
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Push Notification Permission Status */}
        <div className="p-4 bg-amber-500/10 border-b border-amber-500/20 shrink-0 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs">
            <Radio className="w-4 h-4 text-amber-600 animate-pulse" />
            <span className="font-medium text-amber-900 dark:text-amber-200">
              {permissionState === 'granted' ? 'Live Push Alerts Active' : 'Enable Real Push Notifications'}
            </span>
          </div>

          {permissionState !== 'granted' && (
            <button
              onClick={handleRequestPushPermission}
              className="px-3 py-1 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-sm"
            >
              Enable
            </button>
          )}
        </div>

        {/* Proximity Radar Geofence Simulator */}
        <div className="p-4 bg-stone-50 dark:bg-stone-800/50 border-b border-stone-200 dark:border-stone-800 space-y-2 shrink-0">
          <div className="flex items-center space-x-1.5 text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>Simulate Being Near a Heritage Site:</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => onSimulateNearbyAlert('Agra', 'Taj Mahal & Agra Fort', 'TAJ25HERITAGE')}
              className="px-2.5 py-1.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 hover:border-red-500 text-stone-800 dark:text-stone-200 text-left font-medium truncate flex items-center space-x-1"
            >
              <MapPin className="w-3 h-3 text-red-500 shrink-0" />
              <span className="truncate">Near Agra Fort</span>
            </button>

            <button
              onClick={() => onSimulateNearbyAlert('Karnataka', 'Hampi Stone Chariot', 'HAMPIFREE')}
              className="px-2.5 py-1.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 hover:border-amber-500 text-stone-800 dark:text-stone-200 text-left font-medium truncate flex items-center space-x-1"
            >
              <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
              <span className="truncate">Near Hampi</span>
            </button>

            <button
              onClick={() => onSimulateNearbyAlert('Kerala', 'Mattancherry Dutch Palace', 'SPICETRAIL30')}
              className="px-2.5 py-1.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 hover:border-emerald-500 text-stone-800 dark:text-stone-200 text-left font-medium truncate flex items-center space-x-1"
            >
              <MapPin className="w-3 h-3 text-emerald-500 shrink-0" />
              <span className="truncate">Near Kochi Palace</span>
            </button>

            <button
              onClick={() => onSimulateNearbyAlert('Kashmir', 'Shalimar & Dal Lake', 'CHINARGOLD')}
              className="px-2.5 py-1.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 hover:border-sky-500 text-stone-800 dark:text-stone-200 text-left font-medium truncate flex items-center space-x-1"
            >
              <MapPin className="w-3 h-3 text-sky-500 shrink-0" />
              <span className="truncate">Near Shalimar Bagh</span>
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {notifications.map((notif) => (
            <div 
              key={notif.id}
              onClick={() => onMarkAsRead(notif.id)}
              className={`p-4 rounded-2xl border transition-all space-y-2 cursor-pointer ${
                notif.isRead 
                  ? 'bg-stone-50/60 dark:bg-stone-800/30 border-stone-200 dark:border-stone-800' 
                  : 'bg-white dark:bg-stone-800/80 border-amber-500/40 shadow-sm ring-1 ring-amber-500/20'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  <span className={`p-1.5 rounded-lg ${
                    notif.type === 'discount' 
                      ? 'bg-emerald-500/20 text-emerald-600' 
                      : notif.type === 'event' 
                        ? 'bg-purple-500/20 text-purple-600' 
                        : 'bg-amber-500/20 text-amber-600'
                  }`}>
                    {notif.type === 'discount' ? <Tag className="w-3.5 h-3.5" /> : <Calendar className="w-3.5 h-3.5" />}
                  </span>
                  <span className="text-xs font-bold text-stone-900 dark:text-stone-100">
                    {notif.title}
                  </span>
                </div>

                <span className="text-[10px] text-stone-400">{notif.timestamp}</span>
              </div>

              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                {notif.message}
              </p>

              {/* Discount Code Box */}
              {notif.discountCode && (
                <div className="pt-2 flex items-center justify-between bg-stone-100 dark:bg-stone-900 p-2.5 rounded-xl border border-stone-200 dark:border-stone-700">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-500 block">Promo Code</span>
                    <span className="font-mono font-bold text-xs text-amber-700 dark:text-amber-400">
                      {notif.discountCode}
                    </span>
                    {notif.discountAmount && (
                      <span className="ml-2 text-[10px] font-bold text-emerald-600">
                        ({notif.discountAmount})
                      </span>
                    )}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(notif.discountCode!);
                    }}
                    className="p-1.5 rounded-lg bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 text-stone-700 dark:text-stone-200 text-xs font-semibold flex items-center space-x-1"
                  >
                    {copiedCode === notif.discountCode ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span>{copiedCode === notif.discountCode ? 'Copied' : 'Apply'}</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
