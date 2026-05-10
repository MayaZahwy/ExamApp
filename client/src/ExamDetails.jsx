function ExamDetails({ exam, onBack }) {
  return (
    <section className="container py-4 text-start">
      <button className="btn btn-outline-secondary mb-4" onClick={onBack} type="button">
        Back
      </button>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
            <div>
              <h1 className="h3 mb-1">{exam.title}</h1>
              <p className="text-muted mb-0">Exam ID: {exam.id}</p>
            </div>
            <span className="badge bg-primary">
              {exam.durationMinutes} minutes
            </span>
          </div>

          <h2 className="h5 mb-3">Questions</h2>
          <ul className="list-group list-group-flush">
            {exam.questions.map((question) => (
              <li className="list-group-item px-0" key={question.id}>
                <div className="fw-semibold">{question.prompt}</div>
                <div className="text-muted">{question.points} points</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ExamDetails
