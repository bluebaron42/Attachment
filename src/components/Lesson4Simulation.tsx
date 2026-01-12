import React, { useState } from 'react';
import { Bird, FlaskConical, CheckCircle, XCircle, ArrowRight, RotateCcw, Clock, Eye, Baby, ShieldAlert, Lightbulb, Beaker } from 'lucide-react';

interface Experiment {
  id: number;
  researcher: string;
  year: string;
  animal: string;
  description: string;
  scenario: string;
  question: string;
  options: { text: string; correct: boolean; feedback: string }[];
  keyFinding: string;
  icon: 'bird' | 'monkey';
}

const experiments: Experiment[] = [
  {
    id: 1,
    researcher: 'Lorenz',
    year: '1935',
    animal: 'Goslings',
    description: 'Divided goose eggs into two groups. One group hatched naturally with mother, the other group hatched with Lorenz present.',
    scenario: 'The goslings that hatched with Lorenz as the first moving object they saw are now being observed. They follow Lorenz everywhere and ignore their biological mother.',
    question: 'What concept does this demonstrate?',
    options: [
      { text: 'Classical conditioning', correct: false, feedback: 'Incorrect. This isn\'t about associating stimuli with responses through repeated pairings.' },
      { text: 'Imprinting during critical period', correct: true, feedback: 'Correct! Imprinting is an innate tendency to attach to the first moving object seen during the critical period (shortly after hatching).' },
      { text: 'Social learning', correct: false, feedback: 'Incorrect. The goslings didn\'t learn this by watching others - it\'s an innate biological mechanism.' }
    ],
    keyFinding: 'Imprinting is irreversible and occurs during a critical period',
    icon: 'bird'
  },
  {
    id: 2,
    researcher: 'Lorenz',
    year: '1935',
    animal: 'Goslings',
    description: 'Lorenz observed the imprinted goslings as they matured into adulthood.',
    scenario: 'When the imprinted geese reached sexual maturity, they attempted to mate with humans rather than other geese. One goose named "Martina" would only perform courtship displays towards Lorenz.',
    question: 'What does this suggest about imprinting?',
    options: [
      { text: 'Imprinting only affects infancy', correct: false, feedback: 'Incorrect. This shows imprinting has lasting effects into adulthood.' },
      { text: 'Sexual imprinting affects later mate choice', correct: true, feedback: 'Correct! Sexual imprinting during the critical period permanently affects mate preferences in adulthood.' },
      { text: 'Imprinting can be easily reversed', correct: false, feedback: 'Incorrect. The geese\'s continued attempts to mate with humans shows imprinting is NOT reversible.' }
    ],
    keyFinding: 'Sexual imprinting affects later mating preferences',
    icon: 'bird'
  },
  {
    id: 3,
    researcher: 'Harlow',
    year: '1958',
    animal: 'Rhesus Monkeys',
    description: 'Infant monkeys were separated from mothers at birth and raised with two artificial "surrogate mothers" - one made of wire with a feeding bottle, one covered in soft cloth but no food.',
    scenario: 'The infant monkey spends 17-18 hours per day clinging to the cloth mother, only briefly visiting the wire mother to feed. When frightened by a mechanical spider, the monkey runs to the cloth mother.',
    question: 'What does this suggest about attachment?',
    options: [
      { text: 'Food is the primary basis for attachment', correct: false, feedback: 'Incorrect. If food was primary, monkeys would prefer the wire mother with the feeding bottle.' },
      { text: 'Contact comfort is more important than food', correct: true, feedback: 'Correct! Harlow showed that "contact comfort" (soft touch) is more important for attachment than food provision, challenging behaviourist theories.' },
      { text: 'Monkeys cannot form attachments to objects', correct: false, feedback: 'Incorrect. The monkeys clearly formed attachments to the cloth surrogate.' }
    ],
    keyFinding: 'Contact comfort, not food, is the basis for attachment',
    icon: 'monkey'
  },
  {
    id: 4,
    researcher: 'Harlow',
    year: '1958',
    animal: 'Rhesus Monkeys',
    description: 'Harlow conducted follow-up observations of the monkeys raised with surrogate mothers as they matured.',
    scenario: 'As adults, these monkeys showed severe social and emotional problems. They were aggressive, had difficulty mating, and females who became mothers were neglectful or abusive to their own infants. Some were described as "motherless mothers."',
    question: 'What long-term consequence does this demonstrate?',
    options: [
      { text: 'Early deprivation has no lasting effects', correct: false, feedback: 'Incorrect. The severe adult problems clearly show lasting effects of early deprivation.' },
      { text: 'Maternal deprivation causes permanent damage', correct: true, feedback: 'Correct! The "motherless mothers" demonstrate that early maternal deprivation leads to lasting social and parenting difficulties.' },
      { text: 'Surrogate mothers are just as good as real mothers', correct: false, feedback: 'Incorrect. The monkeys\' problems show that surrogates cannot fully replace real maternal care.' }
    ],
    keyFinding: 'Early maternal deprivation leads to lasting emotional and social damage',
    icon: 'monkey'
  },
  {
    id: 5,
    researcher: 'Harlow',
    year: '1958',
    animal: 'Rhesus Monkeys',
    description: 'Harlow tested whether the negative effects of isolation could be reversed by later social contact.',
    scenario: 'Monkeys isolated for 90 days showed recovery when placed with normally-raised peers. However, monkeys isolated for 6 months showed permanent social deficits that could not be reversed, even with extensive later socialization.',
    question: 'What concept does this finding support?',
    options: [
      { text: 'There is no time limit for forming attachments', correct: false, feedback: 'Incorrect. The 6-month isolation results show there IS a time limit.' },
      { text: 'A critical period exists for social development', correct: true, feedback: 'Correct! This supports the idea of a critical period - attachments must form within a specific time window or permanent damage occurs.' },
      { text: 'Isolation has the same effect regardless of duration', correct: false, feedback: 'Incorrect. The clear difference between 90-day and 6-month isolation shows duration matters greatly.' }
    ],
    keyFinding: 'Critical period exists - extended isolation causes irreversible damage',
    icon: 'monkey'
  },
  {
    id: 6,
    researcher: 'Lorenz & Harlow',
    year: 'Combined',
    animal: 'Application',
    description: 'Consider what these animal studies tell us about human attachment.',
    scenario: 'A psychology student argues: "Since Lorenz\'s goslings and Harlow\'s monkeys show attachment behaviors similar to humans, we can directly apply these findings to understand human infant attachment."',
    question: 'What is the main limitation of this argument?',
    options: [
      { text: 'The studies are too old to be relevant', correct: false, feedback: 'Incorrect. While old, these are foundational studies. The issue is about generalizability, not age.' },
      { text: 'Generalizing from animals to humans is problematic', correct: true, feedback: 'Correct! Humans have more complex cognition, cultural influences, and attachment systems. Animal studies may not directly apply to human attachment.' },
      { text: 'Animals cannot form attachments', correct: false, feedback: 'Incorrect. These studies clearly demonstrate that animals DO form attachments.' }
    ],
    keyFinding: 'Animal studies have limited generalizability to humans',
    icon: 'monkey'
  }
];

