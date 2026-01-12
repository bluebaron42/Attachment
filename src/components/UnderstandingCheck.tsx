import React, { useState, useMemo } from 'react';
import { CheckCircle, AlertCircle, Brain } from 'lucide-react';

export interface UnderstandingCheckQuestion {
  id: number;
  type: 'scenario' | 'matching';
  question: string;
  options?: Array<{ text: string; correct: boolean }>;
  items?: Array<{ label: string; options: string[]; correct: number }>;
  feedback: string;
}

export interface UnderstandingCheckProps {
  questions: UnderstandingCheckQuestion[];
  themeColor: string; // e.g., 'cyan', 'red', 'amber'
  isPresentation: boolean;
}

const themeMap: Record<string, { bg: string; border: string; text: string }> = {
  cyan: { bg: 'bg-cyan-900/30', border: 'border-cyan-500', text: 'text-cyan-400' },
  red: { bg: 'bg-red-900/30', border: 'border-red-500', text: 'text-red-400' },
  amber: { bg: 'bg-amber-900/30', border: 'border-amber-500', text: 'text-amber-400' },
  orange: { bg: 'bg-orange-900/30', border: 'border-orange-500', text: 'text-orange-400' },
  yellow: { bg: 'bg-yellow-900/30', border: 'border-yellow-500', text: 'text-yellow-400' },
  teal: { bg: 'bg-teal-900/30', border: 'border-teal-500', text: 'text-teal-400' },
  purple: { bg: 'bg-purple-900/30', border: 'border-purple-500', text: 'text-purple-400' },
  slate: { bg: 'bg-slate-900/30', border: 'border-slate-500', text: 'text-slate-400' }
};

export default function UnderstandingCheck({
  questions,
  themeColor,
  isPresentation
}: UnderstandingCheckProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [showFeedback, setShowFeedback] = useState(false);

  const theme = themeMap[themeColor] || themeMap.cyan;

  const shuffleArray = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Randomize answers on component mount
  const shuffledQuestions = useMemo(() => {
    return questions.map(q => {
      if (q.type === 'scenario' && q.options) {
        return { ...q, options: shuffleArray(q.options) };
      }
      if (q.type === 'matching' && q.items) {
        return {
          ...q,
          items: q.items.map(item => ({
            ...item,
            options: shuffleArray(item.options)
          }))
        };
      }
      return q;
    });
  }, []);

  const q = shuffledQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (questionId: string | number, answer: string | number) => {
    setAnswers({ ...answers, [questionId]: answer });
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

  return (
    <div className={`w-full max-w-3xl ${isPresentation ? 'px-12' : 'px-6'}`}>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`h-full ${theme.bg} transition-all duration-300`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className={`text-gray-400 mt-2 text-center ${isPresentation ? 'text-xl' : 'text-sm'}`}>
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>

      {/* Question */}
      <div className={`${theme.bg} border-t-4 ${theme.border} rounded-xl shadow-lg ${
        isPresentation ? 'p-12' : 'p-8'
      }`}>
        <h3 className={`${theme.text} font-bold mb-6 flex items-center gap-2 ${
          isPresentation ? 'text-3xl' : 'text-xl'
        }`}>
          <Brain size={isPresentation ? 32 : 24} />
          {q.question}
        </h3>

        {/* Scenario Questions */}
        {q.type === 'scenario' && q.options && (
          <div className="space-y-3 mb-6">
            {q.options.map((option, index) => {
              const isSelected = answers[q.id] === option.text;
              const isCorrectAnswer = option.correct;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(q.id, option.text)}
                  className={`w-full p-4 rounded-lg border-2 transition-all text-left font-semibold ${
                    isSelected
                      ? isCorrectAnswer
                        ? `border-green-500 bg-green-900/30 text-green-300`
                        : `border-red-500 bg-red-900/30 text-red-300`
                      : `border-gray-600 bg-gray-900/50 text-gray-300 hover:border-gray-500`
                  } ${isPresentation ? 'text-xl p-6' : 'text-base'}`}
                >
                  {option.text}
                </button>
              );
            })}
          </div>
        )}

        {/* Matching Questions */}
        {q.type === 'matching' && q.items && (
          <div className="space-y-4 mb-6">
            {q.items.map((item, idx) => (
              <div key={idx} className={`p-4 rounded-lg bg-gray-900/50 border border-gray-700 ${
                isPresentation ? 'p-6' : ''
              }`}>
                <p className={`font-semibold text-white mb-3 ${isPresentation ? 'text-xl' : 'text-base'}`}>
                  {item.label}
                </p>
                <div className="space-y-2">
                  {item.options.map((option, optIdx) => {
                    const isSelected = answers[`${q.id}-${idx}`] === optIdx;

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleAnswer(`${q.id}-${idx}`, optIdx)}
                        className={`w-full p-3 rounded border-2 transition-all text-left ${
                          isSelected
                            ? item.options[item.correct] === option
                              ? `border-green-500 bg-green-900/30 text-green-300`
                              : `border-red-500 bg-red-900/30 text-red-300`
                            : `border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500`
                        } ${isPresentation ? 'text-lg p-4' : 'text-sm'}`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Feedback */}
        {showFeedback && (
          <div className={`flex items-start gap-3 p-4 rounded-lg mb-6 border ${
            answers[q.id] ? 'bg-green-900/30 border-green-500' : 'bg-gray-800 border-gray-600'
          }`}>
            {answers[q.id] ? (
              <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={24} />
            ) : (
              <AlertCircle className="text-gray-400 flex-shrink-0 mt-1" size={24} />
            )}
            <p className={`${answers[q.id] ? 'text-green-300' : 'text-gray-300'} ${
              isPresentation ? 'text-lg' : 'text-sm'
            }`}>
              {q.feedback}
            </p>
          </div>
        )}

        {!showFeedback && (
          <button
            onClick={() => setShowFeedback(true)}
            className={`w-full mb-6 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all ${
              isPresentation ? 'text-lg py-4' : ''
            }`}
          >
            Show Feedback
          </button>
        )}

        {/* Navigation */}
        <div className="flex gap-4 justify-between">
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
              className={`px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all ${
                isPresentation ? 'text-lg px-8 py-4' : ''
              }`}
            >
              Next →
            </button>
          ) : (
            <div className={`px-6 py-3 rounded-lg bg-green-600/30 border border-green-500 text-green-300 font-semibold ${
              isPresentation ? 'text-lg px-8 py-4' : ''
            }`}>
              ✓ Check Complete
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
