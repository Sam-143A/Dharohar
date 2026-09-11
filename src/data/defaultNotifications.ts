import { HeritageNotification } from '../types';

export const defaultNotifications: HeritageNotification[] = [
  {
    id: "notif-1",
    title: "ASI Heritage Week 2026 Announced!",
    message: "Archaeological Survey of India announces 100% free entry to all 3,690 centrally protected monuments on World Heritage Day.",
    type: "alert",
    timestamp: "Just now",
    isRead: false
  },
  {
    id: "notif-2",
    title: "Taj Mahotsav Agra Special Pass",
    message: "Get 25% off Agra heritage cultural passes and evening classical sitar recitals near the Eastern Gate.",
    type: "discount",
    placeName: "Taj Mahal",
    region: "Agra, Uttar Pradesh",
    discountCode: "TAJ25HERITAGE",
    discountAmount: "25% OFF",
    timestamp: "2 hours ago",
    isRead: false
  },
  {
    id: "notif-3",
    title: "Hampi Utsav Night Illumination",
    message: "Special 3D projection mapping on the Stone Chariot and live Carnatic musical performances this weekend.",
    type: "event",
    placeName: "Group of Monuments at Hampi",
    region: "Karnataka",
    discountCode: "HAMPIFREE",
    discountAmount: "Complimentary Pass",
    timestamp: "Yesterday",
    isRead: false
  },
  {
    id: "notif-4",
    title: "Kochi Spice & Heritage Walk",
    message: "30% off guided architectural walk through Dutch Palace and Jewish Synagogue in Mattancherry.",
    type: "discount",
    placeName: "Mattancherry Dutch Palace",
    region: "Kochi, Kerala",
    discountCode: "SPICETRAIL30",
    discountAmount: "30% OFF",
    timestamp: "3 days ago",
    isRead: true
  },
  {
    id: "notif-5",
    title: "Autumn Chinar Festival in Kashmir",
    message: "Special heritage guided tour of Shalimar and Nishat Mughal Gardens celebrating the golden Chinar canopy.",
    type: "event",
    placeName: "Shalimar Bagh",
    region: "Srinagar, Kashmir",
    discountCode: "CHINARGOLD",
    discountAmount: "Free Audio Guide",
    timestamp: "5 days ago",
    isRead: true
  }
];
