export type Lesson = {
  id: number;
  title: string;
  active: boolean;
  complete: boolean;
};

export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correct: number;
};

export type UnderstandingCheckQuestion = {
  id: number;
  type: 'scenario' | 'matching';
  question: string;
  options?: Array<{ text: string; correct: boolean }>;
  items?: Array<{ label: string; options: string[]; correct: number }>;
  feedback: string;
};
