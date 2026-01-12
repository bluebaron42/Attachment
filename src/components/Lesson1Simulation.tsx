import React, { useState } from 'react';
import { Baby, Heart, MessageCircle, Eye, RefreshCw } from 'lucide-react';

interface SimulationProps {
  isPresentation: boolean;
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

export default function Lesson1Simulation({ isPresentation }: SimulationProps) {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedResponse, setSelectedResponse] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState({ reciprocal: 0, synchronous: 0, total: 0 });

  const scenarios: InteractionScenario[] = [
    {
      id: 1,
      infantAction: 'The infant makes eye contact and smiles at you',
      infantIcon: <Eye className="text-cyan-400" size={isPresentation ? 48 : 32} />,
      options: [
        { text: 'Smile back and maintain eye contact', type: 'synchronous', feedback: 'Excellent! This demonstrates interactional synchrony - you\'re mirroring the infant\'s expression and matching their emotional state. Condon and Sander (1974) found infants coordinate their actions with adult speech from birth.' },
        { text: 'Look away and continue with other tasks', type: 'poor', feedback: 'This breaks the interaction loop. Reciprocal interactions require the caregiver to respond to the infant\'s signals. This could affect the developing attachment bond.' },
        { text: 'Say "hello baby" in a high-pitched voice', type: 'reciprocal', feedback: 'Good response! Using motherese (infant-directed speech) shows reciprocity - you\'re responding to the infant\'s attempt to communicate. This turn-taking is essential for attachment.' }
      ]
    },
    {
      id: 2,
      infantAction: 'The infant sticks out their tongue at you',
      infantIcon: <Baby className="text-cyan-400" size={isPresentation ? 48 : 32} />,
      options: [
        { text: 'Stick your tongue out too', type: 'synchronous', feedback: 'Perfect synchrony! Meltzoff and Moore (1977) demonstrated that infants as young as 2-3 weeks can imitate adult facial expressions. By mirroring this, you\'re engaging in interactional synchrony.' },
        { text: 'Tickle the infant\'s tummy', type: 'reciprocal', feedback: 'This is a reciprocal response - you\'re responding to the infant\'s action, though not matching it exactly. The interaction continues but isn\'t perfectly synchronized.' },
        { text: 'Ignore the behaviour', type: 'poor', feedback: 'Ignoring infant signals disrupts reciprocal interaction. Brazleton et al. (1975) showed that infants become distressed when caregivers don\'t respond appropriately.' }
      ]
    },
    {
      id: 3,
      infantAction: 'The infant coos and makes babbling sounds',
      infantIcon: <MessageCircle className="text-cyan-400" size={isPresentation ? 48 : 32} />,
      options: [
        { text: 'Wait silently until they stop', type: 'poor', feedback: 'This disrupts the conversational flow. Proto-conversations require turn-taking, where the caregiver responds when the infant pauses.' },
        { text: 'Respond with similar cooing sounds', type: 'synchronous', feedback: 'Excellent synchrony! This demonstrates vocal matching. Research shows this "proto-conversation" helps develop later language skills and strengthens attachment bonds.' },
        { text: 'Say encouraging words when they pause', type: 'reciprocal', feedback: 'Good reciprocity! You\'re engaging in turn-taking by responding during the infant\'s natural pauses. This mirrors adult conversation patterns.' }
      ]
    },
    {
      id: 4,
      infantAction: 'The infant reaches out their arms towards you',
      infantIcon: <Heart className="text-cyan-400" size={isPresentation ? 48 : 32} />,
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

  const handleReset = () => {
    setCurrentScenario(0);
    setSelectedResponse(null);
    setShowFeedback(false);
    setScore({ reciprocal: 0, synchronous: 0, total: 0 });
  };

  const scenario = scenarios[currentScenario];
  const isComplete = currentScenario === scenarios.length - 1 && showFeedback;

  return (
    <div className={`w-full max-w-3xl ${isPresentation ? 'px-12' : 'px-6'}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className={`text-cyan-400 font-bold mb-2 ${isPresentation ? 'text-3xl' : 'text-xl'}`}>
          🍼 Caregiver-Infant Interaction Simulator
        </h3>
        <p className={`text-gray-400 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
          Respond to infant cues to demonstrate reciprocity and interactional synchrony
        </p>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-cyan-500 transition-all duration-300"
            style={{ width: `${((currentScenario + (showFeedback ? 1 : 0)) / scenarios.length) * 100}%` }}
          />
        </div>
        <p className={`text-gray-400 mt-2 text-center ${isPresentation ? 'text-lg' : 'text-sm'}`}>
          Scenario {currentScenario + 1} of {scenarios.length}
        </p>
      </div>

      {/* Scenario Card */}
      <div className={`bg-gray-800 rounded-xl border border-cyan-500/30 shadow-lg ${isPresentation ? 'p-10' : 'p-6'}`}>
        {/* Infant Action */}
        <div className="flex items-center gap-4 mb-6 p-4 bg-cyan-900/20 rounded-lg border border-cyan-500/30">
          <div className="p-3 bg-cyan-900/40 rounded-full">
            {scenario.infantIcon}
          </div>
          <div>
            <p className={`text-cyan-300 font-semibold ${isPresentation ? 'text-xl' : 'text-base'}`}>
              Infant Action:
            </p>
            <p className={`text-white ${isPresentation ? 'text-lg' : 'text-sm'}`}>
              {scenario.infantAction}
            </p>
          </div>
        </div>

        {/* Response Options */}
        <p className={`text-gray-300 mb-4 font-semibold ${isPresentation ? 'text-lg' : 'text-sm'}`}>
          How do you respond as the caregiver?
        </p>
        <div className="space-y-3 mb-6">
          {scenario.options.map((option, index) => {
            const isSelected = selectedResponse === index;
            const isGoodResponse = option.type === 'synchronous' || option.type === 'reciprocal';
            
            return (
              <button
                key={index}
                onClick={() => !showFeedback && handleResponse(index)}
                disabled={showFeedback}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                  isSelected
                    ? isGoodResponse
                      ? 'border-green-500 bg-green-900/30 text-green-300'
                      : 'border-red-500 bg-red-900/30 text-red-300'
                    : showFeedback
                      ? 'border-gray-700 bg-gray-900/30 text-gray-500'
                      : 'border-gray-600 bg-gray-900/50 text-gray-300 hover:border-cyan-500/50'
                } ${isPresentation ? 'text-lg p-6' : 'text-sm'}`}
              >
                {option.text}
                {showFeedback && isGoodResponse && !isSelected && (
                  <span className="ml-2 text-green-400">✓</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {showFeedback && selectedResponse !== null && (
          <div className={`p-4 rounded-lg mb-6 ${
            scenario.options[selectedResponse].type !== 'poor'
              ? 'bg-green-900/20 border border-green-500/50'
              : 'bg-red-900/20 border border-red-500/50'
          }`}>
            <p className={`font-semibold mb-2 ${
              scenario.options[selectedResponse].type !== 'poor' ? 'text-green-400' : 'text-red-400'
            } ${isPresentation ? 'text-lg' : 'text-sm'}`}>
              {scenario.options[selectedResponse].type === 'synchronous' 
                ? '🎯 Interactional Synchrony!' 
                : scenario.options[selectedResponse].type === 'reciprocal'
                  ? '👍 Reciprocal Response!'
                  : '⚠️ Missed Opportunity'}
            </p>
            <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
              {scenario.options[selectedResponse].feedback}
            </p>
          </div>
        )}

        {/* Score Display */}
        {isComplete && (
          <div className="p-4 bg-cyan-900/20 rounded-lg border border-cyan-500/30 mb-6">
            <p className={`text-cyan-400 font-bold mb-2 ${isPresentation ? 'text-xl' : 'text-lg'}`}>
              Simulation Complete! 🎉
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-gray-800 rounded-lg">
                <p className={`text-cyan-300 font-bold ${isPresentation ? 'text-2xl' : 'text-xl'}`}>
                  {score.synchronous}
                </p>
                <p className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                  Synchronous Responses
                </p>
              </div>
              <div className="text-center p-3 bg-gray-800 rounded-lg">
                <p className={`text-cyan-300 font-bold ${isPresentation ? 'text-2xl' : 'text-xl'}`}>
                  {score.reciprocal}
                </p>
                <p className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                  Reciprocal Responses
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handleReset}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:border-gray-500 transition-all ${
              isPresentation ? 'text-lg px-6 py-3' : 'text-sm'
            }`}
          >
            <RefreshCw size={isPresentation ? 20 : 16} />
            Restart
          </button>
          
          {showFeedback && !isComplete && (
            <button
              onClick={handleNext}
              className={`px-6 py-2 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-500 transition-all ${
                isPresentation ? 'text-lg px-8 py-3' : 'text-sm'
              }`}
            >
              Next Scenario →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
