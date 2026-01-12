import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  Maximize2,
  Minimize2
} from 'lucide-react';
import Slide from './components/Slide';
import PhaseHeader from './components/PhaseHeader';
import DoNowQuiz from './components/DoNowQuiz';
import UnderstandingCheck from './components/UnderstandingCheck';
import Lesson1Simulation from './components/Lesson1Simulation';
import { lessons, lesson1DoNow, lessonThemes } from './constants';
import { Activity, Brain, Clock, Heart, Baby, Users } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(1);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isPresentation, setIsPresentation] = useState(false);

  const getSlideCount = (lessonId: number) => {
    return 10; // Standard 10-slide lesson
  };

  const slideCount = getSlideCount(currentLesson);
  const lessonTheme = lessonThemes[currentLesson];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slideCount]);

  const nextSlide = () => {
    if (currentSlide < slideCount - 1) setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
  };

  const renderLesson = () => {
    // Lesson 1: Caregiver-Infant Interactions
    if (currentLesson === 1) {
      switch (currentSlide) {
        case 0:
          return (
            <Slide isPresentation={isPresentation}>
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="relative mb-8">
                  <div className={`absolute inset-0 bg-cyan-500 blur-[100px] opacity-20 rounded-full animate-pulse`}></div>
                  <Baby size={isPresentation ? 120 : 80} className="text-cyan-400 relative z-10" />
                </div>
                <h1 className={`font-bold text-white mb-4 tracking-widest uppercase ${isPresentation ? 'text-7xl' : 'text-5xl'}`}>
                  Caregiver-Infant
                </h1>
                <h2 className={`font-bold text-cyan-400 mb-4 tracking-widest uppercase ${isPresentation ? 'text-5xl' : 'text-3xl'}`}>
                  Interactions
                </h2>
                <div className="h-1 w-64 bg-cyan-900 my-6"></div>
                <h2 className="text-cyan-600 text-xs tracking-[0.5em] uppercase mb-12 font-bold">
                  Attachment Lesson 01
                </h2>
                <button
                  onClick={nextSlide}
                  className={`bg-slate-900 border border-cyan-500 text-cyan-400 font-bold px-12 py-4 rounded-xl hover:bg-slate-800 transition-all ${isPresentation ? 'text-2xl' : 'text-lg'} uppercase shadow-lg`}
                >
                  Start Lesson
                </button>
              </div>
            </Slide>
          );

        case 1:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 1: Activation"
                title="Do Now Quiz"
                icon={Activity}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <DoNowQuiz
                questions={lesson1DoNow}
                isPresentation={isPresentation}
              />
            </Slide>
          );

        case 2:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: Concept"
                title="Reciprocity"
                icon={Heart}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <div className={`max-w-4xl ${isPresentation ? 'px-12' : 'px-6'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Definition Card */}
                  <div className={`p-6 bg-cyan-900/20 border-l-4 border-cyan-500 rounded-lg ${isPresentation ? 'p-8' : ''}`}>
                    <h3 className={`text-cyan-400 font-bold mb-3 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                      📖 What is Reciprocity?
                    </h3>
                    <p className={`text-gray-300 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <strong className="text-white">Reciprocity</strong> refers to the <span className="text-cyan-300">two-way, mutual interaction</span> between caregiver and infant. 
                      Both parties respond to each other's signals in a turn-taking "conversation."
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className={`p-6 bg-gray-800 rounded-lg border border-gray-700 ${isPresentation ? 'p-8' : ''}`}>
                    <h3 className={`text-white font-bold mb-3 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                      🔑 Key Features
                    </h3>
                    <ul className={`text-gray-300 space-y-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <li>• <span className="text-cyan-300">Turn-taking</span> → Like a conversation</li>
                      <li>• <span className="text-cyan-300">Eliciting responses</span> → Infant signals trigger caregiver response</li>
                      <li>• <span className="text-cyan-300">Active participation</span> → Both are "active partners"</li>
                    </ul>
                  </div>

                  {/* Research Evidence */}
                  <div className={`p-6 bg-gray-800 rounded-lg border border-cyan-500/30 ${isPresentation ? 'p-8' : ''}`}>
                    <h3 className={`text-cyan-400 font-bold mb-3 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                      🔬 Brazleton et al. (1975)
                    </h3>
                    <p className={`text-gray-300 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      Described caregiver-infant interaction as a <span className="text-cyan-300">"dance"</span> where each partner responds to the other's cues.
                      When caregivers ignored infant signals, babies showed <span className="text-red-300">distress</span>.
                    </p>
                  </div>

                  {/* Example */}
                  <div className={`p-6 bg-gray-800 rounded-lg border border-gray-700 ${isPresentation ? 'p-8' : ''}`}>
                    <h3 className={`text-white font-bold mb-3 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                      💡 Example
                    </h3>
                    <p className={`text-gray-300 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      Baby smiles → Caregiver smiles back → Baby coos → Caregiver talks → Baby babbles...
                      <br /><br />
                      This "proto-conversation" develops from <span className="text-cyan-300">around 3 months</span> of age.
                    </p>
                  </div>
                </div>
              </div>
            </Slide>
          );

        case 3:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: Concept"
                title="Interactional Synchrony"
                icon={Users}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <div className={`max-w-4xl ${isPresentation ? 'px-12' : 'px-6'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Definition Card */}
                  <div className={`p-6 bg-cyan-900/20 border-l-4 border-cyan-500 rounded-lg ${isPresentation ? 'p-8' : ''}`}>
                    <h3 className={`text-cyan-400 font-bold mb-3 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                      📖 What is Interactional Synchrony?
                    </h3>
                    <p className={`text-gray-300 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <strong className="text-white">Interactional synchrony</strong> occurs when the caregiver and infant 
                      <span className="text-cyan-300"> mirror each other's emotions and behaviours</span> in a coordinated, synchronised way.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className={`p-6 bg-gray-800 rounded-lg border border-gray-700 ${isPresentation ? 'p-8' : ''}`}>
                    <h3 className={`text-white font-bold mb-3 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                      🔑 Key Features
                    </h3>
                    <ul className={`text-gray-300 space-y-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <li>• <span className="text-cyan-300">Mirroring</span> → Copying expressions/actions</li>
                      <li>• <span className="text-cyan-300">Temporal coordination</span> → Actions occur simultaneously</li>
                      <li>• <span className="text-cyan-300">Emotional matching</span> → Shared emotional states</li>
                    </ul>
                  </div>

                  {/* Research Evidence - Meltzoff & Moore */}
                  <div className={`p-6 bg-gray-800 rounded-lg border border-cyan-500/30 ${isPresentation ? 'p-8' : ''}`}>
                    <h3 className={`text-cyan-400 font-bold mb-3 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                      🔬 Meltzoff & Moore (1977)
                    </h3>
                    <p className={`text-gray-300 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <strong>Procedure:</strong> Adults displayed facial expressions (mouth opening, tongue protrusion) to infants aged <span className="text-cyan-300">2-3 weeks</span>.
                      <br /><br />
                      <strong>Finding:</strong> Infants <span className="text-cyan-300">imitated the expressions</span>, suggesting synchrony is innate.
                    </p>
                  </div>

                  {/* Research Evidence - Condon & Sander */}
                  <div className={`p-6 bg-gray-800 rounded-lg border border-cyan-500/30 ${isPresentation ? 'p-8' : ''}`}>
                    <h3 className={`text-cyan-400 font-bold mb-3 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                      🔬 Condon & Sander (1974)
                    </h3>
                    <p className={`text-gray-300 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      Analysed frame-by-frame video of adults and infants. Found infants <span className="text-cyan-300">coordinated their body movements</span> 
                      with adult speech rhythms within <span className="text-cyan-300">1-2 days of birth</span>.
                      <br /><br />
                      This "interactional synchrony" did not occur with random sounds.
                    </p>
                  </div>
                </div>

                {/* Key Difference Box */}
                <div className={`mt-6 p-4 bg-amber-900/20 border border-amber-500/50 rounded-lg ${isPresentation ? 'p-6' : ''}`}>
                  <p className={`text-amber-300 font-semibold ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    ⚡ Key Difference: <span className="text-white">Reciprocity = turn-taking responses</span> | 
                    <span className="text-white"> Synchrony = simultaneous mirroring</span>
                  </p>
                </div>
              </div>
            </Slide>
          );

        case 4:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: Check"
                title="Understanding Check"
                icon={Brain}
                time="10 MINS"
                isPresentation={isPresentation}
              />
              <UnderstandingCheck
                questions={[
                  {
                    id: 1,
                    type: 'scenario',
                    question: 'A mother notices her baby is cooing. She pauses, then responds with baby talk, waits for the baby to respond, and continues this pattern. Which concept does this BEST demonstrate?',
                    options: [
                      { text: 'Interactional synchrony - they are mirroring each other\'s actions simultaneously', correct: false },
                      { text: 'Reciprocity - they are engaging in turn-taking interaction like a conversation', correct: true },
                      { text: 'Classical conditioning - the baby is learning to associate sounds with responses', correct: false }
                    ],
                    feedback: 'This is reciprocity because the interaction involves turn-taking, like a conversation. The mother waits for the baby to respond before continuing. Brazleton et al. (1975) described this as a "dance" where each partner responds to the other.'
                  },
                  {
                    id: 2,
                    type: 'scenario',
                    question: 'A researcher shows a 3-week-old infant an adult sticking out their tongue. The infant sticks out their tongue too. This finding from Meltzoff and Moore (1977) supports which concept?',
                    options: [
                      { text: 'Reciprocity - the baby is taking turns in interaction', correct: false },
                      { text: 'Interactional synchrony - the baby is mirroring the adult\'s action', correct: true },
                      { text: 'Attachment - the baby has formed a bond with the adult', correct: false }
                    ],
                    feedback: 'This demonstrates interactional synchrony - the infant mirrors (copies) the adult\'s facial expression. Meltzoff and Moore found this imitation in infants as young as 2-3 weeks, suggesting it is innate rather than learned.'
                  },
                  {
                    id: 3,
                    type: 'scenario',
                    question: 'Condon and Sander (1974) filmed adults talking to newborn babies. What did their frame-by-frame analysis reveal about infant behaviour?',
                    options: [
                      { text: 'Infants showed no response to adult speech until 3 months old', correct: false },
                      { text: 'Infants cried when adults spoke to them', correct: false },
                      { text: 'Infants coordinated their movements with the rhythm of adult speech from birth', correct: true }
                    ],
                    feedback: 'Condon and Sander discovered that infants as young as 1-2 days old synchronise their body movements with the rhythm of adult speech. This "interactional synchrony" is present from birth and is specific to human speech, not random sounds.'
                  },
                  {
                    id: 4,
                    type: 'matching',
                    question: 'Match each concept to its correct definition:',
                    items: [
                      { label: 'Reciprocity', options: ['Mirroring emotions and behaviours simultaneously', 'Turn-taking interaction between caregiver and infant', 'A one-way attachment from infant to caregiver'], correct: 1 },
                      { label: 'Interactional Synchrony', options: ['Turn-taking interaction between caregiver and infant', 'Mirroring emotions and behaviours simultaneously', 'Learning through reinforcement'], correct: 1 }
                    ],
                    feedback: 'Reciprocity involves turn-taking responses (like a conversation), while interactional synchrony involves simultaneous mirroring of emotions and behaviours. Both are crucial for developing secure attachments.'
                  },
                  {
                    id: 5,
                    type: 'matching',
                    question: 'Match each researcher to their key finding:',
                    items: [
                      { label: 'Meltzoff & Moore (1977)', options: ['Infants synchronise movements with adult speech', 'Infants imitate adult facial expressions from 2-3 weeks', 'Infants show distress when caregivers ignore them'], correct: 1 },
                      { label: 'Condon & Sander (1974)', options: ['Infants imitate adult facial expressions from 2-3 weeks', 'Infants synchronise movements with adult speech from birth', 'Caregiver-infant interaction is like a dance'], correct: 1 }
                    ],
                    feedback: 'Meltzoff & Moore demonstrated facial imitation in very young infants, while Condon & Sander showed movement synchrony with speech from birth. Both studies provide evidence that interactional synchrony is innate.'
                  }
                ]}
                themeColor={lessonTheme.color}
                isPresentation={isPresentation}
              />
            </Slide>
          );

        case 5:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 3: Application"
                title="Interaction Simulator"
                icon={Activity}
                time="8 MINS"
                isPresentation={isPresentation}
              />
              <Lesson1Simulation isPresentation={isPresentation} />
            </Slide>
          );

        case 6:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 3: Application"
                title="Why Does This Matter?"
                icon={Heart}
                time="7 MINS"
                isPresentation={isPresentation}
              />
              <div className={`max-w-4xl ${isPresentation ? 'px-12' : 'px-6'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Importance Card */}
                  <div className={`p-6 bg-cyan-900/20 border-l-4 border-cyan-500 rounded-lg ${isPresentation ? 'p-8' : ''}`}>
                    <h3 className={`text-cyan-400 font-bold mb-3 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                      🎯 Importance for Attachment
                    </h3>
                    <p className={`text-gray-300 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      Reciprocity and interactional synchrony are the <span className="text-cyan-300">building blocks of attachment</span>. 
                      These early interactions help infants:
                    </p>
                    <ul className={`text-gray-300 mt-3 space-y-1 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <li>• Learn to regulate emotions</li>
                      <li>• Develop social skills</li>
                      <li>• Form secure attachments</li>
                      <li>• Build trust in caregivers</li>
                    </ul>
                  </div>

                  {/* Sensitive Responsiveness */}
                  <div className={`p-6 bg-gray-800 rounded-lg border border-gray-700 ${isPresentation ? 'p-8' : ''}`}>
                    <h3 className={`text-white font-bold mb-3 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                      💫 Sensitive Responsiveness
                    </h3>
                    <p className={`text-gray-300 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      Caregivers who are <span className="text-cyan-300">sensitively responsive</span> to infant cues 
                      (picking up signals accurately and responding appropriately) tend to have infants who develop 
                      <span className="text-green-300"> secure attachments</span>.
                    </p>
                  </div>

                  {/* Isabella Study */}
                  <div className={`p-6 bg-gray-800 rounded-lg border border-cyan-500/30 md:col-span-2 ${isPresentation ? 'p-8' : ''}`}>
                    <h3 className={`text-cyan-400 font-bold mb-3 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                      🔬 Isabella et al. (1989)
                    </h3>
                    <p className={`text-gray-300 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      Observed 30 mothers and infants and found that high levels of interactional synchrony were associated with 
                      <span className="text-green-300"> better quality attachments</span> (assessed at 1 year using the Strange Situation).
                      <br /><br />
                      This suggests that <span className="text-cyan-300">early caregiver-infant interactions</span> directly 
                      influence the type of attachment that develops.
                    </p>
                  </div>
                </div>
              </div>
            </Slide>
          );

        case 7:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 4: Evidence"
                title="Research Studies"
                icon={Brain}
                time="10 MINS"
                isPresentation={isPresentation}
              />
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl ${isPresentation ? 'gap-6' : ''}`}>
                {/* Study 1 */}
                <div className={`p-6 bg-gray-800 border-l-4 border-cyan-500 rounded-lg ${isPresentation ? 'p-8' : ''}`}>
                  <p className={`font-semibold text-cyan-400 mb-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    Meltzoff & Moore (1977)
                  </p>
                  <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>
                    <strong>Sample:</strong> Infants aged 2-3 weeks<br />
                    <strong>Method:</strong> Adults displayed facial expressions<br />
                    <strong>Finding:</strong> Infants imitated expressions (tongue protrusion, mouth opening)<br />
                    <strong>Conclusion:</strong> Interactional synchrony is innate
                  </p>
                </div>

                {/* Study 2 */}
                <div className={`p-6 bg-gray-800 border-l-4 border-cyan-500 rounded-lg ${isPresentation ? 'p-8' : ''}`}>
                  <p className={`font-semibold text-cyan-400 mb-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    Condon & Sander (1974)
                  </p>
                  <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>
                    <strong>Sample:</strong> Newborn babies (1-2 days old)<br />
                    <strong>Method:</strong> Frame-by-frame video analysis<br />
                    <strong>Finding:</strong> Infants moved in rhythm with adult speech<br />
                    <strong>Conclusion:</strong> Synchrony present from birth
                  </p>
                </div>

                {/* Study 3 */}
                <div className={`p-6 bg-gray-800 border-l-4 border-cyan-500 rounded-lg ${isPresentation ? 'p-8' : ''}`}>
                  <p className={`font-semibold text-cyan-400 mb-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    Isabella et al. (1989)
                  </p>
                  <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>
                    <strong>Sample:</strong> 30 mother-infant pairs<br />
                    <strong>Method:</strong> Observation + Strange Situation at 1 year<br />
                    <strong>Finding:</strong> High synchrony linked to secure attachment<br />
                    <strong>Conclusion:</strong> Quality of early interaction predicts attachment type
                  </p>
                </div>

                {/* Study 4 */}
                <div className={`p-6 bg-gray-800 border-l-4 border-cyan-500 rounded-lg ${isPresentation ? 'p-8' : ''}`}>
                  <p className={`font-semibold text-cyan-400 mb-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    Brazleton et al. (1975)
                  </p>
                  <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>
                    <strong>Sample:</strong> Caregiver-infant pairs<br />
                    <strong>Method:</strong> Observation of interactions<br />
                    <strong>Finding:</strong> Interaction described as a "dance"; infants distressed when ignored<br />
                    <strong>Conclusion:</strong> Both partners are active in reciprocal interaction
                  </p>
                </div>
              </div>
            </Slide>
          );

        case 8:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 5: Evaluation"
                title="Critical Analysis"
                icon={Brain}
                time="10 MINS"
                isPresentation={isPresentation}
              />
              <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl ${isPresentation ? 'gap-6' : ''}`}>
                {/* Strength 1 */}
                <div className={`p-6 bg-green-900/20 border-l-4 border-green-500 rounded-lg ${isPresentation ? 'p-8' : ''}`}>
                  <p className={`font-semibold text-green-400 mb-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>✓ Strength</p>
                  <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>
                    <strong>Controlled observation:</strong> Studies like Meltzoff & Moore used controlled lab conditions, 
                    allowing cause-and-effect conclusions about imitation abilities.
                  </p>
                </div>

                {/* Strength 2 */}
                <div className={`p-6 bg-green-900/20 border-l-4 border-green-500 rounded-lg ${isPresentation ? 'p-8' : ''}`}>
                  <p className={`font-semibold text-green-400 mb-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>✓ Strength</p>
                  <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>
                    <strong>Practical applications:</strong> Understanding caregiver-infant interaction has informed 
                    parenting programs and interventions for at-risk families.
                  </p>
                </div>

                {/* Limitation 1 */}
                <div className={`p-6 bg-red-900/20 border-l-4 border-red-500 rounded-lg ${isPresentation ? 'p-8' : ''}`}>
                  <p className={`font-semibold text-red-400 mb-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>✗ Limitation</p>
                  <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>
                    <strong>Replication issues:</strong> Meltzoff & Moore's findings have been difficult to replicate. 
                    Koepke et al. (1983) failed to find consistent evidence of neonatal imitation.
                  </p>
                </div>

                {/* Limitation 2 */}
                <div className={`p-6 bg-red-900/20 border-l-4 border-red-500 rounded-lg ${isPresentation ? 'p-8' : ''}`}>
                  <p className={`font-semibold text-red-400 mb-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>✗ Limitation</p>
                  <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>
                    <strong>Observer bias:</strong> Researchers interpreting infant behaviours may see what they 
                    expect to see. Tongue protrusion could be reflexive, not intentional imitation.
                  </p>
                </div>

                {/* Limitation 3 */}
                <div className={`p-6 bg-red-900/20 border-l-4 border-red-500 rounded-lg ${isPresentation ? 'p-8' : ''}`}>
                  <p className={`font-semibold text-red-400 mb-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>✗ Limitation</p>
                  <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>
                    <strong>Artificial settings:</strong> Lab observations may not reflect natural caregiver-infant 
                    interactions at home, reducing ecological validity.
                  </p>
                </div>

                {/* Alternative */}
                <div className={`p-6 bg-yellow-900/20 border-l-4 border-yellow-500 rounded-lg ${isPresentation ? 'p-8' : ''}`}>
                  <p className={`font-semibold text-yellow-400 mb-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>⚡ Alternative View</p>
                  <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>
                    <strong>Learning vs innate:</strong> Some argue that synchrony develops through learning, not 
                    innate ability. However, evidence from newborns suggests at least some capacity is present from birth.
                  </p>
                </div>
              </div>
            </Slide>
          );

        case 9:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 6: Assessment"
                title="Essay Plan & Exam Prep"
                icon={Clock}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <div className={`max-w-4xl ${isPresentation ? 'px-12' : 'px-6'}`}>
                {/* Essay Question */}
                <div className={`p-4 bg-cyan-900/20 border border-cyan-500 rounded-lg mb-6 ${isPresentation ? 'p-6' : ''}`}>
                  <p className={`text-cyan-400 font-bold ${isPresentation ? 'text-xl' : 'text-base'}`}>
                    📝 Sample Question: "Outline and evaluate research into caregiver-infant interactions." (16 marks)
                  </p>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isPresentation ? 'gap-8' : ''}`}>
                  {/* AO1 */}
                  <div className={`p-6 bg-gray-800 rounded-xl border border-gray-700 ${isPresentation ? 'p-8' : ''}`}>
                    <p className={`font-semibold text-cyan-400 mb-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>AO1 (Knowledge) - 6 marks</p>
                    <ul className={`text-gray-300 space-y-2 ${isPresentation ? 'text-base' : 'text-xs'}`}>
                      <li>✓ Define reciprocity (turn-taking interaction)</li>
                      <li>✓ Define interactional synchrony (mirroring)</li>
                      <li>✓ Describe Meltzoff & Moore (1977) - imitation</li>
                      <li>✓ Describe Condon & Sander (1974) - speech rhythm</li>
                      <li>✓ Mention Isabella et al. (1989) - attachment link</li>
                      <li>✓ Explain importance for attachment development</li>
                    </ul>
                  </div>

                  {/* AO3 */}
                  <div className={`p-6 bg-gray-800 rounded-xl border border-gray-700 ${isPresentation ? 'p-8' : ''}`}>
                    <p className={`font-semibold text-amber-400 mb-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>AO3 (Evaluation) - 10 marks</p>
                    <ul className={`text-gray-300 space-y-2 ${isPresentation ? 'text-base' : 'text-xs'}`}>
                      <li>✓ Strength: Controlled observation (internal validity)</li>
                      <li>✓ Strength: Practical applications (parenting programs)</li>
                      <li>✗ Limitation: Replication issues (Koepke et al.)</li>
                      <li>✗ Limitation: Observer bias (interpretation of behaviour)</li>
                      <li>✗ Limitation: Low ecological validity (lab settings)</li>
                      <li>⚡ Alternative: Innate vs learned debate</li>
                    </ul>
                  </div>
                </div>

                {/* Exam Tip */}
                <div className={`mt-6 p-4 bg-amber-900/20 border border-amber-500/50 rounded-lg ${isPresentation ? 'p-6' : ''}`}>
                  <p className={`text-amber-300 font-semibold ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    💡 Exam Tip: Always link evaluation points back to the studies. For example: 
                    "This is a limitation because Koepke et al. (1983) failed to replicate Meltzoff & Moore's findings, 
                    questioning whether neonatal imitation is a robust phenomenon."
                  </p>
                </div>
              </div>
            </Slide>
          );

        default:
          return <Slide isPresentation={isPresentation}><div className="text-white">Slide not found</div></Slide>;
      }
    }

    // Default for other lessons (not yet implemented)
    return (
      <Slide isPresentation={isPresentation}>
        <div className="text-center">
          <h2 className={`text-white font-bold mb-4 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
            Lesson {currentLesson}
          </h2>
          <p className={`text-gray-400 ${isPresentation ? 'text-xl' : 'text-base'}`}>
            This lesson is coming soon!
          </p>
        </div>
      </Slide>
    );
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      {!isPresentation && (
        <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-gray-800 border-r border-gray-700 transition-all duration-300 overflow-y-auto`}>
          <div className="p-4">
            <button
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-700 rounded-lg w-full text-left text-gray-400"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {isSidebarOpen && (
            <div className="p-4 space-y-2">
              <h3 className="text-cyan-400 font-bold text-sm mb-4 uppercase tracking-wider">Attachment</h3>
              {lessons.map(lesson => (
                <button
                  key={lesson.id}
                  onClick={() => { setCurrentLesson(lesson.id); setCurrentSlide(0); }}
                  className={`w-full text-left p-3 rounded-lg transition-all text-sm ${
                    currentLesson === lesson.id ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {lesson.title}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        {!isPresentation && (
          <div className="bg-gray-800 border-b border-gray-700 p-4 flex justify-between items-center">
            <div className="text-gray-400 text-sm">
              Slide {currentSlide + 1} of {slideCount}
            </div>
            <button
              onClick={() => setIsPresentation(!isPresentation)}
              className="p-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-white transition-all"
            >
              {isPresentation ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>
          </div>
        )}

        {/* Slide Area */}
        <div className="flex-1 overflow-hidden">
          {renderLesson()}
        </div>

        {/* Navigation */}
        {!isPresentation && (
          <div className="bg-gray-800 border-t border-gray-700 p-4 flex justify-between items-center">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2 hover:bg-gray-700 rounded-lg text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slideCount - 1}
              className="p-2 hover:bg-gray-700 rounded-lg text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