interface Lesson4SimulationProps {
  isPresentation?: boolean;
}

const Lesson4Simulation: React.FC<Lesson4SimulationProps> = ({ isPresentation = false }) => {
  const [currentExperiment, setCurrentExperiment] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const experiment = experiments[currentExperiment];

  const handleAnswer = (optionIndex: number) => {
    if (showFeedback) return;
    setSelectedAnswer(optionIndex);
    setShowFeedback(true);
    if (experiment.options[optionIndex].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentExperiment < experiments.length - 1) {
      setCurrentExperiment(currentExperiment + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setShowDetails(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentExperiment(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setCompleted(false);
    setShowDetails(false);
  };

  if (completed) {
    const percentage = Math.round((score / experiments.length) * 100);
    return (
      <div className={`w-full h-full flex flex-col items-center justify-center ${isPresentation ? 'p-8' : 'p-4'}`}>
        <div className={`bg-gray-800 rounded-2xl border border-red-500/30 shadow-2xl max-w-2xl w-full ${isPresentation ? 'p-10' : 'p-6'}`}>
          <div className="text-center">
            <div className={`inline-flex items-center justify-center rounded-full bg-red-900/50 mb-6 ${isPresentation ? 'w-24 h-24' : 'w-16 h-16'}`}>
              <Beaker className={`text-red-400 ${isPresentation ? 'w-12 h-12' : 'w-8 h-8'}`} />
            </div>
            <h2 className={`font-bold text-white mb-3 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
              Lab Analysis Complete!
            </h2>
            <p className={`text-gray-400 mb-6 ${isPresentation ? 'text-xl' : 'text-base'}`}>
              You've analyzed all the key experiments
            </p>

            <div className={`bg-gray-900 rounded-xl mb-6 ${isPresentation ? 'p-8' : 'p-5'}`}>
              <div className={`font-bold mb-2 ${isPresentation ? 'text-6xl' : 'text-4xl'} ${percentage >= 80 ? 'text-green-400' : percentage >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                {score}/{experiments.length}
              </div>
              <p className={`text-gray-400 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                Correct Analyses ({percentage}%)
              </p>
            </div>

            <div className={`bg-red-900/20 border border-red-500/30 rounded-xl text-left mb-6 ${isPresentation ? 'p-6' : 'p-4'}`}>
              <h3 className={`font-bold text-red-400 mb-3 flex items-center gap-2 ${isPresentation ? 'text-xl' : 'text-base'}`}>
                <Lightbulb size={isPresentation ? 24 : 18} />
                Key Takeaways
              </h3>
              <ul className={`text-gray-300 space-y-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                <li>• <strong>Lorenz:</strong> Imprinting occurs during critical period and is irreversible</li>
                <li>• <strong>Harlow:</strong> Contact comfort, not food, is basis for attachment</li>
                <li>• Both show critical periods exist for healthy development</li>
                <li>• Animal research has limitations when applied to humans</li>
              </ul>
            </div>

            <button
              onClick={handleRestart}
              className={`flex items-center gap-2 mx-auto bg-red-600 hover:bg-red-500 text-white rounded-lg font-semibold transition-colors ${isPresentation ? 'px-8 py-4 text-xl' : 'px-6 py-3 text-base'}`}
            >
              <RotateCcw size={isPresentation ? 22 : 18} />
              Restart Lab
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
          <div className={`rounded-xl bg-red-900/50 ${isPresentation ? 'p-3' : 'p-2'}`}>
            <FlaskConical className={`text-red-400 ${isPresentation ? 'w-8 h-8' : 'w-5 h-5'}`} />
          </div>
          <div>
            <h2 className={`font-bold text-white ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
              🔬 Research Lab Simulator
            </h2>
            <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>
              Analyze landmark animal studies
            </p>
          </div>
        </div>
        <div className={`flex items-center gap-4 ${isPresentation ? 'gap-6' : 'gap-4'}`}>
          <div className="flex items-center gap-2 text-gray-400">
            <Clock size={isPresentation ? 18 : 14} />
            <span className={isPresentation ? 'text-base' : 'text-xs'}>Experiment {currentExperiment + 1}/{experiments.length}</span>
          </div>
          <div className={`bg-green-900/50 text-green-400 rounded-lg font-bold ${isPresentation ? 'px-4 py-2 text-lg' : 'px-3 py-1 text-sm'}`}>
            Score: {score}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
        <div 
          className="bg-gradient-to-r from-red-500 to-rose-400 h-2 rounded-full transition-all duration-500"
          style={{ width: `${((currentExperiment + 1) / experiments.length) * 100}%` }}
        />
      </div>

      {/* Main content */}
      <div className={`flex-grow grid ${isPresentation ? 'grid-cols-2 gap-6' : 'grid-cols-1 lg:grid-cols-2 gap-4'}`}>
        {/* Left: Experiment Details */}
        <div className="flex flex-col gap-4">
          {/* Researcher Card */}
          <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-red-500/30 shadow-lg ${isPresentation ? 'p-6' : 'p-4'}`}>
            <div className="flex items-center gap-3 mb-3">
              <div className={`rounded-full ${experiment.icon === 'bird' ? 'bg-amber-900/60' : 'bg-rose-900/60'} ${isPresentation ? 'p-3' : 'p-2'}`}>
                {experiment.icon === 'bird' ? (
                  <Bird className={`${experiment.icon === 'bird' ? 'text-amber-400' : 'text-rose-400'} ${isPresentation ? 'w-7 h-7' : 'w-5 h-5'}`} />
                ) : (
                  <Baby className={`text-rose-400 ${isPresentation ? 'w-7 h-7' : 'w-5 h-5'}`} />
                )}
              </div>
              <div>
                <h3 className={`font-bold text-white ${isPresentation ? 'text-xl' : 'text-base'}`}>
                  {experiment.researcher} ({experiment.year})
                </h3>
                <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>
                  Study: {experiment.animal}
                </p>
              </div>
            </div>
            <p className={`text-gray-300 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
              {experiment.description}
            </p>
          </div>

          {/* Scenario Card */}
          <div className={`bg-gray-800 rounded-xl border-l-4 border-red-500 flex-grow ${isPresentation ? 'p-6' : 'p-4'}`}>
            <div className="flex items-center gap-2 mb-3">
              <Eye size={isPresentation ? 20 : 16} className="text-red-400" />
              <h4 className={`font-semibold text-red-400 ${isPresentation ? 'text-lg' : 'text-sm'}`}>Observation</h4>
            </div>
            <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
              {experiment.scenario}
            </p>
          </div>
        </div>

        {/* Right: Question & Options */}
        <div className="flex flex-col">
          <div className={`bg-gray-800 rounded-xl border border-gray-700 flex-grow flex flex-col ${isPresentation ? 'p-6' : 'p-4'}`}>
            <div className="flex items-center gap-2 mb-4">
              <ShieldAlert size={isPresentation ? 22 : 16} className="text-red-400" />
              <h4 className={`font-bold text-white ${isPresentation ? 'text-xl' : 'text-base'}`}>
                Analysis Question
              </h4>
            </div>
            
            <p className={`text-gray-200 mb-5 ${isPresentation ? 'text-xl' : 'text-base'}`}>
              {experiment.question}
            </p>

            <div className={`space-y-3 flex-grow ${isPresentation ? 'space-y-4' : 'space-y-3'}`}>
              {experiment.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = option.correct;
                let buttonClass = 'bg-gray-700 hover:bg-gray-600 border-gray-600 hover:border-red-500/50';
                
                if (showFeedback) {
                  if (isCorrect) {
                    buttonClass = 'bg-green-900/40 border-green-500 text-green-300';
                  } else if (isSelected && !isCorrect) {
                    buttonClass = 'bg-red-900/40 border-red-500 text-red-300';
                  } else {
                    buttonClass = 'bg-gray-800 border-gray-700 opacity-50';
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showFeedback}
                    className={`w-full text-left rounded-xl border-2 transition-all duration-300 flex items-center gap-3 ${buttonClass} ${isPresentation ? 'p-5 text-lg' : 'p-3 text-sm'}`}
                  >
                    <div className={`rounded-full flex items-center justify-center flex-shrink-0 ${isPresentation ? 'w-8 h-8' : 'w-6 h-6'} ${showFeedback && isCorrect ? 'bg-green-500' : showFeedback && isSelected ? 'bg-red-500' : 'bg-gray-600'}`}>
                      {showFeedback && isCorrect ? (
                        <CheckCircle size={isPresentation ? 18 : 14} className="text-white" />
                      ) : showFeedback && isSelected ? (
                        <XCircle size={isPresentation ? 18 : 14} className="text-white" />
                      ) : (
                        <span className={`text-gray-300 font-bold ${isPresentation ? 'text-sm' : 'text-xs'}`}>{String.fromCharCode(65 + index)}</span>
                      )}
                    </div>
                    <span className="text-gray-200">{option.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className={`mt-4 animate-fadeIn`}>
                <div className={`rounded-xl ${experiment.options[selectedAnswer!].correct ? 'bg-green-900/30 border-green-500/50' : 'bg-red-900/30 border-red-500/50'} border ${isPresentation ? 'p-5' : 'p-4'}`}>
                  <p className={`${experiment.options[selectedAnswer!].correct ? 'text-green-300' : 'text-red-300'} ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    {experiment.options[selectedAnswer!].feedback}
                  </p>
                </div>

                {/* Key Finding Toggle */}
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className={`mt-3 flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors ${isPresentation ? 'text-base' : 'text-sm'}`}
                >
                  <Lightbulb size={isPresentation ? 18 : 14} />
                  {showDetails ? 'Hide' : 'Show'} Key Finding
                </button>

                {showDetails && (
                  <div className={`mt-3 bg-red-900/20 border border-red-500/30 rounded-lg animate-fadeIn ${isPresentation ? 'p-4' : 'p-3'}`}>
                    <p className={`text-red-300 font-semibold ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      📌 {experiment.keyFinding}
                    </p>
                  </div>
                )}

                <button
                  onClick={handleNext}
                  className={`mt-4 w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white rounded-lg font-semibold transition-colors ${isPresentation ? 'py-4 text-xl' : 'py-3 text-base'}`}
                >
                  {currentExperiment < experiments.length - 1 ? (
                    <>Next Experiment <ArrowRight size={isPresentation ? 22 : 18} /></>
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

export default Lesson4Simulation;
