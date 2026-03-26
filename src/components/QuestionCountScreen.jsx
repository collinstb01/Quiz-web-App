import { useState } from 'react'

export default function QuestionCountScreen({
  subjectName,
  maxQuestions,
  onBack,
  onStart,
}) {
  const [value, setValue] = useState(String(Math.min(5, maxQuestions)))

  const parsed = Number.parseInt(value, 10)
  const valid =
    Number.isFinite(parsed) && parsed >= 1 && parsed <= maxQuestions

  function submit(e) {
    e.preventDefault()
    if (!valid) return
    onStart(parsed)
  }

  return (
    <div className="screen count-screen">
      <button type="button" className="link-back" onClick={onBack}>
        ← Back to subjects
      </button>
      <header className="screen-header">
        <p className="eyebrow">{subjectName}</p>
        <h1>How many questions?</h1>
        <p className="subhead">
          You can choose between 1 and {maxQuestions} questions for this
          subject.
        </p>
      </header>
      <form className="count-form" onSubmit={submit}>
        <label className="count-label" htmlFor="q-count">
          Number of questions
        </label>
        <input
          id="q-count"
          className="count-input"
          type="number"
          min={1}
          max={maxQuestions}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          inputMode="numeric"
        />
        {!valid && value !== '' && (
          <p className="field-hint error" role="alert">
            Enter a whole number from 1 to {maxQuestions}.
          </p>
        )}
        <button type="submit" className="btn primary" disabled={!valid}>
          Start quiz
        </button>
      </form>
    </div>
  )
}
