import React, { useState } from 'react';
import { Baby, Heart, MessageCircle, Eye, RefreshCw } from 'lucide-react';

interface SimulationProps {
  isPresentation: boolean;
  themeColor?: string;
}

interface InteractionScenario {
  id: number;
  infantAction: string;
  infantIcon: React.ReactNode;
  options: {
    text: string;
    type: 'reciprocal' | 'synchronous' | 'poor';
    feedback: string;
  }[];
}

export default function Lesson1Simulation({ isPresentation, themeColor = 'cyan' }: SimulationProps) {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedResponse, setSelectedResponse] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState({ reciprocal: 0, synchronous: 0, total: 0 });

  // Color mapping for dynamic theming
  const colorMap: Record<string, string> = {
    cyan: 'text-cyan-400',
    amber: 'text-amber-400',
    orange: 'text-orange-400',
    red: 'text-red-400',
    yellow: 'text-yellow-400',
    teal: 'text-teal-400',
    purple: 'text-purple-400',
    slate: 'text-slate-400'
  };

  const buttonColorMap: Record<string, string> = {
    cyan: 'bg-cyan-600 hover:bg-cyan-500',
    amber: 'bg-amber-600 hover:bg-amber-500',
    orange: 'bg-orange-600 hover:bg-orange-500',
    red: 'bg-red-600 hover:bg-red-500',
    yellow: 'bg-yellow-600 hover:bg-yellow-500',
    teal: 'bg-teal-600 hover:bg-teal-500',
    purple: 'bg-purple-600 hover:bg-purple-500',
    slate: 'bg-slate-600 hover:bg-slate-500'
  };

  const themeIconColor = colorMap[themeColor] || colorMap.cyan;
  const themeButtonColor = buttonColorMap[themeColor] || buttonColorMap.cyan;

  const handleReset = () => {
    setCurrentScenario(0);
    setSelectedResponse(null);
    setShowFeedback(false);
    setScore({ reciprocal: 0, synchronous: 0, total: 0 });
  };

  const scenarios: InteractionScenario[] = [
    {
      id: 1,
      infantAction: 'The infant makes eye contact and smiles at you',
      infantIcon: <Eye className={themeIconColor} size={isPresentation ? 48 : 32} />,
      options: [
        { text: 'Smile back and maintain eye contact', type: 'synchronous', feedback: 'Excellent! This demonstrates interactional synchrony - you\'re mirroring the infant\'s expression and matching their emotional state. Condon and Sander (1974) found infants coordinate their actions with adult speech from birth.' },
        { text: 'Look away and continue with other tasks', type: 'poor', feedback: 'This breaks the interaction loop. Reciprocal interactions require the caregiver to respond to the infant\'s signals. This could affect the developing attachment bond.' },
        { text: 'Say "hello baby" in a high-pitched voice', type: 'reciprocal', feedback: 'Good response! Using motherese (infant-directed speech) shows reciprocity - you\'re responding to the infant\'s attempt to communicate. This turn-taking is essential for attachment.' }
      ]
    },
    {
      id: 2,
      infantAction: 'The infant sticks out their tongue at you',
      infantIcon: <Baby className={themeIconColor} size={isPresentation ? 48 : 32} />,
      options: [
        { text: 'Stick your tongue out too', type: 'synchronous', feedback: 'Perfect synchrony! Meltzoff and Moore (1977) demonstrated that infants as young as 2-3 weeks can imitate adult facial expressions. By mirroring this, you\'re engaging in interactional synchrony.' },
        { text: 'Tickle the infant\'s tummy', type: 'reciprocal', feedback: 'This is a reciprocal response - you\'re responding to the infant\'s action, though not matching it exactly. The interaction continues but isn\'t perfectly synchronized.' },
        { text: 'Ignore the behaviour', type: 'poor', feedback: 'Ignoring infant signals disrupts reciprocal interaction. Brazleton et al. (1975) showed that infants become distressed when caregivers don\'t respond appropriately.' }
      ]
    },
    {
      id: 3,
      infantAction: 'The infant coos and makes babbling sounds',
      infantIcon: <MessageCircle className={themeIconColor} size={isPresentation ? 48 : 32} />,
      options: [
        { text: 'Wait silently until they stop', type: 'poor', feedback: 'This disrupts the conversational flow. Proto-conversations require turn-taking, where the caregiver responds when the infant pauses.' },
        { text: 'Respond with similar cooing sounds', type: 'synchronous', feedback: 'Excellent synchrony! This demonstrates vocal matching. Research shows this "proto-conversation" helps develop later language skills and strengthens attachment bonds.' },
        { text: 'Say encouraging words when they pause', type: 'reciprocal', feedback: 'Good reciprocity! You\'re engaging in turn-taking by responding during the infant\'s natural pauses. This mirrors adult conversation patterns.' }
      ]
    },
    {
      id: 4,
      infantAction: 'The infant reaches out their arms towards you',
      infantIcon: <Heart className={themeIconColor} size={isPresentation ? 48 : 32} />,
      options: [
        { text: 'Pick up the infant and hold them close', type: 'reciprocal', feedback: 'Excellent reciprocal response! You\'ve correctly interpreted the infant\'s signal (desire to be held) and responded appropriately. This responsive caregiving builds secure attachment.' },
        { text: 'Reach your arms out towards them', type: 'synchronous', feedback: 'This shows interactional synchrony - matching the infant\'s gesture. However, the infant likely wanted to be picked up, so full responsiveness would include physical comfort.' },
        { text: 'Give them a toy to play with', type: 'poor', feedback: 'This misses the infant\'s signal. The reaching gesture typically indicates a desire for physical closeness, not play. Sensitive caregiving requires accurate interpretation of cues.' }
      ]
    }
  ];

  const handleResponse = (optionIndex: number) => {
    setSelectedResponse(optionIndex);
    setShowFeedback(true);
    
    const responseType = scenarios[currentScenario].options[optionIndex].type;
    if (responseType === 'synchronous') {
      setScore(prev => ({ ...prev, synchronous: prev.synchronous + 1, total: prev.total + 1 }));
    } else if (responseType === 'reciprocal') {
      setScore(prev => ({ ...prev, reciprocal: prev.reciprocal + 1, total: prev.total + 1 }));
    }
  };

  const handleNext = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(prev => prev + 1);
      setSelectedResponse(null);
      setShowFeedback(false);
    }
  };

  const scenario = scenarios[currentScenario];
  const isComplete = currentScenario === scenarios.length - 1 && showFeedback;

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-3 h-full ${isPresentation ? 'gap-10' : 'gap-6'}`}>
      {/* Left Panel - Status */}
      <div className={`bg-gray-800 rounded-xl border border-cyan-500/30 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-6'}`}>
        <div className="flex items-center gap-3 mb-6 border-b border-gray-700 pb-4">
          <div className="p-2 bg-cyan-900/50 rounded-lg">
            <Baby size={isPresentation ? 32 : 24} className={themeIconColor} />
          </div>
          <div>
            <h3 className={`font-bold text-white ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Interaction Simulator</h3>
            <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>Caregiver-Infant Interactions</p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-gray-400 mb-2">
            <span className={isPresentation ? 'text-base' : 'text-xs'}>Progress</span>
            <span className={isPresentation ? 'text-base' : 'text-xs'}>{currentScenario + (showFeedback ? 1 : 0)} / {scenarios.length}</span>
          </div>
          <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 transition-all duration-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
              style={{ width: `${((currentScenario + (showFeedback ? 1 : 0)) / scenarios.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Score Panel */}
        <div className={`bg-gray-900/50 rounded-lg ${isPresentation ? 'p-6' : 'p-4'} flex-grow`}>
          <h4 className={`font-bold text-cyan-400 uppercase tracking-wider mb-4 ${isPresentation ? 'text-base' : 'text-xs'}`}>Response Analysis</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className={`text-gray-300 ${isPresentation ? 'text-lg' : 'text-sm'}`}>Synchronous</span>
              <span className={`font-bold text-cyan-400 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>{score.synchronous}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-gray-300 ${isPresentation ? 'text-lg' : 'text-sm'}`}>Reciprocal</span>
              <span className={`font-bold text-green-400 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>{score.reciprocal}</span>
            </div>
            <div className="border-t border-gray-700 pt-4 mt-4">
              <div className="flex items-center justify-between">
                <span className={`text-gray-300 font-semibold ${isPresentation ? 'text-lg' : 'text-sm'}`}>Total Positive</span>
                <span className={`font-bold text-white ${isPresentation ? 'text-3xl' : 'text-xl'}`}>{score.total}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className={`mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-700/50 transition-all ${isPresentation ? 'text-lg py-4' : 'text-sm'}`}
        >
          <RefreshCw size={isPresentation ? 20 : 16} />
          Reset Simulation
        </button>
      </div>

      {/* Main Scenario Area */}
      <div className={`lg:col-span-2 bg-gray-800 rounded-xl border border-cyan-500/30 shadow-xl flex flex-col ${isPresentation ? 'p-10' : 'p-6'}`}>
        {/* Infant Action */}
        <div className={`mb-6 p-6 rounded-xl bg-cyan-900/20 border-l-4 border-cyan-500 ${isPresentation ? 'p-8' : ''}`}>
          <div className="flex items-center gap-4">
            <div className={`p-4 rounded-xl bg-cyan-900/40 ${isPresentation ? 'p-6' : ''}`}>
              {scenario.infantIcon}
            </div>
            <div>
              <p className={`font-bold text-cyan-400 uppercase tracking-wider mb-1 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
                Infant Action:
              </p>
              <p className={`text-white font-semibold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                {scenario.infantAction}
              </p>
            </div>
          </div>
        </div>

        {/* Response Options */}
        <p className={`text-gray-300 mb-4 font-semibold ${isPresentation ? 'text-xl' : 'text-base'}`}>
          How do you respond as the caregiver?
        </p>
        <div className={`space-y-3 mb-6 ${isPresentation ? 'space-y-4' : ''}`}>
          {scenario.options.map((option, index) => {
            const isSelected = selectedResponse === index;
            const isGoodResponse = option.type === 'synchronous' || option.type === 'reciprocal';
            
            return (
              <button
                key={index}
                onClick={() => !showFeedback && handleResponse(index)}
                disabled={showFeedback}
                className={`w-full rounded-xl border-2 transition-all text-left ${
                  isSelected
                    ? isGoodResponse
                      ? 'border-green-500 bg-green-900/30 text-green-300 shadow-lg shadow-green-500/10'
                      : 'border-red-500 bg-red-900/30 text-red-300 shadow-lg shadow-red-500/10'
                    : showFeedback
                      ? 'border-gray-700 bg-gray-900/30 text-gray-500 cursor-default'
                      : 'border-gray-600 bg-gray-900/50 text-gray-300 hover:border-cyan-500/50 hover:bg-gray-800'
                } ${isPresentation ? 'text-xl p-8' : 'text-sm p-4'}`}
              >
                {option.text}
                {showFeedback && isGoodResponse && !isSelected && (
                  <span className="ml-2 text-green-400">✓ (Also correct)</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {showFeedback && selectedResponse !== null && (
          <div className={`rounded-xl mb-6 flex-grow ${
            scenario.options[selectedResponse].type !== 'poor'
              ? 'bg-green-900/20 border-2 border-green-500/50'
              : 'bg-red-900/20 border-2 border-red-500/50'
          } ${isPresentation ? 'p-8' : 'p-5'} animate-fadeIn`}>
            <p className={`font-bold mb-3 flex items-center gap-2 ${
              scenario.options[selectedResponse].type !== 'poor' ? 'text-green-400' : 'text-red-400'
            } ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
              {scenario.options[selectedResponse].type === 'synchronous' 
                ? '🎯 Interactional Synchrony!' 
                : scenario.options[selectedResponse].type === 'reciprocal'
                  ? '👍 Reciprocal Response!'
                  : '⚠️ Missed Opportunity'}
            </p>
            <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              {scenario.options[selectedResponse].feedback}
            </p>
          </div>
        )}

        {/* Navigation */}
        {showFeedback && !isComplete && (
          <button
            onClick={handleNext}
            className={`w-full py-4 rounded-xl text-white font-bold transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 ${
              isPresentation ? 'text-2xl py-6' : 'text-lg'
            } bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400`}
          >
            Next Scenario →
          </button>
        )}

        {/* Completion Message */}
        {isComplete && (
          <div className={`text-center py-6 bg-gradient-to-r from-cyan-900/30 to-cyan-900/10 rounded-xl border-2 border-cyan-500/50 animate-fadeIn ${isPresentation ? 'py-10' : ''}`}>
            <p className={`font-bold text-cyan-400 ${isPresentation ? 'text-4xl mb-4' : 'text-2xl mb-2'}`}>🎉 Simulation Complete!</p>
            <p className={`text-gray-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>
              You demonstrated understanding of caregiver-infant interactions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
