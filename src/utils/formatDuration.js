/** Human-readable duration from milliseconds. */
export function formatDurationMs(ms) {
  const safe = Math.max(0, Math.round(ms))
  if (safe < 60000) {
    return `${(safe / 1000).toFixed(1)}s`
  }
  const m = Math.floor(safe / 60000)
  const s = Math.floor((safe % 60000) / 1000)
  return `${m}m ${s}s`
}
