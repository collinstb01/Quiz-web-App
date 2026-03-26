import { useCallback, useEffect, useRef, useState } from 'react'
import HomeScreen from './components/HomeScreen.jsx'
import QuestionCountScreen from './components/QuestionCountScreen.jsx'
import QuizScreen from './components/QuizScreen.jsx'
import ResultsScreen from './components/ResultsScreen.jsx'
import { getSubjectById } from './data/quizData.js'
import { appendFailedQuestion } from './utils/failedStorage.js'
import { pickRandomQuestions, shuffle } from './utils/shuffle.js'
import './App.css'

const CORRECT_DELAY_MS = 950
const WRONG_DELAY_MS = 2400

export default function App() {
  const [screen, setScreen] = useState('home')
  const [subjectId, setSubjectId] = useState(null)
  const [quizQuestions, setQuizQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [wrongQuestions, setWrongQuestions] = useState([])
  const [feedback, setFeedback] = useState(null)

  const timeoutRef = useRef(null)

  const subject = subjectId ? getSubjectById(subjectId) : null

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  useEffect(() => () => clearTimer(), [clearTimer])

  const goHome = useCallback(() => {
    clearTimer()
    setScreen('home')
    setSubjectId(null)
    setQuizQuestions([])
    setCurrentIndex(0)
    setScore(0)
    setWrongQuestions([])
    setFeedback(null)
  }, [clearTimer])

  const handleSelectSubject = useCallback((id) => {
    setSubjectId(id)
    setScreen('count')
  }, [])

  const handleBackFromCount = useCallback(() => {
    setScreen('home')
    setSubjectId(null)
  }, [])

  const startQuizWithQuestions = useCallback(
    (questions) => {
      clearTimer()
      setQuizQuestions(questions)
      setCurrentIndex(0)
      setScore(0)
      setWrongQuestions([])
      setFeedback(null)
      setScreen('quiz')
    },
    [clearTimer],
  )

  const handleStartWithCount = useCallback(
    (count) => {
      if (!subject) return
      const picked = pickRandomQuestions(subject.questions, count)
      startQuizWithQuestions(picked)
    },
    [subject, startQuizWithQuestions],
  )

  const handleSelectOption = useCallback(
    (option) => {
      if (feedback || !subject) return
      const q = quizQuestions[currentIndex]
      if (!q) return

      const correct = option === q.answer
      setFeedback({
        correct,
        selected: option,
        correctAnswer: q.answer,
      })

      if (correct) {
        setScore((s) => s + 1)
      } else {
        setWrongQuestions((w) => [...w, q])
        appendFailedQuestion({
          subjectId: subject.id,
          question: q.question,
          options: q.options,
          answer: q.answer,
        })
      }

      const delay = correct ? CORRECT_DELAY_MS : WRONG_DELAY_MS
      clearTimer()
      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null
        setFeedback(null)
        setCurrentIndex((i) => {
          const next = i + 1
          if (next >= quizQuestions.length) {
            setScreen('results')
            return i
          }
          return next
        })
      }, delay)
    },
    [
      feedback,
      subject,
      quizQuestions,
      currentIndex,
      clearTimer,
    ],
  )

  const handleRetryFailed = useCallback(() => {
    if (wrongQuestions.length === 0) return
    startQuizWithQuestions(shuffle(wrongQuestions))
  }, [wrongQuestions, startQuizWithQuestions])

  if (screen === 'home') {
    return (
      <div className="app-shell">
        <HomeScreen onSelectSubject={handleSelectSubject} />
      </div>
    )
  }

  if (screen === 'count' && subject) {
    return (
      <div className="app-shell">
        <QuestionCountScreen
          subjectName={subject.name}
          maxQuestions={subject.questions.length}
          onBack={handleBackFromCount}
          onStart={handleStartWithCount}
        />
      </div>
    )
  }

  if (screen === 'quiz' && subject && quizQuestions.length > 0) {
    const q = quizQuestions[currentIndex]
    if (!q) {
      return (
        <div className="app-shell">
          <p className="subtle">Loading…</p>
        </div>
      )
    }
    return (
      <div className="app-shell">
        <QuizScreen
          subjectName={subject.name}
          total={quizQuestions.length}
          index={currentIndex}
          question={q}
          feedback={feedback}
          onSelectOption={handleSelectOption}
        />
      </div>
    )
  }

  if (screen === 'results' && subject && quizQuestions.length > 0) {
    return (
      <div className="app-shell">
        <ResultsScreen
          subjectName={subject.name}
          score={score}
          total={quizQuestions.length}
          wrongQuestions={wrongQuestions}
          onRetryFailed={handleRetryFailed}
          onNewQuiz={goHome}
        />
      </div>
    )
  }

  return (
    <div className="app-shell">
      <HomeScreen onSelectSubject={handleSelectSubject} />
    </div>
  )
}
