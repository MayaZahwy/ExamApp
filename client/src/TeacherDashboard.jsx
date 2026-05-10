import { useEffect, useState } from 'react'
import ExamDetails from './ExamDetails'
import { getAllExams, getStudentScores } from './api/examService'

function TeacherDashboard() {
  const [exams, setExams] = useState([])
  const [scores, setScores] = useState([])
  const [selectedExam, setSelectedExam] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadDashboardData() {
      try {
        setIsLoading(true)
        const [examData, scoreData] = await Promise.all([
          getAllExams(),
          getStudentScores(),
        ])

        setExams(examData)
        setScores(scoreData)
      } catch {
        setError('Unable to load teacher dashboard data.')
      } finally {
        setIsLoading(false)
      }
    }

    loadDashboardData()
  }, [])

  if (selectedExam) {
    return (
      <ExamDetails exam={selectedExam} onBack={() => setSelectedExam(null)} />
    )
  }

  return (
    <section className="container py-4 text-start">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h3 mb-1">Teacher Dashboard</h1>
          <p className="text-muted mb-0">Manage exams and review submissions.</p>
        </div>
        <span className="badge bg-primary">{exams.length} Exams</span>
      </div>

      {isLoading && <div className="alert alert-info">Loading exams...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row g-3">
        {exams.map((exam) => (
          <div className="col-md-6 col-xl-4" key={exam.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between gap-3">
                  <h2 className="h5 card-title mb-1">{exam.title}</h2>
                  <span className="badge bg-secondary align-self-start">
                    {exam.id}
                  </span>
                </div>
                <p className="card-text text-muted mb-3">
                  {exam.durationMinutes} minutes
                </p>
                <ul className="list-group list-group-flush">
                  {exam.questions.map((question) => (
                    <li className="list-group-item px-0" key={question.id}>
                      <span className="fw-semibold">{question.points} pts</span>{' '}
                      {question.prompt}
                    </li>
                  ))}
                </ul>
                <button
                  className="btn btn-primary mt-3"
                  onClick={() => setSelectedExam(exam)}
                  type="button"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card mt-4 shadow-sm">
        <div className="card-header bg-white">
          <h2 className="h5 mb-0">Recent Student Scores</h2>
        </div>
        <div className="table-responsive">
          <table className="table table-striped mb-0">
            <thead>
              <tr>
                <th scope="col">Student</th>
                <th scope="col">Exam</th>
                <th scope="col">Score</th>
                <th scope="col">Submitted</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score) => (
                <tr key={score.id}>
                  <td>{score.studentName}</td>
                  <td>{score.examId}</td>
                  <td>{score.score}%</td>
                  <td>{new Date(score.submittedAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default TeacherDashboard
