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
  { id: 1, question: 'What is the primary caregiver typically responsible for?', options: ['Physical care only', 'Emotional and physical needs', 'Education only'], correct: 1, feedback: 'Correct! Caregivers have responsibility for both the physical care (feeding, clothing, safety) and emotional needs (comfort, affection, security) of the child.' },
  { id: 2, question: 'What does "innate" mean in psychology?', options: ['Learned through experience', 'Present from birth', 'Developed in adolescence'], correct: 1, feedback: 'Correct! Innate means present or existing from birth. It refers to behaviors and abilities that are biological rather than learned through experience.' },
  { id: 3, question: 'What is a "bond" in the context of relationships?', options: ['A legal agreement', 'An emotional connection between people', 'A physical restraint'], correct: 1, feedback: 'Correct! In psychology, a bond is an emotional connection that forms between individuals. In attachment, the bond between caregiver and infant is crucial for development.' },
  { id: 4, question: 'Which sense is most developed in newborn babies?', options: ['Vision', 'Hearing', 'Smell'], correct: 2, feedback: 'Correct! Newborns have the most developed sense of smell. They can recognize their mother by scent within hours of birth and use this to find food.' },
  { id: 5, question: 'What does "reciprocal" mean?', options: ['One-way interaction', 'Two-way mutual interaction', 'Delayed response'], correct: 1, feedback: 'Correct! Reciprocal means two-way or mutual. In attachment, reciprocal interaction refers to back-and-forth responses between caregiver and infant, like a conversation.' }
];

