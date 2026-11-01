export class JournalWriter {
  private container: HTMLElement

  constructor(container: HTMLElement) {
    this.container = container
    this.render()
  }

  private render() {
    const today = this.getToday()

    this.container.innerHTML = `
      <div class="journal-writer">
        <h2 class="writer-title">New Entry</h2>
        <p class="writer-hint">What is on your heart today?</p>
        <div class="writer-form">
          <div class="field">
            <label for="entry-date">Date</label>
            <input type="date" id="entry-date" value="${today}" />
          </div>
          <div class="field">
            <label for="entry-title">Title</label>
            <input type="text" id="entry-title" placeholder="e.g. A quiet Sunday morning" />
          </div>
          <div class="field">
            <label for="entry-mood">Mood</label>
            <select id="entry-mood">
              <option value="peaceful">☮️ Peaceful</option>
              <option value="happy">😊 Happy</option>
              <option value="grateful">🙏 Grateful</option>
              <option value="anxious">😰 Anxious</option>
              <option value="sad">😢 Sad</option>
              <option value="angry">😠 Angry</option>
            </select>
          </div>
          <div class="field">
            <label for="entry-body">Reflection</label>
            <textarea id="entry-body" rows="8" placeholder="Write about your day, thoughts, prayers, and what you\'re learning..."></textarea>
          </div>
          <div class="field">
            <label for="entry-habits">Habits completed</label>
            <div class="habit-tags">
              <span class="tag">📖 Bible reading</span>
              <span class="tag">🕯️ Morning prayer</span>
              <span class="tag">📝 Scripture study</span>
              <span class="tag">🤝 Ministry meeting</span>
              <span class="tag">🕊️ Rest</span>
            </div>
          </div>
          <div class="field">
            <label for="entry-passage">Favorite passage</label>
            <input type="text" id="entry-passage" placeholder="e.g. Philippians 4:6-7" />
          </div>
          <div class="field">
            <label for="entry-requests">Prayer requests</label>
            <textarea id="entry-requests" rows="3" placeholder="Share your prayer requests..."></textarea>
          </div>
          <div class="field">
            <label for="entry-lessons">Lessons learned</label>
            <input type="text" id="entry-lessons" placeholder="Key lessons from today" />
          </div>
          <button class="save-btn">Save Entry</button>
        </div>
      </div>
    `

    // Save button
    const saveBtn = this.container.querySelector('.save-btn')
    saveBtn?.addEventListener('click', () => {
      alert('Entry saved! (Demo)')
    })
  }

  private getToday(): string {
    const now = new Date()
    return now.toISOString().split('T')[0]
  }
}
