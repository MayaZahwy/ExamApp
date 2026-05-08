import { useState } from 'react'
import { getExamById } from './api/examService'

function StudentPortal() {
  const [examId, setExamId] = useState('')
  const [exam, setExam] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleStartExam(event) {
    event.preventDefault()
    setError('')
    setExam(null)

    if (!examId.trim()) {
      setError('Please enter an exam ID.')
      return
    }

    try {
      setIsLoading(true)
      const examData = await getExamById(examId)
      setExam(examData)
    } catch {
      setError('No exam was found for that ID.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="container py-4 text-start">
      <div className="card shadow-sm">
        <div className="card-body">
          <h1 className="h3 card-title">Student Portal</h1>
          <p className="text-muted">
            Enter an exam ID to fetch the mock exam record.
          </p>

          <form className="row g-2 align-items-end" onSubmit={handleStartExam}>
            <div className="col-md-8">
              <label className="form-label" htmlFor="examId">
                Enter Exam ID to Start
              </label>
              <input
                className="form-control"
                id="examId"
                onChange={(event) => setExamId(event.target.value)}
                placeholder="Example: JS-101"
                type="text"
                value={examId}
              />
            </div>
            <div className="col-md-4 d-grid">
              <button
                className="btn btn-primary"
                disabled={isLoading}
                type="submit"
              >
                {isLoading ? 'Fetching...' : 'Start Exam'}
              </button>
            </div>
          </form>

          {error && <div className="alert alert-danger mt-3">{error}</div>}
        </div>
      </div>

      {exam && (
        <div className="card mt-4 shadow-sm">
          <div className="card-header bg-white">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="h5 mb-0">{exam.title}</h2>
              <span className="badge bg-secondary">{exam.id}</span>
            </div>
          </div>
          <div className="card-body">
            <p className="text-muted">
              Duration: {exam.durationMinutes} minutes | Questions:{' '}
              {exam.questions.length}
            </p>
            <ol className="list-group list-group-numbered">
              {exam.questions.map((question) => (
                <li className="list-group-item" key={question.id}>
                  <div className="fw-semibold">{question.prompt}</div>
                  {question.options && (
                    <div className="text-muted small">
                      Options: {question.options.join(', ')}
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </section>
  )
}

export default StudentPortal
