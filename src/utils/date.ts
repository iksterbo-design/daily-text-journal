// Date formatting utility
export function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export function getTodayString(): string {
  const now = new Date()
  return now.toISOString().split('T')[0]
}
