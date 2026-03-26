export default function QuizScreen({
  subjectName,
  total,
  index,
  question,
  feedback,
  onSelectOption,
}) {
  const current = index + 1
  const pct = total > 0 ? (current / total) * 100 : 0

  return (
    <div className="screen quiz-screen">
      <div className="quiz-top">
        <p className="quiz-subject">{subjectName}</p>
        <div className="progress-wrap" aria-hidden="true">
          <div className="progress-bar" style={{ width: `${pct}%` }} />
        </div>
        <p className="quiz-counter">
          Question {current} of {total}
        </p>
      </div>

      <article
        className={`quiz-card ${feedback ? 'quiz-card--locked' : ''}`}
        key={index}
      >
        <h2 className="quiz-question">{question.question}</h2>
        <ul className="options-list">
          {question.options.map((opt) => {
            let state = ''
            if (feedback) {
              if (opt === question.answer) state = 'correct'
              else if (opt === feedback.selected) state = 'wrong'
            }
            return (
              <li key={opt}>
                <button
                  type="button"
                  className={`option-btn ${state}`}
                  disabled={!!feedback}
                  onClick={() => onSelectOption(opt)}
                >
                  {opt}
                </button>
              </li>
            )
          })}
        </ul>

        {feedback && (
          <output
            className={`feedback-banner ${feedback.correct ? 'success' : 'fail'}`}
            aria-live="polite"
          >
            {feedback.correct ? (
              <p>Correct — nice work.</p>
            ) : (
              <>
                <p>
                  Not quite. The correct answer is{' '}
                  <strong>{feedback.correctAnswer}</strong>.
                </p>
                <p className="note-callout">Note this answer!</p>
              </>
            )}
          </output>
        )}
      </article>
    </div>
  )
}
