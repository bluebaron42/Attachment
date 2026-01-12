import React, { useState, useMemo, useEffect } from 'react';
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
  // VALIDATION: Ensure exactly 5 questions
  useEffect(() => {
    if (questions.length !== 5) {
      console.warn(`UnderstandingCheck requires exactly 5 questions. Received ${questions.length}. This may cause layout and functionality issues.`);
    }
  }, [questions.length]);

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
        const shuffledOptions = shuffleArray(q.options);
        const correctOption = q.options.find(opt => opt.correct);
        const newCorrectIndex = correctOption ? shuffledOptions.indexOf(correctOption) : 0;
        return { ...q, options: shuffledOptions.map(opt => ({ ...opt })), _correctIndex: newCorrectIndex };
      }
      if (q.type === 'matching' && q.items) {
        return {
          ...q,
          items: q.items.map(item => {
            const correctAnswer = item.options[item.correct];
            const shuffledOptions = shuffleArray(item.options);
            const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
            return {
              ...item,
              options: shuffledOptions,
              correct: newCorrectIndex
            };
          })
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
    <div className={`grid grid-cols-1 lg:grid-cols-3 h-full ${isPresentation ? 'gap-10' : 'gap-6'}`}>
      {/* Left Panel - Progress */}
      <div className={`bg-gray-800 rounded-xl border ${theme.border}/30 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-6'}`}>
        <div className="flex items-center gap-3 mb-6 border-b border-gray-700 pb-4">
          <div className={`p-2 ${theme.bg} rounded-lg`}>
            <Brain size={isPresentation ? 32 : 24} className={theme.text} />
          </div>
          <div>
            <h3 className={`font-bold text-white ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Understanding Check</h3>
            <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>Test Your Knowledge</p>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="space-y-3 flex-grow">
          {questions.map((_, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                idx === currentQuestion
                  ? `${theme.bg} border-l-4 ${theme.border}`
                  : idx < currentQuestion
                    ? 'bg-green-900/20 border-l-4 border-green-500'
                    : 'bg-gray-900/50 border-l-4 border-gray-700'
              }`}
            >
              <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${
                idx === currentQuestion
                  ? `${theme.bg} ${theme.text}`
                  : idx < currentQuestion
                    ? 'bg-green-900/50 text-green-400'
                    : 'bg-gray-700 text-gray-400'
              } ${isPresentation ? 'w-10 h-10 text-lg' : 'text-sm'}`}>
                {idx < currentQuestion ? '✓' : idx + 1}
              </div>
              <span className={`${isPresentation ? 'text-lg' : 'text-sm'} ${
                idx === currentQuestion ? 'text-white font-semibold' : 'text-gray-400'
              }`}>
                Question {idx + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Overall Progress */}
        <div className="mt-6 pt-4 border-t border-gray-700">
          <div className="flex justify-between text-gray-400 mb-2">
            <span className={isPresentation ? 'text-base' : 'text-xs'}>Progress</span>
            <span className={isPresentation ? 'text-base' : 'text-xs'}>{Math.round(progress)}%</span>
          </div>
          <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r from-cyan-600 to-cyan-400 transition-all duration-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Question Area */}
      <div className={`lg:col-span-2 bg-gray-800 rounded-xl border ${theme.border}/30 shadow-xl flex flex-col ${
        isPresentation ? 'p-10' : 'p-6'
      }`}>
        {/* Question Header */}
        <div className={`${theme.bg} rounded-xl mb-6 ${isPresentation ? 'p-8' : 'p-5'}`}>
          <p className={`font-bold ${theme.text} uppercase tracking-wider mb-2 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
            Question {currentQuestion + 1} of {questions.length}
          </p>
          <h3 className={`text-white font-semibold leading-relaxed ${
            isPresentation ? 'text-2xl' : 'text-lg'
          }`}>
            {q.question}
          </h3>
        </div>

        {/* Scenario Questions */}
        {q.type === 'scenario' && q.options && (
          <div className={`space-y-3 mb-6 flex-grow ${isPresentation ? 'space-y-4' : ''}`}>
            {q.options.map((option, index) => {
              const isSelected = answers[q.id] === option.text;
              const isCorrectAnswer = option.correct;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(q.id, option.text)}
                  className={`w-full rounded-xl border-2 transition-all text-left font-semibold flex items-center gap-3 ${
                    isSelected
                      ? isCorrectAnswer
                        ? `border-green-500 bg-green-900/30 text-green-300 shadow-lg shadow-green-500/10`
                        : `border-red-500 bg-red-900/30 text-red-300 shadow-lg shadow-red-500/10`
                      : `border-gray-600 bg-gray-900/50 text-gray-300 hover:border-gray-500 hover:bg-gray-800`
                  } ${isPresentation ? 'text-xl p-8' : 'text-base p-4'}`}
                >
                  <span className={`flex items-center justify-center rounded-full flex-shrink-0 ${
                    isSelected
                      ? isCorrectAnswer ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                      : 'bg-gray-700 text-gray-400'
                  } ${isPresentation ? 'w-10 h-10 text-lg' : 'w-7 h-7 text-sm'}`}>
                    {isSelected && isCorrectAnswer ? '✓' : isSelected ? '✗' : String.fromCharCode(65 + index)}
                  </span>
                  {option.text}
                </button>
              );
            })}
          </div>
        )}

        {/* Matching Questions */}
        {q.type === 'matching' && q.items && (
          <div className={`space-y-4 mb-6 flex-grow ${isPresentation ? 'space-y-6' : ''}`}>
            {q.items.map((item, idx) => (
              <div key={idx} className={`rounded-xl bg-gray-900/50 border border-gray-700 ${
                isPresentation ? 'p-6' : 'p-4'
              }`}>
                <p className={`font-bold text-cyan-400 mb-3 ${isPresentation ? 'text-xl' : 'text-base'}`}>
                  {item.label}
                </p>
                <div className={`space-y-2 ${isPresentation ? 'space-y-3' : ''}`}>
                  {item.options.map((option, optIdx) => {
                    const isSelected = answers[`${q.id}-${idx}`] === optIdx;

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleAnswer(`${q.id}-${idx}`, optIdx)}
                        className={`w-full rounded-lg border-2 transition-all text-left ${
                          isSelected
                            ? item.options[item.correct] === option
                              ? `border-green-500 bg-green-900/30 text-green-300`
                              : `border-red-500 bg-red-900/30 text-red-300`
                            : `border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500`
                        } ${isPresentation ? 'text-lg p-5' : 'text-sm p-3'}`}
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
          <div className={`rounded-xl mb-6 border-2 animate-fadeIn ${
            answers[q.id] ? 'bg-green-900/20 border-green-500/50' : 'bg-cyan-900/20 border-cyan-500/50'
          } ${isPresentation ? 'p-8' : 'p-5'}`}>
            <div className="flex items-start gap-3">
              {answers[q.id] ? (
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={isPresentation ? 32 : 24} />
              ) : (
                <Brain className="text-cyan-400 flex-shrink-0 mt-1" size={isPresentation ? 32 : 24} />
              )}
              <div>
                <p className={`font-bold mb-2 ${answers[q.id] ? 'text-green-400' : 'text-cyan-400'} ${isPresentation ? 'text-xl' : 'text-base'}`}>
                  {answers[q.id] ? 'Correct!' : 'Explanation'}
                </p>
                <p className={`text-gray-300 leading-relaxed ${
                  isPresentation ? 'text-lg' : 'text-sm'
                }`}>
                  {q.feedback}
                </p>
              </div>
            </div>
          </div>
        )}

        {!showFeedback && (
          <button
            onClick={() => setShowFeedback(true)}
            className={`w-full mb-6 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold hover:from-cyan-500 hover:to-cyan-400 transition-all shadow-lg shadow-cyan-500/20 ${
              isPresentation ? 'text-xl py-5' : 'py-4'
            }`}
          >
            Check Answer
          </button>
        )}

        {/* Navigation */}
        <div className="flex gap-4 justify-between mt-auto">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className={`px-6 py-3 rounded-xl border border-gray-600 text-gray-300 font-semibold transition-all ${
              currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:border-gray-500 hover:bg-gray-700/50'
            } ${isPresentation ? 'text-lg px-8 py-4' : ''}`}
          >
            ← Previous
          </button>
          {currentQuestion < questions.length - 1 ? (
            <button
              onClick={handleNext}
              className={`px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold hover:from-cyan-500 hover:to-cyan-400 transition-all shadow-lg shadow-cyan-500/20 ${
                isPresentation ? 'text-lg px-8 py-4' : ''
              }`}
            >
              Next Question →
            </button>
          ) : (
            <div className={`px-6 py-3 rounded-xl bg-green-900/30 border-2 border-green-500 text-green-300 font-bold flex items-center gap-2 ${
              isPresentation ? 'text-lg px-8 py-4' : ''
            }`}>
              <CheckCircle size={isPresentation ? 24 : 20} />
              Check Complete
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
