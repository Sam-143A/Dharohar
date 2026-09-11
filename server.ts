import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// In-memory sync store for multi-device cross synchronization
interface SyncRecord {
  deviceId: string;
  data: any;
  updatedAt: string;
}
const syncDatabase: Record<string, SyncRecord> = {};

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Cloud synchronization API
app.post("/api/sync/push", (req, res) => {
  const { syncKey, deviceId, payload } = req.body;
  if (!syncKey) {
    return res.status(400).json({ error: "syncKey is required" });
  }

  const storedData = payload || req.body;

  syncDatabase[syncKey] = {
    deviceId: deviceId || "device-client",
    data: storedData,
    updatedAt: new Date().toISOString(),
  };

  res.json({
    success: true,
    syncKey,
    updatedAt: syncDatabase[syncKey].updatedAt,
    message: "Successfully synchronized across user devices in cloud",
  });
});

app.get("/api/sync/pull/:syncKey", (req, res) => {
  const { syncKey } = req.params;
  const record = syncDatabase[syncKey];
  if (!record) {
    return res.status(404).json({ error: "No cloud data found for this sync key" });
  }

  res.json({
    success: true,
    data: record.data,
    updatedAt: record.updatedAt,
    deviceId: record.deviceId,
    ...record.data
  });
});

// Notifications and nearby events API
app.get("/api/events/nearby", (req, res) => {
  const { lat, lng, region } = req.query;
  
  const heritageEvents = [
    {
      id: "evt-agra-1",
      title: "Taj Mahotsav 2026 Special Pass",
      place: "Taj Mahal & Agra Fort",
      region: "Agra, Uttar Pradesh",
      type: "discount",
      discountCode: "HERITAGE25",
      discountAmount: "25% off entry & cultural night shows",
      description: "Annual 10-day cultural extravaganza showcasing Indian artisans, classical dance, and Mughal-era crafts near the Eastern Gate.",
      validTill: "Valid till end of month",
      coordinates: { lat: 27.1751, lng: 78.0421 }
    },
    {
      id: "evt-kashmir-1",
      title: "Shalimar Autumn Chinar Heritage Walk",
      place: "Shalimar Bagh & Dal Lake",
      region: "Srinagar, Kashmir",
      type: "event",
      discountCode: "CHINARWALK",
      discountAmount: "Complimentary guided audio tour",
      description: "Special sunset architectural walk through the terraced water gardens built by Emperor Jahangir for Empress Nur Jahan.",
      validTill: "Active this weekend",
      coordinates: { lat: 34.1495, lng: 74.8732 }
    },
    {
      id: "evt-karnataka-1",
      title: "Hampi Utsav Night Illumination Passes",
      place: "Vittala Temple & Virupaksha",
      region: "Hampi, Karnataka",
      type: "discount",
      discountCode: "HAMPIFREE",
      discountAmount: "Free evening light & sound projection entry",
      description: "Mesmerizing projection mapping on the Stone Chariot and grand musical recital at the ancient Vijayanagara ruins.",
      validTill: "Limited tourist quota available",
      coordinates: { lat: 15.3350, lng: 76.4600 }
    },
    {
      id: "evt-kerala-1",
      title: "Kochi-Muziris Heritage & Fort Trail Discount",
      place: "Mattancherry Dutch Palace & Fort Kochi",
      region: "Kochi, Kerala",
      type: "discount",
      discountCode: "SPICETRAIL",
      discountAmount: "30% off combined palace & spice museum pass",
      description: "Explore the 16th-century Ramayana timber murals and Portuguese-Dutch colonial ramparts with verified local historians.",
      validTill: "Valid for next 14 days",
      coordinates: { lat: 9.9583, lng: 76.2594 }
    }
  ];

  res.json({ success: true, events: heritageEvents });
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Dharohar Heritage Server running on http://localhost:${PORT}`);
  });
}

startServer();
