export const exams = [
  {
    id: 'JS-101',
    title: 'JavaScript Fundamentals',
    durationMinutes: 45,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        prompt: 'Which keyword declares a block-scoped variable?',
        options: ['var', 'let', 'function', 'return'],
        correctAnswer: 'let',
        points: 10,
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        prompt: 'What does Array.prototype.map return?',
        options: [
          'A new transformed array',
          'The first matching item',
          'The original array',
          'A boolean value',
        ],
        correctAnswer: 'A new transformed array',
        points: 10,
      },
      {
        id: 'q3',
        type: 'short-answer',
        prompt: 'Name one way to handle asynchronous work in JavaScript.',
        acceptedAnswers: ['promise', 'async/await', 'callback'],
        points: 10,
      },
    ],
  },
  {
    id: 'REACT-201',
    title: 'React Components and State',
    durationMinutes: 60,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        prompt: 'Which hook is commonly used for component state?',
        options: ['useMemo', 'useState', 'useRef', 'useContext'],
        correctAnswer: 'useState',
        points: 10,
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        prompt: 'What should React list items include for stable rendering?',
        options: ['className', 'key', 'name', 'style'],
        correctAnswer: 'key',
        points: 10,
      },
      {
        id: 'q3',
        type: 'short-answer',
        prompt: 'What hook is typically used to fetch data after render?',
        acceptedAnswers: ['useEffect'],
        points: 10,
      },
    ],
  },
  {
    id: 'DB-301',
    title: 'Database Basics',
    durationMinutes: 50,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        prompt: 'What does SQL stand for?',
        options: [
          'Structured Query Language',
          'Simple Query Logic',
          'Server Queue Language',
          'System Query Layer',
        ],
        correctAnswer: 'Structured Query Language',
        points: 10,
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        prompt: 'Which database object stores rows and columns?',
        options: ['View', 'Index', 'Table', 'Trigger'],
        correctAnswer: 'Table',
        points: 10,
      },
      {
        id: 'q3',
        type: 'short-answer',
        prompt: 'What field usually identifies a row uniquely?',
        acceptedAnswers: ['primary key', 'id'],
        points: 10,
      },
    ],
  },
]

export const studentScores = [
  {
    id: 'score-1',
    studentId: 'STU-1001',
    studentName: 'Maya Cohen',
    examId: 'JS-101',
    score: 86,
    submittedAt: '2026-05-01T10:15:00.000Z',
  },
  {
    id: 'score-2',
    studentId: 'STU-1002',
    studentName: 'Daniel Levi',
    examId: 'REACT-201',
    score: 92,
    submittedAt: '2026-05-02T13:40:00.000Z',
  },
  {
    id: 'score-3',
    studentId: 'STU-1003',
    studentName: 'Noa Amir',
    examId: 'DB-301',
    score: 78,
    submittedAt: '2026-05-03T09:25:00.000Z',
  },
]
