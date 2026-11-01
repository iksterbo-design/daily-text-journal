// Journal entry data and patterns for the daily text journal
// Stores entries with mood tracking, habits, and reflections.

export interface JournalEntry {
  id: string
  date: string
  mood: 'happy' | 'sad' | 'anxious' | 'peaceful' | 'angry' | 'grateful'
  energy: 'low' | 'medium' | 'high'
  title: string
  body: string
  entries: string[]
  habitsCompleted: string[]
  favoritePassage: string
  lessonsLearned: string[]
  prayerRequests: string[]
  timestamp: number
}

export interface MoodStatistics {
  [key: string]: number
}

// Demo journal entries (one per day for a week)
export const entries: JournalEntry[] = [
  {
    id: 'e-001',
    date: '2026-10-27',
    mood: 'peaceful',
    energy: 'high',
    title: 'A fresh start',
    body: 'Began the day with quiet prayer and a clear mind. The morning felt peaceful and full of possibility. I felt grateful for the new week ahead.',
    entries: ['Prayed for guidance', 'Read a chapter of Scripture'],
    habitsCompleted: ['Bible reading', 'Morning prayer'],
    favoritePassage: 'Philippians 4:6-7',
    lessonsLearned: ['Starting the day with prayer sets a peaceful tone'],
    prayerRequests: ['For peace in the family'],
    timestamp: Date.now()
  },
  {
    id: 'e-002',
    date: '2026-10-28',
    mood: 'grateful',
    energy: 'medium',
    title: 'Grateful heart',
    body: 'Today was filled with simple pleasures. A warm meal, a kind word from a friend, and time with family. I am learning to see God in the small things.',
    entries: ['Thanked someone', 'Liturgical reading'],
    habitsCompleted: ['Bible reading', 'Family devotion'],
    favoritePassage: '1 Thessalonians 5:18',
    lessonsLearned: ['Gratitude changes our perspective'],
    prayerRequests: ['Health for a relative'],
    timestamp: Date.now() - 86400000
  },
  {
    id: 'e-003',
    date: '2026-10-29',
    mood: 'happy',
    energy: 'high',
    title: 'Joy in the basics',
    body: 'Simple meals, quiet walks, and time with my children brought unexpected joy. The heavens declare the glory of God in the ordinary.',
    entries: ['Observed nature', 'Family prayer'],
    habitsCompleted: ['Bible reading', 'Morning prayer'],
    favoritePassage: 'Psalm 19:1-4',
    lessonsLearned: ['Joy is found in the basics of life'],
    prayerRequests: [''],
    timestamp: Date.now() - 2 * 86400000
  },
  {
    id: 'e-004',
    date: '2026-10-30',
    mood: 'peaceful',
    energy: 'medium',
    title: 'Quiet confidence',
    body: 'The week has been busy, but I am learning to trust God with the outcomes. Peaceful moments in the midst of activity.',
    entries: ['Reflected on Scripture', 'Family devotion'],
    habitsCompleted: ['Bible reading'],
    favoritePassage: 'Isaiah 26:3',
    lessonsLearned: ['Peace comes from trust, not control'],
    prayerRequests: ['Peace during busy times'],
    timestamp: Date.now() - 3 * 86400000
  },
  {
    id: 'e-005',
    date: '2026-10-31',
    mood: 'grateful',
    energy: 'low',
    title: 'Rest and restoration',
    body: 'A quieter day with rest. I learned that being still is a discipline. God meets us in the quiet spaces.',
    entries: ['Prayed', 'Liturgy of the hours'],
    habitsCompleted: ['Bible reading', 'Rest'],
    favoritePassage: 'Psalm 46:10',
    lessonsLearned: ['Rest is faithful, not failure'],
    prayerRequests: [''],
    timestamp: Date.now() - 4 * 86400000
  },
  {
    id: 'e-006',
    date: '2026-11-01',
    mood: 'peaceful',
    energy: 'medium',
    title: 'Faith in uncertainty',
    body: 'Facing unknowns with trust. The week ahead brings new challenges, but I am anchored in Christ.',
    entries: ['Prayed for direction', 'Family devotion'],
    habitsCompleted: ['Bible reading'],
    favoritePassage: 'Jeremiah 29:11',
    lessonsLearned: ['Faith is trusting God with the future'],
    prayerRequests: ['Discerning God\'s will'],
    timestamp: Date.now() - 5 * 86400000
  },
  {
    id: 'e-007',
    date: '2026-11-02',
    mood: 'happy',
    energy: 'high',
    title: 'Joy in community',
    body: 'Spending time with the congregation brought joy. We were reminded of the power of shared worship and mutual encouragement.',
    entries: ['Community worship', 'Fellowship'],
    habitsCompleted: ['Bible reading', 'Family devotion'],
    favoritePassage: 'Hebrews 10:24-25',
    lessonsLearned: ['Community strengthens faith'],
    prayerRequests: [''],
    timestamp: Date.now() - 6 * 86400000
  },
]

// Mood statistics computed from entries
export function getMoodStatistics(): MoodStatistics {
  const stats: MoodStatistics = {}
  for (const entry of entries) {
    stats[entry.mood] = (stats[entry.mood] || 0) + 1
  }
  return stats
}

// Habit completion tracking
export function getHabitStats(): { [key: string]: number } {
  const stats: { [key: string]: number } = {}
  for (const entry of entries) {
    for (const habit of entry.habitsCompleted) {
      stats[habit] = (stats[habit] || 0) + 1
    }
  }
  return stats
}

// Get entries sorted by date (newest first)
export function getSortedEntries(): JournalEntry[] {
  return [...entries].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Get today's date string
export function getTodayString(): string {
  const now = new Date()
  return now.toISOString().split('T')[0]
}
