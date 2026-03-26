import { formatDurationMs } from '../utils/formatDuration.js'

export default function ResultsScreen({
  subjectName,
  score,
  total,
  wrongQuestions,
  totalAnswerTimeMs = 0,
  onRetryFailed,
  onNewQuiz,
}) {
  const hasFailed = wrongQuestions.length > 0

  return (
    <div className="screen results-screen">
      <header className="screen-header">
        <p className="eyebrow">Quiz complete</p>
        <h1 className="results-score">
          You got {score}/{total}
        </h1>
        <p className="subhead">
          {score === total
            ? 'Perfect score on this round.'
            : hasFailed
              ? 'Review the questions you missed below.'
              : 'Great effort — try another subject anytime.'}
        </p>
        {total > 0 && totalAnswerTimeMs > 0 && (
          <p className="results-time subtle">
            Total time answering questions:{' '}
            <strong>{formatDurationMs(totalAnswerTimeMs)}</strong>
          </p>
        )}
      </header>

      {hasFailed && (
        <section className="wrong-section" aria-labelledby="wrong-heading">
          <h2 id="wrong-heading" className="section-title">
            Questions you got wrong
          </h2>
          <ul className="wrong-list">
            {wrongQuestions.map((q, i) => (
              <li key={`${q.question}-${i}`} className="wrong-item">
                <p className="wrong-q">{q.question}</p>
                <p className="wrong-a">
                  Correct answer: <strong>{q.answer}</strong>
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="results-actions">
        {hasFailed && (
          <button
            type="button"
            className="btn primary"
            onClick={onRetryFailed}
          >
            Retry failed questions
          </button>
        )}
        <button
          type="button"
          className={`btn ${hasFailed ? 'secondary' : 'primary'}`}
          onClick={onNewQuiz}
        >
          Start new quiz
        </button>
      </div>
      <p className="results-footnote subtle">
        Subject: {subjectName}
      </p>
    </div>
  )
}
