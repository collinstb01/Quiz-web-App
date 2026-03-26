const STORAGE_KEY = 'quizapp_failed_questions'

/**
 * Appends a failed question record to localStorage (array of JSON objects).
 * Each entry: { subjectId, question, options, answer }
 */
export function appendFailedQuestion(entry) {
  try {
    const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    if (!Array.isArray(prev)) return
    prev.push({
      subjectId: entry.subjectId,
      question: entry.question,
      options: entry.options,
      answer: entry.answer,
      recordedAt: Date.now(),
    })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prev))
  } catch {
    // ignore quota / parse errors
  }
}

export function readFailedQuestions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}
