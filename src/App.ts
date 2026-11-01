import * as data from './data/mock';
import { AppShell, Card, Badge, Stat } from './components/ui';
const entries = data.Entry as any[];

export function App(): HTMLElement {
  const root = document.createElement('div');
  root.className = 'tw-flex tw-flex-col tw-gap-4';
  const today = new Date().toISOString().slice(0, 10);
  const moodColors = ['tw-bg-slate-400', 'tw-bg-amber-400', 'tw-bg-orange-400', 'tw-bg-yellow-400', 'tw-bg-emerald-400'];
  const moodPills = [1, 2, 3, 4, 5].map((m) =>
    '<button class="tw-h-3 tw-w-3 tw-rounded-full tw-shadow-sm tw-border-2 tw-border-white tw-transition hover:scale-110 ' + moodColors[m - 1] + '"></button>').join('');
  const verse = entries.find((e: any) => e.date === today) || entries[0];
  const entryList = entries.map((e: any) =>
    '<Card title="' + e.title + '" desc="' + e.verse + '">' +
      '<div class="tw-text-xs tw-text-slate-500 tw-mb-2">' + e.date + '</div>' +
      '<p class="tw-text-sm tw-text-slate-700 dark:tw-text-white tw-mb-3">' + e.body + '</p>' +
      '<div class="tw-flex tw-items-center tw-gap-1 tw-text-xs tw-text-slate-500">' +
        '<span class="tw-h-2.5 tw-w-2.5 tw-rounded-full ' + moodColors[e.mood - 1] + '"></span>' + e.mood + '/5' +
      '</div>' +
    '</Card>').join('');
  root.innerHTML = `
    <div id="clock" class="tw-text-xs tw-text-right tw-text-slate-400"></div>
    <div class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-4">
      <div class="lg:tw-span-2">
        <Card title="Text Journal" desc="Daily reflections & verses">
          <div class="tw-text-right tw-text-sm tw-font-medium tw-text-slate-700 tw-mb-3 tw-truncate">Today: <span class="tw-font-semibold tw-text-slate-900 dark:tw-text-white">${today}</span></div>
          <div class="tw-flex tw-flex-wrap tw-gap-2 tw-mb-4">${moodPills}</div>
          <Card title="Verse of the Day">
            <p class="tw-text-sm tw-font-medium tw-text-slate-800 dark:tw-text-white tw-mb-1">${verse.verse}</p>
            <p class="tw-text-xs tw-text-slate-500">— Day read from your journal</p>
          </Card>
          <Card title="Previous Entries" desc="Past reflections">
            <div class="tw-max-h-60 tw-overflow-y-auto tw-text-sm tw-space-y-2">${entryList}</div>
          </Card>
          <button class="tw-w-full tw-bg-violet-500 tw-text-white tw-rounded-md tw-px-3 tw-py-1.5 tw-text-sm">+ New Entry</button>
        </Card>
      </div>
    </div>
  `;
  setInterval(() => { const d = new Date(); document.getElementById('clock')!.textContent = d.toLocaleTimeString(); }, 1000);
  return root;
}
