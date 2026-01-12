import { useState } from 'react';
import { Baby, Users, Heart, CheckCircle, XCircle, ArrowRight, RotateCcw, Clock, Eye } from 'lucide-react';

interface SimulationProps {
  isPresentation: boolean;
  themeColor?: string;
}

interface InfantBehavior {
  id: number;
  description: string;
  age: string;
  correctStage: number;
  indicators: string[];
}

interface Stage {
  id: number;
  name: string;
  ageRange: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: React.ReactNode;
  keyFeatures: string[];
}

export default function Lesson2Simulation({ isPresentation }: SimulationProps) {
  const [currentCase, setCurrentCase] = useState(0);
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showTimeline, setShowTimeline] = useState(false);

  const stages: Stage[] = [
    {
      id: 0,
      name: 'Asocial Stage',
      ageRange: '0-6 weeks',
      color: 'text-slate-400',
      bgColor: 'bg-slate-900/50',
      borderColor: 'border-slate-500',
      icon: <Baby size={isPresentation ? 28 : 20} />,
      keyFeatures: ['Similar responses to objects and people', 'Preference for faces/eyes', 'No specific attachments']
    },
    {
      id: 1,
      name: 'Indiscriminate Attachment',
      ageRange: '6 weeks - 6 months',
      color: 'text-blue-400',
      bgColor: 'bg-blue-900/50',
      borderColor: 'border-blue-500',
      icon: <Users size={isPresentation ? 28 : 20} />,
      keyFeatures: ['Preference for humans over objects', 'Happy with any caregiver', 'No stranger anxiety yet']
    },
    {
      id: 2,
      name: 'Specific Attachment',
      ageRange: '7+ months',
      color: 'text-amber-400',
      bgColor: 'bg-amber-900/50',
      borderColor: 'border-amber-500',
      icon: <Heart size={isPresentation ? 28 : 20} />,
      keyFeatures: ['Primary attachment figure', 'Stranger anxiety appears', 'Separation anxiety']
    },
    {
      id: 3,
      name: 'Multiple Attachments',
      ageRange: '10+ months',
      color: 'text-green-400',
      bgColor: 'bg-green-900/50',
      borderColor: 'border-green-500',
      icon: <Heart size={isPresentation ? 28 : 20} />,
      keyFeatures: ['Secondary attachments form', 'Extended family bonds', 'Hierarchy of attachments']
    }
  ];

  const infantCases: InfantBehavior[] = [
    {
      id: 1,
      description: 'Baby Lily (3 weeks old) shows similar interest when shown a colorful mobile and when her grandmother visits. She doesn\'t seem to distinguish between social and non-social stimuli.',
      age: '3 weeks',
      correctStage: 0,
      indicators: ['No preference for people over objects', 'Similar responses to all stimuli']
    },
    {
      id: 2,
      description: 'Baby Marcus (4 months old) smiles and coos when any adult gives him attention. He seems equally happy being held by his nursery worker as by his parents.',
      age: '4 months',
      correctStage: 1,
      indicators: ['Enjoys human company', 'No specific attachment figure', 'Happy with any caregiver']
    },
    {
      id: 3,
      description: 'Baby Sofia (8 months old) cries when her mother leaves the room and looks anxious when an unfamiliar relative tries to hold her. She calms quickly when mother returns.',
      age: '8 months',
      correctStage: 2,
      indicators: ['Separation anxiety present', 'Stranger anxiety', 'Primary attachment to mother']
    },
    {
      id: 4,
      description: 'Baby James (14 months old) is attached to his mother but also shows distress when his father or grandmother leave. He has formed bonds with multiple family members.',
      age: '14 months',
      correctStage: 3,
      indicators: ['Multiple attachment figures', 'Secondary attachments', 'Hierarchy of attachments']
    },
    {
      id: 5,
      description: 'Baby Emma (5 weeks old) turns towards faces and prefers looking at eyes, but shows little distress when passed between different adults.',
      age: '5 weeks',
      correctStage: 0,
      indicators: ['Preference for face-like stimuli', 'No distress at separation', 'Asocial responses']
    },
    {
      id: 6,
      description: 'Baby Noah (7 months old) has just started crying when strangers approach him. He also becomes upset when separated from his primary caregiver.',
      age: '7 months',
      correctStage: 2,
      indicators: ['Onset of stranger anxiety', 'Beginning separation anxiety', 'Specific attachment forming']
    }
  ];

  const handleStageSelect = (stageId: number) => {
    if (showResult) return;
    setSelectedStage(stageId);
  };

  const handleSubmit = () => {
    if (selectedStage === null) return;
    setShowResult(true);
    
    const isCorrect = selectedStage === infantCases[currentCase].correctStage;
    if (isCorrect) {
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setScore(prev => ({ ...prev, total: prev.total + 1 }));
    }
  };

  const handleNext = () => {
    if (currentCase < infantCases.length - 1) {
      setCurrentCase(prev => prev + 1);
      setSelectedStage(null);
      setShowResult(false);
    }
  };

  const handleReset = () => {
    setCurrentCase(0);
    setSelectedStage(null);
    setShowResult(false);
    setScore({ correct: 0, total: 0 });
  };

  const currentInfant = infantCases[currentCase];
  const isCorrect = selectedStage === currentInfant.correctStage;
  const isComplete = currentCase === infantCases.length - 1 && showResult;

  return (
    <div className={`w-full h-full flex ${isPresentation ? 'gap-8' : 'gap-4'}`}>
      {/* Left Panel - Status & Timeline Toggle */}
      <div className={`flex flex-col ${isPresentation ? 'w-72' : 'w-56'} shrink-0`}>
        {/* Score Panel */}
        <div className={`bg-gray-800 rounded-xl border border-amber-500/30 shadow-xl mb-4 ${isPresentation ? 'p-6' : 'p-4'}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`font-bold text-amber-400 ${isPresentation ? 'text-xl' : 'text-base'}`}>
              Diagnostic Score
            </h3>
            <button
              onClick={handleReset}
              className="p-2 text-gray-400 hover:text-amber-400 transition-colors"
              title="Reset"
            >
              <RotateCcw size={isPresentation ? 20 : 16} />
            </button>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <div className={`rounded-xl bg-amber-900/30 border border-amber-500/30 flex-1 text-center ${isPresentation ? 'p-4' : 'p-3'}`}>
              <div className={`font-bold text-amber-400 ${isPresentation ? 'text-3xl' : 'text-2xl'}`}>
                {score.correct}/{score.total}
              </div>
              <div className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Correct</div>
            </div>
          </div>

          {/* Progress */}
          <div className={`text-gray-400 mb-2 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
            Case {currentCase + 1} of {infantCases.length}
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-500"
              style={{ width: `${((currentCase + (showResult ? 1 : 0)) / infantCases.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Timeline Reference Toggle */}
        <button
          onClick={() => setShowTimeline(!showTimeline)}
          className={`flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 border border-amber-500/30 rounded-xl transition-all ${isPresentation ? 'p-4 text-base' : 'p-3 text-sm'} ${showTimeline ? 'bg-amber-900/30' : ''}`}
        >
          <Clock size={isPresentation ? 20 : 16} className="text-amber-400" />
          <span className="text-amber-400 font-medium">{showTimeline ? 'Hide' : 'Show'} Stage Reference</span>
        </button>

        {/* Timeline Reference */}
        {showTimeline && (
          <div className={`mt-4 bg-gray-800 rounded-xl border border-amber-500/30 overflow-hidden animate-fadeIn ${isPresentation ? 'p-4' : 'p-3'}`}>
            <div className="space-y-2">
              {stages.map((stage) => (
                <div key={stage.id} className={`flex items-center gap-2 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                  <div className={`w-3 h-3 rounded-full ${stage.borderColor.replace('border-', 'bg-')}`} />
                  <div className="flex-1">
                    <span className={`font-medium ${stage.color}`}>{stage.name}</span>
                    <span className="text-gray-500 ml-1">({stage.ageRange})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Case Study Card */}
        <div className={`bg-gray-800 rounded-xl border border-amber-500/30 shadow-xl mb-4 ${isPresentation ? 'p-8' : 'p-5'}`}>
          <div className="flex items-start gap-4 mb-4">
            <div className={`rounded-xl bg-amber-900/50 shrink-0 ${isPresentation ? 'p-4' : 'p-3'}`}>
              <Eye size={isPresentation ? 32 : 24} className="text-amber-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className={`bg-amber-900/60 text-amber-400 font-bold rounded-lg ${isPresentation ? 'px-3 py-1 text-sm' : 'px-2 py-0.5 text-xs'}`}>
                  CASE #{currentCase + 1}
                </span>
                <span className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                  Age: {currentInfant.age}
                </span>
              </div>
              <p className={`text-gray-200 leading-relaxed ${isPresentation ? 'text-xl' : 'text-base'}`}>
                {currentInfant.description}
              </p>
            </div>
          </div>

          {/* Behavioral Indicators (shown after answer) */}
          {showResult && (
            <div className={`bg-gray-900/50 rounded-lg border-l-4 ${isCorrect ? 'border-green-500' : 'border-red-500'} ${isPresentation ? 'p-4 mt-4' : 'p-3 mt-3'} animate-fadeIn`}>
              <div className="flex items-center gap-2 mb-2">
                {isCorrect ? (
                  <CheckCircle size={isPresentation ? 24 : 18} className="text-green-400" />
                ) : (
                  <XCircle size={isPresentation ? 24 : 18} className="text-red-400" />
                )}
                <span className={`font-bold ${isCorrect ? 'text-green-400' : 'text-red-400'} ${isPresentation ? 'text-lg' : 'text-base'}`}>
                  {isCorrect ? 'Correct Diagnosis!' : `Incorrect - This is ${stages[currentInfant.correctStage].name}`}
                </span>
              </div>
              <div className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                <span className="font-semibold text-amber-400">Key Indicators:</span>
                <ul className="mt-1 space-y-1">
                  {currentInfant.indicators.map((indicator, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      {indicator}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Stage Selection Grid */}
        <div className={`grid grid-cols-2 gap-3 flex-grow ${isPresentation ? 'gap-4' : 'gap-3'}`}>
          {stages.map(stage => {
            const isSelected = selectedStage === stage.id;
            const isCorrectAnswer = showResult && stage.id === currentInfant.correctStage;
            const isWrongSelection = showResult && isSelected && !isCorrect;
            
            return (
              <button
                key={stage.id}
                onClick={() => handleStageSelect(stage.id)}
                disabled={showResult}
                className={`
                  relative rounded-xl border-2 transition-all duration-300 text-left flex flex-col
                  ${isPresentation ? 'p-5' : 'p-4'}
                  ${isCorrectAnswer ? 'border-green-500 bg-green-900/30' : ''}
                  ${isWrongSelection ? 'border-red-500 bg-red-900/30' : ''}
                  ${isSelected && !showResult ? `${stage.borderColor} ${stage.bgColor}` : ''}
                  ${!isSelected && !showResult && !isCorrectAnswer ? 'border-gray-700 bg-gray-800 hover:border-gray-600 hover:bg-gray-700' : ''}
                  ${showResult ? 'cursor-default' : 'cursor-pointer'}
                `}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`rounded-lg ${stage.bgColor} ${isPresentation ? 'p-2' : 'p-1.5'} ${stage.color}`}>
                    {stage.icon}
                  </div>
                  <div>
                    <h4 className={`font-bold ${stage.color} ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      {stage.name}
                    </h4>
                    <span className={`text-gray-500 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                      {stage.ageRange}
                    </span>
                  </div>
                </div>
                <ul className={`text-gray-400 space-y-1 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                  {stage.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className={`w-1 h-1 rounded-full mt-1.5 ${stage.color.replace('text-', 'bg-')}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Selection indicator */}
                {isSelected && !showResult && (
                  <div className={`absolute top-2 right-2 w-6 h-6 rounded-full ${stage.borderColor.replace('border-', 'bg-')} flex items-center justify-center`}>
                    <CheckCircle size={16} className="text-white" />
                  </div>
                )}
                {isCorrectAnswer && (
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                )}
                {isWrongSelection && (
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                    <XCircle size={16} className="text-white" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className={`flex justify-end gap-3 ${isPresentation ? 'mt-6' : 'mt-4'}`}>
          {!showResult ? (
            <button
              onClick={handleSubmit}
              disabled={selectedStage === null}
              className={`flex items-center gap-2 rounded-xl font-semibold transition-all shadow-lg
                ${selectedStage !== null 
                  ? 'bg-amber-600 hover:bg-amber-500 text-white' 
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'}
                ${isPresentation ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-base'}`}
            >
              Submit Diagnosis
              <CheckCircle size={isPresentation ? 22 : 18} />
            </button>
          ) : isComplete ? (
            <div className={`flex items-center gap-4 bg-amber-900/30 border border-amber-500/30 rounded-xl ${isPresentation ? 'px-8 py-4' : 'px-6 py-3'}`}>
              <span className={`text-amber-400 font-bold ${isPresentation ? 'text-xl' : 'text-lg'}`}>
                Complete! Final Score: {score.correct}/{score.total}
              </span>
              <button
                onClick={handleReset}
                className={`flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-semibold transition-all ${isPresentation ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm'}`}
              >
                <RotateCcw size={isPresentation ? 18 : 14} />
                Play Again
              </button>
            </div>
          ) : (
            <button
              onClick={handleNext}
              className={`flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-semibold transition-all shadow-lg ${isPresentation ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-base'}`}
            >
              Next Case
              <ArrowRight size={isPresentation ? 22 : 18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
