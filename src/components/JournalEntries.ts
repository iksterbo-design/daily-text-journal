import { entries, getMoodStatistics, getHabitStats, getSortedEntries } from '../data/journal'

export class JournalEntries {
  private container: HTMLElement

  constructor(container: HTMLElement) {
    this.container = container
    this.render()
  }

  private render() {
    const sorted = getSortedEntries()
    const moods = getMoodStatistics()
    const habits = getHabitStats()

    this.container.innerHTML = `
      <div class="journal-header">
        <h1 class="journal-title">Daily Text Journal</h1>
        <p class="journal-subtitle">A place for reflection and growth</p>
      </div>

      <div class="mood-grid">
        ${Object.entries(moods).map(([mood, count]) => {
          const label = mood.charAt(0).toUpperCase() + mood.slice(1)
          const colors: { [key: string]: string } = {
            happy: '#22c55e',
            sad: '#60a5fa',
            anxious: '#f59e0b',
            peaceful: '#8b5cf6',
            angry: '#ef4444',
            grateful: '#a855f7'
          }
          return `
            <div class="mood-card" style="border-top: 4px solid ${colors[mood] || '#6366f1'}">
              <span class="mood-emoji">${this.getMoodEmoji(mood)}</span>
              <span class="mood-label">${label}</span>
              <span class="mood-count">${count}</span>
            </div>
          `
        }).join('')}
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-value">${getSortedEntries().length}</span>
          <span class="stat-label">Total Entries</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">${Object.values(habits).reduce((a, b) => a + b, 0)}</span>
          <span class="stat-label">Habit Streaks</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">${new Date().toLocaleDateString()}</span>
          <span class="stat-label">Today</span>
        </div>
      </div>

      <div class="entries-list">
        ${sorted.map(e => `
          <div class="entry-card" data-id="${e.id}">
            <div class="entry-header">
              <span class="entry-date">${new Date(e.date).toLocaleDateString()}</span>
              <span class="entry-mood" style="color: ${this.getMoodColor(e.mood)}">${this.getMoodEmoji(e.mood)} ${this.moodToLabel(e.mood)}</span>
              <span class="entry-energy">Energy: ${e.energy}</span>
            </div>
            <h3 class="entry-title">${e.title}</h3>
            <p class="entry-body">${e.body}</p>
            ${e.habitsCompleted.length > 0 ? `
              <div class="entry-habits">
                <h4>Habits</h4>
                <ul>${e.habitsCompleted.map(h => `<li>✓ ${h}</li>`).join('')}</ul>
              </div>
            ` : ''}
            <div class="entry-actions">
              <button class="entry-edit-btn" data-id="${e.id}">Edit</button>
              <button class="entry-delete-btn" data-id="${e.id}">Archive</button>
            </div>
          </div>
        `).join('')}
      </div>
    `

    // Edit button handlers
    this.container.querySelectorAll('.entry-edit-btn').forEach((btn: Element) => {
      const id = btn.getAttribute('data-id')
      if (id) {
        const entry = entries.find(e => e.id === id)
        if (entry) {
          alert(`Editing entry: ${entry.title}\nDate: ${entry.date}`)
        }
      }
    })

    // Delete button handlers
    this.container.querySelectorAll('.entry-delete-btn').forEach((btn: Element) => {
      const id = btn.getAttribute('data-id')
      if (id) {
        const entry = entries.find(e => e.id === id)
        if (entry) {
          if (confirm(`Archive entry: ${entry.title}?`)) {
            alert(`Entry archived: ${entry.title}`)
          }
        }
      }
    })
  }

  private getMoodEmoji(mood: string): string {
    const emojis: { [key: string]: string } = {
      happy: '😊',
      sad: '😢',
      anxious: '😰',
      peaceful: '☮️',
      angry: '😠',
      grateful: '🙏'
    }
    return emojis[mood] || '📝'
  }

  private getMoodColor(mood: string): string {
    const colors: { [key: string]: string } = {
      happy: '#22c55e',
      sad: '#60a5fa',
      anxious: '#f59e0b',
      peaceful: '#8b5cf6',
      angry: '#ef4444',
      grateful: '#a855f7'
    }
    return colors[mood] || '#6366f1'
  }

  private moodToLabel(mood: string): string {
    const labels: { [key: string]: string } = {
      happy: 'Happy',
      sad: 'Sad',
      anxious: 'Anxious',
      peaceful: 'Peaceful',
      angry: 'Angry',
      grateful: 'Grateful'
    }
    return labels[mood] || mood
  }
}
