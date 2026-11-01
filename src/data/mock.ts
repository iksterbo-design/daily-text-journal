export interface Entry {
  id: number;
  date: string;
  title: string;
  mood: number;
  verse: string;
  body: string;
}

export const Entry: Entry[] = [
  { id: 0, date: "2026-11-01", title: "Steadfast", mood: 4, verse: "Jeremiah 29:11", body: "Felt God's direction clearly today." },
  { id: 1, date: "2026-10-31", title: "Grace again", mood: 5, verse: "Ephesians 2:8", body: "Amazing grace, how sweet the sound." },
  { id: 2, date: "2026-10-30", title: "Quiet morning", mood: 3, verse: "Psalm 46:10", body: "Stillness in the early light." },
  { id: 3, date: "2026-10-28", title: "Morning praise", mood: 5, verse: "Psalm 150:6", body: "Worship lifted my heart." },
  { id: 4, date: "2026-10-25", title: "Faith tension", mood: 2, verse: "Isaiah 41:10", body: "Anxiety holding on tight." }
];
