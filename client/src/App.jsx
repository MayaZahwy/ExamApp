import { useState } from 'react'
import './App.css'
import StudentPortal from './StudentPortal'
import TeacherDashboard from './TeacherDashboard'

function App() {
  const [role, setRole] = useState('teacher')
  const isTeacher = role === 'teacher'

  return (
    <main className="app-shell bg-light min-vh-100">
      <nav className="navbar navbar-light bg-white border-bottom">
        <div className="container">
          <span className="navbar-brand mb-0 h1">E-Test System</span>
          <div className="btn-group" role="group" aria-label="Role login">
            <button
              className={`btn ${isTeacher ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setRole('teacher')}
              type="button"
            >
              Teacher
            </button>
            <button
              className={`btn ${!isTeacher ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setRole('student')}
              type="button"
            >
              Student
            </button>
          </div>
        </div>
      </nav>

      {isTeacher ? <TeacherDashboard /> : <StudentPortal />}
    </main>
  )
}

export default App
