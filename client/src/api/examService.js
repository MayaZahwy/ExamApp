import { exams, studentScores } from './mockDb'

const NETWORK_DELAY = 500

function simulateRequest(response, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(response)
        return
      }

      resolve(structuredClone(response))
    }, NETWORK_DELAY)
  })
}

export async function getAllExams() {
  return simulateRequest(exams)
}

export async function getExamById(id) {
  const exam = exams.find(
    (currentExam) => currentExam.id.toLowerCase() === id.trim().toLowerCase(),
  )

  if (!exam) {
    return simulateRequest(new Error('Exam not found'), true)
  }

  return simulateRequest(exam)
}

export async function createExam(exam) {
  const newExam = {
    ...exam,
    id: exam.id || `EXAM-${Date.now()}`,
    questions: exam.questions || [],
  }

  exams.push(newExam)
  return simulateRequest(newExam)
}

export async function getStudentScores() {
  return simulateRequest(studentScores)
}
