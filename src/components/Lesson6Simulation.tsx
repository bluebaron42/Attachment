import React, { useState } from 'react';
import { Baby, CheckCircle, XCircle, ArrowRight, RotateCcw, Eye, AlertTriangle, Smile, GraduationCap } from 'lucide-react';

interface Scenario {
  id: number;
  episode: string;
  description: string;
  behaviours: string[];
  question: string;
  options: { type: string; correct: boolean; feedback: string }[];
  attachmentType: 'secure' | 'insecure-avoidant' | 'insecure-resistant';
}

const scenarios: Scenario[] = [
  {
    id: 1,
    episode: 'Separation Episode',
    description: 'The mother leaves the room. The infant watches her leave but continues playing with toys. When the stranger approaches, the infant accepts comfort from them.',
    behaviours: ['Minimal distress when mother leaves', 'Continues to explore and play', 'Willing to interact with stranger'],
    question: 'What attachment type does this infant display?',
    options: [
      { type: 'Secure (Type B)', correct: false, feedback: 'Secure infants typically show some distress when the mother leaves and are wary of strangers.' },
      { type: 'Insecure-Avoidant (Type A)', correct: true, feedback: 'Correct! Insecure-avoidant infants show little distress when separated and are willing to be comforted by strangers.' },
      { type: 'Insecure-Resistant (Type C)', correct: false, feedback: 'Insecure-resistant infants show extreme distress upon separation.' }
    ],
    attachmentType: 'insecure-avoidant'
  },
  {
    id: 2,
    episode: 'Reunion Episode',
    description: 'The mother returns to the room. The infant immediately crawls to her, reaching up to be picked up. Once in her arms, the infant calms quickly and soon returns to playing.',
    behaviours: ['Enthusiastic greeting of mother', 'Quickly soothed by mother\'s return', 'Uses mother as secure base to explore'],
    question: 'What attachment type does this infant display?',
    options: [
      { type: 'Secure (Type B)', correct: true, feedback: 'Correct! Secure infants are enthusiastic on reunion, quickly soothed, and use the mother as a secure base for exploration.' },
      { type: 'Insecure-Avoidant (Type A)', correct: false, feedback: 'Insecure-avoidant infants typically ignore or avoid the mother on reunion.' },
      { type: 'Insecure-Resistant (Type C)', correct: false, feedback: 'Insecure-resistant infants seek comfort but resist it simultaneously.' }
    ],
    attachmentType: 'secure'
  },
  {
    id: 3,
    episode: 'Separation Episode',
    description: 'The mother leaves the room. The infant becomes extremely distressed, crying loudly and refusing to be comforted by the stranger. The infant appears inconsolable.',
    behaviours: ['Extreme distress on separation', 'Rejects stranger\'s attempts at comfort', 'Continues crying throughout separation'],
    question: 'What attachment type does this infant display?',
    options: [
      { type: 'Secure (Type B)', correct: false, feedback: 'Secure infants show some distress but can be partly comforted by strangers.' },
      { type: 'Insecure-Avoidant (Type A)', correct: false, feedback: 'Insecure-avoidant infants show minimal distress on separation.' },
      { type: 'Insecure-Resistant (Type C)', correct: true, feedback: 'Correct! Insecure-resistant (ambivalent) infants show extreme distress on separation and cannot be comforted by strangers.' }
    ],
    attachmentType: 'insecure-resistant'
  },
  {
    id: 4,
    episode: 'Reunion Episode',
    description: 'The mother returns. The infant doesn\'t look up or acknowledge her return. When she approaches, the infant turns away and continues playing with toys independently.',
    behaviours: ['Ignores mother on return', 'Avoids physical contact', 'Shows little emotion either way'],
    question: 'What attachment type does this infant display?',
    options: [
      { type: 'Secure (Type B)', correct: false, feedback: 'Secure infants greet the mother enthusiastically on reunion.' },
      { type: 'Insecure-Avoidant (Type A)', correct: true, feedback: 'Correct! Insecure-avoidant infants typically avoid or ignore the caregiver on reunion, showing little emotional response.' },
      { type: 'Insecure-Resistant (Type C)', correct: false, feedback: 'Insecure-resistant infants seek contact with the mother on reunion.' }
    ],
    attachmentType: 'insecure-avoidant'
  },
  {
    id: 5,
    episode: 'Reunion Episode',
    description: 'The mother returns. The infant immediately rushes to her, but when picked up, the infant struggles, kicks, and pushes her away while still crying. The infant seems to want comfort but also reject it.',
    behaviours: ['Seeks proximity to mother', 'Resists comfort when given', 'Difficult to soothe, continues to fuss'],
    question: 'What attachment type does this infant display?',
    options: [
      { type: 'Secure (Type B)', correct: false, feedback: 'Secure infants are easily soothed on reunion.' },
      { type: 'Insecure-Avoidant (Type A)', correct: false, feedback: 'Insecure-avoidant infants don\'t seek proximity to the mother.' },
      { type: 'Insecure-Resistant (Type C)', correct: true, feedback: 'Correct! Insecure-resistant infants show this classic approach-avoidance conflict, seeking comfort while simultaneously resisting it.' }
    ],
    attachmentType: 'insecure-resistant'
  },
  {
    id: 6,
    episode: 'Exploration',
    description: 'The mother and infant enter the room. The infant explores the toys confidently, occasionally looking back at the mother. When the mother encourages exploration, the infant moves further away but checks back regularly.',
    behaviours: ['Confident exploration', 'Regular visual check-ins with mother', 'Uses mother as secure base'],
    question: 'What attachment type does this infant display?',
    options: [
      { type: 'Secure (Type B)', correct: true, feedback: 'Correct! This "secure base" behaviour - confident exploration with regular check-ins - is characteristic of secure attachment.' },
      { type: 'Insecure-Avoidant (Type A)', correct: false, feedback: 'Insecure-avoidant infants explore independently without checking in with the caregiver.' },
      { type: 'Insecure-Resistant (Type C)', correct: false, feedback: 'Insecure-resistant infants are often reluctant to explore, staying close to the caregiver.' }
    ],
    attachmentType: 'secure'
  }
];

