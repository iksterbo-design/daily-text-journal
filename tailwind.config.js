/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,html}'],
  darkMode: 'class',
  theme: { extend: { colors: { daily_text_journal: { light: '##f59e0b', dark: '##fbbf24' } } } }
};
