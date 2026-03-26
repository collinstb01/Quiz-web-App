/** Fisher–Yates shuffle (mutates copy). */
export function shuffle(array) {
  const a = [...array]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function pickRandomQuestions(allQuestions, count) {
  const n = Math.min(Math.max(1, count), allQuestions.length)
  return shuffle(allQuestions).slice(0, n)
}