interface Lesson6SimulationProps {
  isPresentation?: boolean;
}

const Lesson6Simulation: React.FC<Lesson6SimulationProps> = ({ isPresentation = false }) => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [scores, setScores] = useState({ correct: 0, total: 0 });
  const [completed, setCompleted] = useState(false);

  const scenario = scenarios[currentScenario];

  const handleAnswer = (optionIndex: number) => {
    if (showFeedback) return;
    setSelectedAnswer(optionIndex);
    setShowFeedback(true);
    setScores(prev => ({
      correct: prev.correct + (scenario.options[optionIndex].correct ? 1 : 0),
      total: prev.total + 1
    }));
  };

  const handleNext = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentScenario(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScores({ correct: 0, total: 0 });
    setCompleted(false);
  };

  if (completed) {
    const percentage = Math.round((scores.correct / scenarios.length) * 100);
    
    return (
      <div className={`w-full h-full flex flex-col items-center justify-center ${isPresentation ? 'p-8' : 'p-4'}`}>
        <div className={`bg-gray-800 rounded-2xl border border-teal-500/30 shadow-2xl max-w-3xl w-full ${isPresentation ? 'p-10' : 'p-6'}`}>
          <div className="text-center">
            <div className={`inline-flex items-center justify-center rounded-full bg-teal-900/50 mb-6 ${isPresentation ? 'w-24 h-24' : 'w-16 h-16'}`}>
              <Baby className={`text-teal-400 ${isPresentation ? 'w-12 h-12' : 'w-8 h-8'}`} />
            </div>
            <h2 className={`font-bold text-white mb-3 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
              Strange Situation Complete!
            </h2>
            
            <div className={`bg-gray-900 rounded-xl mb-6 ${isPresentation ? 'p-8' : 'p-5'}`}>
              <div className={`font-bold mb-2 ${isPresentation ? 'text-6xl' : 'text-4xl'} ${percentage >= 80 ? 'text-green-400' : percentage >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                {scores.correct}/{scenarios.length}
              </div>
              <p className={`text-gray-400 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                Correct Classifications ({percentage}%)
              </p>
            </div>

            {/* Attachment Types Summary */}
            <div className={`grid grid-cols-3 gap-4 mb-6 ${isPresentation ? 'gap-6' : 'gap-3'}`}>
              <div className={`bg-green-900/20 border border-green-500/30 rounded-xl ${isPresentation ? 'p-5' : 'p-3'}`}>
                <Smile className={`text-green-400 mx-auto mb-2 ${isPresentation ? 'w-8 h-8' : 'w-5 h-5'}`} />
                <p className={`text-green-400 font-bold ${isPresentation ? 'text-base' : 'text-xs'}`}>Type B</p>
                <p className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Secure</p>
                <p className={`text-green-300 font-bold ${isPresentation ? 'text-lg' : 'text-sm'}`}>60-75%</p>
              </div>
              <div className={`bg-blue-900/20 border border-blue-500/30 rounded-xl ${isPresentation ? 'p-5' : 'p-3'}`}>
                <Eye className={`text-blue-400 mx-auto mb-2 ${isPresentation ? 'w-8 h-8' : 'w-5 h-5'}`} />
                <p className={`text-blue-400 font-bold ${isPresentation ? 'text-base' : 'text-xs'}`}>Type A</p>
                <p className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Avoidant</p>
                <p className={`text-blue-300 font-bold ${isPresentation ? 'text-lg' : 'text-sm'}`}>20-25%</p>
              </div>
              <div className={`bg-amber-900/20 border border-amber-500/30 rounded-xl ${isPresentation ? 'p-5' : 'p-3'}`}>
                <AlertTriangle className={`text-amber-400 mx-auto mb-2 ${isPresentation ? 'w-8 h-8' : 'w-5 h-5'}`} />
                <p className={`text-amber-400 font-bold ${isPresentation ? 'text-base' : 'text-xs'}`}>Type C</p>
                <p className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Resistant</p>
                <p className={`text-amber-300 font-bold ${isPresentation ? 'text-lg' : 'text-sm'}`}>10-15%</p>
              </div>
            </div>

            <button
              onClick={handleRestart}
              className={`flex items-center gap-2 mx-auto bg-teal-600 hover:bg-teal-500 text-white rounded-lg font-semibold transition-colors ${isPresentation ? 'px-8 py-4 text-xl' : 'px-6 py-3 text-base'}`}
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
          <div className={`rounded-xl bg-teal-900/50 ${isPresentation ? 'p-3' : 'p-2'}`}>
            <Baby className={`text-teal-400 ${isPresentation ? 'w-8 h-8' : 'w-5 h-5'}`} />
          </div>
          <div>
            <h2 className={`font-bold text-white ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
              👶 Strange Situation Classifier
            </h2>
            <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>
              Identify the attachment type from behaviour
            </p>
          </div>
        </div>
        <div className={`flex items-center gap-4`}>
          <div className={`bg-teal-900/50 text-teal-400 rounded-lg font-bold ${isPresentation ? 'px-4 py-2 text-lg' : 'px-3 py-1 text-sm'}`}>
            {currentScenario + 1}/{scenarios.length}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
        <div 
          className="bg-gradient-to-r from-teal-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
          style={{ width: `${((currentScenario + 1) / scenarios.length) * 100}%` }}
        />
      </div>

      {/* Main content */}
      <div className={`flex-grow grid ${isPresentation ? 'grid-cols-2 gap-6' : 'grid-cols-1 lg:grid-cols-2 gap-4'}`}>
        {/* Left: Scenario */}
        <div className="flex flex-col gap-4">
          {/* Episode Card */}
          <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-teal-500/30 shadow-lg ${isPresentation ? 'p-6' : 'p-4'}`}>
            <div className="flex items-center gap-2 mb-3">
              <span className={`bg-teal-900/60 text-teal-400 font-bold rounded-lg ${isPresentation ? 'px-3 py-1 text-base' : 'px-2 py-1 text-xs'}`}>
                {scenario.episode}
              </span>
            </div>
            <p className={`text-gray-200 leading-relaxed ${isPresentation ? 'text-xl' : 'text-base'}`}>
              {scenario.description}
            </p>
          </div>

          {/* Observed Behaviours */}
          <div className={`bg-gray-800 rounded-xl border-l-4 border-teal-500 flex-grow ${isPresentation ? 'p-6' : 'p-4'}`}>
            <div className="flex items-center gap-2 mb-3">
              <Eye size={isPresentation ? 20 : 16} className="text-teal-400" />
              <h4 className={`font-semibold text-teal-400 ${isPresentation ? 'text-lg' : 'text-sm'}`}>Observed Behaviours</h4>
            </div>
            <ul className={`space-y-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
              {scenario.behaviours.map((behaviour, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <span className="text-teal-400 mt-1">•</span>
                  <span>{behaviour}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Classification */}
        <div className="flex flex-col">
          <div className={`bg-gray-800 rounded-xl border border-gray-700 flex-grow flex flex-col ${isPresentation ? 'p-6' : 'p-4'}`}>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={isPresentation ? 22 : 16} className="text-teal-400" />
              <h4 className={`font-bold text-white ${isPresentation ? 'text-xl' : 'text-base'}`}>
                {scenario.question}
              </h4>
            </div>

            <div className={`space-y-3 flex-grow ${isPresentation ? 'space-y-4' : 'space-y-3'}`}>
              {scenario.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = option.correct;
                let buttonClass = 'bg-gray-700 hover:bg-gray-600 border-gray-600';
                let iconColor = 'text-gray-400';
                
                if (showFeedback) {
                  if (isCorrect) {
                    buttonClass = 'bg-green-900/40 border-green-500';
                    iconColor = 'text-green-400';
                  } else if (isSelected && !isCorrect) {
                    buttonClass = 'bg-red-900/40 border-red-500';
                    iconColor = 'text-red-400';
                  } else {
                    buttonClass = 'bg-gray-800 border-gray-700 opacity-50';
                  }
                } else {
                  buttonClass = 'bg-gray-700 hover:bg-gray-600 border-gray-600 hover:border-teal-500/50';
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showFeedback}
                    className={`w-full text-left rounded-xl border-2 transition-all duration-300 flex items-center gap-4 ${buttonClass} ${isPresentation ? 'p-5' : 'p-4'}`}
                  >
                    <div className={`rounded-full flex items-center justify-center flex-shrink-0 ${isPresentation ? 'w-10 h-10' : 'w-8 h-8'} ${
                      showFeedback && isCorrect ? 'bg-green-900/50' : 
                      showFeedback && isSelected ? 'bg-red-900/50' : 
                      'bg-gray-600'
                    }`}>
                      {showFeedback && isCorrect ? (
                        <CheckCircle size={isPresentation ? 20 : 16} className="text-green-400" />
                      ) : showFeedback && isSelected ? (
                        <XCircle size={isPresentation ? 20 : 16} className="text-red-400" />
                      ) : (
                        <span className={`font-bold ${isPresentation ? 'text-base' : 'text-sm'} ${iconColor}`}>
                          {option.type.includes('Secure') ? 'B' : option.type.includes('Avoidant') ? 'A' : 'C'}
                        </span>
                      )}
                    </div>
                    <span className={`text-gray-200 font-medium ${isPresentation ? 'text-lg' : 'text-base'}`}>{option.type}</span>
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className={`mt-4 animate-fadeIn`}>
                <div className={`rounded-xl ${scenario.options[selectedAnswer!].correct ? 'bg-green-900/30 border-green-500/50' : 'bg-red-900/30 border-red-500/50'} border ${isPresentation ? 'p-5' : 'p-4'}`}>
                  <p className={`${scenario.options[selectedAnswer!].correct ? 'text-green-300' : 'text-red-300'} ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    {scenario.options[selectedAnswer!].feedback}
                  </p>
                </div>

                <button
                  onClick={handleNext}
                  className={`mt-4 w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg font-semibold transition-colors ${isPresentation ? 'py-4 text-xl' : 'py-3 text-base'}`}
                >
                  {currentScenario < scenarios.length - 1 ? (
                    <>Next Scenario <ArrowRight size={isPresentation ? 22 : 18} /></>
                  ) : (
                    <>View Results <CheckCircle size={isPresentation ? 22 : 18} /></>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson6Simulation;
