import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
}

export interface DoNowQuizProps {
  questions: QuizQuestion[];
  isPresentation: boolean;
}

export default function DoNowQuiz({ questions, isPresentation }: DoNowQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [showFeedback, setShowFeedback] = useState(false);

  const q = questions[currentQuestion];
  const userAnswer = answers[q.id];
  const isCorrect = userAnswer === q.correct;

  const handleAnswer = (index: number) => {
    setAnswers({ ...answers, [q.id]: index });
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowFeedback(false);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowFeedback(false);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className={`w-full max-w-2xl ${isPresentation ? 'px-12' : 'px-6'}`}>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className={`text-gray-400 mt-2 text-center ${isPresentation ? 'text-xl' : 'text-sm'}`}>
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>

      {/* Question */}
      <div className={`bg-gray-800 rounded-xl border border-gray-700 shadow-lg ${isPresentation ? 'p-12' : 'p-8'}`}>
        <h3 className={`text-white font-bold mb-6 ${isPresentation ? 'text-3xl' : 'text-xl'}`}>
          {q.question}
        </h3>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {q.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full p-4 rounded-lg border-2 transition-all text-left font-semibold ${
                userAnswer === index
                  ? isCorrect
                    ? 'border-green-500 bg-green-900/30 text-green-300'
                    : 'border-red-500 bg-red-900/30 text-red-300'
                  : 'border-gray-600 bg-gray-900/50 text-gray-300 hover:border-gray-500'
              } ${isPresentation ? 'text-xl p-6' : 'text-base'}`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className={`flex items-start gap-3 p-4 rounded-lg ${
            isCorrect ? 'bg-green-900/30 border border-green-500' : 'bg-red-900/30 border border-red-500'
          }`}>
            {isCorrect ? (
              <CheckCircle className="text-green-400 flex-shrink-0 mt-1" />
            ) : (
              <AlertCircle className="text-red-400 flex-shrink-0 mt-1" />
            )}
            <p className={`${isCorrect ? 'text-green-300' : 'text-red-300'} ${isPresentation ? 'text-lg' : 'text-sm'}`}>
              {isCorrect ? '✓ Correct!' : `✗ Incorrect. The correct answer is: ${q.options[q.correct]}`}
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-4 mt-8 justify-between">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className={`px-6 py-3 rounded-lg border border-gray-600 text-gray-300 font-semibold transition-all ${
              currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:border-gray-500'
            } ${isPresentation ? 'text-lg px-8 py-4' : ''}`}
          >
            ← Previous
          </button>
          {currentQuestion < questions.length - 1 ? (
            <button
              onClick={handleNext}
              className={`px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all ${isPresentation ? 'text-lg px-8 py-4' : ''}`}
            >
              Next →
            </button>
          ) : (
            <div className="px-6 py-3 rounded-lg bg-green-600/30 border border-green-500 text-green-300 font-semibold">
              ✓ Quiz Complete
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
