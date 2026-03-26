/**
 * Replace or extend `questions` per subject using your JSON format:
 * { question, options[], answer } — answer must match one string in options.
 */
export const SUBJECTS = [
  {
    id: 'math',
    name: 'Mathematics',
    description: 'Arithmetic, geometry, and logic',
    questions: [
      {
        question: 'What is 15 × 8?',
        options: ['100', '110', '120', '130'],
        answer: '120',
      },
      {
        question: 'What is the square root of 144?',
        options: ['10', '11', '12', '14'],
        answer: '12',
      },
      {
        question: 'How many degrees in a right angle?',
        options: ['45°', '90°', '180°', '360°'],
        answer: '90°',
      },
      {
        question: 'What is 7²?',
        options: ['42', '49', '56', '63'],
        answer: '49',
      },
      {
        question: 'What is 3/4 as a decimal?',
        options: ['0.25', '0.5', '0.75', '1.25'],
        answer: '0.75',
      },
      {
        question: 'Perimeter of a square with side 5?',
        options: ['10', '15', '20', '25'],
        answer: '20',
      },
      {
        question: 'What is 100 ÷ 4?',
        options: ['20', '25', '30', '40'],
        answer: '25',
      },
      {
        question: 'Which is a prime number?',
        options: ['9', '15', '17', '21'],
        answer: '17',
      },
    ],
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Biology, chemistry, and physics basics',
    questions: [
      {
        question: 'What gas do plants absorb for photosynthesis?',
        options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
        answer: 'Carbon dioxide',
      },
      {
        question: 'What is the chemical symbol for water?',
        options: ['CO₂', 'H₂O', 'NaCl', 'O₂'],
        answer: 'H₂O',
      },
      {
        question: 'What planet is known as the Red Planet?',
        options: ['Venus', 'Jupiter', 'Mars', 'Saturn'],
        answer: 'Mars',
      },
      {
        question: 'What is the center of an atom called?',
        options: ['Electron', 'Proton', 'Nucleus', 'Neutron'],
        answer: 'Nucleus',
      },
      {
        question: 'At what temperature does water boil at sea level (°C)?',
        options: ['90°C', '100°C', '110°C', '120°C'],
        answer: '100°C',
      },
      {
        question: 'What force pulls objects toward Earth?',
        options: ['Magnetism', 'Friction', 'Gravity', 'Inertia'],
        answer: 'Gravity',
      },
      {
        question: 'How many bones are in an adult human body (approximately)?',
        options: ['106', '156', '206', '256'],
        answer: '206',
      },
      {
        question: 'What is the speed of light best known as?',
        options: ['Fast', 'Constant c', 'Variable', 'Infinite'],
        answer: 'Constant c',
      },
    ],
  },
  {
    id: 'history',
    name: 'History',
    description: 'World events and civilizations',
    questions: [
      {
        question: 'In which year did World War II end?',
        options: ['1943', '1944', '1945', '1946'],
        answer: '1945',
      },
      {
        question: 'Who painted the Mona Lisa?',
        options: [
          'Michelangelo',
          'Leonardo da Vinci',
          'Raphael',
          'Donatello',
        ],
        answer: 'Leonardo da Vinci',
      },
      {
        question: 'Ancient Egyptian writing used what symbols?',
        options: ['Runes', 'Cuneiform', 'Hieroglyphs', 'Latin'],
        answer: 'Hieroglyphs',
      },
      {
        question: 'The fall of the Berlin Wall occurred in?',
        options: ['1987', '1989', '1991', '1993'],
        answer: '1989',
      },
      {
        question: 'Which empire built Machu Picchu?',
        options: ['Aztec', 'Maya', 'Inca', 'Olmec'],
        answer: 'Inca',
      },
      {
        question: 'Who was the first President of the United States?',
        options: [
          'Thomas Jefferson',
          'George Washington',
          'John Adams',
          'Ben Franklin',
        ],
        answer: 'George Washington',
      },
      {
        question: 'The Renaissance began roughly in which country?',
        options: ['France', 'England', 'Italy', 'Spain'],
        answer: 'Italy',
      },
      {
        question: 'The Titanic sank in which year?',
        options: ['1910', '1912', '1914', '1916'],
        answer: '1912',
      },
    ],
  },
]

export function getSubjectById(id) {
  return SUBJECTS.find((s) => s.id === id) ?? null
}
