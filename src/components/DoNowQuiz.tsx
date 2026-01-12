import React, { useState } from 'react';
import { CheckCircle, Target, AlertCircle } from 'lucide-react';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  feedback?: string;
}

export interface DoNowQuizProps {
  questions: QuizQuestion[];
  isPresentation: boolean;
}

const DoNowQuiz: React.FC<DoNowQuizProps> = ({ questions, isPresentation }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  
  const handleSelect = (qId: number, optionIdx: number) => {
    if (!showResults) {
      setAnswers(prev => ({...prev, [qId]: optionIdx}));
    }
  };
  
  const score = Object.keys(answers).reduce((acc, qId) => {
    const questionId = parseInt(qId);
    const question = questions.find(q => q.id === questionId);
    if (question && answers[questionId] === question.correct) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 h-full content-start transition-all ${isPresentation ? 'gap-12' : 'gap-6'}`}>
      {/* Left Column: Instructions and Buttons */}
      <div className="space-y-4">
        <div className={`bg-gray-800 rounded-xl border-t-4 border-cyan-500 shadow-xl ${isPresentation ? 'p-10' : 'p-6'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 bg-cyan-900/30 rounded-lg`}>
              <Target size={isPresentation ? 32 : 24} className="text-cyan-400" />
            </div>
            <h3 className={`font-bold text-white ${isPresentation ? 'text-3xl' : 'text-lg'}`}>Task: Activation & Retrieval</h3>
          </div>
          <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
            Answer the following questions based on your prior knowledge to activate relevant schemas for this lesson.
          </p>
        </div>
        
        <div className={`flex flex-col ${isPresentation ? 'gap-6' : 'gap-3'}`}>
          {!showResults ? (
            <>
              <button 
                onClick={() => setShowResults(true)} 
                disabled={Object.keys(answers).length < questions.length} 
                className={`bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold w-full transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 ${isPresentation ? 'px-12 py-8 text-3xl' : 'px-8 py-4'}`}
              >
                Submit Answers
              </button>
              <button 
                onClick={() => setShowResults(true)} 
                className={`bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-600 rounded-xl font-semibold w-full transition-all hover:border-gray-500 ${isPresentation ? 'px-12 py-6 text-xl' : 'px-8 py-3 text-sm'}`}
              >
                Reveal All Answers
              </button>
            </>
          ) : (
            <div className={`bg-gradient-to-br from-green-900/30 to-green-900/10 border-2 border-green-500/50 rounded-xl w-full text-center animate-fadeIn shadow-lg shadow-green-500/10 ${isPresentation ? 'p-10' : 'p-6'}`}>
              <CheckCircle size={isPresentation ? 60 : 40} className="text-green-400 mx-auto mb-3" />
              <span className={`font-bold text-green-400 block mb-2 ${isPresentation ? 'text-6xl mb-4' : 'text-3xl'}`}>
                {score} / {questions.length}
              </span>
              <span className={`text-gray-400 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                Check corrections on the right →
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Right Column: Questions */}
      <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar">
        {questions.map((q) => (
          <div key={q.id} className={`bg-gray-800 rounded-xl border border-gray-700 shadow-lg transition-all ${isPresentation ? 'p-8 mb-4' : 'p-4'} ${showResults && answers[q.id] === q.correct ? 'border-green-500/50' : showResults ? 'border-red-500/30' : ''}`}>
            <h4 className={`font-semibold text-gray-200 mb-3 ${isPresentation ? 'text-2xl mb-5' : 'text-sm'}`}>
              <span className={`inline-flex items-center justify-center rounded-full bg-cyan-900/50 text-cyan-400 font-bold mr-2 ${isPresentation ? 'w-10 h-10 text-xl' : 'w-6 h-6 text-xs'}`}>{q.id}</span>
              {q.question}
            </h4>
            
            {isPresentation ? (
              <div className="min-h-[40px]">
                {showResults && (
                  <div className="animate-fadeIn">
                    <div className="text-green-400 font-bold text-3xl mt-2 flex items-center gap-3 mb-4 bg-green-900/20 p-4 rounded-lg border border-green-500/30">
                      <CheckCircle size={36}/> {q.options[q.correct]}
                    </div>
                    {q.feedback && (
                      <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                        <p className={`text-gray-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
                          <span className="text-cyan-400 font-semibold">Explanation: </span>{q.feedback}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className="grid grid-cols-1 gap-2 mb-2">
                  {q.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(q.id, idx)}
                      className={`rounded-lg text-left transition-all px-4 py-2.5 text-sm flex items-center gap-2 ${
                        showResults 
                          ? idx === q.correct 
                            ? "bg-green-900/40 border-2 border-green-500 text-green-100 shadow-lg shadow-green-500/10" 
                            : answers[q.id] === idx 
                              ? "bg-red-900/40 border-2 border-red-500 text-red-100" 
                              : "bg-gray-900/50 text-gray-600 opacity-50 border border-gray-800"
                          : answers[q.id] === idx 
                            ? "bg-cyan-600 text-white border-2 border-cyan-400 shadow-lg shadow-cyan-500/20" 
                            : "bg-gray-900 hover:bg-gray-700 text-gray-400 border border-gray-700 hover:border-gray-600"
                      }`}
                    >
                      {showResults && idx === q.correct && <CheckCircle size={16} className="text-green-400 flex-shrink-0" />}
                      {showResults && answers[q.id] === idx && idx !== q.correct && <AlertCircle size={16} className="text-red-400 flex-shrink-0" />}
                      <span>{opt}</span>
                    </button>
                  ))}
                </div>
                {showResults && q.feedback && (
                  <div className={`p-3 rounded-lg bg-cyan-900/20 border border-cyan-500/30 text-gray-300 text-xs animate-fadeIn mt-3`}>
                    <p className="font-semibold text-cyan-400 mb-1 flex items-center gap-1"><CheckCircle size={12} /> Explanation:</p>
                    <p>{q.feedback}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoNowQuiz;
