import { JournalEntries } from './components/JournalEntries'
import { JournalWriter } from './components/JournalWriter'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app')
  if (!container) return

  new JournalEntries(
    container.querySelector('#journal-entries') || container.appendChild(document.createElement('div'))
  )

  new JournalWriter(
    container.querySelector('#journal-writer') || container.appendChild(document.createElement('div'))
  )
})
