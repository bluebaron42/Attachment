// Color theme mapping for all lessons
export const lessonThemes: Record<number, { color: string; name: string }> = {
  1: { color: 'cyan', name: 'Cyan' },
  2: { color: 'amber', name: 'Amber' },
  3: { color: 'orange', name: 'Orange' },
  4: { color: 'red', name: 'Red' },
  5: { color: 'yellow', name: 'Yellow' },
  6: { color: 'teal', name: 'Teal' },
  7: { color: 'purple', name: 'Purple' },
  8: { color: 'slate', name: 'Slate' }
};

// Do Now Quiz data - from previous lessons
// Lesson 1 uses prior knowledge questions (this is the first lesson)
export const lesson1DoNow = [
  { id: 1, question: 'What is the primary caregiver typically responsible for?', options: ['Physical care only', 'Emotional and physical needs', 'Education only'], correct: 1 },
  { id: 2, question: 'What does "innate" mean in psychology?', options: ['Learned through experience', 'Present from birth', 'Developed in adolescence'], correct: 1 },
  { id: 3, question: 'What is a "bond" in the context of relationships?', options: ['A legal agreement', 'An emotional connection between people', 'A physical restraint'], correct: 1 },
  { id: 4, question: 'Which sense is most developed in newborn babies?', options: ['Vision', 'Hearing', 'Smell'], correct: 2 },
  { id: 5, question: 'What does "reciprocal" mean?', options: ['One-way interaction', 'Two-way mutual interaction', 'Delayed response'], correct: 1 }
];

// Lesson 2 Do Now - tests Lesson 1 content
export const lesson2DoNow = [
  { id: 1, question: 'What is interactional synchrony?', options: ['Random infant movements', 'Coordinated caregiver-infant actions', 'Infant crying patterns'], correct: 1 },
  { id: 2, question: 'What did Meltzoff and Moore (1977) demonstrate?', options: ['Infant memory', 'Infant imitation of adult expressions', 'Infant language'], correct: 1 },
  { id: 3, question: 'What is reciprocity in attachment?', options: ['One-way communication', 'Turn-taking interaction between caregiver and infant', 'Infant sleep patterns'], correct: 1 },
  { id: 4, question: 'At what age do infants begin to show interactional synchrony?', options: ['From birth', 'From 2 weeks', 'From 6 months'], correct: 1 },
  { id: 5, question: 'What is "motherese"?', options: ['A type of formula milk', 'High-pitched speech used with infants', 'A medical condition'], correct: 1 }
];

// Lessons metadata for Attachment module
export const lessons = [
  { id: 1, title: '01: Caregiver-Infant Interactions', active: true, complete: false },
  { id: 2, title: '02: Schaffer\'s Stages of Attachment', active: false, complete: false },
  { id: 3, title: '03: The Role of the Father', active: false, complete: false },
  { id: 4, title: '04: Animal Studies of Attachment', active: false, complete: false },
  { id: 5, title: '05: Explanations of Attachment', active: false, complete: false },
  { id: 6, title: '06: Types of Attachment', active: false, complete: false },
  { id: 7, title: '07: Cultural Variations & Bowlby\'s Deprivation', active: false, complete: false },
  { id: 8, title: '08: Romanian Orphan Studies', active: false, complete: false }
];
