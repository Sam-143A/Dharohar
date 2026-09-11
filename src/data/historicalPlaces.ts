import { HistoricalPlace } from '../types';

export const historicalPlaces: HistoricalPlace[] = [
  // ================= AGRA REGION =================
  {
    id: "taj-mahal-agra",
    name: "Taj Mahal",
    nativeNames: {
      hi: "ताज महल",
      ur: "تاج محل",
      kn: "ತಾಜ್ ಮಹಲ್",
      ml: "താജ് മഹൽ",
      ta: "தாஜ் மஹால்",
      mr: "ताजमहल",
      bn: "তাজমহল"
    },
    shortDescription: "The zenith of Mughal Indo-Islamic architecture, renowned worldwide for its pure white Makrana marble, bilateral symmetry, and exquisite pietra dura inlay.",
    historicalContext: "Commissioned in 1631 by Mughal Emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. Constructed over 22 years (1631–1653) employing over 20,000 stone artisans, calligraphers, and gem-carvers from across India, Persia, and Central Asia under court architect Ustad Ahmad Lahori.",
    dynasty: "Mughal Empire",
    builder: "Emperor Shah Jahan (Chief Architect: Ustad Ahmad Lahori)",
    century: "17th Century (1631–1653 CE)",
    state: "Uttar Pradesh",
    city: "Agra",
    region: "North",
    focusRegion: "Agra",
    coordinates: {
      lat: 27.1751,
      lng: 78.0421
    },
    imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1600&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop"
    ],
    architecture: {
      primaryStyle: "Mughal & Indo-Islamic",
      structuralEra: "High Classical Mughal Period",
      geometryAndSymmetry: "Absolute bilateral symmetry along a central axis; the only asymmetrical element is Shah Jahan's cenotaph, added beside Mumtaz Mahal's central tomb.",
      materialsUsed: ["Makrana Translucent White Marble (Rajasthan)", "Red Sandstone (Fatehpur Sikri)", "Jasper (Punjab)", "Jade & Crystal (China)", "Turquoise (Tibet)", "Lapis Lazuli (Afghanistan)", "Carnelian (Arabia)"],
      acousticFeatures: "The central octagonal domed chamber possesses a reverberation time of nearly 28 seconds, designed so that continuous Quranic chanting created a lingering sacred resonance.",
      uniqueCarvingsOrJaliWork: "Delicate perforated marble screens (jali) carved from monolithic slabs, bordered with floral pietra dura (parchin kari) featuring up to 35 unique precious stone inlays per flower petal.",
      subterraneanOrWaterEngineering: "Built on a subterranean well foundation system lined with sal and deodar wood timber casings kept permanently hydrated by the Yamuna River to prevent foundation subsidence.",
      preservationStatus: "Protected Monument by Archaeological Survey of India (ASI)",
      unescoWorldHeritage: true,
      architectOrMasterArtisan: "Ustad Ahmad Lahori, Mir Abd-ul Karim, and calligrapher Amanat Khan"
    },
    practicalTips: {
      bestTimeToVisit: "October to March. Sunrise viewing offers ethereal golden light and fewer crowds.",
      recommendedDuration: "3 to 4 hours",
      timings: "30 minutes before sunrise to 30 minutes before sunset (Closed every Friday)",
      closedOn: "Friday (Open only for registered afternoon prayers)",
      entryFees: {
        domestic: "₹50 (Mausoleum entry extra ₹200)",
        foreign: "₹1,100 (Mausoleum entry extra ₹200)",
        saarc: "₹540 (Mausoleum entry extra ₹200)",
        cameraFee: "Free for stills; Tripods prohibited"
      },
      dressCode: "Modest attire covering shoulders and knees; shoe covers provided for the marble plinth.",
      photographyAllowed: true,
      audioGuideAvailable: true,
      wheelchairAccessible: true,
      insiderTravelTip: "Book online via the ASI portal to skip the 45-minute ticket queue at Western Gate. Visit Mehtab Bagh across the river Yamuna at sunset for iconic unobstructed reflection photos."
    },
    virtualTour: {
      title: "Imperial Taj Mahal 360° Architectural Journey",
      totalStops: 3,
      scenes: [
        {
          id: "taj-charbagh-gateway",
          title: "The Great Darwaza-i-Rauza & Charbagh Garden",
          roomOrArea: "Monumental Entrance Gate",
          panoramaUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
          audioNarrationText: "Standing before the Darwaza-i Rauza, the red sandstone gateway frames the gleaming white Taj Mahal through an optical illusion: as you walk towards the arch, the monument appears to grow larger and grander, symbolizing the threshold between the mortal world and paradise.",
          hotspots: [
            {
              id: "spot-calligraphy",
              title: "Tapering Quranic Calligraphy",
              xPercent: 50,
              yPercent: 28,
              description: "The black marble inlays of Surah Al-Fajr expand in scale as they ascend, ensuring each letter appears visually equal in size from human eye level below.",
              architecturalSecret: "Mathematical perspective correction invented by calligrapher Amanat Khan in 1638."
            },
            {
              id: "spot-charbagh-reflection",
              title: "Four-Part Charbagh Watercourse",
              xPercent: 50,
              yPercent: 78,
              description: "Representing the four rivers of Paradise (milk, honey, water, and wine) intersecting at the central lotus reservoir.",
              architecturalSecret: "Fed by an ancient 17th-century terracotta aqueduct system powered by animal-drawn purs from the Yamuna."
            }
          ]
        },
        {
          id: "taj-marble-plinth",
          title: "The Elevated Marble Plinth & Minarets",
          roomOrArea: "Terrace Platform & Exterior Façade",
          panoramaUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1600&auto=format&fit=crop",
          audioNarrationText: "Here on the elevated white marble terrace, notice the four four-tiered minarets standing 40 meters tall. Each minaret is deliberately tilted outwards by approximately two degrees, ensuring that in the event of a catastrophic earthquake, they collapse safely away from the central mausoleum.",
          hotspots: [
            {
              id: "spot-tilted-minaret",
              title: "Outward Inclination of the Minarets",
              xPercent: 18,
              yPercent: 35,
              description: "A calculated safety marvel of Mughal seismic engineering.",
              architecturalSecret: "Outward 2-degree canting prevents inward collapse during seismic shocks."
            },
            {
              id: "spot-pietra-dura",
              title: "Parchin Kari Inlay Panels",
              xPercent: 58,
              yPercent: 62,
              description: "Semi-precious stones ground with emery wheels and fitted into carved marble depressions without visible mortar gaps.",
              architecturalSecret: "Tolerances are under 0.05 mm, polished with agate stone."
            }
          ]
        },
        {
          id: "taj-cenotaph-chamber",
          title: "The Octagonal Inner Sanctuary",
          roomOrArea: "Central Domed Crypt",
          panoramaUrl: "https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=1600&auto=format&fit=crop",
          audioNarrationText: "Inside the octagonal inner sanctuary, filtered light streams through the perforated marble jali screens onto the cenotaphs of Mumtaz Mahal and Shah Jahan. The actual burial vaults lie silently in the unadorned lower crypt below ground level, adhering to Islamic modesty traditions.",
          hotspots: [
            {
              id: "spot-acoustic-dome",
              title: "Double-Shelled Acoustic Dome",
              xPercent: 50,
              yPercent: 22,
              description: "A false inner ceiling creates ideal interior acoustics, while the outer onion dome provides towering exterior grandeur.",
              architecturalSecret: "The dome height spans 35 meters with zero supporting internal columns."
            },
            {
              id: "spot-jali-screen",
              title: "Monolithic Jali Screen",
              xPercent: 46,
              yPercent: 70,
              description: "A pierced marble octagon surrounding the memorials, carved from solid slabs with floral vine borders.",
              architecturalSecret: "Took over 10 years for master sculptors to carve without fracturing the marble webbing."
            }
          ]
        }
      ]
    },
    reviews: [
      {
        id: "rev-taj-1",
        authorName: "Dr. Arvind Subramaniam",
        authorLocation: "Bangalore, India",
        rating: 5,
        date: "2026-08-14",
        title: "Transcendent geometry and incredible acoustic dome",
        comment: "As an architect, standing beneath the double dome and observing the outward lean of the minarets was awe-inspiring. The morning light turns the Makrana marble from cool pearl-blue to pale blush rose.",
        travelerType: "Architecture Student",
        categoryRatings: { architecture: 5, accessibility: 4, photography: 5, guideQuality: 5 },
        helpfulCount: 42,
        visitedSeason: "Winter (December)",
        tipsShared: "Enter via the East Gate at 5:45 AM. Bring warm socks because you must take shoes off on cold marble terrace."
      },
      {
        id: "rev-taj-2",
        authorName: "Elena Rostova",
        authorLocation: "Vienna, Austria",
        rating: 5,
        date: "2026-06-20",
        title: "Pure magic, the virtual tour audio was exact!",
        comment: "The detail of the lapis lazuli and carnelian stones in the flower petals is miraculous. The app's audio guide was ten times better than the unsolicited pushy touts outside the gates.",
        travelerType: "International Tourist",
        categoryRatings: { architecture: 5, accessibility: 4, photography: 5, guideQuality: 4 },
        helpfulCount: 29,
        visitedSeason: "Autumn (November)",
        tipsShared: "Hire an approved ASI-licensed guide wearing a blue badge, or just use the in-app virtual audio tour."
      }
    ],
    rating: 4.9,
    reviewCount: 3840,
    tags: ["Mughal", "UNESCO", "Marble", "Symmetry", "Seven Wonders", "Pietra Dura"]
  },

  {
    id: "agra-fort",
    name: "Agra Fort (Lal Qila)",
    nativeNames: {
      hi: "आगरा किला",
      ur: "قلعہ آگرہ",
      kn: "ಆಗ್ರಾ ಕೋಟೆ",
      ml: "ആഗ്ര കോട്ട",
      ta: "ஆக்ரா கோட்டை",
      mr: "आग्रा किल्ला",
      bn: "আগ্রা দুর্গ"
    },
    shortDescription: "The grand imperial fortress of the Mughal dynasty, featuring colossal double-walled red sandstone ramparts, Jahangiri Mahal, and the exquisite mirror-inlaid Sheesh Mahal.",
    historicalContext: "Originally a brick fort named Badalgarh held by the Sikarwar Rajputs, Akbar renovated it in red sandstone starting in 1565 with over 4,000 workers daily. It served as the primary residence of Akbar, Jahangir, Shah Jahan, and Aurangzeb, witnessing Shah Jahan's final years of confinement where he gazed across the river at the Taj Mahal from Musamman Burj.",
    dynasty: "Mughal Empire (Akbari to Shah Jahani transition)",
    builder: "Emperor Akbar (expanded by Shah Jahan)",
    century: "16th to 17th Century (1565–1573 CE)",
    state: "Uttar Pradesh",
    city: "Agra",
    region: "North",
    focusRegion: "Agra",
    coordinates: {
      lat: 27.1795,
      lng: 78.0211
    },
    imageUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1598598795009-f80c5072e665?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?q=80&w=1200&auto=format&fit=crop"
    ],
    architecture: {
      primaryStyle: "Mughal & Indo-Islamic",
      structuralEra: "Early Classical Mughal & Rajput Synthesis",
      geometryAndSymmetry: "Semi-circular ground plan measuring 2.5 km in circumference, encased within 70-foot-high double defensive walls and deep moats.",
      materialsUsed: ["Red Dholpur Sandstone", "White Makrana Marble (Shah Jahani additions)", "Belgian convex mirrors", "Lapis stucco plaster"],
      acousticFeatures: "Sheesh Mahal's barrel-vaulted mirror ceilings feature parabolic acoustics where faint whispers bounce across the chamber corners.",
      uniqueCarvingsOrJaliWork: "Jahangiri Mahal displays serpentine Gujarati brackets, peacock struts, and deep chhajjas reflecting syncretic Hindu-Mughal woodwork translated into red stone.",
      subterraneanOrWaterEngineering: "Extensive underground Baolis (stepwells), hammams with hot and cold copper conduits, and air-cooling channels integrated into palace walls.",
      preservationStatus: "Protected Monument by ASI",
      unescoWorldHeritage: true,
      architectOrMasterArtisan: "Qasim Khan (Akbar's Mir-i-Bahr / Master of Works)"
    },
    practicalTips: {
      bestTimeToVisit: "November to March. Combine with Taj Mahal on the same day for seamless heritage discovery.",
      recommendedDuration: "2.5 to 3.5 hours",
      timings: "Sunrise to Sunset (Open 7 days a week)",
      closedOn: "Open all days",
      entryFees: {
        domestic: "₹50",
        foreign: "₹650",
        saarc: "₹90",
        cameraFee: "Free for non-commercial stills"
      },
      dressCode: "Comfortable walking shoes essential; significant walking across stone pavilions and inclined ramps.",
      photographyAllowed: true,
      audioGuideAvailable: true,
      wheelchairAccessible: true,
      insiderTravelTip: "Head to Musamman Burj balcony for the exact historic vantage point where imprisoned Shah Jahan spent his final moments admiring the Taj Mahal."
    },
    virtualTour: {
      title: "Imperial Citadel & Palace Walkthrough",
      totalStops: 2,
      scenes: [
        {
          id: "agra-jahangiri-mahal",
          title: "Jahangiri Mahal & Rajput Wooden Brackets in Stone",
          roomOrArea: "Akbar's Zenana Palace",
          panoramaUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600&auto=format&fit=crop",
          audioNarrationText: "Entering the Jahangiri Mahal, notice how Emperor Akbar fused Hindu temple timber motifs with Persian geometry. Stone beams mimic carved wooden roof supports, carved with parrots and stylized elephants.",
          hotspots: [
            {
              id: "spot-brackets",
              title: "Serpentine Stone Struts",
              xPercent: 35,
              yPercent: 55,
              description: "Carved sandstone cantilevers modeled on Rajasthani and Gujarati haveli woodcraft.",
              architecturalSecret: "Interlocking dry-joint masonry without mortar pins."
            }
          ]
        },
        {
          id: "agra-diwan-i-khas",
          title: "Diwan-i-Khas & Musamman Burj",
          roomOrArea: "Private Audience Hall",
          panoramaUrl: "https://images.unsplash.com/photo-1598598795009-f80c5072e665?q=80&w=1600&auto=format&fit=crop",
          audioNarrationText: "Shah Jahan replaced Akbar's red sandstone with immaculate white marble arcades. From Musamman Burj, the view of the Yamuna bend reveals how the river was the primary royal ceremonial highway of the Mughal capital.",
          hotspots: [
            {
              id: "spot-black-throne",
              title: "Black Onyx Throne of Jahangir",
              xPercent: 70,
              yPercent: 65,
              description: "Carved in Allahabad in 1600, positioned on the terrace facing the river.",
              architecturalSecret: "A monolithic single slab of dark touchstone (kasauti)."
            }
          ]
        }
      ]
    },
    reviews: [
      {
        id: "rev-af-1",
        authorName: "Sunita Deshmukh",
        authorLocation: "Pune, Maharashtra",
        rating: 5,
        date: "2026-07-10",
        title: "The sheer scale of the Amar Singh Gate is humbling",
        comment: "Many tourists skip Agra Fort after Taj Mahal—huge mistake! The blend of Akbar's sturdy red stone and Shah Jahan's delicate white marble shows 100 years of empire evolution in one stroll.",
        travelerType: "History Buff",
        categoryRatings: { architecture: 5, accessibility: 4, photography: 5, guideQuality: 4 },
        helpfulCount: 18,
        visitedSeason: "Winter (January)",
        tipsShared: "Take the afternoon slot around 3 PM when the sun highlights the warm red sandstone."
      }
    ],
    rating: 4.8,
    reviewCount: 2410,
    tags: ["Mughal", "UNESCO", "Fort", "Red Sandstone", "Akbar", "Palace"]
  },

  // ================= KARNATAKA REGION =================
  {
    id: "hampi-vijayanagara",
    name: "Group of Monuments at Hampi",
    nativeNames: {
      kn: "ಹಂಪಿಯ ಸ್ಮಾರಕಗಳ ಸಮೂಹ",
      hi: "हम्पी के स्मारक",
      ta: "ஹம்பி நினைவிடங்கள்",
      ml: "ഹംപി സ്മാരകങ്ങൾ",
      ur: "ہمپی",
      mr: "हम्पी",
      bn: "হাম্পি"
    },
    shortDescription: "The magnificent capital of the Vijayanagara Empire, famed for its surreal boulder landscape, Vittala Stone Chariot, and resonant musical pillars.",
    historicalContext: "Founded in 1336 CE by brothers Harihara I and Bukka Raya I on the banks of the Tungabhadra River, Hampi grew into the world's second-largest medieval city by 1500 CE after Beijing, bustling with traders from Portugal, Persia, and Venice trading horses and diamonds. Crowned by King Krishnadevaraya (1509–1529), it represents the crowning glory of Vijayanagara art and military architecture.",
    dynasty: "Vijayanagara Empire (Sangama, Saluva, Tuluva dynasties)",
    builder: "Harihara, Bukka Raya, Krishnadevaraya, and Achyuta Deva Raya",
    century: "14th to 16th Century (1336–1565 CE)",
    state: "Karnataka",
    city: "Hampi, Vijayanagara District",
    region: "South",
    focusRegion: "Karnataka",
    coordinates: {
      lat: 15.3350,
      lng: 76.4600
    },
    imageUrl: "https://images.unsplash.com/photo-1600100397608-f010e42e5bf4?q=80&w=1600&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop"
    ],
    architecture: {
      primaryStyle: "Dravidian",
      structuralEra: "Vijayanagara Imperial Period",
      geometryAndSymmetry: "Vast sprawling sacred and royal centers integrated organically into granite boulder outcroppings, broad chariot bazaars, and stepped stepped tanks (Pushkaranis).",
      materialsUsed: ["Locally quarried Granite rock (dry masonry)", "Stucco mortar", "Teak beams", "Basalt detail stones"],
      acousticFeatures: "The Mahamandapa of the Vittala Temple features 56 monolithic granite pillars (Saptaswara pillars) tuned to emit specific musical frequencies (Sa-Re-Ga-Ma) and percussion notes (Mridangam, Ghatam) when gently tapped.",
      uniqueCarvingsOrJaliWork: "Dynamic yali pillars (mythical lion-elephant beasts) rearing on hind legs with free-rolling granite balls trapped inside their stone jaws.",
      subterraneanOrWaterEngineering: "Aqueducts kilometers long carved from granite channels gravity-fed water from the Tungabhadra River to stepped pushkaranis and royal baths.",
      preservationStatus: "Protected Monument by ASI",
      unescoWorldHeritage: true,
      architectOrMasterArtisan: "Guild of Vijayanagara Master Sculptors (Murti Shilpins)"
    },
    practicalTips: {
      bestTimeToVisit: "November to February. Temperatures exceed 40°C in summer.",
      recommendedDuration: "2 to 3 full days to explore sacred and royal centers",
      timings: "6:00 AM to 6:00 PM",
      closedOn: "Open all days (Virupaksha Temple remains active for daily worship)",
      entryFees: {
        domestic: "₹40 (covers Vittala Temple & Zenana Enclosure)",
        foreign: "₹600",
        saarc: "₹40",
        cameraFee: "Free for handheld stills"
      },
      dressCode: "Modest attire in active temples (shoulders and knees covered); remove shoes at temple courtyards.",
      photographyAllowed: true,
      audioGuideAvailable: true,
      wheelchairAccessible: false,
      insiderTravelTip: "Rent an electric bicycle or hire an auto-rickshaw for the day. Catch sunrise at Matanga Hill for an unforgettable panoramic view over the banana plantations and temple gopurams."
    },
    virtualTour: {
      title: "Vijayanagara Splendor: Vittala & Virupaksha",
      totalStops: 3,
      scenes: [
        {
          id: "hampi-stone-chariot",
          title: "The Iconic Stone Chariot (Garuda Shrine)",
          roomOrArea: "Vittala Temple Courtyard",
          panoramaUrl: "https://images.unsplash.com/photo-1600100397608-f010e42e5bf4?q=80&w=1600&auto=format&fit=crop",
          audioNarrationText: "Before you stands the world-famous Stone Chariot, dedicated to Garuda, the vahana of Lord Vishnu. Though it appears monolithic, it is assembled from carved granite slabs with joints so meticulously hidden that it looks like a single sculpted rock.",
          hotspots: [
            {
              id: "spot-chariot-wheels",
              title: "Rotating Concentric Wheels",
              xPercent: 48,
              yPercent: 72,
              description: "The giant granite wheels with lotus hub spokes could once rotate freely on their axles until locked by ASI for preservation.",
              architecturalSecret: "Carved from fine chloritic stone fitted into granite chassis."
            },
            {
              id: "spot-brick-shikhara",
              title: "Original Lost Shikhara",
              xPercent: 50,
              yPercent: 25,
              description: "Archival 19th-century photographs show the chariot once possessed a brick-and-mortar stepped tower dismantled for structural safety.",
              architecturalSecret: "Built in imitation of the Sun Temple chariot of Konark."
            }
          ]
        },
        {
          id: "hampi-musical-pillars",
          title: "The Musical Pillars (Ranga Mandapa)",
          roomOrArea: "Vittala Temple Hall",
          panoramaUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1600&auto=format&fit=crop",
          audioNarrationText: "Each main pillar is surrounded by seven cluster colonnettes sculpted from the same single block of granite. When tapped, the varying densities and hollow resonance produce pure acoustic harmonics.",
          hotspots: [
            {
              id: "spot-acoustic-cluster",
              title: "Saptaswara Acoustic Colonnade",
              xPercent: 55,
              yPercent: 45,
              description: "Varying thickness and interior crystal alignment of granite produce tones corresponding to the 7 notes of Carnatic music.",
              architecturalSecret: "British engineers once sliced two pillars open to detect hollow shafts, finding only solid resonant stone."
            }
          ]
        },
        {
          id: "hampi-virupaksha-pinhole",
          title: "Virupaksha Pinhole Camera Effect",
          roomOrArea: "Inner Sanctum Corridor",
          panoramaUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1600&auto=format&fit=crop",
          audioNarrationText: "In a quiet corridor behind the sanctum of the 160-foot Virupaksha Gopuram, an aperture in the granite wall projects an inverted optical image of the towering gateway onto the wall, demonstrating 15th-century knowledge of camera obscura.",
          hotspots: [
            {
              id: "spot-inverted-shadow",
              title: "Inverted Gopuram Projection",
              xPercent: 52,
              yPercent: 50,
              description: "A natural pinhole optics projection of the 50-meter eastern gopuram.",
              architecturalSecret: "Engineered during the reign of Krishnadevaraya in 1510 CE."
            }
          ]
        }
      ]
    },
    reviews: [
      {
        id: "rev-hampi-1",
        authorName: "Kavya Nanjappa",
        authorLocation: "Mysore, Karnataka",
        rating: 5,
        date: "2026-08-01",
        title: "Walking through an epic open-air stone museum",
        comment: "Hampi will alter how you perceive Indian stonecraft. The stepped tank (Pushkarani) looks like an M.C. Escher drawing in granite, and the music hall at Vittala is sublime.",
        travelerType: "Solo",
        categoryRatings: { architecture: 5, accessibility: 3, photography: 5, guideQuality: 5 },
        helpfulCount: 34,
        visitedSeason: "Winter (December)",
        tipsShared: "Carry an umbrella for shade and at least 2 liters of water. Bicycle rental near Hampi Bazaar is ₹150/day."
      }
    ],
    rating: 4.9,
    reviewCount: 3120,
    tags: ["Karnataka", "UNESCO", "Granite", "Vijayanagara", "Musical Pillars", "Ancient City"]
  },

  {
    id: "chennakeshava-belur",
    name: "Chennakeshava Temple, Belur",
    nativeNames: {
      kn: "ಚನ್ನಕೇಶವ ದೇವಾಲಯ, ಬೇಲೂರು",
      hi: "चेन्नाकेशव मंदिर, बेलूर",
      ta: "சென்னகேசவர் கோயில், பேலூர்",
      ml: "ചെന്നകേശവ ക്ഷേത്രം, ബേലൂർ",
      ur: "چنّاکیشوا مندر، بیلور",
      mr: "चेन्नाकेशव मंदिर, बेलूर",
      bn: "চেন্নাকেশব মন্দির, বেলুর"
    },
    shortDescription: "A pinnacle of Hoysala architecture, renowned for its star-shaped (stellate) platform, lathe-turned soapstone pillars, and celestial Madanika dancers.",
    historicalContext: "Commissioned in 1117 CE by King Vishnuvardhana to commemorate his military victory over the Cholas at Talakad and his conversion from Jainism to Vaishnavism under Saint Ramanujacharya. Built on the banks of the Yagachi River over 103 years by three generations of sculptors headed by master artisan Amarashilpi Jakanachari.",
    dynasty: "Hoysala Empire",
    builder: "King Vishnuvardhana (Master Sculptor: Amarashilpi Jakanachari & Ruwari Mallitamma)",
    century: "12th Century (1117 CE)",
    state: "Karnataka",
    city: "Belur, Hassan District",
    region: "South",
    focusRegion: "Karnataka",
    coordinates: {
      lat: 13.1623,
      lng: 75.8596
    },
    imageUrl: "https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?q=80&w=1600&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=1200&auto=format&fit=crop"
    ],
    architecture: {
      primaryStyle: "Hoysala Stellate",
      structuralEra: "Classical Hoysala Era",
      geometryAndSymmetry: "Built upon a raised stellate (star-shaped) jagati platform with 32 points, maximizing exterior perimeter wall surface to accommodate thousands of relief carvings.",
      materialsUsed: ["Chloritic Schist (Greenish-Grey Soapstone)", "Polished Basalt"],
      acousticFeatures: "The central hollow ceiling dome acts as an acoustic resonator for vocal chanting, while outer lathe-turned pillars have resonant rings.",
      uniqueCarvingsOrJaliWork: "42 intricate bracket figures (Madanikas / Salabhanjikas) displaying dynamic kinetic dance postures, carrying stone jewelry so finely undercut that hairpins and beads rotate freely on stone strands.",
      subterraneanOrWaterEngineering: "Star-shaped basement plinth directs rainwater through stylized gargoyle drains (makara-pranala).",
      preservationStatus: "UNESCO World Heritage Site (Sacred Ensembles of the Hoysalas)",
      unescoWorldHeritage: true,
      architectOrMasterArtisan: "Amarashilpi Jakanachari, Ruwari Mallitamma, and Dasoja of Balligavi"
    },
    practicalTips: {
      bestTimeToVisit: "September to March. Pleasant Hassan weather.",
      recommendedDuration: "2 to 3 hours (ideal combined with nearby Halebidu)",
      timings: "7:30 AM to 7:30 PM",
      closedOn: "Open every day",
      entryFees: {
        domestic: "Free (ASI monument entry free; internal pooja tickets optional)",
        foreign: "Free",
        saarc: "Free",
        cameraFee: "₹30 for stills; no tripods"
      },
      dressCode: "Traditional respectful clothing; shoes must be deposited outside the temple gate.",
      photographyAllowed: true,
      audioGuideAvailable: true,
      wheelchairAccessible: true,
      insiderTravelTip: "Observe the Narasimha pillar inside the hall—it was engineered to rotate on its own axis. Look for the artist signatures carved into the pedestals; Hoysala artists were among the few ancient Indian sculptors to proudly sign their work!"
    },
    virtualTour: {
      title: "Hoysala Soapstone Marvel: Belur Mandapa",
      totalStops: 2,
      scenes: [
        {
          id: "belur-stellate-plinth",
          title: "The Star-Shaped Plinth & Friezes",
          roomOrArea: "Exterior Circumambulatory Path",
          panoramaUrl: "https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?q=80&w=1600&auto=format&fit=crop",
          audioNarrationText: "Walking along the star-shaped platform, observe the horizontal friezes wrapping around the basement. The bottom tier features 650 elephants, each sculpted in a completely unique posture with no two alike.",
          hotspots: [
            {
              id: "spot-elephant-frieze",
              title: "650 Distinct Sculpted Elephants",
              xPercent: 42,
              yPercent: 78,
              description: "Symbolizing physical strength and cosmic stability.",
              architecturalSecret: "Carved from soft chloritic schist which hardened upon atmospheric exposure."
            }
          ]
        },
        {
          id: "belur-lathe-pillar",
          title: "The Mohini Lathe-Turned Pillar",
          roomOrArea: "Navaranga Hall",
          panoramaUrl: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=1600&auto=format&fit=crop",
          audioNarrationText: "Inside the dimly lit hall, the monolithic soapstone pillars exhibit perfectly concentric circular grooves and a mirror-like sheen, produced by water-powered stone lathes in the 12th century.",
          hotspots: [
            {
              id: "spot-lathe-tooling",
              title: "12th-Century Precision Lathe Grooving",
              xPercent: 55,
              yPercent: 40,
              description: "Micro-grooves ground to millimeter precision before modern mechanics.",
              architecturalSecret: "Rotated on heavy timber turning rigs with abrasive quartz slurry."
            }
          ]
        }
      ]
    },
    reviews: [
      {
        id: "rev-belur-1",
        authorName: "Shashidhar Rao",
        authorLocation: "Shimoga, Karnataka",
        rating: 5,
        date: "2026-07-28",
        title: "The Madanika sculptures are beyond human capability",
        comment: "When the guide shined a torch behind the jewelry of the Darpana Sundari dancer, the stone was so thin you could see the light pass through. Unmatched genius.",
        travelerType: "Architecture Student",
        categoryRatings: { architecture: 5, accessibility: 5, photography: 4, guideQuality: 5 },
        helpfulCount: 22,
        visitedSeason: "Monsoon (August)",
        tipsShared: "Hire an ASI certified guide at the counter near the main Gopuram—the stories behind each Madanika bracket are worth every penny."
      }
    ],
    rating: 4.9,
    reviewCount: 1980,
    tags: ["Karnataka", "Hoysala", "UNESCO", "Soapstone", "Intricate Carvings", "Star-Shaped"]
  },

  // ================= KERALA REGION =================
  {
    id: "mattancherry-palace-kochi",
    name: "Mattancherry Dutch Palace, Kochi",
    nativeNames: {
      ml: "മട്ടാഞ്ചേരി കൊട്ടാരം (ഡച്ച് കൊട്ടാരം)",
      hi: "मट्टनचेरी डच महल, कोच्चि",
      kn: "ಮಟ್ಟಂಚೇರಿ ಅರಮನೆ, ಕೊಚ್ಚಿ",
      ta: "மட்டான்சேரி டச்சு அரண்மனை, கொச்சி",
      ur: "مٹن چیری محل، کوچی",
      mr: "मट्टनचेरी डच पॅलेस, कोची",
      bn: "মাট্টানচেরি ডাচ প্যালেস, কোচি"
    },
    shortDescription: "A masterpiece of Kerala indigenous wooden vernacular architecture (Nalukettu) featuring world-renowned Ramayana mural tempera paintings and sloping tiled roofs.",
    historicalContext: "Built around 1555 CE by the Portuguese as a gift and peace offering to King Veera Kerala Varma (1537–65) of Cochin after the Portuguese plundered a nearby temple. Extensively renovated and improved by the Dutch East India Company in 1663, giving it the popular moniker 'Dutch Palace'. Served as the coronation palace of the Maharajas of Cochin.",
    dynasty: "Kingdom of Cochin (Perumpadappu Swaroopam)",
    builder: "Portuguese crown (gift to King Veera Kerala Varma), later renovated by the Dutch",
    century: "16th to 17th Century (1555–1663 CE)",
    state: "Kerala",
    city: "Kochi, Ernakulam District",
    region: "South",
    focusRegion: "Kerala",
    coordinates: {
      lat: 9.9583,
      lng: 76.2594
    },
    imageUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1600&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop"
    ],
    architecture: {
      primaryStyle: "Kerala Indigenous & Vernacular",
      structuralEra: "Late Medieval Kerala Nalukettu Tradition",
      geometryAndSymmetry: "Quadrangular two-storeyed Nalukettu layout with a central open-to-sky sunken courtyard (Nadumuttam) housing a shrine dedicated to Pazhayannur Bhagavathy.",
      materialsUsed: ["Laterite stone plastered with lime and egg white", "Teak and Rosewood joinery", "Terracotta roof tiles", "Organic herbal mural pigments (ochre, indigo, lapis, carbon)"],
      acousticFeatures: "Pitched wooden roofs with slatted timber ventilation eaves naturally buffer heavy monsoon rainfall noise and cool the interior chambers.",
      uniqueCarvingsOrJaliWork: "Over 300 square meters of tempera mural frescoes painted on wet lime plaster depicting the entire Ramayana in 45 dynamic narrative scenes.",
      subterraneanOrWaterEngineering: "The floor of the dining hall is crafted from an ancient Kerala recipe combining burnt coconut shells, egg white, plant extracts, and lime, giving it a black polished marble gloss that stays perpetually cool.",
      preservationStatus: "Protected Centrally by ASI",
      unescoWorldHeritage: false,
      architectOrMasterArtisan: "Traditional Kerala Thachan (Master Carpenters) and Temple Mural Painters"
    },
    practicalTips: {
      bestTimeToVisit: "September to March. Pleasant sea breezes across Kochi harbor.",
      recommendedDuration: "1.5 to 2 hours",
      timings: "9:45 AM to 4:45 PM (Closed on Fridays)",
      closedOn: "Friday",
      entryFees: {
        domestic: "₹5 (free for children under 15)",
        foreign: "₹100",
        saarc: "₹25",
        cameraFee: "Photography strictly prohibited inside mural chambers"
      },
      dressCode: "Casual modest attire; footwear deposited at entrance wooden stairs.",
      photographyAllowed: false,
      audioGuideAvailable: true,
      wheelchairAccessible: false,
      insiderTravelTip: "Combine your visit with Jew Town and the Paradesi Synagogue located just 300 meters away down the historic spice trading lane."
    },
    virtualTour: {
      title: "Royal Nalukettu & Ramayana Mural Gallery",
      totalStops: 2,
      scenes: [
        {
          id: "mattancherry-coronation-hall",
          title: "The Royal Coronation Hall & Carved Ceilings",
          roomOrArea: "Upper Durbar Chamber",
          panoramaUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1600&auto=format&fit=crop",
          audioNarrationText: "Notice the magnificent coffered wooden ceiling adorned with circular floral rosettes carved from seasoned teak, alongside the Dutch-influenced arched fenestrations overlooking the backwaters.",
          hotspots: [
            {
              id: "spot-coffered-ceiling",
              title: "Coffered Teak Lotus Ceiling",
              xPercent: 50,
              yPercent: 18,
              description: "Interlocking mortise and tenon wood joinery constructed without a single iron nail.",
              architecturalSecret: "Treated with herbal oils to repel termites and humidity for over 450 years."
            }
          ]
        },
        {
          id: "mattancherry-mural-chamber",
          title: "The Bedchamber with Ramayana Murals",
          roomOrArea: "Palliyara (Royal Bedroom)",
          panoramaUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop",
          audioNarrationText: "The walls are completely covered with 16th-century murals executed in warm terracotta, saffron, and verdigris hues, rendered in classical Kerala Panchavarna color conventions.",
          hotspots: [
            {
              id: "spot-mural-pigment",
              title: "Herbal Panchavarna Pigments",
              xPercent: 62,
              yPercent: 50,
              description: "Extracted from minerals, red clay, indigo leaves, and resin of the neem tree.",
              architecturalSecret: "Finished with a natural glaze of tender coconut water and neem juice."
            }
          ]
        }
      ]
    },
    reviews: [
      {
        id: "rev-mat-1",
        authorName: "Anjali Menon",
        authorLocation: "Kochi, Kerala",
        rating: 5,
        date: "2026-06-15",
        title: "The mural brushwork is astonishing in person",
        comment: "The precision of the Ramayana depictions on the royal bedroom walls is mesmerizing. You can see individual folds in garments and expressions in eyes painted 450 years ago.",
        travelerType: "History Buff",
        categoryRatings: { architecture: 5, accessibility: 3, photography: 3, guideQuality: 4 },
        helpfulCount: 27,
        visitedSeason: "Monsoon (July)",
        tipsShared: "Take your time in the bedchamber; there is a detailed printed guide in English explaining each scene of the Ramayana cycle."
      }
    ],
    rating: 4.7,
    reviewCount: 1650,
    tags: ["Kerala", "Nalukettu", "Murals", "Wooden Architecture", "Dutch", "Portuguese"]
  },

  {
    id: "bekal-fort-kerala",
    name: "Bekal Fort, Kasaragod",
    nativeNames: {
      ml: "ബേക്കൽ കോട്ട, കാസർഗോഡ്",
      hi: "बेकल किला, कासरगोड",
      kn: "ಬೇಕಲ ಕೋಟೆ, ಕಾಸರಗೋಡು",
      ta: "பேக்கல் கோட்டை, காசர்கோடு",
      ur: "بیکل قلعہ، کاسرگوڈ",
      mr: "बेकल किल्ला, कासारगोड",
      bn: "বেকল দুর্গ, কাসারগড়"
    },
    shortDescription: "The largest and best-preserved coastal fortress in Kerala, jutting dramatically into the Arabian Sea with towering laterite ramparts, sea-defense bastions, and a central observation tower.",
    historicalContext: "Constructed primarily in 1650 CE by Shivappa Nayaka of the Keladi (Ikkeri) Nayakas following earlier fortifications by the Kolathiri Rajas. Unlike inland palaces, Bekal was purely a military defensive fortress. Later held by Hyder Ali, Tipu Sultan (who used it as an important coastal defense base in Malabar), and the British East India Company.",
    dynasty: "Keladi Nayakas / Kingdom of Mysore (Tipu Sultan)",
    builder: "Shivappa Nayaka of Bednore",
    century: "17th Century (1650 CE)",
    state: "Kerala",
    city: "Bekal, Kasaragod District",
    region: "South",
    focusRegion: "Kerala",
    coordinates: {
      lat: 12.3927,
      lng: 75.0335
    },
    imageUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop"
    ],
    architecture: {
      primaryStyle: "Kerala Indigenous & Vernacular",
      structuralEra: "Maritime Coastal Fortification Era",
      geometryAndSymmetry: "Sprawls across 40 coastal acres, shaped like a keyhole pointing outward toward the sea waves.",
      materialsUsed: ["Heavy quarried Laterite stone blocks", "Lime mortar", "Granite threshold slabs"],
      acousticFeatures: "The observation tower's internal stairwell channels sea breezes into an updraft, allowing sentries to hear naval cannon fire from leagues away.",
      uniqueCarvingsOrJaliWork: "Slanted embrasures and peepholes on the seaward walls cut at multiple angles: the top slits for distant naval targets, middle slits for approaching boats, and bottom slits for shore defenders.",
      subterraneanOrWaterEngineering: "Features an extensive underground tunnel system leading to the sea, magazine storage rooms, and a massive rock-cut water stepwell.",
      preservationStatus: "Centrally Protected Monument by ASI",
      unescoWorldHeritage: false,
      architectOrMasterArtisan: "Military Architects of the Keladi Nayakas"
    },
    practicalTips: {
      bestTimeToVisit: "October to March for sunny sea vistas; July-August for dramatic monsoon waves crashing against laterite ramparts.",
      recommendedDuration: "2 to 3 hours",
      timings: "8:00 AM to 6:00 PM",
      closedOn: "Open all days",
      entryFees: {
        domestic: "₹25",
        foreign: "₹300",
        saarc: "₹25",
        cameraFee: "₹25 for video cameras"
      },
      dressCode: "Comfortable wind-resistant clothing; wide-brim hat or umbrella recommended.",
      photographyAllowed: true,
      audioGuideAvailable: false,
      wheelchairAccessible: true,
      insiderTravelTip: "Climb the circular Observation Tower at the fort's highest point for a 360-degree panorama of the Malabar coastline and crashing Arabian Sea surf."
    },
    virtualTour: {
      title: "Arabian Sea Ramparts & Observation Tower",
      totalStops: 2,
      scenes: [
        {
          id: "bekal-observation-tower",
          title: "The Central Observation Bastion",
          roomOrArea: "Highest Rampart Point",
          panoramaUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop",
          audioNarrationText: "Standing atop the circular observation tower, sentries could spot enemy naval vessels over 20 nautical miles away. Notice the spiral ramp engineered for transporting heavy brass cannons to the pinnacle.",
          hotspots: [
            {
              id: "spot-coastal-bastion",
              title: "Keyhole Sea Bastion",
              xPercent: 48,
              yPercent: 65,
              description: "Engineered to withstand direct pounding by monsoonal waves without wall erosion.",
              architecturalSecret: "Laterite stones harden progressively when exposed to maritime salt spray."
            }
          ]
        }
      ]
    },
    reviews: [
      {
        id: "rev-bekal-1",
        authorName: "Rohan Thomas",
        authorLocation: "Calicut, Kerala",
        rating: 5,
        date: "2026-08-05",
        title: "Spectacular ocean sunset and ancient military genius",
        comment: "Walking along the wide laterite walls as waves hit the foundation is unforgettable. Very clean, beautifully manicured lawns by ASI.",
        travelerType: "Family",
        categoryRatings: { architecture: 5, accessibility: 4, photography: 5, guideQuality: 4 },
        helpfulCount: 19,
        visitedSeason: "Winter (January)",
        tipsShared: "Sunset between 5:30 PM and 6:00 PM is breathtaking. Carry water since the walk across the 40-acre fort is long."
      }
    ],
    rating: 4.8,
    reviewCount: 1420,
    tags: ["Kerala", "Fort", "Arabian Sea", "Laterite", "Coastal", "Tipu Sultan"]
  },

  // ================= KASHMIR REGION =================
  {
    id: "martand-sun-temple-kashmir",
    name: "Martand Sun Temple, Anantnag",
    nativeNames: {
      ur: "مارتنڈ سن مندر، اننت ناگ (کشمیر)",
      hi: "मार्तंड सूर्य मंदिर, अनंतनाग (कश्मीर)",
      kn: "ಮಾರ್ತಾಂಡ ಸೂರ್ಯ ದೇವಾಲಯ, ಅನಂತನಾಗ್",
      ml: "മാർത്താണ്ഡ സൂര്യ ക്ഷേത്രം, കശ്മീർ",
      ta: "மார்த்தாண்ட் சூரியன் கோயில், அனந்த்நாக்",
      mr: "मार्तंड सूर्य मंदिर, काश्मीर",
      bn: "মার্তণ্ড সূর্য মন্দির, কাশ্মীর"
    },
    shortDescription: "A monumental ancient stone temple perched on a plateau in the Kashmir Valley, combining Gandhara, Greco-Roman, and indigenous Kashmiri stone architectural styles.",
    historicalContext: "Built in the 8th century CE (725–756 CE) by Emperor Lalitaditya Muktapida of the Karkota dynasty, who ruled an empire stretching from Central Asia to the plains of Bengal. Dedicated to Surya (the Sun God Martand), this hilltop complex symbolized royal power and celestial radiance overlooking the entire Kashmir Valley with Pir Panjal snow peaks as its backdrop.",
    dynasty: "Karkota Dynasty",
    builder: "Emperor Lalitaditya Muktapida",
    century: "8th Century (725–756 CE)",
    state: "Jammu and Kashmir",
    city: "Anantnag (Mattan)",
    region: "North",
    focusRegion: "Kashmir",
    coordinates: {
      lat: 33.7465,
      lng: 75.2035
    },
    imageUrl: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1600&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1598598795009-f80c5072e665?q=80&w=1200&auto=format&fit=crop"
    ],
    architecture: {
      primaryStyle: "Kashmiri Classical & Wooden",
      structuralEra: "Classical Kashmiri Imperial Period",
      geometryAndSymmetry: "Central rectangular courtyard (220 x 142 feet) flanked by an expansive peristyle colonnade of 84 fluted pillars, reminiscent of classical Greek and Roman fora.",
      materialsUsed: ["Massive grey limestone blocks (megaliths)", "Lime mortar with iron dowels"],
      acousticFeatures: "The central shrine was oriented precisely east-west so the rising equinox sunbeams illuminated the deity's crown through the hypaethral colonnade.",
      uniqueCarvingsOrJaliWork: "Trefoil (three-lobed) arches framed within triangular pediments, housing carved depictions of Surya, Ganga, Yamuna, and Vishnu.",
      subterraneanOrWaterEngineering: "Constructed on a high karewa plateau with channels feeding ritual ablution pools at the temple forecourt.",
      preservationStatus: "Protected Monument of National Importance by ASI",
      unescoWorldHeritage: false,
      architectOrMasterArtisan: "Karkota Court Architects & Gandhara Mason Guilds"
    },
    practicalTips: {
      bestTimeToVisit: "April to October (Spring tulip bloom to autumn golden Chinar leaves).",
      recommendedDuration: "2 to 2.5 hours",
      timings: "6:00 AM to 7:00 PM",
      closedOn: "Open all days",
      entryFees: {
        domestic: "₹25",
        foreign: "₹300",
        saarc: "₹25",
        cameraFee: "Free"
      },
      dressCode: "Warm layered clothing recommended even in summer mornings.",
      photographyAllowed: true,
      audioGuideAvailable: false,
      wheelchairAccessible: false,
      insiderTravelTip: "Located just 9 km from Anantnag town. Visit during late afternoon golden hour when the sun illuminates the fluted columns against the snow-capped Pir Panjal range."
    },
    virtualTour: {
      title: "Lalitaditya's Colonnade & Solar Sanctuary",
      totalStops: 2,
      scenes: [
        {
          id: "martand-peristyle-courtyard",
          title: "The 84 Fluted Colonnade",
          roomOrArea: "Peristyle Court",
          panoramaUrl: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1600&auto=format&fit=crop",
          audioNarrationText: "As you step into the peristyle court, you are surrounded by 84 fluted pillars with classical Doric-style capitals. This rare synthesis of Gandharan Buddhist and Greco-Roman architecture in the heart of Kashmir is unique on the Indian subcontinent.",
          hotspots: [
            {
              id: "spot-trefoil-arch",
              title: "Kashmiri Trefoil Arch & Pediment",
              xPercent: 50,
              yPercent: 38,
              description: "Triangular pediment crowning a three-lobed arch.",
              architecturalSecret: "Direct structural transmission from ancient Hellenistic Bactria through the Silk Road."
            }
          ]
        }
      ]
    },
    reviews: [
      {
        id: "rev-martand-1",
        authorName: "Farooq Mir",
        authorLocation: "Srinagar, Kashmir",
        rating: 5,
        date: "2026-06-25",
        title: "A majestic ghost of ancient Kashmir",
        comment: "Standing amidst these colossal stone columns on the Anantnag plateau with snow mountains in the background sends shivers down your spine. The architectural fusion of Greek and Kashmiri styles is mesmerizing.",
        travelerType: "History Buff",
        categoryRatings: { architecture: 5, accessibility: 3, photography: 5, guideQuality: 4 },
        helpfulCount: 31,
        visitedSeason: "Autumn (October)",
        tipsShared: "Combine this with a visit to the Martand springs nearby. The light between 4:30 PM and 6:00 PM is a photographer's dream."
      }
    ],
    rating: 4.8,
    reviewCount: 940,
    tags: ["Kashmir", "Ancient", "Stone Temple", "Greek Influence", "Lalitaditya", "Sun Temple"]
  },

  {
    id: "shalimar-bagh-kashmir",
    name: "Shalimar Bagh & Mughal Gardens, Srinagar",
    nativeNames: {
      ur: "شالیمار باغ، سرینگر (کشمیر)",
      hi: "शालीमार बाग, श्रीनगर (कश्मीर)",
      kn: "ಶಾಲಿಮಾರ್ ಬಾಗ್, ಶ್ರೀನಗರ",
      ml: "ശാലിമാർ ബാഗ്, ശ്രീനഗർ",
      ta: "ஷாலிமார் பாக், ஸ்ரீநகர்",
      mr: "शालीमार बाग, श्रीनगर",
      bn: "শালিমার বাগ, শ্রীনগর"
    },
    shortDescription: "The crown of Kashmiri Mughal water gardens, featuring terraced water cascades (chhadars), black stone baradaris, and century-old Chinar tree avenues overlooking Dal Lake.",
    historicalContext: "Built in 1619 CE by Mughal Emperor Jahangir for his beloved wife Empress Nur Jahan ('Light of the World'). Called 'Farah Baksh' ('The Delightful'), it was expanded in 1630 by Zafar Khan, governor of Kashmir under Shah Jahan. It represents the highest achievement of Mughal hydraulic terrace engineering utilizing Himalayan meltwater.",
    dynasty: "Mughal Empire",
    builder: "Emperor Jahangir (expanded by Shah Jahan)",
    century: "17th Century (1619 CE)",
    state: "Jammu and Kashmir",
    city: "Srinagar",
    region: "North",
    focusRegion: "Kashmir",
    coordinates: {
      lat: 34.1495,
      lng: 74.8732
    },
    imageUrl: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1600&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=1200&auto=format&fit=crop"
    ],
    architecture: {
      primaryStyle: "Mughal & Indo-Islamic",
      structuralEra: "Mughal Landscape Architecture",
      geometryAndSymmetry: "Four-tiered terraced layout stepping upward toward the Zabarwan hills, bisected by a central canal (Shah Nahar) with 410 synchronized gravity fountains.",
      materialsUsed: ["Black marble pavilion pillars (Baradari)", "Kashmiri deodar and walnut woodwork", "Terracotta water conduits", "Chinar stone pavers"],
      acousticFeatures: "The water falls over carved stone chutes (chhadars) with textured ripples, creating a soothing natural white noise that masked private political conversations.",
      uniqueCarvingsOrJaliWork: "Chini-khanas (small arched niches behind the waterfalls) where oil lamps were placed at night, creating an illusion of glowing water curtains.",
      subterraneanOrWaterEngineering: "Gravity-driven aqueduct siphoning high-velocity glacial water from the Harwan stream without any mechanical pumps.",
      preservationStatus: "Protected State Heritage (Tentative UNESCO World Heritage List)",
      unescoWorldHeritage: false,
      architectOrMasterArtisan: "Mughal Landscape Architects & Kashmiri Hydrologists"
    },
    practicalTips: {
      bestTimeToVisit: "April-May for blooming roses and lush green Chinar trees, or October-November for fiery crimson Chinar autumn leaves.",
      recommendedDuration: "2 to 3 hours",
      timings: "9:00 AM to 7:00 PM",
      closedOn: "Open all days",
      entryFees: {
        domestic: "₹24",
        foreign: "₹100",
        saarc: "₹50",
        cameraFee: "Free for stills"
      },
      dressCode: "Casual comfortable walking shoes for gravel and stone paths.",
      photographyAllowed: true,
      audioGuideAvailable: false,
      wheelchairAccessible: true,
      insiderTravelTip: "Visit around 4:30 PM when the fountains are running and the evening light filters through the giant Chinar canopy. Combine with a Shikara ride to Nishat Bagh."
    },
    virtualTour: {
      title: "Jahangir's Terraces of Delight & Black Pavilion",
      totalStops: 2,
      scenes: [
        {
          id: "shalimar-diwan-i-khas",
          title: "The Black Marble Baradari (Diwan-i-Khas)",
          roomOrArea: "Upper Royal Terrace",
          panoramaUrl: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1600&auto=format&fit=crop",
          audioNarrationText: "Here on the highest fourth terrace, reserved exclusively for the royal zenana, stands the Black Marble Baradari. It is encircled by fountains and cascades, cooled naturally by the Himalayan mountain breeze.",
          hotspots: [
            {
              id: "spot-black-baradari",
              title: "Black Marble Colonnade",
              xPercent: 52,
              yPercent: 48,
              description: "Transported from the quarries of the Deccan on royal order of Shah Jahan.",
              architecturalSecret: "Carved with Persian inscriptions celebrating the paradise garden."
            }
          ]
        }
      ]
    },
    reviews: [
      {
        id: "rev-shalimar-1",
        authorName: "Tariq Bhatt",
        authorLocation: "Srinagar, Kashmir",
        rating: 5,
        date: "2026-07-04",
        title: "The sound of water falling over the chhadars is eternal peace",
        comment: "Mughal engineering at its peak. The way the water drops over carved stone niches makes you understand why Emperor Jahangir said 'If there is paradise on earth, it is this, it is this, it is this.'",
        travelerType: "Solo",
        categoryRatings: { architecture: 5, accessibility: 5, photography: 5, guideQuality: 4 },
        helpfulCount: 38,
        visitedSeason: "Autumn (November)",
        tipsShared: "Autumn season turns the Chinar leaves into bright red and gold embers. Don't forget your camera!"
      }
    ],
    rating: 4.8,
    reviewCount: 2150,
    tags: ["Kashmir", "Mughal Gardens", "Water Engineering", "Chinar Trees", "Dal Lake", "Jahangir"]
  },

  // ================= OTHER ICONIC INDIAN SITES =================
  {
    id: "konark-sun-temple-odisha",
    name: "Sun Temple, Konark",
    nativeNames: {
      hi: "कोणार्क सूर्य मंदिर, ओडिशा",
      kn: "ಕೋಣಾರ್ಕ ಸೂರ್ಯ ದೇವಾಲಯ",
      ml: "കൊണാർക്ക് സൂര്യ ക്ഷേത്രം",
      ta: "கொனார்க் சூரியன் கோயில்",
      ur: "کونارک سن مندر",
      mr: "कोणार्क सूर्य मंदिर",
      bn: "কোণার্ক সূর্য মন্দির"
    },
    shortDescription: "A 13th-century Kalinga architectural triumph conceived as a monumental 24-wheeled stone chariot pulled by seven horses, carrying Surya across the heavens.",
    historicalContext: "Built around 1250 CE by King Narasimhadeva I of the Eastern Ganga Dynasty along the Chandrabhaga River estuary. Over 1,200 master craftsmen laboured for 12 years under chief architect Bisu Maharana. The temple was engineered with colossal iron girders and a magnetic lodestone capstone.",
    dynasty: "Eastern Ganga Dynasty",
    builder: "King Narasimhadeva I (Chief Artisan: Bisu Maharana & son Dharmapada)",
    century: "13th Century (1250 CE)",
    state: "Odisha",
    city: "Konark, Puri District",
    region: "East",
    focusRegion: "Other",
    coordinates: {
      lat: 19.8876,
      lng: 86.0945
    },
    imageUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1600&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop"
    ],
    architecture: {
      primaryStyle: "Kalinga (Nagara)",
      structuralEra: "High Classical Kalinga Period",
      geometryAndSymmetry: "24 exquisitely sculpted stone wheels (representing the 24 hours or fortnights of the year) that double as accurate astronomical sundials.",
      materialsUsed: ["Khondalite stone", "Chlorite stone (for deities)", "Iron tie beams and magnetic lodestones"],
      acousticFeatures: "The Jagamohana (assembly hall) possesses stepped pyramidal ceilings that channeled musical hymns.",
      uniqueCarvingsOrJaliWork: "Spoke shadows cast upon the wheel carvings tell the exact minute of the day based on solar inclination.",
      subterraneanOrWaterEngineering: "Engineered on coastal sand dunes using massive interlinked iron beams to stabilize shifting terrain.",
      preservationStatus: "Protected Monument by ASI",
      unescoWorldHeritage: true,
      architectOrMasterArtisan: "Bisu Maharana"
    },
    practicalTips: {
      bestTimeToVisit: "November to February. Pleasant coastal weather; attend Konark Dance Festival in December.",
      recommendedDuration: "2 to 3 hours",
      timings: "6:00 AM to 8:00 PM",
      closedOn: "Open all days",
      entryFees: {
        domestic: "₹40",
        foreign: "₹600",
        saarc: "₹40",
        cameraFee: "Free for stills"
      },
      dressCode: "Comfortable shoes for walking on sand and stone platforms.",
      photographyAllowed: true,
      audioGuideAvailable: true,
      wheelchairAccessible: true,
      insiderTravelTip: "Ask an ASI guide to demonstrate the sundial using a stick or finger on the spoke bead to calculate the current local time!"
    },
    virtualTour: {
      title: "The Celestial Chariot of Konark",
      totalStops: 2,
      scenes: [
        {
          id: "konark-sundial-wheel",
          title: "The Astronomical Sundial Wheel",
          roomOrArea: "Lower Plinth",
          panoramaUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1600&auto=format&fit=crop",
          audioNarrationText: "This 9.9-foot stone wheel is not merely ornamental; it is an astronomical instrument. The 8 major spokes divide the 24 hours into 8 praharas (3-hour periods), while the beads on the rim calculate minutes.",
          hotspots: [
            {
              id: "spot-sundial-spoke",
              title: "Sundial Spoke Shadows",
              xPercent: 48,
              yPercent: 55,
              description: "Shadow cast counterclockwise indicates exact solar time.",
              architecturalSecret: "Calibrated to Konark's specific latitude in 1250 CE."
            }
          ]
        }
      ]
    },
    reviews: [
      {
        id: "rev-konark-1",
        authorName: "Subhashree Patnaik",
        authorLocation: "Bhubaneswar, Odisha",
        rating: 5,
        date: "2026-07-19",
        title: "Astronomy and stonecraft at its supreme peak",
        comment: "Watching the guide calculate the exact time to within two minutes using just a finger shadow on the wheel spoke blew our minds. A wonder of human ingenuity.",
        travelerType: "Architecture Student",
        categoryRatings: { architecture: 5, accessibility: 4, photography: 5, guideQuality: 5 },
        helpfulCount: 25,
        visitedSeason: "Winter (December)",
        tipsShared: "Stay for the evening light and sound show narrated by Kabir Bedi."
      }
    ],
    rating: 4.9,
    reviewCount: 2890,
    tags: ["Odisha", "UNESCO", "Sun Temple", "Kalinga", "Chariot", "Astronomy"]
  },

  {
    id: "meenakshi-amman-madurai",
    name: "Meenakshi Amman Temple, Madurai",
    nativeNames: {
      ta: "மீனாட்சி அம்மன் கோயில், மதுரை",
      hi: "मीनाक्षी अम्मन मंदिर, मदुरै",
      kn: "ಮೀನಾಕ್ಷಿ ಅಮ್ಮನ್ ದೇವಾಲಯ, ಮಧುರೈ",
      ml: "മീനാക്ഷി അമ്മൻ ക്ഷേത്രം, മധുരൈ",
      ur: "میناکشی مندر، مدورائی",
      mr: "मीनाक्षी मंदिर, मदुराई",
      bn: "মীনাক্ষী আম্মান মন্দির, মাদুরাই"
    },
    shortDescription: "The zenith of mature Dravidian temple architecture, featuring 14 polychrome soaring Gopurams, the Golden Lotus Tank, and the Hall of Thousand Pillars.",
    historicalContext: "Originally founded in the 6th century BCE by Kulasekara Pandyan, the current grand structure was expanded by Thirumalai Nayak (1623–1655 CE) of the Nayak Dynasty. It is a living city-temple centered on goddess Meenakshi (an avatar of Parvati) and Sundareswarar (Shiva).",
    dynasty: "Pandyan & Madurai Nayak Dynasty",
    builder: "Kulasekara Pandyan (modern structure by King Thirumalai Nayak)",
    century: "6th Century BCE to 17th Century CE",
    state: "Tamil Nadu",
    city: "Madurai",
    region: "South",
    focusRegion: "Other",
    coordinates: {
      lat: 9.9195,
      lng: 78.1193
    },
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1600&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1600100397608-f010e42e5bf4?q=80&w=1200&auto=format&fit=crop"
    ],
    architecture: {
      primaryStyle: "Dravidian",
      structuralEra: "High Nayak Dravidian Period",
      geometryAndSymmetry: "Concentric rectangular enclosures (prakarams) based on the Vastu Purusha Mandala, centered on the sanctum and surrounded by four cardinal gopurams reaching up to 170 feet.",
      materialsUsed: ["Granite masonry", "Stucco sculptures with mineral pigments", "Gold leaf (Vimana roof)"],
      acousticFeatures: "The musical pillars at the northern corridor emit metallic ringing tones when struck with palm or wooden mallet.",
      uniqueCarvingsOrJaliWork: "Over 4,000 brightly painted stucco sculptures of celestial beings, deities, and demons adorning each multi-tiered Gopuram.",
      subterraneanOrWaterEngineering: "Potramarai Kulam (Golden Lotus Tank) engineered with subterranean natural spring drainage.",
      preservationStatus: "State Protected Living Heritage",
      unescoWorldHeritage: false,
      architectOrMasterArtisan: "Ariyanatha Mudaliar (Prime Minister & Master Architect of Nayak Dynasty)"
    },
    practicalTips: {
      bestTimeToVisit: "October to March. Early morning (6:00 AM) or evening (7:00 PM) for the night ceremony.",
      recommendedDuration: "3 to 4 hours",
      timings: "5:00 AM to 12:30 PM, and 4:00 PM to 10:00 PM",
      closedOn: "Open every day of the year",
      entryFees: {
        domestic: "Free (Special darshan ₹100, Thousand Pillar Hall ₹5)",
        foreign: "Free (Thousand Pillar Hall ₹50)",
        saarc: "Free",
        cameraFee: "Mobile phones strictly prohibited inside temple sanctum"
      },
      dressCode: "Strict traditional attire: dhotis or trousers for men (no shorts), sarees or salwar suits for women.",
      photographyAllowed: false,
      audioGuideAvailable: true,
      wheelchairAccessible: true,
      insiderTravelTip: "Mobile phones must be deposited in digital lockers at the security gate. Attend the 9:00 PM night procession where Lord Sundareswarar is ceremonially carried in a silver palanquin to Meenakshi's shrine."
    },
    virtualTour: {
      title: "Ayiram Kaal Mandapam & Polychrome Gopurams",
      totalStops: 2,
      scenes: [
        {
          id: "meenakshi-1000-pillars",
          title: "The Hall of Thousand Pillars (Ayiram Kaal Mandapam)",
          roomOrArea: "Monumental Hall",
          panoramaUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1600&auto=format&fit=crop",
          audioNarrationText: "Built in 1569 by Ariyanatha Mudaliar, this hall contains 985 exquisitely carved granite pillars arranged in an optical grid so that whichever angle you look, the rows align in perfect straight perspective lines.",
          hotspots: [
            {
              id: "spot-yali-pillar",
              title: "Carved Yali Pillar",
              xPercent: 55,
              yPercent: 42,
              description: "Mythical beast combining parts of lion, elephant, and dragon.",
              architecturalSecret: "Carved from monolithic granite with hollow mouth openings."
            }
          ]
        }
      ]
    },
    reviews: [
      {
        id: "rev-meenakshi-1",
        authorName: "Ramanathan Chettiar",
        authorLocation: "Madurai, Tamil Nadu",
        rating: 5,
        date: "2026-08-11",
        title: "The living spiritual heart of Tamil culture",
        comment: "The scale of the southern gopuram against the night sky is dizzying. In the Thousand Pillar Hall, the mathematical grid alignment is pure genius.",
        travelerType: "Family",
        categoryRatings: { architecture: 5, accessibility: 4, photography: 3, guideQuality: 5 },
        helpfulCount: 45,
        visitedSeason: "Winter (January)",
        tipsShared: "Deposit your phone at the cloakroom before entering. Buy the ₹50 ticket for the art museum inside the 1000 Pillar hall."
      }
    ],
    rating: 4.9,
    reviewCount: 4250,
    tags: ["Tamil Nadu", "Dravidian", "Gopuram", "1000 Pillars", "Living Temple", "Nayak"]
  },

  {
    id: "kailasa-temple-ellora",
    name: "Kailasa Temple (Cave 16), Ellora",
    nativeNames: {
      mr: "कैलास मंदिर (लेणी १६), वेरुळ",
      hi: "कैलाश मंदिर, एलोरा",
      kn: "ಕೈಲಾಸ ದೇವಾಲಯ, ಎಲ್ಲೋರಾ",
      ml: "കൈലാസ ക്ഷേത്രം, എല്ലോറ",
      ta: "கைலாசநாதர் கோவில், எல்லோரா",
      ur: "کیلاش مندر، ایلورا",
      bn: "কৈলাস মন্দির, ইলোরা"
    },
    shortDescription: "The largest monolithic rock-cut monument in the world, carved from top to bottom out of a single basalt cliff face, removing over 200,000 tonnes of volcanic rock without scaffolding.",
    historicalContext: "Commissioned in the 8th century CE (c. 756–773 CE) by Rashtrakuta King Krishna I. Master sculptors excavated from the top summit of the cliff downward using only hammers, chisels, and iron picks, ensuring that any single stone-carving error could never be corrected or replaced.",
    dynasty: "Rashtrakuta Dynasty",
    builder: "King Krishna I",
    century: "8th Century (756–773 CE)",
    state: "Maharashtra",
    city: "Chhatrapati Sambhajinagar (Aurangabad)",
    region: "West",
    focusRegion: "Other",
    coordinates: {
      lat: 20.0238,
      lng: 75.1794
    },
    imageUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1598598795009-f80c5072e665?q=80&w=1200&auto=format&fit=crop"
    ],
    architecture: {
      primaryStyle: "Rock-Cut & Monolithic",
      structuralEra: "Rashtrakuta Monolithic Era",
      geometryAndSymmetry: "A full Dravidian temple complex (courtyard, gopuram, Nandi mandapa, assembly hall, shikhara reaching 32 meters) carved in situ from solid vertical rock.",
      materialsUsed: ["Solid Deccan Trap Basalt (Volcanic bedrock)", "Traces of lime plaster with Rashtrakuta murals"],
      acousticFeatures: "The solid rock foundation eliminates external sound vibrations, creating absolute acoustic stillness in the central Garbhagriha.",
      uniqueCarvingsOrJaliWork: "Ravana shaking Mount Kailash, life-sized monolithic stone elephants, and flying Gandharvas rendered in high relief.",
      subterraneanOrWaterEngineering: "Rainwater channels carved along the upper cliff perimeter diverted torrents away from the excavated sunken courtyard.",
      preservationStatus: "Protected Monument by ASI",
      unescoWorldHeritage: true,
      architectOrMasterArtisan: "Guild of Rashtrakuta Master Shilpins"
    },
    practicalTips: {
      bestTimeToVisit: "July to February (Monsoon turns the surrounding basalt ravines and waterfalls lush green).",
      recommendedDuration: "3 to 4 hours (Cave 16 alone takes at least 1.5 hours)",
      timings: "Sunrise to Sunset (Closed on Tuesdays)",
      closedOn: "Tuesday",
      entryFees: {
        domestic: "₹40",
        foreign: "₹600",
        saarc: "₹40",
        cameraFee: "Free for handheld"
      },
      dressCode: "Comfortable hiking footwear; uneven stone steps.",
      photographyAllowed: true,
      audioGuideAvailable: true,
      wheelchairAccessible: false,
      insiderTravelTip: "Climb the rocky ridge path behind Cave 16 to look directly down onto the temple roof from above—it is the only way to truly grasp how it was hollowed from the summit."
    },
    virtualTour: {
      title: "Top-Down Monolithic Excavation Walkthrough",
      totalStops: 2,
      scenes: [
        {
          id: "kailasa-courtyard",
          title: "The Basalt Courtyard & Elephants",
          roomOrArea: "Lower Excavated Court",
          panoramaUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600&auto=format&fit=crop",
          audioNarrationText: "Look upward at the 100-foot vertical cliff walls enclosing you. Every pillar, elephant, gallery, and roof finial you see was not assembled—it was uncovered by carving away 200,000 tons of rock.",
          hotspots: [
            {
              id: "spot-ravana-shaking",
              title: "Ravana Shaking Mount Kailash",
              xPercent: 45,
              yPercent: 60,
              description: "Considered one of the greatest relief sculptures in global art history.",
              architecturalSecret: "Depth of carving exceeds 5 feet into solid basalt."
            }
          ]
        }
      ]
    },
    reviews: [
      {
        id: "rev-kailasa-1",
        authorName: "Vikramaditya Kulkarni",
        authorLocation: "Mumbai, Maharashtra",
        rating: 5,
        date: "2026-07-22",
        title: "Defies logic and human comprehension",
        comment: "How ancient Indian sculptors carved this from the summit down without computer models or mistakes is mind-boggling. The greatest monument in India.",
        travelerType: "Architecture Student",
        categoryRatings: { architecture: 5, accessibility: 3, photography: 5, guideQuality: 5 },
        helpfulCount: 52,
        visitedSeason: "Monsoon (August)",
        tipsShared: "Go to the cliff top trail to see the view from above. Arrive early in the morning when the sun lights up the main shikhara."
      }
    ],
    rating: 5.0,
    reviewCount: 3950,
    tags: ["Maharashtra", "UNESCO", "Rock-Cut", "Basalt", "Rashtrakuta", "Kailasa"]
  }
];
