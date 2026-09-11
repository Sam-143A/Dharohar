import { Itinerary } from '../types';

export const defaultItineraries: Itinerary[] = [
  {
    id: "itin-agra-mughal-splendor",
    title: "Agra Imperial Mughal Splendor (3 Days)",
    description: "Immerse in the Golden Age of Mughal architecture, from Akbar's massive red sandstone citadels to Shah Jahan's sublime marble poetry and acoustic domes.",
    region: "Agra, Uttar Pradesh",
    targetDays: 3,
    budgetEstimate: "₹8,500 - ₹14,000 per traveler",
    seasonRecommendation: "October to March",
    createdAt: "2026-08-01",
    updatedAt: "2026-08-15",
    days: [
      {
        dayNumber: 1,
        title: "Day 1: The Crown of Marble & Yamuna Riverfront",
        placeIds: ["taj-mahal-agra"],
        notes: "Enter Taj Mahal at 5:45 AM for sunrise. Afternoon visit to Mehtab Bagh for panoramic sunset view across the river Yamuna.",
        estimatedHours: 5
      },
      {
        dayNumber: 2,
        title: "Day 2: Imperial Citadel & Royal Chambers",
        placeIds: ["agra-fort"],
        notes: "Explore Agra Fort's Jahangiri Mahal, Sheesh Mahal, and Musamman Burj where Shah Jahan was kept under house arrest.",
        estimatedHours: 4
      },
      {
        dayNumber: 3,
        title: "Day 3: Ghost City of Fatehpur Sikri",
        placeIds: ["agra-fort"],
        notes: "Excursion 37 km west to Akbar's abandoned utopian capital. Walk through Buland Darwaza and the delicate marble jali tomb of Salim Chishti.",
        estimatedHours: 6
      }
    ]
  },
  {
    id: "itin-karnataka-stone-wonders",
    title: "Karnataka Hoysala & Vijayanagara Trail (4 Days)",
    description: "Traverse medieval Karnataka's supreme stone masterpieces: the boulder-strewn capital of Hampi, resonant musical pillars, and Hoysala star-shaped soapstone sanctuaries.",
    region: "Karnataka (Hampi & Hassan)",
    targetDays: 4,
    budgetEstimate: "₹11,000 - ₹18,000 per traveler",
    seasonRecommendation: "November to February",
    createdAt: "2026-08-05",
    updatedAt: "2026-08-20",
    days: [
      {
        dayNumber: 1,
        title: "Day 1: Sacred Center of Hampi & Tungabhadra",
        placeIds: ["hampi-vijayanagara"],
        notes: "Virupaksha Temple morning pooja, Hemakuta hill monuments, and coracle boat ride across Tungabhadra.",
        estimatedHours: 6
      },
      {
        dayNumber: 2,
        title: "Day 2: Vittala Temple & Royal Enclosure",
        placeIds: ["hampi-vijayanagara"],
        notes: "Stone Chariot, acoustic testing of the 56 musical pillars, Stepped Tank (Pushkarani), and Lotus Mahal.",
        estimatedHours: 7
      },
      {
        dayNumber: 3,
        title: "Day 3: Belur Hoysala Stellate Architecture",
        placeIds: ["chennakeshava-belur"],
        notes: "Drive south to Belur. Marvel at the star-shaped platform, lathe-turned soapstone pillars, and Madanika dancers.",
        estimatedHours: 5
      },
      {
        dayNumber: 4,
        title: "Day 4: Halebidu Twin Shrines & Jain Basadis",
        placeIds: ["chennakeshava-belur"],
        notes: "Visit Hoysaleswara Temple in Halebidu, analyzing 240+ relief friezes of the Mahabharata and Ramayana.",
        estimatedHours: 5
      }
    ]
  },
  {
    id: "itin-kerala-palaces-forts",
    title: "Kerala Heritage: Palaces, Murals & Coastal Forts (3 Days)",
    description: "Discover indigenous Kerala timber architecture, the Ramayana frescoes of the Dutch Palace, and dramatic coastal ramparts facing the Arabian Sea.",
    region: "Kerala (Kochi & Kasaragod)",
    targetDays: 3,
    budgetEstimate: "₹9,000 - ₹15,000 per traveler",
    seasonRecommendation: "September to March",
    createdAt: "2026-08-10",
    updatedAt: "2026-08-22",
    days: [
      {
        dayNumber: 1,
        title: "Day 1: Fort Kochi Colonial Ramparts & Spice Trade",
        placeIds: ["mattancherry-palace-kochi"],
        notes: "St. Francis Church, Chinese fishing nets, and Jew Town spice warehouses.",
        estimatedHours: 5
      },
      {
        dayNumber: 2,
        title: "Day 2: Mattancherry Nalukettu & Ancient Murals",
        placeIds: ["mattancherry-palace-kochi"],
        notes: "Examine 300 square meters of 16th-century Ramayana vegetable-dye murals, coffered teak ceilings, and coronation hall.",
        estimatedHours: 4
      },
      {
        dayNumber: 3,
        title: "Day 3: Bekal Fort Ocean Ramparts",
        placeIds: ["bekal-fort-kerala"],
        notes: "Travel to Kasaragod to explore Bekal's keyhole laterite bastions and observation tower overlooking the Arabian Sea.",
        estimatedHours: 5
      }
    ]
  },
  {
    id: "itin-kashmir-valley-heritage",
    title: "Kashmir Valley: Ancient Temples & Mughal Waters (3 Days)",
    description: "Explore the Greco-Gandharan stone ruins of Martand and the terraced paradise water gardens created by Emperor Jahangir beneath snow-peaked mountains.",
    region: "Kashmir Valley, J&K",
    targetDays: 3,
    budgetEstimate: "₹12,000 - ₹22,000 per traveler",
    seasonRecommendation: "April to October",
    createdAt: "2026-08-12",
    updatedAt: "2026-08-25",
    days: [
      {
        dayNumber: 1,
        title: "Day 1: Martand Sun Temple on Anantnag Plateau",
        placeIds: ["martand-sun-temple-kashmir"],
        notes: "Early morning drive to Anantnag. Marvel at the 84 fluted colonnades and trefoil arches framed by the Pir Panjal range.",
        estimatedHours: 6
      },
      {
        dayNumber: 2,
        title: "Day 2: Shalimar Bagh Mughal Terraces",
        placeIds: ["shalimar-bagh-kashmir"],
        notes: "Walk through Jahangir's 4-tiered paradise garden, listen to the acoustic cascades of the chhadars, and see the Black Marble Baradari.",
        estimatedHours: 4
      },
      {
        dayNumber: 3,
        title: "Day 3: Nishat Bagh & Old Srinagar Wooden Shrines",
        placeIds: ["shalimar-bagh-kashmir"],
        notes: "Visit Nishat Bagh ('Garden of Joy') on the Dal Lake, followed by Jamia Masjid's 378 deodar wood monolithic pillars.",
        estimatedHours: 5
      }
    ]
  }
];
