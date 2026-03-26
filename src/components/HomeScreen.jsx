import { SUBJECTS } from '../data/quizData'

export default function HomeScreen({ onSelectSubject }) {
  return (
    <div className="screen home-screen">
      <header className="screen-header">
        <p className="eyebrow">Practice quiz</p>
        <h1>Choose a subject</h1>
        <p className="subhead">
          Pick a topic, set how many questions you want, and test yourself.
        </p>
      </header>
      <ul className="subject-grid">
        {SUBJECTS.map((s) => (
          <li key={s.id}>
            <button
              type="button"
              className="card subject-card"
              onClick={() => onSelectSubject(s.id)}
            >
              <span className="subject-name">{s.name}</span>
              <span className="subject-meta">
                {s.questions.length} questions
              </span>
              <span className="subject-desc">{s.description}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
