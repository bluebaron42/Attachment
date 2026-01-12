import React, { useState } from 'react';
import { Scale, BookOpen, CheckCircle, XCircle, ArrowRight, RotateCcw, Lightbulb, Brain, Heart, Baby, Zap, GraduationCap } from 'lucide-react';

interface Statement {
  id: number;
  text: string;
  theory: 'learning' | 'bowlby';
  explanation: string;
  concept: string;
}

const statements: Statement[] = [
  {
    id: 1,
    text: "Attachment forms because the caregiver provides food, which satisfies the infant's hunger drive.",
    theory: 'learning',
    explanation: "This describes classical conditioning - the caregiver becomes associated with food (primary reinforcer), making the caregiver a secondary reinforcer.",
    concept: "Classical Conditioning / Drive Reduction"
  },
  {
    id: 2,
    text: "Infants are born with an innate need to attach to one primary caregiver for survival.",
    theory: 'bowlby',
    explanation: "This is Bowlby's concept of monotropy - the innate tendency to form one special attachment that is qualitatively different from others.",
    concept: "Monotropy"
  },
  {
    id: 3,
    text: "Caregivers who respond sensitively to infant signals create stronger attachments through reward.",
    theory: 'learning',
    explanation: "This describes operant conditioning - sensitive responses act as positive reinforcement, strengthening attachment behaviours.",
    concept: "Operant Conditioning"
  },
  {
    id: 4,
    text: "There is a critical period (first 2.5 years) during which attachment must form or it never will.",
    theory: 'bowlby',
    explanation: "Bowlby proposed a critical period for attachment formation based on evolutionary programming and imprinting research.",
    concept: "Critical Period"
  },
  {
    id: 5,
    text: "The infant's first attachment creates an internal working model that affects all future relationships.",
    theory: 'bowlby',
    explanation: "The internal working model is a mental template for relationships based on the primary attachment, influencing expectations and behaviours.",
    concept: "Internal Working Model"
  },
  {
    id: 6,
    text: "Attachment is a learned behaviour that develops through association and reinforcement over time.",
    theory: 'learning',
    explanation: "Learning theory sees attachment as acquired through classical and operant conditioning, not as an innate biological mechanism.",
    concept: "Learned Behaviour"
  },
  {
    id: 7,
    text: "Social releasers like crying and smiling are innate behaviours designed to elicit caregiving.",
    theory: 'bowlby',
    explanation: "Bowlby argued infants are born with social releasers - innate behaviours that trigger caregiving responses from adults.",
    concept: "Social Releasers"
  },
  {
    id: 8,
    text: "Any caregiver who provides food consistently can become the attachment figure.",
    theory: 'learning',
    explanation: "Learning theory doesn't distinguish between caregivers - whoever provides food becomes the conditioned stimulus for comfort.",
    concept: "Interchangeable Caregivers"
  }
];

interface Lesson5SimulationProps {
  isPresentation?: boolean;
}

