(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`e-001`,date:`2026-10-27`,mood:`peaceful`,energy:`high`,title:`A fresh start`,body:`Began the day with quiet prayer and a clear mind. The morning felt peaceful and full of possibility. I felt grateful for the new week ahead.`,entries:[`Prayed for guidance`,`Read a chapter of Scripture`],habitsCompleted:[`Bible reading`,`Morning prayer`],favoritePassage:`Philippians 4:6-7`,lessonsLearned:[`Starting the day with prayer sets a peaceful tone`],prayerRequests:[`For peace in the family`],timestamp:Date.now()},{id:`e-002`,date:`2026-10-28`,mood:`grateful`,energy:`medium`,title:`Grateful heart`,body:`Today was filled with simple pleasures. A warm meal, a kind word from a friend, and time with family. I am learning to see God in the small things.`,entries:[`Thanked someone`,`Liturgical reading`],habitsCompleted:[`Bible reading`,`Family devotion`],favoritePassage:`1 Thessalonians 5:18`,lessonsLearned:[`Gratitude changes our perspective`],prayerRequests:[`Health for a relative`],timestamp:Date.now()-864e5},{id:`e-003`,date:`2026-10-29`,mood:`happy`,energy:`high`,title:`Joy in the basics`,body:`Simple meals, quiet walks, and time with my children brought unexpected joy. The heavens declare the glory of God in the ordinary.`,entries:[`Observed nature`,`Family prayer`],habitsCompleted:[`Bible reading`,`Morning prayer`],favoritePassage:`Psalm 19:1-4`,lessonsLearned:[`Joy is found in the basics of life`],prayerRequests:[``],timestamp:Date.now()-1728e5},{id:`e-004`,date:`2026-10-30`,mood:`peaceful`,energy:`medium`,title:`Quiet confidence`,body:`The week has been busy, but I am learning to trust God with the outcomes. Peaceful moments in the midst of activity.`,entries:[`Reflected on Scripture`,`Family devotion`],habitsCompleted:[`Bible reading`],favoritePassage:`Isaiah 26:3`,lessonsLearned:[`Peace comes from trust, not control`],prayerRequests:[`Peace during busy times`],timestamp:Date.now()-2592e5},{id:`e-005`,date:`2026-10-31`,mood:`grateful`,energy:`low`,title:`Rest and restoration`,body:`A quieter day with rest. I learned that being still is a discipline. God meets us in the quiet spaces.`,entries:[`Prayed`,`Liturgy of the hours`],habitsCompleted:[`Bible reading`,`Rest`],favoritePassage:`Psalm 46:10`,lessonsLearned:[`Rest is faithful, not failure`],prayerRequests:[``],timestamp:Date.now()-3456e5},{id:`e-006`,date:`2026-11-01`,mood:`peaceful`,energy:`medium`,title:`Faith in uncertainty`,body:`Facing unknowns with trust. The week ahead brings new challenges, but I am anchored in Christ.`,entries:[`Prayed for direction`,`Family devotion`],habitsCompleted:[`Bible reading`],favoritePassage:`Jeremiah 29:11`,lessonsLearned:[`Faith is trusting God with the future`],prayerRequests:[`Discerning God's will`],timestamp:Date.now()-432e6},{id:`e-007`,date:`2026-11-02`,mood:`happy`,energy:`high`,title:`Joy in community`,body:`Spending time with the congregation brought joy. We were reminded of the power of shared worship and mutual encouragement.`,entries:[`Community worship`,`Fellowship`],habitsCompleted:[`Bible reading`,`Family devotion`],favoritePassage:`Hebrews 10:24-25`,lessonsLearned:[`Community strengthens faith`],prayerRequests:[``],timestamp:Date.now()-5184e5}];function t(){let t={};for(let n of e)t[n.mood]=(t[n.mood]||0)+1;return t}function n(){let t={};for(let n of e)for(let e of n.habitsCompleted)t[e]=(t[e]||0)+1;return t}function r(){return[...e].sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime())}var i=class{container;constructor(e){this.container=e,this.render()}render(){let i=r(),a=t(),o=n();this.container.innerHTML=`
      <div class="journal-header">
        <h1 class="journal-title">Daily Text Journal</h1>
        <p class="journal-subtitle">A place for reflection and growth</p>
      </div>

      <div class="mood-grid">
        ${Object.entries(a).map(([e,t])=>{let n=e.charAt(0).toUpperCase()+e.slice(1);return`
            <div class="mood-card" style="border-top: 4px solid ${{happy:`#22c55e`,sad:`#60a5fa`,anxious:`#f59e0b`,peaceful:`#8b5cf6`,angry:`#ef4444`,grateful:`#a855f7`}[e]||`#6366f1`}">
              <span class="mood-emoji">${this.getMoodEmoji(e)}</span>
              <span class="mood-label">${n}</span>
              <span class="mood-count">${t}</span>
            </div>
          `}).join(``)}
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-value">${r().length}</span>
          <span class="stat-label">Total Entries</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">${Object.values(o).reduce((e,t)=>e+t,0)}</span>
          <span class="stat-label">Habit Streaks</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">${new Date().toLocaleDateString()}</span>
          <span class="stat-label">Today</span>
        </div>
      </div>

      <div class="entries-list">
        ${i.map(e=>`
          <div class="entry-card" data-id="${e.id}">
            <div class="entry-header">
              <span class="entry-date">${new Date(e.date).toLocaleDateString()}</span>
              <span class="entry-mood" style="color: ${this.getMoodColor(e.mood)}">${this.getMoodEmoji(e.mood)} ${this.moodToLabel(e.mood)}</span>
              <span class="entry-energy">Energy: ${e.energy}</span>
            </div>
            <h3 class="entry-title">${e.title}</h3>
            <p class="entry-body">${e.body}</p>
            ${e.habitsCompleted.length>0?`
              <div class="entry-habits">
                <h4>Habits</h4>
                <ul>${e.habitsCompleted.map(e=>`<li>✓ ${e}</li>`).join(``)}</ul>
              </div>
            `:``}
            <div class="entry-actions">
              <button class="entry-edit-btn" data-id="${e.id}">Edit</button>
              <button class="entry-delete-btn" data-id="${e.id}">Archive</button>
            </div>
          </div>
        `).join(``)}
      </div>
    `,this.container.querySelectorAll(`.entry-edit-btn`).forEach(t=>{let n=t.getAttribute(`data-id`);if(n){let t=e.find(e=>e.id===n);t&&alert(`Editing entry: ${t.title}\nDate: ${t.date}`)}}),this.container.querySelectorAll(`.entry-delete-btn`).forEach(t=>{let n=t.getAttribute(`data-id`);if(n){let t=e.find(e=>e.id===n);t&&confirm(`Archive entry: ${t.title}?`)&&alert(`Entry archived: ${t.title}`)}})}getMoodEmoji(e){return{happy:`😊`,sad:`😢`,anxious:`😰`,peaceful:`☮️`,angry:`😠`,grateful:`🙏`}[e]||`📝`}getMoodColor(e){return{happy:`#22c55e`,sad:`#60a5fa`,anxious:`#f59e0b`,peaceful:`#8b5cf6`,angry:`#ef4444`,grateful:`#a855f7`}[e]||`#6366f1`}moodToLabel(e){return{happy:`Happy`,sad:`Sad`,anxious:`Anxious`,peaceful:`Peaceful`,angry:`Angry`,grateful:`Grateful`}[e]||e}},a=class{container;constructor(e){this.container=e,this.render()}render(){let e=this.getToday();this.container.innerHTML=`
      <div class="journal-writer">
        <h2 class="writer-title">New Entry</h2>
        <p class="writer-hint">What is on your heart today?</p>
        <div class="writer-form">
          <div class="field">
            <label for="entry-date">Date</label>
            <input type="date" id="entry-date" value="${e}" />
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
    `,this.container.querySelector(`.save-btn`)?.addEventListener(`click`,()=>{alert(`Entry saved! (Demo)`)})}getToday(){return new Date().toISOString().split(`T`)[0]}};document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`app`);e&&(new i(e.querySelector(`#journal-entries`)||e.appendChild(document.createElement(`div`))),new a(e.querySelector(`#journal-writer`)||e.appendChild(document.createElement(`div`))))});