// Lesson 2 Do Now - tests Lesson 1 content
export const lesson2DoNow = [
  { id: 1, question: 'What is interactional synchrony?', options: ['Random infant movements', 'Coordinated caregiver-infant actions', 'Infant crying patterns'], correct: 1, feedback: 'Correct! Interactional synchrony is the coordinated timing of caregiver and infant behaviors, where the infant mirrors or matches the adult\'s actions and expressions.' },
  { id: 2, question: 'What did Meltzoff and Moore (1977) demonstrate?', options: ['Infant memory', 'Infant imitation of adult expressions', 'Infant language'], correct: 1, feedback: 'Correct! Meltzoff and Moore found that infants as young as 2-3 weeks could imitate adult facial expressions like tongue protrusion, showing that imitation is innate.' },
  { id: 3, question: 'What is reciprocity in attachment?', options: ['One-way communication', 'Turn-taking interaction between caregiver and infant', 'Infant sleep patterns'], correct: 1, feedback: 'Correct! Reciprocity in attachment refers to the turn-taking interaction between caregiver and infant, similar to a conversation where each partner responds to the other.' },
  { id: 4, question: 'At what age do infants begin to show interactional synchrony?', options: ['From birth', 'From 2 weeks', 'From 6 months'], correct: 0, feedback: 'Correct! Research shows that interactional synchrony is present from birth. Condon and Sander (1974) found newborns as young as 1-2 days old synchronize movements with adult speech.' },
  { id: 5, question: 'What is "motherese"?', options: ['A type of formula milk', 'High-pitched speech used with infants', 'A medical condition'], correct: 1, feedback: 'Correct! Motherese (also called infant-directed speech) is the high-pitched, exaggerated speech that caregivers naturally use with infants. It helps capture infant attention and aids language development.' }
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

// Lesson 3 Do Now - tests Lesson 2 content (Schaffer's Stages)
export const lesson3DoNow = [
  { id: 1, question: 'What is the first stage in Schaffer\'s stages of attachment?', options: ['Specific attachment', 'Asocial stage', 'Indiscriminate attachment'], correct: 1, feedback: 'Correct! The asocial stage (0-6 weeks) is the first stage where infants show similar responses to objects and people, though they may show some preference for faces.' },
  { id: 2, question: 'At what age does stranger anxiety typically appear?', options: ['From birth', 'Around 7-8 months', 'After 2 years'], correct: 1, feedback: 'Correct! Stranger anxiety typically appears around 7-8 months, marking the onset of the specific attachment stage when infants form their primary attachment.' },
  { id: 3, question: 'What characterises the indiscriminate attachment stage?', options: ['Fear of all strangers', 'Happy to be comforted by any adult', 'Only wants primary caregiver'], correct: 1, feedback: 'Correct! During indiscriminate attachment (6 weeks - 6 months), infants prefer human company but are happy with any caregiver and show no stranger anxiety.' },
  { id: 4, question: 'What did Schaffer & Emerson (1964) find about multiple attachments?', options: ['They don\'t form until age 5', 'Most infants form them by 18 months', 'Only 10% of infants form them'], correct: 1, feedback: 'Correct! Schaffer & Emerson found that by 18 months, most infants had formed multiple attachments with other family members beyond their primary attachment figure.' },
  { id: 5, question: 'What is separation anxiety?', options: ['Fear of meeting new people', 'Distress when separated from attachment figure', 'Refusing to eat when alone'], correct: 1, feedback: 'Correct! Separation anxiety is the distress shown by infants when separated from their primary attachment figure. It appears during the specific attachment stage (7+ months).' }
];

// Lesson 4 Do Now - tests Lesson 3 content (Role of the Father)
export const lesson4DoNow = [
  { id: 1, question: 'According to Grossmann et al., what aspect of father\'s behaviour best predicts later attachment quality?', options: ['Financial provision', 'Quality of play', 'Discipline style'], correct: 1, feedback: 'Correct! Grossmann et al. (2002) found that the quality of fathers\' play with infants was the best predictor of adolescent attachment quality.' },
  { id: 2, question: 'What did Field (1978) find about primary caregiver fathers?', options: ['They couldn\'t bond with infants', 'They showed similar behaviours to mothers', 'They were less effective caregivers'], correct: 1, feedback: 'Correct! Field found that fathers who were primary caregivers showed the same nurturing behaviours as mothers - using higher-pitched voice, imitation, and exaggerated expressions.' },
  { id: 3, question: 'What is the main difference between biological and social explanations of the father\'s role?', options: ['Age of the father', 'Whether differences are innate or learned', 'Income of the family'], correct: 1, feedback: 'Correct! The biological view suggests fathers are innately different from mothers, while the social view argues that caregiving behaviours are learned through experience and cultural expectations.' },
  { id: 4, question: 'According to Geiger (1996), what type of play do fathers typically engage in?', options: ['Reading stories', 'Physical, stimulating play', 'Quiet, nurturing activities'], correct: 1, feedback: 'Correct! Geiger found that fathers tend to engage in more physical, rough-and-tumble play, while mothers focus more on nurturing and caregiving activities.' },
  { id: 5, question: 'What does research on same-sex parent families suggest about the father\'s role?', options: ['Fathers are essential', 'Quality of care matters more than gender', 'Children always struggle without fathers'], correct: 1, feedback: 'Correct! Research by McCallum & Golombok shows children in same-sex parent families develop normally, suggesting the quality of caregiving matters more than having a father specifically.' }
];

// Lesson 5 Do Now - tests Lesson 4 content (Animal Studies)
export const lesson5DoNow = [
  { id: 1, question: 'What is imprinting?', options: ['A learned behaviour through rewards', 'An innate tendency to attach to the first moving object', 'A gradual bonding process over months'], correct: 1, feedback: 'Correct! Imprinting is an innate tendency to attach to the first moving object seen during the critical period, as demonstrated by Lorenz with goslings.' },
  { id: 2, question: 'What did Harlow\'s monkeys prefer - the wire mother with food or the cloth mother without food?', options: ['Wire mother with food', 'Cloth mother without food', 'They showed no preference'], correct: 1, feedback: 'Correct! Infant monkeys spent 17-18 hours per day with the cloth mother and only visited the wire mother briefly to feed, showing contact comfort is more important than food.' },
  { id: 3, question: 'What happened to Harlow\'s monkeys when they became mothers?', options: ['They were excellent parents', 'Many were neglectful or abusive', 'They showed normal parenting'], correct: 1, feedback: 'Correct! The "motherless mothers" were often neglectful or abusive to their own offspring, demonstrating intergenerational effects of maternal deprivation.' },
  { id: 4, question: 'What is the main limitation of using animal studies to understand human attachment?', options: ['Animals don\'t form attachments', 'Difficulty generalising to more complex human behaviour', 'The studies are too old'], correct: 1, feedback: 'Correct! Humans have more complex cognition, language abilities, and cultural influences. Animal findings may not directly apply to human attachment.' },
  { id: 5, question: 'How long could monkeys be isolated before permanent damage occurred?', options: ['90 days', '6 months', '1 year'], correct: 1, feedback: 'Correct! Monkeys isolated for 90 days could recover, but those isolated for 6 months or more showed permanent social and emotional damage, supporting the critical period concept.' }
];

// Lesson 6 Do Now - tests Lesson 5 content (Explanations of Attachment)
export const lesson6DoNow = [
  { id: 1, question: 'What is "cupboard love" in Learning Theory?', options: ['Love of kitchen furniture', 'Attachment forms because caregivers provide food', 'A type of secure attachment'], correct: 1, feedback: 'Correct! "Cupboard love" refers to the Learning Theory idea that infants attach to caregivers because they associate them with the pleasure of being fed.' },
  { id: 2, question: 'What is monotropy in Bowlby\'s theory?', options: ['Having multiple equal attachments', 'Forming one special primary attachment', 'Attachment to objects only'], correct: 1, feedback: 'Correct! Monotropy is Bowlby\'s idea that infants form one primary attachment that is qualitatively different and more important than all other attachments.' },
  { id: 3, question: 'What is the Internal Working Model?', options: ['A physical model of the brain', 'A mental template for relationships based on early attachment', 'A type of conditioning'], correct: 1, feedback: 'Correct! The IWM is a mental representation of the self, attachment figure, and relationships that forms during early attachment and influences all future relationships.' },
  { id: 4, question: 'What are social releasers according to Bowlby?', options: ['Parenting classes', 'Innate behaviours that trigger caregiving', 'Methods to reduce attachment'], correct: 1, feedback: 'Correct! Social releasers are innate behaviours like crying, smiling, and cooing that infants are born with to trigger caregiving responses from adults.' },
  { id: 5, question: 'What percentage of infants in Schaffer & Emerson\'s study were NOT primarily attached to their feeder?', options: ['10%', '25%', '39%'], correct: 2, feedback: 'Correct! 39% of infants formed their primary attachment to someone other than the person who fed them most, challenging the Learning Theory "cupboard love" explanation.' }
];

// Lesson 7 Do Now - tests Lesson 6 content (Types of Attachment)
export const lesson7DoNow = [
  { id: 1, question: 'How many episodes are there in the Strange Situation?', options: ['5', '8', '12'], correct: 1, feedback: 'Correct! The Strange Situation consists of 8 episodes designed to assess infant attachment through separation and reunion with the caregiver.' },
  { id: 2, question: 'What percentage of infants are typically classified as securely attached?', options: ['20-25%', '60-75%', '90-95%'], correct: 1, feedback: 'Correct! Around 60-75% of infants in Western studies are classified as securely attached (Type B).' },
  { id: 3, question: 'Which attachment type shows little distress at separation and avoids the caregiver on reunion?', options: ['Type B - Secure', 'Type A - Insecure-Avoidant', 'Type C - Insecure-Resistant'], correct: 1, feedback: 'Correct! Insecure-Avoidant (Type A) infants show minimal distress and avoid or ignore the caregiver when they return.' },
  { id: 4, question: 'What did Main & Solomon (1986) identify?', options: ['The Strange Situation procedure', 'A fourth attachment type: Disorganised', 'The internal working model'], correct: 1, feedback: 'Correct! Main & Solomon identified Type D - Insecure-Disorganised attachment, characterised by confused, contradictory behaviours.' },
  { id: 5, question: 'What caregiving style is associated with secure attachment?', options: ['Rejecting and unresponsive', 'Sensitive and responsive', 'Inconsistent responsiveness'], correct: 1, feedback: 'Correct! Secure attachment is associated with caregivers who are sensitive and responsive to the infant\'s needs and signals.' }
];