const Lesson5Simulation: React.FC<Lesson5SimulationProps> = ({ isPresentation = false }) => {
  const [currentStatement, setCurrentStatement] = useState(0);
  const [selectedTheory, setSelectedTheory] = useState<'learning' | 'bowlby' | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [scores, setScores] = useState({ learning: 0, bowlby: 0 });
  const [completed, setCompleted] = useState(false);

  const statement = statements[currentStatement];

  const handleSelect = (theory: 'learning' | 'bowlby') => {
    if (showFeedback) return;
    setSelectedTheory(theory);
    setShowFeedback(true);
    if (theory === statement.theory) {
      setScores(prev => ({ ...prev, [theory]: prev[theory] + 1 }));
    }
  };

  const handleNext = () => {
    if (currentStatement < statements.length - 1) {
      setCurrentStatement(currentStatement + 1);
      setSelectedTheory(null);
      setShowFeedback(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentStatement(0);
    setSelectedTheory(null);
    setShowFeedback(false);
    setScores({ learning: 0, bowlby: 0 });
    setCompleted(false);
  };

  if (completed) {
    const total = scores.learning + scores.bowlby;
    const percentage = Math.round((total / statements.length) * 100);
    
    return (
      <div className={`w-full h-full flex flex-col items-center justify-center ${isPresentation ? 'p-8' : 'p-4'}`}>
        <div className={`bg-gray-800 rounded-2xl border border-yellow-500/30 shadow-2xl max-w-2xl w-full ${isPresentation ? 'p-10' : 'p-6'}`}>
          <div className="text-center">
            <div className={`inline-flex items-center justify-center rounded-full bg-yellow-900/50 mb-6 ${isPresentation ? 'w-24 h-24' : 'w-16 h-16'}`}>
              <Scale className={`text-yellow-400 ${isPresentation ? 'w-12 h-12' : 'w-8 h-8'}`} />
            </div>
            <h2 className={`font-bold text-white mb-3 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
              Theory Sort Complete!
            </h2>
            
            <div className={`bg-gray-900 rounded-xl mb-6 ${isPresentation ? 'p-8' : 'p-5'}`}>
              <div className={`font-bold mb-2 ${isPresentation ? 'text-6xl' : 'text-4xl'} ${percentage >= 80 ? 'text-green-400' : percentage >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                {total}/{statements.length}
              </div>
              <p className={`text-gray-400 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                Correctly Sorted ({percentage}%)
              </p>
            </div>

            <div className={`grid grid-cols-2 gap-4 mb-6 ${isPresentation ? 'gap-6' : 'gap-4'}`}>
              <div className={`bg-blue-900/30 border border-blue-500/50 rounded-xl ${isPresentation ? 'p-5' : 'p-4'}`}>
                <Brain className={`text-blue-400 mx-auto mb-2 ${isPresentation ? 'w-8 h-8' : 'w-6 h-6'}`} />
                <p className={`text-blue-400 font-bold ${isPresentation ? 'text-xl' : 'text-base'}`}>Learning Theory</p>
                <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>Dollard & Miller</p>
              </div>
              <div className={`bg-rose-900/30 border border-rose-500/50 rounded-xl ${isPresentation ? 'p-5' : 'p-4'}`}>
                <Heart className={`text-rose-400 mx-auto mb-2 ${isPresentation ? 'w-8 h-8' : 'w-6 h-6'}`} />
                <p className={`text-rose-400 font-bold ${isPresentation ? 'text-xl' : 'text-base'}`}>Bowlby's Theory</p>
                <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>Monotropic Theory</p>
              </div>
            </div>

            <div className={`bg-yellow-900/20 border border-yellow-500/30 rounded-xl text-left mb-6 ${isPresentation ? 'p-6' : 'p-4'}`}>
              <h3 className={`font-bold text-yellow-400 mb-3 flex items-center gap-2 ${isPresentation ? 'text-xl' : 'text-base'}`}>
                <Lightbulb size={isPresentation ? 24 : 18} />
                Key Differences
              </h3>
              <ul className={`text-gray-300 space-y-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                <li>• <strong>Learning:</strong> Attachment is learned through conditioning</li>
                <li>• <strong>Bowlby:</strong> Attachment is innate and evolutionary</li>
                <li>• <strong>Learning:</strong> Food is the primary basis</li>
                <li>• <strong>Bowlby:</strong> Emotional security is the primary basis</li>
              </ul>
            </div>

            <button
              onClick={handleRestart}
              className={`flex items-center gap-2 mx-auto bg-yellow-600 hover:bg-yellow-500 text-white rounded-lg font-semibold transition-colors ${isPresentation ? 'px-8 py-4 text-xl' : 'px-6 py-3 text-base'}`}
            >
              <RotateCcw size={isPresentation ? 22 : 18} />
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full h-full flex flex-col ${isPresentation ? 'p-6' : 'p-3'}`}>
      {/* Header */}
      <div className={`flex items-center justify-between mb-4 ${isPresentation ? 'mb-6' : 'mb-4'}`}>
        <div className="flex items-center gap-3">
          <div className={`rounded-xl bg-yellow-900/50 ${isPresentation ? 'p-3' : 'p-2'}`}>
            <Scale className={`text-yellow-400 ${isPresentation ? 'w-8 h-8' : 'w-5 h-5'}`} />
          </div>
          <div>
            <h2 className={`font-bold text-white ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
              ⚖️ Theory Sorting Challenge
            </h2>
            <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>
              Learning Theory vs Bowlby's Monotropic Theory
            </p>
          </div>
        </div>
        <div className={`bg-yellow-900/50 text-yellow-400 rounded-lg font-bold ${isPresentation ? 'px-4 py-2 text-lg' : 'px-3 py-1 text-sm'}`}>
          {currentStatement + 1}/{statements.length}
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
        <div 
          className="bg-gradient-to-r from-yellow-500 to-amber-400 h-2 rounded-full transition-all duration-500"
          style={{ width: `${((currentStatement + 1) / statements.length) * 100}%` }}
        />
      </div>

      {/* Statement Card */}
      <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-yellow-500/30 shadow-xl mb-6 ${isPresentation ? 'p-8' : 'p-5'}`}>
        <div className="flex items-start gap-3 mb-4">
          <div className={`rounded-full bg-yellow-900/50 flex-shrink-0 ${isPresentation ? 'p-3' : 'p-2'}`}>
            <BookOpen className={`text-yellow-400 ${isPresentation ? 'w-6 h-6' : 'w-5 h-5'}`} />
          </div>
          <div>
            <p className={`text-gray-400 font-semibold mb-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
              Which theory does this statement belong to?
            </p>
            <p className={`text-white leading-relaxed ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
              "{statement.text}"
            </p>
          </div>
        </div>
      </div>

      {/* Theory Selection */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow ${isPresentation ? 'gap-6' : 'gap-4'}`}>
        {/* Learning Theory */}
        <button
          onClick={() => handleSelect('learning')}
          disabled={showFeedback}
          className={`rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center ${isPresentation ? 'p-8' : 'p-5'} ${
            showFeedback
              ? statement.theory === 'learning'
                ? 'bg-green-900/40 border-green-500'
                : selectedTheory === 'learning'
                  ? 'bg-red-900/40 border-red-500'
                  : 'bg-gray-800 border-gray-700 opacity-50'
              : 'bg-blue-900/20 border-blue-500/50 hover:border-blue-400 hover:bg-blue-900/40'
          }`}
        >
          <div className={`rounded-full mb-4 ${isPresentation ? 'p-5' : 'p-4'} ${showFeedback && statement.theory === 'learning' ? 'bg-green-900/50' : 'bg-blue-900/50'}`}>
            <Brain className={`${showFeedback && statement.theory === 'learning' ? 'text-green-400' : 'text-blue-400'} ${isPresentation ? 'w-12 h-12' : 'w-8 h-8'}`} />
          </div>
          <h3 className={`font-bold text-white mb-2 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
            Learning Theory
          </h3>
          <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>
            Dollard & Miller (1950)
          </p>
          <div className={`flex items-center gap-2 mt-3 ${isPresentation ? 'text-base' : 'text-xs'}`}>
            <Zap size={isPresentation ? 16 : 12} className="text-blue-400" />
            <span className="text-blue-300">Classical & Operant Conditioning</span>
          </div>
          {showFeedback && statement.theory === 'learning' && (
            <CheckCircle className={`absolute top-4 right-4 text-green-400 ${isPresentation ? 'w-8 h-8' : 'w-6 h-6'}`} />
          )}
          {showFeedback && selectedTheory === 'learning' && statement.theory !== 'learning' && (
            <XCircle className={`absolute top-4 right-4 text-red-400 ${isPresentation ? 'w-8 h-8' : 'w-6 h-6'}`} />
          )}
        </button>

        {/* Bowlby's Theory */}
        <button
          onClick={() => handleSelect('bowlby')}
          disabled={showFeedback}
          className={`rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center ${isPresentation ? 'p-8' : 'p-5'} ${
            showFeedback
              ? statement.theory === 'bowlby'
                ? 'bg-green-900/40 border-green-500'
                : selectedTheory === 'bowlby'
                  ? 'bg-red-900/40 border-red-500'
                  : 'bg-gray-800 border-gray-700 opacity-50'
              : 'bg-rose-900/20 border-rose-500/50 hover:border-rose-400 hover:bg-rose-900/40'
          }`}
        >
          <div className={`rounded-full mb-4 ${isPresentation ? 'p-5' : 'p-4'} ${showFeedback && statement.theory === 'bowlby' ? 'bg-green-900/50' : 'bg-rose-900/50'}`}>
            <Heart className={`${showFeedback && statement.theory === 'bowlby' ? 'text-green-400' : 'text-rose-400'} ${isPresentation ? 'w-12 h-12' : 'w-8 h-8'}`} />
          </div>
          <h3 className={`font-bold text-white mb-2 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
            Bowlby's Monotropic Theory
          </h3>
          <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>
            John Bowlby (1969)
          </p>
          <div className={`flex items-center gap-2 mt-3 ${isPresentation ? 'text-base' : 'text-xs'}`}>
            <Baby size={isPresentation ? 16 : 12} className="text-rose-400" />
            <span className="text-rose-300">Innate & Evolutionary</span>
          </div>
          {showFeedback && statement.theory === 'bowlby' && (
            <CheckCircle className={`absolute top-4 right-4 text-green-400 ${isPresentation ? 'w-8 h-8' : 'w-6 h-6'}`} />
          )}
          {showFeedback && selectedTheory === 'bowlby' && statement.theory !== 'bowlby' && (
            <XCircle className={`absolute top-4 right-4 text-red-400 ${isPresentation ? 'w-8 h-8' : 'w-6 h-6'}`} />
          )}
        </button>
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div className={`mt-6 animate-fadeIn`}>
          <div className={`rounded-xl ${selectedTheory === statement.theory ? 'bg-green-900/30 border-green-500/50' : 'bg-red-900/30 border-red-500/50'} border ${isPresentation ? 'p-5' : 'p-4'}`}>
            <div className="flex items-start gap-3">
              <div className={`rounded-full flex-shrink-0 ${isPresentation ? 'p-2' : 'p-1'} ${selectedTheory === statement.theory ? 'bg-green-900/50' : 'bg-red-900/50'}`}>
                <GraduationCap className={`${selectedTheory === statement.theory ? 'text-green-400' : 'text-red-400'} ${isPresentation ? 'w-5 h-5' : 'w-4 h-4'}`} />
              </div>
              <div>
                <p className={`font-semibold mb-1 ${selectedTheory === statement.theory ? 'text-green-300' : 'text-red-300'} ${isPresentation ? 'text-lg' : 'text-base'}`}>
                  {selectedTheory === statement.theory ? 'Correct!' : 'Incorrect'} - {statement.concept}
                </p>
                <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                  {statement.explanation}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className={`mt-4 w-full flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-500 text-white rounded-lg font-semibold transition-colors ${isPresentation ? 'py-4 text-xl' : 'py-3 text-base'}`}
          >
            {currentStatement < statements.length - 1 ? (
              <>Next Statement <ArrowRight size={isPresentation ? 22 : 18} /></>
            ) : (
              <>View Results <CheckCircle size={isPresentation ? 22 : 18} /></>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Lesson5Simulation;
