import { useState } from 'react';
import { Scale, BookOpen, FlaskConical, CheckCircle, ArrowRight, RotateCcw, Dna, Users, Lightbulb, GraduationCap } from 'lucide-react';

interface SimulationProps {
  isPresentation: boolean;
  themeColor?: string;
}

interface ResearchCard {
  id: number;
  study: string;
  finding: string;
  correctSide: 'biological' | 'social' | 'both';
  explanation: string;
  year: string;
}

export default function Lesson3Simulation({ isPresentation }: SimulationProps) {
  const [currentCard, setCurrentCard] = useState(0);
  const [selectedSide, setSelectedSide] = useState<'biological' | 'social' | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [biologicalEvidence, setBiologicalEvidence] = useState<number[]>([]);
  const [socialEvidence, setSocialEvidence] = useState<number[]>([]);

  const researchCards: ResearchCard[] = [
    {
      id: 1,
      study: 'Grossmann et al. (2002)',
      year: '2002',
      finding: 'Quality of fathers\' play with infants predicted quality of adolescent attachments. Fathers who engaged in more sensitive, challenging play had children with better attachment outcomes at age 16.',
      correctSide: 'social',
      explanation: 'This supports the SOCIAL view because it shows that what fathers DO (quality of play) matters more than biological connection. The relationship quality can be learned and developed.'
    },
    {
      id: 2,
      study: 'Field (1978)',
      year: '1978',
      finding: 'Primary caregiver fathers showed the same behaviors as mothers - higher pitched voice, more imitation, and exaggerated facial expressions. They acted like "mothers" in interactions.',
      correctSide: 'social',
      explanation: 'This strongly supports the SOCIAL view. It shows that "mothering" behaviors are not biologically exclusive to women - fathers can develop them when they take on the primary caregiver role.'
    },
    {
      id: 3,
      study: 'Geiger (1996)',
      year: '1996',
      finding: 'Fathers tend to engage in more physical, stimulating play whereas mothers focus more on nurturing and caregiving activities, even in modern egalitarian households.',
      correctSide: 'biological',
      explanation: 'This supports the BIOLOGICAL view because these differences persist even when families try to share roles equally, suggesting some innate differences in parenting styles.'
    },
    {
      id: 4,
      study: 'Lamb (1997)',
      year: '1997',
      finding: 'The role of the father is determined by social and cultural factors. In different cultures, fathers have vastly different levels of involvement with childcare.',
      correctSide: 'social',
      explanation: 'This supports the SOCIAL view because if the father\'s role were purely biological, we would expect similar patterns across all cultures. Instead, the role varies dramatically based on social expectations.'
    },
    {
      id: 5,
      study: 'Bowlby (1969)',
      year: '1969',
      finding: 'Mothers have an innate ability to form attachments with infants. Fathers are secondary attachment figures who cannot provide the same quality of care.',
      correctSide: 'biological',
      explanation: 'This supports the BIOLOGICAL view - Bowlby believed mothers were biologically programmed to be primary caregivers, making fathers inherently secondary.'
    },
    {
      id: 6,
      study: 'McCallum & Golombok (2004)',
      year: '2004',
      finding: 'Children raised in single-parent families and same-sex parent families develop normally without a father figure present, showing no attachment difficulties.',
      correctSide: 'social',
      explanation: 'This challenges the BIOLOGICAL view and supports SOCIAL - if fathers were biologically essential, their absence would cause developmental problems. It shows quality of care matters more than biological role.'
    }
  ];

  const handleSideSelect = (side: 'biological' | 'social') => {
    if (showResult) return;
    setSelectedSide(side);
  };

  const handleSubmit = () => {
    if (selectedSide === null) return;
    setShowResult(true);
    
    const correct = researchCards[currentCard].correctSide;
    const isCorrect = selectedSide === correct || correct === 'both';
    
    if (isCorrect) {
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setScore(prev => ({ ...prev, total: prev.total + 1 }));
    }

    // Add to evidence pile
    if (correct === 'biological' || correct === 'both') {
      setBiologicalEvidence(prev => [...prev, researchCards[currentCard].id]);
    }
    if (correct === 'social' || correct === 'both') {
      setSocialEvidence(prev => [...prev, researchCards[currentCard].id]);
    }
  };

  const handleNext = () => {
    if (currentCard < researchCards.length - 1) {
      setCurrentCard(prev => prev + 1);
      setSelectedSide(null);
      setShowResult(false);
    }
  };

  const handleReset = () => {
    setCurrentCard(0);
    setSelectedSide(null);
    setShowResult(false);
    setScore({ correct: 0, total: 0 });
    setBiologicalEvidence([]);
    setSocialEvidence([]);
  };

  const current = researchCards[currentCard];
  const isCorrect = selectedSide === current.correctSide || current.correctSide === 'both';
  const isComplete = currentCard === researchCards.length - 1 && showResult;

  // Calculate evidence balance
  const totalEvidence = biologicalEvidence.length + socialEvidence.length;
  const biologicalPercent = totalEvidence > 0 ? (biologicalEvidence.length / totalEvidence) * 100 : 50;
  const socialPercent = totalEvidence > 0 ? (socialEvidence.length / totalEvidence) * 100 : 50;

  return (
    <div className={`w-full h-full flex flex-col ${isPresentation ? 'gap-6' : 'gap-4'}`}>
      {/* Top Bar - Evidence Scale */}
      <div className={`bg-gray-800 rounded-xl border border-orange-500/30 shadow-xl ${isPresentation ? 'p-5' : 'p-4'}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <Scale size={isPresentation ? 28 : 22} className="text-orange-400" />
            <h3 className={`font-bold text-orange-400 ${isPresentation ? 'text-xl' : 'text-base'}`}>
              Evidence Balance
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <span className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-sm'}`}>
              Study {currentCard + 1} of {researchCards.length}
            </span>
            <button
              onClick={handleReset}
              className="p-2 text-gray-400 hover:text-orange-400 transition-colors"
              title="Reset"
            >
              <RotateCcw size={isPresentation ? 20 : 16} />
            </button>
          </div>
        </div>
        
        {/* Balance Bar */}
        <div className="relative h-8 bg-gray-900 rounded-full overflow-hidden">
          <div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-600 to-purple-500 transition-all duration-700 ease-out"
            style={{ width: `${biologicalPercent}%` }}
          />
          <div 
            className="absolute right-0 top-0 h-full bg-gradient-to-l from-teal-500 to-teal-600 transition-all duration-700 ease-out"
            style={{ width: `${socialPercent}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <span className={`font-bold text-white flex items-center gap-2 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
              <Dna size={isPresentation ? 18 : 14} />
              Biological ({biologicalEvidence.length})
            </span>
            <div className="w-1 h-6 bg-white/50 rounded-full" />
            <span className={`font-bold text-white flex items-center gap-2 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
              Social ({socialEvidence.length})
              <Users size={isPresentation ? 18 : 14} />
            </span>
          </div>
        </div>
      </div>

      {/* Main Content - Research Card */}
      <div className="flex-1 flex gap-4">
        {/* Left Choice - Biological */}
        <button
          onClick={() => handleSideSelect('biological')}
          disabled={showResult}
          className={`
            flex-1 rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center
            ${isPresentation ? 'p-6' : 'p-4'}
            ${selectedSide === 'biological' && !showResult ? 'border-purple-500 bg-purple-900/30 scale-[1.02]' : ''}
            ${showResult && current.correctSide === 'biological' ? 'border-green-500 bg-green-900/30' : ''}
            ${showResult && selectedSide === 'biological' && current.correctSide !== 'biological' ? 'border-red-500 bg-red-900/20' : ''}
            ${!selectedSide && !showResult ? 'border-gray-700 bg-gray-800 hover:border-purple-500/50 hover:bg-purple-900/20' : ''}
            ${showResult ? 'cursor-default' : 'cursor-pointer'}
          `}
        >
          <div className={`rounded-full bg-purple-900/50 mb-3 ${isPresentation ? 'p-5' : 'p-4'}`}>
            <Dna size={isPresentation ? 48 : 36} className="text-purple-400" />
          </div>
          <h4 className={`font-bold text-purple-400 mb-2 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
            Biological
          </h4>
          <p className={`text-gray-400 text-center ${isPresentation ? 'text-base' : 'text-sm'}`}>
            Innate differences between fathers & mothers
          </p>
          {showResult && current.correctSide === 'biological' && (
            <div className="mt-3">
              <CheckCircle size={isPresentation ? 32 : 24} className="text-green-400" />
            </div>
          )}
        </button>

        {/* Center - Research Card */}
        <div className={`flex-[2] flex flex-col ${isPresentation ? 'max-w-2xl' : 'max-w-xl'}`}>
          <div className={`flex-1 bg-gray-800 rounded-xl border border-orange-500/30 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
            {/* Study Header */}
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-700">
              <div className={`rounded-lg bg-orange-900/50 ${isPresentation ? 'p-3' : 'p-2'}`}>
                <FlaskConical size={isPresentation ? 28 : 20} className="text-orange-400" />
              </div>
              <div>
                <h4 className={`font-bold text-orange-400 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                  {current.study}
                </h4>
                <span className={`text-gray-500 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                  Published {current.year}
                </span>
              </div>
            </div>

            {/* Finding */}
            <div className="flex-1 flex items-center">
              <div className={`bg-gray-900/50 rounded-lg border-l-4 border-orange-500 ${isPresentation ? 'p-6' : 'p-4'}`}>
                <div className="flex items-start gap-3">
                  <BookOpen size={isPresentation ? 24 : 18} className="text-orange-400 mt-1 shrink-0" />
                  <p className={`text-gray-200 leading-relaxed ${isPresentation ? 'text-xl' : 'text-base'}`}>
                    {current.finding}
                  </p>
                </div>
              </div>
            </div>

            {/* Explanation (shown after answer) */}
            {showResult && (
              <div className={`mt-4 bg-gray-900/70 rounded-lg border-l-4 ${isCorrect ? 'border-green-500' : 'border-red-500'} ${isPresentation ? 'p-5' : 'p-4'} animate-fadeIn`}>
                <div className="flex items-start gap-3">
                  <Lightbulb size={isPresentation ? 24 : 18} className={isCorrect ? 'text-green-400' : 'text-red-400'} />
                  <div>
                    <p className={`font-bold mb-1 ${isCorrect ? 'text-green-400' : 'text-red-400'} ${isPresentation ? 'text-lg' : 'text-base'}`}>
                      {isCorrect ? 'Correct!' : 'Not quite...'}
                    </p>
                    <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                      {current.explanation}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Button */}
          <div className={`flex justify-center ${isPresentation ? 'mt-6' : 'mt-4'}`}>
            {!showResult ? (
              <button
                onClick={handleSubmit}
                disabled={selectedSide === null}
                className={`flex items-center gap-2 rounded-xl font-semibold transition-all shadow-lg
                  ${selectedSide !== null 
                    ? 'bg-orange-600 hover:bg-orange-500 text-white' 
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'}
                  ${isPresentation ? 'px-10 py-4 text-lg' : 'px-8 py-3 text-base'}`}
              >
                Classify Evidence
                <CheckCircle size={isPresentation ? 22 : 18} />
              </button>
            ) : isComplete ? (
              <div className={`flex flex-col items-center gap-4 bg-orange-900/30 border border-orange-500/30 rounded-xl ${isPresentation ? 'px-10 py-6' : 'px-8 py-4'}`}>
                <div className="flex items-center gap-3">
                  <GraduationCap size={isPresentation ? 32 : 24} className="text-orange-400" />
                  <span className={`text-orange-400 font-bold ${isPresentation ? 'text-2xl' : 'text-xl'}`}>
                    Debate Complete! Score: {score.correct}/{score.total}
                  </span>
                </div>
                <p className={`text-gray-300 text-center ${isPresentation ? 'text-base' : 'text-sm'}`}>
                  The evidence suggests a <strong className="text-teal-400">social explanation</strong> is stronger - 
                  fathers can be just as capable caregivers when they take on that role!
                </p>
                <button
                  onClick={handleReset}
                  className={`flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-semibold transition-all ${isPresentation ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm'}`}
                >
                  <RotateCcw size={isPresentation ? 18 : 14} />
                  Review Again
                </button>
              </div>
            ) : (
              <button
                onClick={handleNext}
                className={`flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-semibold transition-all shadow-lg ${isPresentation ? 'px-10 py-4 text-lg' : 'px-8 py-3 text-base'}`}
              >
                Next Study
                <ArrowRight size={isPresentation ? 22 : 18} />
              </button>
            )}
          </div>
        </div>

        {/* Right Choice - Social */}
        <button
          onClick={() => handleSideSelect('social')}
          disabled={showResult}
          className={`
            flex-1 rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center
            ${isPresentation ? 'p-6' : 'p-4'}
            ${selectedSide === 'social' && !showResult ? 'border-teal-500 bg-teal-900/30 scale-[1.02]' : ''}
            ${showResult && current.correctSide === 'social' ? 'border-green-500 bg-green-900/30' : ''}
            ${showResult && selectedSide === 'social' && current.correctSide !== 'social' ? 'border-red-500 bg-red-900/20' : ''}
            ${!selectedSide && !showResult ? 'border-gray-700 bg-gray-800 hover:border-teal-500/50 hover:bg-teal-900/20' : ''}
            ${showResult ? 'cursor-default' : 'cursor-pointer'}
          `}
        >
          <div className={`rounded-full bg-teal-900/50 mb-3 ${isPresentation ? 'p-5' : 'p-4'}`}>
            <Users size={isPresentation ? 48 : 36} className="text-teal-400" />
          </div>
          <h4 className={`font-bold text-teal-400 mb-2 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
            Social
          </h4>
          <p className={`text-gray-400 text-center ${isPresentation ? 'text-base' : 'text-sm'}`}>
            Role determined by culture & experience
          </p>
          {showResult && current.correctSide === 'social' && (
            <div className="mt-3">
              <CheckCircle size={isPresentation ? 32 : 24} className="text-green-400" />
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
