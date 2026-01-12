import { useState, useEffect } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  Projector
} from 'lucide-react';
import Slide from './components/Slide';
import PhaseHeader from './components/PhaseHeader';
import DoNowQuiz from './components/DoNowQuiz';
import UnderstandingCheck from './components/UnderstandingCheck';
import Lesson1Simulation from './components/Lesson1Simulation';
import Lesson2Simulation from './components/Lesson2Simulation';
import Lesson3Simulation from './components/Lesson3Simulation';
import Lesson4Simulation from './components/Lesson4Simulation';
import Lesson5Simulation from './components/Lesson5Simulation';
import Lesson6Simulation from './components/Lesson6Simulation';
import { lessons, lesson1DoNow, lesson2DoNow, lesson3DoNow, lesson4DoNow, lesson5DoNow, lesson6DoNow, lessonThemes } from './constants';
import { Activity, Brain, Clock, Heart, Baby, Users, Target, Eye, EyeOff, Scale, Dna, BookOpen, Bird, FlaskConical, AlertTriangle, Lightbulb } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(1);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isPresentation, setIsPresentation] = useState(false);
  const [showEssayPlan, setShowEssayPlan] = useState(false);
  const [showEssayPlan2, setShowEssayPlan2] = useState(false);
  const [showEssayPlan3, setShowEssayPlan3] = useState(false);
  const [showEssayPlan4, setShowEssayPlan4] = useState(false);
  const [showEssayPlan5, setShowEssayPlan5] = useState(false);
  const [showEssayPlan6, setShowEssayPlan6] = useState(false);

  const getSlideCount = (_lessonId: number) => {
    return 10; // Standard 10-slide lesson
  };

  const slideCount = getSlideCount(currentLesson);
  const lessonTheme = lessonThemes[currentLesson];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') setIsPresentation(false);
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
                  <div className="absolute inset-0 bg-cyan-500 blur-[100px] opacity-20 rounded-full animate-pulse"></div>
                  <div className="relative z-10 flex gap-4">
                    <Baby size={isPresentation ? 100 : 80} className="text-cyan-400 animate-heartbeat" />
                    <Heart size={isPresentation ? 100 : 80} className="text-pink-400" />
                  </div>
                </div>
                <h1 className={`font-bold text-white mb-4 tracking-widest uppercase ${isPresentation ? 'text-8xl' : 'text-6xl'}`}>
                  Caregiver-Infant <span className="text-cyan-400">Interactions</span>
                </h1>
                <div className="h-1 w-64 bg-cyan-600 my-6"></div>
                <h2 className="text-cyan-600 text-xs tracking-[0.5em] uppercase mb-12 font-bold">
                  Attachment Lesson 01
                </h2>
                <button
                  onClick={nextSlide}
                  className={`group relative bg-slate-900 border-2 border-cyan-500 text-cyan-400 font-bold px-12 py-4 rounded-xl hover:bg-cyan-900/30 hover:text-white transition-all ${isPresentation ? 'text-2xl' : 'text-lg'} uppercase shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40`}
                >
                  <span className="relative z-10">Start Lesson</span>
                  <div className="absolute inset-0 bg-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
              <div className={`grid grid-cols-1 lg:grid-cols-2 h-full ${isPresentation ? 'gap-10' : 'gap-6'}`}>
                  {/* Definition Card */}
                  <div className={`bg-gray-800 rounded-xl border-t-4 border-cyan-500 shadow-xl overflow-hidden ${isPresentation ? 'p-10' : 'p-6'}`}>
                    <h3 className={`text-cyan-400 font-bold mb-4 ${isPresentation ? 'text-3xl' : 'text-xl'}`}>
                      📖 What is Reciprocity?
                    </h3>
                    <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                      <strong className="text-white">Reciprocity</strong> refers to the <span className="text-cyan-300 font-semibold">two-way, mutual interaction</span> between caregiver and infant. 
                      Both parties respond to each other's signals in a turn-taking "conversation."
                    </p>
                    <div className={`mt-6 bg-gray-900/50 rounded-lg ${isPresentation ? 'p-6' : 'p-4'}`}>
                      <h4 className={`text-white font-bold mb-3 ${isPresentation ? 'text-xl' : 'text-sm'}`}>🔑 Key Features</h4>
                      <ul className={`text-gray-300 space-y-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        <li className="flex items-start gap-2"><span className="text-cyan-400">•</span> <span><span className="text-cyan-300 font-semibold">Turn-taking</span> → Like a conversation</span></li>
                        <li className="flex items-start gap-2"><span className="text-cyan-400">•</span> <span><span className="text-cyan-300 font-semibold">Eliciting responses</span> → Infant signals trigger caregiver response</span></li>
                        <li className="flex items-start gap-2"><span className="text-cyan-400">•</span> <span><span className="text-cyan-300 font-semibold">Active participation</span> → Both are "active partners"</span></li>
                      </ul>
                    </div>
                  </div>

                  {/* Research Evidence */}
                  <div className={`bg-gray-800 rounded-xl border border-cyan-500/30 shadow-xl flex flex-col ${isPresentation ? 'p-10' : 'p-6'}`}>
                    <h3 className={`text-cyan-400 font-bold mb-4 border-b border-gray-700 pb-3 ${isPresentation ? 'text-3xl' : 'text-xl'}`}>
                      🔬 Research Evidence
                    </h3>
                    <div className={`bg-cyan-900/20 rounded-lg border-l-4 border-cyan-500 flex-grow ${isPresentation ? 'p-6' : 'p-4'}`}>
                      <p className={`font-bold text-cyan-300 uppercase mb-2 ${isPresentation ? 'text-lg' : 'text-xs'}`}>Brazleton et al. (1975)</p>
                      <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                        Described caregiver-infant interaction as a <span className="text-cyan-300 font-semibold">"dance"</span> where each partner responds to the other's cues.
                        When caregivers ignored infant signals, babies showed <span className="text-red-300 font-semibold">distress</span>.
                      </p>
                    </div>
                    <div className={`mt-4 bg-gray-900/50 rounded-lg ${isPresentation ? 'p-6' : 'p-4'}`}>
                      <h4 className={`text-white font-bold mb-2 ${isPresentation ? 'text-xl' : 'text-sm'}`}>💡 Example Chain</h4>
                      <p className={`text-gray-300 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        Baby smiles → Caregiver smiles back → Baby coos → Caregiver talks → Baby babbles...
                        <br /><br />
                        This "proto-conversation" develops from <span className="text-cyan-300 font-semibold">around 3 months</span> of age.
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
              <div className={`grid grid-cols-1 lg:grid-cols-2 h-full ${isPresentation ? 'gap-10' : 'gap-6'}`}>
                  {/* Definition Card */}
                  <div className={`bg-gray-800 rounded-xl border-t-4 border-cyan-500 shadow-xl overflow-hidden ${isPresentation ? 'p-10' : 'p-6'}`}>
                    <h3 className={`text-cyan-400 font-bold mb-4 ${isPresentation ? 'text-3xl' : 'text-xl'}`}>
                      📖 What is Interactional Synchrony?
                    </h3>
                    <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                      <strong className="text-white">Interactional synchrony</strong> occurs when the caregiver and infant 
                      <span className="text-cyan-300 font-semibold"> mirror each other's emotions and behaviours</span> in a coordinated, synchronised way.
                    </p>
                    <div className={`mt-6 bg-gray-900/50 rounded-lg ${isPresentation ? 'p-6' : 'p-4'}`}>
                      <h4 className={`text-white font-bold mb-3 ${isPresentation ? 'text-xl' : 'text-sm'}`}>🔑 Key Features</h4>
                      <ul className={`text-gray-300 space-y-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        <li className="flex items-start gap-2"><span className="text-cyan-400">•</span> <span><span className="text-cyan-300 font-semibold">Mirroring</span> → Copying expressions/actions</span></li>
                        <li className="flex items-start gap-2"><span className="text-cyan-400">•</span> <span><span className="text-cyan-300 font-semibold">Temporal coordination</span> → Actions occur simultaneously</span></li>
                        <li className="flex items-start gap-2"><span className="text-cyan-400">•</span> <span><span className="text-cyan-300 font-semibold">Emotional matching</span> → Shared emotional states</span></li>
                      </ul>
                    </div>
                  </div>

                  {/* Research Evidence */}
                  <div className={`bg-gray-800 rounded-xl border border-cyan-500/30 shadow-xl flex flex-col ${isPresentation ? 'p-10' : 'p-6'}`}>
                    <h3 className={`text-cyan-400 font-bold mb-4 border-b border-gray-700 pb-3 ${isPresentation ? 'text-3xl' : 'text-xl'}`}>
                      🔬 Research Evidence
                    </h3>
                    
                    <div className={`bg-cyan-900/20 rounded-lg border-l-4 border-cyan-500 mb-4 ${isPresentation ? 'p-6' : 'p-4'}`}>
                      <p className={`font-bold text-cyan-300 uppercase mb-2 ${isPresentation ? 'text-lg' : 'text-xs'}`}>Meltzoff & Moore (1977)</p>
                      <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        Adults displayed facial expressions (mouth opening, tongue protrusion) to infants aged <span className="text-cyan-300 font-semibold">2-3 weeks</span>. Infants <span className="text-cyan-300 font-semibold">imitated the expressions</span>, suggesting synchrony is innate.
                      </p>
                    </div>

                    <div className={`bg-cyan-900/20 rounded-lg border-l-4 border-cyan-500 ${isPresentation ? 'p-6' : 'p-4'}`}>
                      <p className={`font-bold text-cyan-300 uppercase mb-2 ${isPresentation ? 'text-lg' : 'text-xs'}`}>Condon & Sander (1974)</p>
                      <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        Analysed frame-by-frame video. Found infants <span className="text-cyan-300 font-semibold">coordinated their body movements</span> 
                        with adult speech rhythms within <span className="text-cyan-300 font-semibold">1-2 days of birth</span>. This did not occur with random sounds.
                      </p>
                    </div>
                  </div>

                  {/* Key Difference Box - Full Width */}
                  <div className={`lg:col-span-2 bg-amber-900/20 rounded-xl border-l-4 border-amber-500 ${isPresentation ? 'p-8' : 'p-5'}`}>
                    <strong className={`text-amber-300 block mb-2 uppercase tracking-widest ${isPresentation ? 'text-lg' : 'text-xs'}`}>⚡ Key Distinction</strong>
                    <p className={`text-gray-200 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                      <span className="text-cyan-300 font-bold">Reciprocity</span> = Turn-taking responses (like a conversation) | 
                      <span className="text-cyan-300 font-bold"> Interactional Synchrony</span> = Simultaneous mirroring (at the same time)
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
              <Lesson1Simulation isPresentation={isPresentation} themeColor={lessonTheme.color} />
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
              <div className={`w-full h-full ${isPresentation ? 'px-8' : 'px-4'}`}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 h-full ${isPresentation ? 'gap-8' : 'gap-5'}`}>
                  {/* Importance Card */}
                  <div className={`bg-gray-800 rounded-xl border-t-4 border-cyan-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`rounded-lg bg-cyan-900/50 ${isPresentation ? 'p-3' : 'p-2'}`}>
                        <Target size={isPresentation ? 28 : 20} className="text-cyan-400" />
                      </div>
                      <h3 className={`text-cyan-400 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                        Importance for Attachment
                      </h3>
                    </div>
                    <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      Reciprocity and interactional synchrony are the <span className="text-cyan-300 font-semibold">building blocks of attachment</span>. 
                      These early interactions help infants:
                    </p>
                    <ul className={`text-gray-300 mt-4 space-y-2 flex-grow ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        Learn to regulate emotions
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        Develop social skills
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        Form secure attachments
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        Build trust in caregivers
                      </li>
                    </ul>
                  </div>

                  {/* Sensitive Responsiveness */}
                  <div className={`bg-gray-800 rounded-xl border-t-4 border-purple-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`rounded-lg bg-purple-900/50 ${isPresentation ? 'p-3' : 'p-2'}`}>
                        <Heart size={isPresentation ? 28 : 20} className="text-purple-400" />
                      </div>
                      <h3 className={`text-purple-400 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                        Sensitive Responsiveness
                      </h3>
                    </div>
                    <p className={`text-gray-300 leading-relaxed flex-grow ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      Caregivers who are <span className="text-purple-300 font-semibold">sensitively responsive</span> to infant cues 
                      (picking up signals accurately and responding appropriately) tend to have infants who develop 
                      <span className="text-green-300 font-semibold"> secure attachments</span>.
                    </p>
                  </div>

                  {/* Isabella Study - Full Width */}
                  <div className={`lg:col-span-2 bg-gray-800 rounded-xl border-t-4 border-green-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <div className={`rounded-lg bg-green-900/50 ${isPresentation ? 'p-3' : 'p-2'}`}>
                        <Brain size={isPresentation ? 28 : 20} className="text-green-400" />
                      </div>
                      <h3 className={`text-green-400 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                        Isabella et al. (1989) - Key Research
                      </h3>
                    </div>
                    <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      Observed 30 mothers and infants and found that high levels of interactional synchrony were associated with 
                      <span className="text-green-300 font-semibold"> better quality attachments</span> (assessed at 1 year using the Strange Situation).
                    </p>
                    <div className={`mt-4 bg-green-900/20 border-l-4 border-green-500 rounded-r-lg ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <p className={`text-green-200 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        <strong>Key Insight:</strong> Early caregiver-infant interactions directly 
                        influence the type of attachment that develops.
                      </p>
                    </div>
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
              <div className={`grid grid-cols-1 lg:grid-cols-2 h-full ${isPresentation ? 'gap-10' : 'gap-6'}`}>
                {/* Study 1 */}
                <div className={`bg-gray-800 rounded-xl border border-cyan-500/30 shadow-xl overflow-hidden flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                    <div className={`rounded-lg bg-cyan-900/50 ${isPresentation ? 'p-3' : 'p-2'}`}>
                      <Brain size={isPresentation ? 28 : 20} className="text-cyan-400" />
                    </div>
                    <h4 className={`font-bold text-cyan-400 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                      Meltzoff & Moore (1977)
                    </h4>
                  </div>
                  <div className={`text-gray-300 leading-relaxed space-y-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <p><span className="text-cyan-400 font-semibold">Sample:</span> Infants aged 2-3 weeks</p>
                    <p><span className="text-cyan-400 font-semibold">Method:</span> Adults displayed facial expressions</p>
                    <p><span className="text-cyan-400 font-semibold">Finding:</span> Infants imitated expressions (tongue protrusion, mouth opening)</p>
                    <p><span className="text-green-400 font-semibold">Conclusion:</span> Interactional synchrony is innate</p>
                  </div>
                </div>

                {/* Study 2 */}
                <div className={`bg-gray-800 rounded-xl border border-cyan-500/30 shadow-xl overflow-hidden flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                    <div className={`rounded-lg bg-cyan-900/50 ${isPresentation ? 'p-3' : 'p-2'}`}>
                      <Brain size={isPresentation ? 28 : 20} className="text-cyan-400" />
                    </div>
                    <h4 className={`font-bold text-cyan-400 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                      Condon & Sander (1974)
                    </h4>
                  </div>
                  <div className={`text-gray-300 leading-relaxed space-y-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <p><span className="text-cyan-400 font-semibold">Sample:</span> Newborn babies (1-2 days old)</p>
                    <p><span className="text-cyan-400 font-semibold">Method:</span> Frame-by-frame video analysis</p>
                    <p><span className="text-cyan-400 font-semibold">Finding:</span> Infants moved in rhythm with adult speech</p>
                    <p><span className="text-green-400 font-semibold">Conclusion:</span> Synchrony present from birth</p>
                  </div>
                </div>

                {/* Study 3 */}
                <div className={`bg-gray-800 rounded-xl border border-cyan-500/30 shadow-xl overflow-hidden flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                    <div className={`rounded-lg bg-cyan-900/50 ${isPresentation ? 'p-3' : 'p-2'}`}>
                      <Brain size={isPresentation ? 28 : 20} className="text-cyan-400" />
                    </div>
                    <h4 className={`font-bold text-cyan-400 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                      Isabella et al. (1989)
                    </h4>
                  </div>
                  <div className={`text-gray-300 leading-relaxed space-y-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <p><span className="text-cyan-400 font-semibold">Sample:</span> 30 mother-infant pairs</p>
                    <p><span className="text-cyan-400 font-semibold">Method:</span> Observation + Strange Situation at 1 year</p>
                    <p><span className="text-cyan-400 font-semibold">Finding:</span> High synchrony linked to secure attachment</p>
                    <p><span className="text-green-400 font-semibold">Conclusion:</span> Quality of early interaction predicts attachment</p>
                  </div>
                </div>

                {/* Study 4 */}
                <div className={`bg-gray-800 rounded-xl border border-cyan-500/30 shadow-xl overflow-hidden flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                    <div className={`rounded-lg bg-cyan-900/50 ${isPresentation ? 'p-3' : 'p-2'}`}>
                      <Brain size={isPresentation ? 28 : 20} className="text-cyan-400" />
                    </div>
                    <h4 className={`font-bold text-cyan-400 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                      Brazleton et al. (1975)
                    </h4>
                  </div>
                  <div className={`text-gray-300 leading-relaxed space-y-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <p><span className="text-cyan-400 font-semibold">Sample:</span> Caregiver-infant pairs</p>
                    <p><span className="text-cyan-400 font-semibold">Method:</span> Observation of interactions</p>
                    <p><span className="text-cyan-400 font-semibold">Finding:</span> Interaction described as a "dance"; infants distressed when ignored</p>
                    <p><span className="text-green-400 font-semibold">Conclusion:</span> Both partners active in reciprocal interaction</p>
                  </div>
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
              <div className={`grid grid-cols-1 lg:grid-cols-3 h-full ${isPresentation ? 'gap-8' : 'gap-4'}`}>
                {/* Strengths Column */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-green-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <h4 className={`font-bold text-green-400 mb-4 uppercase tracking-wider ${isPresentation ? 'text-xl' : 'text-sm'}`}>✓ Strengths</h4>
                  <div className="space-y-4 flex-grow">
                    <div className={`bg-green-900/20 rounded-lg border-l-4 border-green-500 ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        <strong className="text-green-400">Controlled observation:</strong> Studies like Meltzoff & Moore used controlled lab conditions, 
                        allowing cause-and-effect conclusions about imitation abilities.
                      </p>
                    </div>
                    <div className={`bg-green-900/20 rounded-lg border-l-4 border-green-500 ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        <strong className="text-green-400">Practical applications:</strong> Understanding caregiver-infant interaction has informed 
                        parenting programs and interventions for at-risk families.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Limitations Column */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-red-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <h4 className={`font-bold text-red-400 mb-4 uppercase tracking-wider ${isPresentation ? 'text-xl' : 'text-sm'}`}>✗ Limitations</h4>
                  <div className="space-y-4 flex-grow">
                    <div className={`bg-red-900/20 rounded-lg border-l-4 border-red-500 ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        <strong className="text-red-400">Replication issues:</strong> Meltzoff & Moore's findings have been difficult to replicate. 
                        Koepke et al. (1983) failed to find consistent evidence.
                      </p>
                    </div>
                    <div className={`bg-red-900/20 rounded-lg border-l-4 border-red-500 ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        <strong className="text-red-400">Observer bias:</strong> Researchers may see what they expect. 
                        Tongue protrusion could be reflexive, not intentional.
                      </p>
                    </div>
                    <div className={`bg-red-900/20 rounded-lg border-l-4 border-red-500 ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        <strong className="text-red-400">Artificial settings:</strong> Lab observations may not reflect 
                        natural interactions at home.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Alternative Views Column */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-amber-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <h4 className={`font-bold text-amber-400 mb-4 uppercase tracking-wider ${isPresentation ? 'text-xl' : 'text-sm'}`}>⚡ Alternative Views</h4>
                  <div className="space-y-4 flex-grow">
                    <div className={`bg-amber-900/20 rounded-lg border-l-4 border-amber-500 ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        <strong className="text-amber-400">Learning vs innate:</strong> Some argue that synchrony develops through learning, not 
                        innate ability. However, evidence from newborns suggests at least some capacity is present from birth.
                      </p>
                    </div>
                    <div className={`bg-amber-900/20 rounded-lg border-l-4 border-amber-500 ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        <strong className="text-amber-400">Cultural differences:</strong> Patterns of caregiver-infant interaction may vary across cultures, 
                        but synchrony appears universal in its importance.
                      </p>
                    </div>
                  </div>
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
              <div className={`w-full h-full flex flex-col ${isPresentation ? 'px-8' : 'px-4'}`}>
                {/* Essay Question */}
                <div className={`bg-gradient-to-r from-cyan-900/40 to-cyan-800/20 border-l-4 border-cyan-500 rounded-r-xl shadow-xl mb-6 ${isPresentation ? 'p-6' : 'p-4'}`}>
                  <p className={`text-cyan-300 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                    📝 Sample Question: "Outline and evaluate research into caregiver-infant interactions." (16 marks)
                  </p>
                </div>

                {/* Click to Reveal Button */}
                {!showEssayPlan ? (
                  <div className="flex-grow flex items-center justify-center">
                    <button
                      onClick={() => setShowEssayPlan(true)}
                      className={`group flex flex-col items-center gap-4 bg-gray-800 hover:bg-gray-700 border-2 border-dashed border-cyan-500/50 hover:border-cyan-400 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 ${isPresentation ? 'px-16 py-12' : 'px-12 py-8'}`}
                    >
                      <div className={`rounded-full bg-cyan-900/50 group-hover:bg-cyan-800/60 transition-colors ${isPresentation ? 'p-6' : 'p-4'}`}>
                        <Eye size={isPresentation ? 48 : 32} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                      </div>
                      <span className={`text-cyan-400 group-hover:text-cyan-300 font-semibold transition-colors ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                        Click to Reveal Essay Plan
                      </span>
                      <span className={`text-gray-500 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        Try planning your answer first!
                      </span>
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Hide Button */}
                    <button
                      onClick={() => setShowEssayPlan(false)}
                      className={`self-end mb-3 flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors ${isPresentation ? 'text-base' : 'text-sm'}`}
                    >
                      <EyeOff size={isPresentation ? 18 : 14} />
                      Hide Plan
                    </button>

                <div className={`grid grid-cols-1 lg:grid-cols-2 flex-grow ${isPresentation ? 'gap-8' : 'gap-5'} animate-fadeIn`}>
                  {/* AO1 */}
                  <div className={`bg-gray-800 rounded-xl border-t-4 border-cyan-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <span className={`bg-cyan-900/60 text-cyan-400 font-bold rounded-lg ${isPresentation ? 'px-4 py-2 text-xl' : 'px-3 py-1 text-sm'}`}>AO1</span>
                      <h4 className={`font-bold text-cyan-400 ${isPresentation ? 'text-xl' : 'text-base'}`}>Knowledge & Understanding</h4>
                      <span className={`ml-auto text-gray-500 ${isPresentation ? 'text-lg' : 'text-sm'}`}>6 marks</span>
                    </div>
                    <ul className={`text-gray-300 space-y-3 flex-grow ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400">✓</span>
                        <span>Define <strong className="text-cyan-300">reciprocity</strong> (turn-taking interaction)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400">✓</span>
                        <span>Define <strong className="text-cyan-300">interactional synchrony</strong> (mirroring)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400">✓</span>
                        <span>Describe <strong className="text-cyan-300">Meltzoff & Moore (1977)</strong> - imitation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400">✓</span>
                        <span>Describe <strong className="text-cyan-300">Condon & Sander (1974)</strong> - speech rhythm</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400">✓</span>
                        <span>Mention <strong className="text-cyan-300">Isabella et al. (1989)</strong> - attachment link</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400">✓</span>
                        <span>Explain importance for attachment development</span>
                      </li>
                    </ul>
                  </div>

                  {/* AO3 */}
                  <div className={`bg-gray-800 rounded-xl border-t-4 border-amber-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <span className={`bg-amber-900/60 text-amber-400 font-bold rounded-lg ${isPresentation ? 'px-4 py-2 text-xl' : 'px-3 py-1 text-sm'}`}>AO3</span>
                      <h4 className={`font-bold text-amber-400 ${isPresentation ? 'text-xl' : 'text-base'}`}>Evaluation & Analysis</h4>
                      <span className={`ml-auto text-gray-500 ${isPresentation ? 'text-lg' : 'text-sm'}`}>10 marks</span>
                    </div>
                    <ul className={`text-gray-300 space-y-3 flex-grow ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400">✓</span>
                        <span><strong className="text-green-400">Strength:</strong> Controlled observation (internal validity)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400">✓</span>
                        <span><strong className="text-green-400">Strength:</strong> Practical applications (parenting programs)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">✗</span>
                        <span><strong className="text-red-400">Limitation:</strong> Replication issues (Koepke et al.)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">✗</span>
                        <span><strong className="text-red-400">Limitation:</strong> Observer bias (interpretation of behaviour)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">✗</span>
                        <span><strong className="text-red-400">Limitation:</strong> Low ecological validity (lab settings)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-400">⚡</span>
                        <span><strong className="text-amber-400">Alternative:</strong> Innate vs learned debate</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Exam Tip */}
                <div className={`mt-6 bg-gradient-to-r from-amber-900/40 to-amber-800/20 border-l-4 border-amber-500 rounded-r-xl shadow-lg ${isPresentation ? 'p-6' : 'p-4'}`}>
                  <p className={`text-amber-200 font-medium leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    💡 <strong className="text-amber-300">Exam Tip:</strong> Always link evaluation points back to the studies. For example: 
                    "This is a limitation because Koepke et al. (1983) failed to replicate Meltzoff & Moore's findings, 
                    questioning whether neonatal imitation is a robust phenomenon."
                  </p>
                </div>
                  </>
                )}
              </div>
            </Slide>
          );

        default:
          return <Slide isPresentation={isPresentation}><div className="text-white">Slide not found</div></Slide>;
      }
    }

    // Lesson 2: Schaffer's Stages of Attachment
    if (currentLesson === 2) {
      switch (currentSlide) {
        case 0:
          return (
            <Slide isPresentation={isPresentation}>
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="flex items-center gap-4 mb-6">
                  <Clock size={isPresentation ? 64 : 48} className="text-amber-400 animate-pulse" />
                  <Baby size={isPresentation ? 64 : 48} className="text-amber-400 animate-pulse" />
                </div>
                <h1 className={`font-black mb-4 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent ${isPresentation ? 'text-7xl' : 'text-5xl'}`}>
                  Schaffer's Stages of Attachment
                </h1>
                <p className={`text-gray-400 max-w-2xl mb-8 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                  How attachment develops over the first year of life
                </p>
                <div className={`flex flex-wrap justify-center gap-3 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                  <span className="bg-amber-900/30 text-amber-400 px-4 py-2 rounded-full border border-amber-500/30">4 Developmental Stages</span>
                  <span className="bg-amber-900/30 text-amber-400 px-4 py-2 rounded-full border border-amber-500/30">Schaffer & Emerson (1964)</span>
                  <span className="bg-amber-900/30 text-amber-400 px-4 py-2 rounded-full border border-amber-500/30">Glasgow Babies Study</span>
                </div>
              </div>
            </Slide>
          );

        case 1:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 1: Recall"
                title="Do Now Quiz"
                icon={Brain}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <DoNowQuiz 
                questions={lesson2DoNow}
                isPresentation={isPresentation}
              />
            </Slide>
          );

        case 2:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: Core Knowledge"
                title="The Glasgow Babies Study"
                icon={BookOpen}
                time="8 MINS"
                isPresentation={isPresentation}
              />
              <div className={`w-full h-full ${isPresentation ? 'px-8' : 'px-4'}`}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 h-full ${isPresentation ? 'gap-8' : 'gap-5'}`}>
                  {/* Study Overview */}
                  <div className={`bg-gray-800 rounded-xl border-t-4 border-amber-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`rounded-lg bg-amber-900/50 ${isPresentation ? 'p-3' : 'p-2'}`}>
                        <Brain size={isPresentation ? 28 : 20} className="text-amber-400" />
                      </div>
                      <h3 className={`text-amber-400 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                        Schaffer & Emerson (1964)
                      </h3>
                    </div>
                    <div className={`text-gray-300 space-y-3 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <p><span className="text-amber-400 font-semibold">Sample:</span> 60 babies from Glasgow</p>
                      <p><span className="text-amber-400 font-semibold">Method:</span> Longitudinal study over 18 months</p>
                      <p><span className="text-amber-400 font-semibold">Measures:</span> Separation anxiety & stranger anxiety</p>
                      <p><span className="text-amber-400 font-semibold">Data:</span> Monthly visits + mother interviews</p>
                    </div>
                  </div>

                  {/* Key Findings */}
                  <div className={`bg-gray-800 rounded-xl border-t-4 border-green-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`rounded-lg bg-green-900/50 ${isPresentation ? 'p-3' : 'p-2'}`}>
                        <Target size={isPresentation ? 28 : 20} className="text-green-400" />
                      </div>
                      <h3 className={`text-green-400 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                        Key Findings
                      </h3>
                    </div>
                    <ul className={`text-gray-300 space-y-3 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                        <span>Attachment develops in <strong className="text-green-300">4 distinct stages</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                        <span>By 7 months, 50% showed <strong className="text-green-300">specific attachment</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                        <span>By 18 months, most had <strong className="text-green-300">multiple attachments</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                        <span>Primary caregiver was often <strong className="text-green-300">not the mother</strong> in 39% of cases</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Slide>
          );

        case 3:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: Core Knowledge"
                title="The Four Stages"
                icon={Clock}
                time="10 MINS"
                isPresentation={isPresentation}
              />
              <div className={`w-full h-full ${isPresentation ? 'px-6' : 'px-4'}`}>
                <div className={`grid grid-cols-1 lg:grid-cols-4 h-full ${isPresentation ? 'gap-6' : 'gap-4'}`}>
                  {/* Stage 1 */}
                  <div className={`bg-gray-800 rounded-xl border-t-4 border-slate-500 shadow-xl flex flex-col ${isPresentation ? 'p-6' : 'p-4'}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`bg-slate-900/60 text-slate-400 font-bold rounded-lg ${isPresentation ? 'px-3 py-1 text-lg' : 'px-2 py-0.5 text-sm'}`}>1</span>
                      <h4 className={`font-bold text-slate-400 ${isPresentation ? 'text-lg' : 'text-sm'}`}>Asocial</h4>
                    </div>
                    <p className={`text-amber-400 font-semibold mb-2 ${isPresentation ? 'text-base' : 'text-xs'}`}>0-6 weeks</p>
                    <ul className={`text-gray-300 space-y-2 flex-grow ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                      <li>• Similar responses to objects & people</li>
                      <li>• Preference for faces/eyes</li>
                      <li>• No specific attachments</li>
                    </ul>
                  </div>

                  {/* Stage 2 */}
                  <div className={`bg-gray-800 rounded-xl border-t-4 border-blue-500 shadow-xl flex flex-col ${isPresentation ? 'p-6' : 'p-4'}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`bg-blue-900/60 text-blue-400 font-bold rounded-lg ${isPresentation ? 'px-3 py-1 text-lg' : 'px-2 py-0.5 text-sm'}`}>2</span>
                      <h4 className={`font-bold text-blue-400 ${isPresentation ? 'text-lg' : 'text-sm'}`}>Indiscriminate</h4>
                    </div>
                    <p className={`text-amber-400 font-semibold mb-2 ${isPresentation ? 'text-base' : 'text-xs'}`}>6 weeks - 6 months</p>
                    <ul className={`text-gray-300 space-y-2 flex-grow ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                      <li>• Prefer humans to objects</li>
                      <li>• Happy with any caregiver</li>
                      <li>• No stranger anxiety</li>
                    </ul>
                  </div>

                  {/* Stage 3 */}
                  <div className={`bg-gray-800 rounded-xl border-t-4 border-amber-500 shadow-xl flex flex-col ${isPresentation ? 'p-6' : 'p-4'}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`bg-amber-900/60 text-amber-400 font-bold rounded-lg ${isPresentation ? 'px-3 py-1 text-lg' : 'px-2 py-0.5 text-sm'}`}>3</span>
                      <h4 className={`font-bold text-amber-400 ${isPresentation ? 'text-lg' : 'text-sm'}`}>Specific</h4>
                    </div>
                    <p className={`text-amber-400 font-semibold mb-2 ${isPresentation ? 'text-base' : 'text-xs'}`}>7+ months</p>
                    <ul className={`text-gray-300 space-y-2 flex-grow ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                      <li>• Primary attachment forms</li>
                      <li>• <strong className="text-red-400">Stranger anxiety</strong> appears</li>
                      <li>• <strong className="text-red-400">Separation anxiety</strong></li>
                    </ul>
                  </div>

                  {/* Stage 4 */}
                  <div className={`bg-gray-800 rounded-xl border-t-4 border-green-500 shadow-xl flex flex-col ${isPresentation ? 'p-6' : 'p-4'}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`bg-green-900/60 text-green-400 font-bold rounded-lg ${isPresentation ? 'px-3 py-1 text-lg' : 'px-2 py-0.5 text-sm'}`}>4</span>
                      <h4 className={`font-bold text-green-400 ${isPresentation ? 'text-lg' : 'text-sm'}`}>Multiple</h4>
                    </div>
                    <p className={`text-amber-400 font-semibold mb-2 ${isPresentation ? 'text-base' : 'text-xs'}`}>10+ months</p>
                    <ul className={`text-gray-300 space-y-2 flex-grow ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                      <li>• Secondary attachments form</li>
                      <li>• Extended family bonds</li>
                      <li>• Hierarchy of attachments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Slide>
          );

        case 4:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: Understanding Check"
                title="Test Your Knowledge"
                icon={Target}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <UnderstandingCheck
                questions={[
                  {
                    id: 1,
                    type: 'scenario',
                    question: 'During which stage does stranger anxiety first appear?',
                    options: [
                      { text: 'Asocial stage', correct: false },
                      { text: 'Indiscriminate attachment', correct: false },
                      { text: 'Specific attachment', correct: true }
                    ],
                    feedback: 'Correct! Stranger anxiety appears during the specific attachment stage (7+ months) when the infant has formed a primary attachment and can distinguish familiar from unfamiliar people.'
                  },
                  {
                    id: 2,
                    type: 'scenario',
                    question: 'What is the key characteristic of the indiscriminate attachment stage?',
                    options: [
                      { text: 'Fear of strangers', correct: false },
                      { text: 'Happy with any caregiver', correct: true },
                      { text: 'Only wants mother', correct: false }
                    ],
                    feedback: 'Correct! During indiscriminate attachment (6 weeks - 6 months), infants prefer humans but are happy with any caregiver and show no stranger anxiety.'
                  },
                  {
                    id: 3,
                    type: 'scenario',
                    question: 'What did Schaffer & Emerson find about primary attachment figures?',
                    options: [
                      { text: 'Always the mother', correct: false },
                      { text: 'Always the father', correct: false },
                      { text: 'Often not the mother', correct: true }
                    ],
                    feedback: 'Correct! In 39% of cases, the primary attachment figure was not the mother - it was whoever was most responsive and interactive with the infant.'
                  },
                  {
                    id: 4,
                    type: 'scenario',
                    question: 'At approximately what age do multiple attachments typically begin to form?',
                    options: [
                      { text: 'From birth', correct: false },
                      { text: 'Around 10 months', correct: true },
                      { text: 'After 2 years', correct: false }
                    ],
                    feedback: 'Correct! Multiple attachments typically begin to form around 10 months of age, when infants start forming secondary attachments with other family members.'
                  },
                  {
                    id: 5,
                    type: 'scenario',
                    question: 'What methodology did Schaffer & Emerson use in their study?',
                    options: [
                      { text: 'Cross-sectional experiment', correct: false },
                      { text: 'Longitudinal observation', correct: true },
                      { text: 'Laboratory experiment', correct: false }
                    ],
                    feedback: 'Correct! Schaffer & Emerson used longitudinal observation, following the same 60 babies over 18 months in their home environments.'
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
                title="Stage Diagnostic Simulator"
                icon={Activity}
                time="8 MINS"
                isPresentation={isPresentation}
              />
              <Lesson2Simulation isPresentation={isPresentation} />
            </Slide>
          );

        case 6:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 4: Evaluation"
                title="Critical Analysis"
                icon={Brain}
                time="8 MINS"
                isPresentation={isPresentation}
              />
              <div className={`grid grid-cols-1 lg:grid-cols-3 h-full ${isPresentation ? 'gap-8' : 'gap-4'}`}>
                {/* Strengths Column */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-green-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <h4 className={`font-bold text-green-400 mb-4 uppercase tracking-wider ${isPresentation ? 'text-xl' : 'text-sm'}`}>✓ Strengths</h4>
                  <div className="space-y-4 flex-grow">
                    <div className={`bg-green-900/20 rounded-lg border-l-4 border-green-500 ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        <strong className="text-green-400">Longitudinal design:</strong> Followed same babies over 18 months, 
                        reducing participant variables and allowing observation of developmental changes.
                      </p>
                    </div>
                    <div className={`bg-green-900/20 rounded-lg border-l-4 border-green-500 ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        <strong className="text-green-400">High ecological validity:</strong> Observations took place in 
                        natural home environment, increasing validity of findings.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Limitations Column */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-red-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <h4 className={`font-bold text-red-400 mb-4 uppercase tracking-wider ${isPresentation ? 'text-xl' : 'text-sm'}`}>✗ Limitations</h4>
                  <div className="space-y-4 flex-grow">
                    <div className={`bg-red-900/20 rounded-lg border-l-4 border-red-500 ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        <strong className="text-red-400">Sample bias:</strong> All from Glasgow, working-class families. 
                        May not generalise to other cultures or social classes.
                      </p>
                    </div>
                    <div className={`bg-red-900/20 rounded-lg border-l-4 border-red-500 ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        <strong className="text-red-400">Relies on mother reports:</strong> Mothers may have been inaccurate 
                        or socially desirable in their descriptions of infant behaviour.
                      </p>
                    </div>
                  </div>
                </div>

                {/* IDA Points Column */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-amber-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <h4 className={`font-bold text-amber-400 mb-4 uppercase tracking-wider ${isPresentation ? 'text-xl' : 'text-sm'}`}>⚡ IDA Points</h4>
                  <div className="space-y-4 flex-grow">
                    <div className={`bg-amber-900/20 rounded-lg border-l-4 border-amber-500 ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        <strong className="text-amber-400">Historical context:</strong> Conducted in 1960s Scotland - 
                        gender roles and family structures have changed significantly since then.
                      </p>
                    </div>
                    <div className={`bg-amber-900/20 rounded-lg border-l-4 border-amber-500 ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        <strong className="text-amber-400">Practical applications:</strong> Informs childcare practices - 
                        understanding stages helps identify developmental delays.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          );

        case 7:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 5: Assessment"
                title="Essay Plan"
                icon={Clock}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <div className={`w-full h-full flex flex-col ${isPresentation ? 'px-8' : 'px-4'}`}>
                {/* Essay Question */}
                <div className={`bg-gradient-to-r from-amber-900/40 to-amber-800/20 border-l-4 border-amber-500 rounded-r-xl shadow-xl mb-6 ${isPresentation ? 'p-6' : 'p-4'}`}>
                  <p className={`text-amber-300 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                    📝 Sample Question: "Outline and evaluate Schaffer's stages of attachment." (16 marks)
                  </p>
                </div>

                {/* Click to Reveal Button */}
                {!showEssayPlan2 ? (
                  <div className="flex-grow flex items-center justify-center">
                    <button
                      onClick={() => setShowEssayPlan2(true)}
                      className={`group flex flex-col items-center gap-4 bg-gray-800 hover:bg-gray-700 border-2 border-dashed border-amber-500/50 hover:border-amber-400 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-amber-500/20 ${isPresentation ? 'px-16 py-12' : 'px-12 py-8'}`}
                    >
                      <div className={`rounded-full bg-amber-900/50 group-hover:bg-amber-800/60 transition-colors ${isPresentation ? 'p-6' : 'p-4'}`}>
                        <Eye size={isPresentation ? 48 : 32} className="text-amber-400 group-hover:text-amber-300 transition-colors" />
                      </div>
                      <span className={`text-amber-400 group-hover:text-amber-300 font-semibold transition-colors ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                        Click to Reveal Essay Plan
                      </span>
                      <span className={`text-gray-500 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        Try planning your answer first!
                      </span>
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Hide Button */}
                    <button
                      onClick={() => setShowEssayPlan2(false)}
                      className={`self-end mb-3 flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors ${isPresentation ? 'text-base' : 'text-sm'}`}
                    >
                      <EyeOff size={isPresentation ? 18 : 14} />
                      Hide Plan
                    </button>

                <div className={`grid grid-cols-1 lg:grid-cols-2 flex-grow ${isPresentation ? 'gap-8' : 'gap-5'} animate-fadeIn`}>
                  {/* AO1 */}
                  <div className={`bg-gray-800 rounded-xl border-t-4 border-amber-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <span className={`bg-amber-900/60 text-amber-400 font-bold rounded-lg ${isPresentation ? 'px-4 py-2 text-xl' : 'px-3 py-1 text-sm'}`}>AO1</span>
                      <h4 className={`font-bold text-amber-400 ${isPresentation ? 'text-xl' : 'text-base'}`}>Knowledge</h4>
                      <span className={`ml-auto text-gray-500 ${isPresentation ? 'text-lg' : 'text-sm'}`}>6 marks</span>
                    </div>
                    <ul className={`text-gray-300 space-y-3 flex-grow ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <li className="flex items-start gap-3"><span className="text-amber-400">✓</span> Describe Schaffer & Emerson (1964) study</li>
                      <li className="flex items-start gap-3"><span className="text-amber-400">✓</span> Stage 1: Asocial (0-6 weeks)</li>
                      <li className="flex items-start gap-3"><span className="text-amber-400">✓</span> Stage 2: Indiscriminate (6w-6m)</li>
                      <li className="flex items-start gap-3"><span className="text-amber-400">✓</span> Stage 3: Specific (7+ months)</li>
                      <li className="flex items-start gap-3"><span className="text-amber-400">✓</span> Stage 4: Multiple (10+ months)</li>
                    </ul>
                  </div>

                  {/* AO3 */}
                  <div className={`bg-gray-800 rounded-xl border-t-4 border-green-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <span className={`bg-green-900/60 text-green-400 font-bold rounded-lg ${isPresentation ? 'px-4 py-2 text-xl' : 'px-3 py-1 text-sm'}`}>AO3</span>
                      <h4 className={`font-bold text-green-400 ${isPresentation ? 'text-xl' : 'text-base'}`}>Evaluation</h4>
                      <span className={`ml-auto text-gray-500 ${isPresentation ? 'text-lg' : 'text-sm'}`}>10 marks</span>
                    </div>
                    <ul className={`text-gray-300 space-y-3 flex-grow ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <li className="flex items-start gap-3"><span className="text-green-400">✓</span> <strong className="text-green-400">Strength:</strong> Longitudinal design</li>
                      <li className="flex items-start gap-3"><span className="text-green-400">✓</span> <strong className="text-green-400">Strength:</strong> Ecological validity</li>
                      <li className="flex items-start gap-3"><span className="text-red-400">✗</span> <strong className="text-red-400">Limitation:</strong> Sample bias (Glasgow)</li>
                      <li className="flex items-start gap-3"><span className="text-red-400">✗</span> <strong className="text-red-400">Limitation:</strong> Mother reports</li>
                      <li className="flex items-start gap-3"><span className="text-amber-400">⚡</span> <strong className="text-amber-400">IDA:</strong> Historical context</li>
                    </ul>
                  </div>
                </div>
                  </>
                )}
              </div>
            </Slide>
          );
      }
    }

    // Lesson 3: The Role of the Father
    if (currentLesson === 3) {
      switch (currentSlide) {
        case 0:
          return (
            <Slide isPresentation={isPresentation}>
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="flex items-center gap-4 mb-6">
                  <Users size={isPresentation ? 64 : 48} className="text-orange-400 animate-pulse" />
                  <Scale size={isPresentation ? 64 : 48} className="text-orange-400 animate-pulse" />
                </div>
                <h1 className={`font-black mb-4 bg-gradient-to-r from-orange-400 via-orange-300 to-amber-400 bg-clip-text text-transparent ${isPresentation ? 'text-7xl' : 'text-5xl'}`}>
                  The Role of the Father
                </h1>
                <p className={`text-gray-400 max-w-2xl mb-8 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                  Biological instinct or social construction?
                </p>
                <div className={`flex flex-wrap justify-center gap-3 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                  <span className="bg-orange-900/30 text-orange-400 px-4 py-2 rounded-full border border-orange-500/30">Nature vs Nurture</span>
                  <span className="bg-orange-900/30 text-orange-400 px-4 py-2 rounded-full border border-orange-500/30">Grossmann et al.</span>
                  <span className="bg-orange-900/30 text-orange-400 px-4 py-2 rounded-full border border-orange-500/30">Field (1978)</span>
                </div>
              </div>
            </Slide>
          );

        case 1:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 1: Recall"
                title="Do Now Quiz"
                icon={Brain}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <DoNowQuiz 
                questions={lesson3DoNow}
                isPresentation={isPresentation}
              />
            </Slide>
          );

        case 2:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: Core Knowledge"
                title="The Debate: Fathers as Attachment Figures"
                icon={Scale}
                time="8 MINS"
                isPresentation={isPresentation}
              />
              <div className={`w-full h-full ${isPresentation ? 'px-8' : 'px-4'}`}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 h-full ${isPresentation ? 'gap-8' : 'gap-5'}`}>
                  {/* Biological View */}
                  <div className={`bg-gray-800 rounded-xl border-t-4 border-purple-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`rounded-lg bg-purple-900/50 ${isPresentation ? 'p-3' : 'p-2'}`}>
                        <Dna size={isPresentation ? 28 : 20} className="text-purple-400" />
                      </div>
                      <h3 className={`text-purple-400 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                        Biological View
                      </h3>
                    </div>
                    <p className={`text-gray-300 mb-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      Fathers are <strong className="text-purple-300">innately different</strong> from mothers in their parenting role:
                    </p>
                    <ul className={`text-gray-300 space-y-3 flex-grow ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2"></span>
                        Mothers have biological predisposition to nurture
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2"></span>
                        Fathers are naturally "playmates" not caregivers
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2"></span>
                        Hormonal differences (oxytocin, prolactin)
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2"></span>
                        Evolutionary role as provider/protector
                      </li>
                    </ul>
                  </div>

                  {/* Social View */}
                  <div className={`bg-gray-800 rounded-xl border-t-4 border-teal-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`rounded-lg bg-teal-900/50 ${isPresentation ? 'p-3' : 'p-2'}`}>
                        <Users size={isPresentation ? 28 : 20} className="text-teal-400" />
                      </div>
                      <h3 className={`text-teal-400 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                        Social View
                      </h3>
                    </div>
                    <p className={`text-gray-300 mb-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      Father's role is <strong className="text-teal-300">learned through culture</strong> and experience:
                    </p>
                    <ul className={`text-gray-300 space-y-3 flex-grow ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-teal-400 rounded-full mt-2"></span>
                        Fathers can learn nurturing behaviours
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-teal-400 rounded-full mt-2"></span>
                        Cultural expectations shape parenting roles
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-teal-400 rounded-full mt-2"></span>
                        Primary caregiver fathers behave like mothers
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-teal-400 rounded-full mt-2"></span>
                        Same-sex parents show quality matters, not gender
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Slide>
          );

        case 3:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: Core Knowledge"
                title="Key Research Studies"
                icon={BookOpen}
                time="10 MINS"
                isPresentation={isPresentation}
              />
              <div className={`grid grid-cols-1 lg:grid-cols-2 h-full ${isPresentation ? 'gap-8' : 'gap-5'}`}>
                {/* Grossmann */}
                <div className={`bg-gray-800 rounded-xl border border-orange-500/30 shadow-xl overflow-hidden flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                    <div className={`rounded-lg bg-orange-900/50 ${isPresentation ? 'p-3' : 'p-2'}`}>
                      <Brain size={isPresentation ? 28 : 20} className="text-orange-400" />
                    </div>
                    <h4 className={`font-bold text-orange-400 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                      Grossmann et al. (2002)
                    </h4>
                  </div>
                  <div className={`text-gray-300 leading-relaxed space-y-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <p><span className="text-orange-400 font-semibold">Sample:</span> Longitudinal study in Germany</p>
                    <p><span className="text-orange-400 font-semibold">Method:</span> Observed parent-child interactions from infancy to adolescence</p>
                    <p><span className="text-orange-400 font-semibold">Finding:</span> Quality of father's PLAY (not caregiving) predicted adolescent attachment</p>
                    <p><span className="text-teal-400 font-semibold">Conclusion:</span> Fathers have a distinct but important role through play</p>
                  </div>
                </div>

                {/* Field */}
                <div className={`bg-gray-800 rounded-xl border border-orange-500/30 shadow-xl overflow-hidden flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                    <div className={`rounded-lg bg-orange-900/50 ${isPresentation ? 'p-3' : 'p-2'}`}>
                      <Brain size={isPresentation ? 28 : 20} className="text-orange-400" />
                    </div>
                    <h4 className={`font-bold text-orange-400 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                      Field (1978)
                    </h4>
                  </div>
                  <div className={`text-gray-300 leading-relaxed space-y-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <p><span className="text-orange-400 font-semibold">Sample:</span> Fathers as primary caregivers</p>
                    <p><span className="text-orange-400 font-semibold">Method:</span> Observed father-infant interactions</p>
                    <p><span className="text-orange-400 font-semibold">Finding:</span> Primary caregiver fathers used motherese, more face-to-face, more imitation</p>
                    <p><span className="text-teal-400 font-semibold">Conclusion:</span> Fathers CAN adopt nurturing behaviours when needed</p>
                  </div>
                </div>

                {/* Geiger */}
                <div className={`bg-gray-800 rounded-xl border border-orange-500/30 shadow-xl overflow-hidden flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                    <div className={`rounded-lg bg-orange-900/50 ${isPresentation ? 'p-3' : 'p-2'}`}>
                      <Brain size={isPresentation ? 28 : 20} className="text-orange-400" />
                    </div>
                    <h4 className={`font-bold text-orange-400 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                      Geiger (1996)
                    </h4>
                  </div>
                  <div className={`text-gray-300 leading-relaxed space-y-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <p><span className="text-orange-400 font-semibold">Method:</span> Observation of parent-child play</p>
                    <p><span className="text-orange-400 font-semibold">Finding:</span> Fathers engage in more physical, rough-and-tumble play</p>
                    <p><span className="text-orange-400 font-semibold">Finding:</span> Mothers focus more on nurturing, caregiving</p>
                    <p><span className="text-purple-400 font-semibold">Conclusion:</span> Suggests some biological basis for different roles</p>
                  </div>
                </div>

                {/* McCallum & Golombok */}
                <div className={`bg-gray-800 rounded-xl border border-orange-500/30 shadow-xl overflow-hidden flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                    <div className={`rounded-lg bg-orange-900/50 ${isPresentation ? 'p-3' : 'p-2'}`}>
                      <Brain size={isPresentation ? 28 : 20} className="text-orange-400" />
                    </div>
                    <h4 className={`font-bold text-orange-400 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                      McCallum & Golombok (2004)
                    </h4>
                  </div>
                  <div className={`text-gray-300 leading-relaxed space-y-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <p><span className="text-orange-400 font-semibold">Sample:</span> Same-sex parent families</p>
                    <p><span className="text-orange-400 font-semibold">Method:</span> Compared child outcomes</p>
                    <p><span className="text-orange-400 font-semibold">Finding:</span> Children develop normally without a father figure</p>
                    <p><span className="text-teal-400 font-semibold">Conclusion:</span> Quality of care matters more than parent gender</p>
                  </div>
                </div>
              </div>
            </Slide>
          );

        case 4:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: Understanding Check"
                title="Test Your Knowledge"
                icon={Target}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <UnderstandingCheck
                questions={[
                  {
                    id: 1,
                    type: 'scenario',
                    question: 'What did Grossmann et al. find about fathers\' role in attachment?',
                    options: [
                      { text: 'Fathers are unimportant', correct: false },
                      { text: 'Quality of play predicts attachment', correct: true },
                      { text: 'Only mothers matter', correct: false }
                    ],
                    feedback: 'Correct! Grossmann found that the quality of fathers\' play with infants was the best predictor of adolescent attachment quality - fathers matter through play!'
                  },
                  {
                    id: 2,
                    type: 'scenario',
                    question: 'What did Field (1978) discover about primary caregiver fathers?',
                    options: [
                      { text: 'They can\'t bond with babies', correct: false },
                      { text: 'They behave like mothers', correct: true },
                      { text: 'They are less effective', correct: false }
                    ],
                    feedback: 'Correct! Field found that fathers who are primary caregivers show the same nurturing behaviours as mothers - using motherese and more face-to-face interaction.'
                  },
                  {
                    id: 3,
                    type: 'scenario',
                    question: 'What does research on same-sex parents suggest?',
                    options: [
                      { text: 'Children need a father', correct: false },
                      { text: 'Quality of care matters most', correct: true },
                      { text: 'Only mothers can nurture', correct: false }
                    ],
                    feedback: 'Correct! Research shows children in same-sex parent families develop normally, suggesting the quality of caregiving matters more than having a father specifically.'
                  },
                  {
                    id: 4,
                    type: 'scenario',
                    question: 'What type of play do fathers typically engage in according to Geiger (1996)?',
                    options: [
                      { text: 'Quiet reading activities', correct: false },
                      { text: 'Physical, rough-and-tumble play', correct: true },
                      { text: 'Educational games', correct: false }
                    ],
                    feedback: 'Correct! Geiger found that fathers tend to engage in more physical, stimulating play, while mothers focus more on nurturing and caregiving activities.'
                  },
                  {
                    id: 5,
                    type: 'scenario',
                    question: 'Which view argues that fathers\' parenting role is determined by culture and experience?',
                    options: [
                      { text: 'Biological view', correct: false },
                      { text: 'Social view', correct: true },
                      { text: 'Evolutionary view', correct: false }
                    ],
                    feedback: 'Correct! The social view argues that parenting roles are learned through culture and experience, rather than being innate biological differences.'
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
                title="Research Debate Arena"
                icon={Scale}
                time="10 MINS"
                isPresentation={isPresentation}
              />
              <Lesson3Simulation isPresentation={isPresentation} />
            </Slide>
          );

        case 6:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 4: Evaluation"
                title="Critical Analysis"
                icon={Brain}
                time="8 MINS"
                isPresentation={isPresentation}
              />
              <div className={`grid grid-cols-1 lg:grid-cols-2 h-full ${isPresentation ? 'gap-8' : 'gap-5'}`}>
                {/* Biological Evidence */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-purple-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Dna size={isPresentation ? 28 : 20} className="text-purple-400" />
                    <h4 className={`font-bold text-purple-400 ${isPresentation ? 'text-xl' : 'text-base'}`}>Evidence FOR Biological</h4>
                  </div>
                  <div className="space-y-3 flex-grow">
                    <div className={`bg-purple-900/20 rounded-lg border-l-4 border-purple-500 ${isPresentation ? 'p-4' : 'p-3'}`}>
                      <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                        <strong className="text-purple-400">Geiger:</strong> Fathers naturally engage in more physical play even in egalitarian households
                      </p>
                    </div>
                    <div className={`bg-purple-900/20 rounded-lg border-l-4 border-purple-500 ${isPresentation ? 'p-4' : 'p-3'}`}>
                      <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                        <strong className="text-purple-400">Hormones:</strong> Lower oxytocin in fathers may explain different caregiving style
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Evidence */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-teal-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Users size={isPresentation ? 28 : 20} className="text-teal-400" />
                    <h4 className={`font-bold text-teal-400 ${isPresentation ? 'text-xl' : 'text-base'}`}>Evidence FOR Social</h4>
                  </div>
                  <div className="space-y-3 flex-grow">
                    <div className={`bg-teal-900/20 rounded-lg border-l-4 border-teal-500 ${isPresentation ? 'p-4' : 'p-3'}`}>
                      <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                        <strong className="text-teal-400">Field:</strong> Primary caregiver fathers adopt "maternal" behaviours
                      </p>
                    </div>
                    <div className={`bg-teal-900/20 rounded-lg border-l-4 border-teal-500 ${isPresentation ? 'p-4' : 'p-3'}`}>
                      <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                        <strong className="text-teal-400">Lamb:</strong> Father involvement varies hugely across cultures
                      </p>
                    </div>
                    <div className={`bg-teal-900/20 rounded-lg border-l-4 border-teal-500 ${isPresentation ? 'p-4' : 'p-3'}`}>
                      <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                        <strong className="text-teal-400">Same-sex families:</strong> Children thrive without fathers
                      </p>
                    </div>
                  </div>
                </div>

                {/* Conclusion */}
                <div className={`lg:col-span-2 bg-gradient-to-r from-orange-900/40 to-orange-800/20 border-l-4 border-orange-500 rounded-r-xl shadow-lg ${isPresentation ? 'p-6' : 'p-4'}`}>
                  <p className={`text-orange-200 font-medium leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    💡 <strong className="text-orange-300">Conclusion:</strong> The evidence suggests a <strong className="text-teal-400">social explanation</strong> is 
                    stronger overall - fathers CAN be effective primary caregivers when they take on that role. However, there may be some biological 
                    <strong className="text-purple-400"> predispositions</strong> that influence typical parenting styles.
                  </p>
                </div>
              </div>
            </Slide>
          );

        case 7:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 5: Assessment"
                title="Essay Plan"
                icon={Clock}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <div className={`w-full h-full flex flex-col ${isPresentation ? 'px-8' : 'px-4'}`}>
                <div className={`bg-gradient-to-r from-orange-900/40 to-orange-800/20 border-l-4 border-orange-500 rounded-r-xl shadow-xl mb-6 ${isPresentation ? 'p-6' : 'p-4'}`}>
                  <p className={`text-orange-300 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                    📝 Sample Question: "Discuss the role of the father in attachment." (16 marks)
                  </p>
                </div>

                {/* Click to Reveal Button */}
                {!showEssayPlan3 ? (
                  <div className="flex-grow flex items-center justify-center">
                    <button
                      onClick={() => setShowEssayPlan3(true)}
                      className={`group flex flex-col items-center gap-4 bg-gray-800 hover:bg-gray-700 border-2 border-dashed border-orange-500/50 hover:border-orange-400 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-orange-500/20 ${isPresentation ? 'px-16 py-12' : 'px-12 py-8'}`}
                    >
                      <div className={`rounded-full bg-orange-900/50 group-hover:bg-orange-800/60 transition-colors ${isPresentation ? 'p-6' : 'p-4'}`}>
                        <Eye size={isPresentation ? 48 : 32} className="text-orange-400 group-hover:text-orange-300 transition-colors" />
                      </div>
                      <span className={`text-orange-400 group-hover:text-orange-300 font-semibold transition-colors ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                        Click to Reveal Essay Plan
                      </span>
                      <span className={`text-gray-500 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        Try planning your answer first!
                      </span>
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Hide Button */}
                    <button
                      onClick={() => setShowEssayPlan3(false)}
                      className={`self-end mb-3 flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors ${isPresentation ? 'text-base' : 'text-sm'}`}
                    >
                      <EyeOff size={isPresentation ? 18 : 14} />
                      Hide Plan
                    </button>

                <div className={`grid grid-cols-1 lg:grid-cols-2 flex-grow ${isPresentation ? 'gap-8' : 'gap-5'} animate-fadeIn`}>
                  <div className={`bg-gray-800 rounded-xl border-t-4 border-orange-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <span className={`bg-orange-900/60 text-orange-400 font-bold rounded-lg ${isPresentation ? 'px-4 py-2 text-xl' : 'px-3 py-1 text-sm'}`}>AO1</span>
                      <h4 className={`font-bold text-orange-400 ${isPresentation ? 'text-xl' : 'text-base'}`}>Knowledge</h4>
                    </div>
                    <ul className={`text-gray-300 space-y-2 flex-grow ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <li>✓ Describe biological vs social debate</li>
                      <li>✓ Grossmann - quality of play</li>
                      <li>✓ Field - primary caregiver fathers</li>
                      <li>✓ Geiger - physical play differences</li>
                    </ul>
                  </div>

                  <div className={`bg-gray-800 rounded-xl border-t-4 border-teal-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <span className={`bg-teal-900/60 text-teal-400 font-bold rounded-lg ${isPresentation ? 'px-4 py-2 text-xl' : 'px-3 py-1 text-sm'}`}>AO3</span>
                      <h4 className={`font-bold text-teal-400 ${isPresentation ? 'text-xl' : 'text-base'}`}>Evaluation</h4>
                    </div>
                    <ul className={`text-gray-300 space-y-2 flex-grow ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <li>✓ Same-sex parent research</li>
                      <li>✓ Cultural variations (Lamb)</li>
                      <li>✓ Changing gender roles over time</li>
                      <li>✓ Practical implications for childcare</li>
                    </ul>
                  </div>
                </div>
                  </>
                )}
              </div>
            </Slide>
          );
      }
    }

    // Lesson 4: Animal Studies of Attachment
    if (currentLesson === 4) {
      switch (currentSlide) {
        case 0:
          return (
            <Slide isPresentation={isPresentation}>
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className={`rounded-full bg-red-900/50 mb-6 animate-pulse-red ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <Bird className={`text-red-400 ${isPresentation ? 'w-20 h-20' : 'w-12 h-12'}`} />
                </div>
                <h1 className={`font-black text-white mb-4 tracking-tighter animate-slideDown ${isPresentation ? 'text-6xl' : 'text-4xl'}`}>
                  Animal Studies of Attachment
                </h1>
                <p className={`text-red-400 font-bold tracking-widest animate-fadeIn ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                  LESSON 04 • LORENZ & HARLOW
                </p>
                <div className={`flex items-center gap-4 mt-8 ${isPresentation ? 'gap-6' : 'gap-4'}`}>
                  <div className={`flex items-center gap-2 text-gray-500 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <Clock size={isPresentation ? 20 : 16} />
                    <span>50 mins</span>
                  </div>
                  <div className={`bg-red-900/50 text-red-400 rounded-full font-bold ${isPresentation ? 'px-5 py-2 text-lg' : 'px-4 py-1 text-sm'}`}>
                    A-Level Psychology
                  </div>
                </div>
              </div>
            </Slide>
          );

        case 1:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 1: Prior Learning"
                title="Do Now Quiz"
                icon={Brain}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <DoNowQuiz questions={lesson4DoNow} isPresentation={isPresentation} />
            </Slide>
          );

        case 2:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: New Content"
                title="Learning Objectives"
                icon={Target}
                time="2 MINS"
                isPresentation={isPresentation}
              />
              <div className={`grid grid-cols-1 md:grid-cols-3 h-full ${isPresentation ? 'gap-8 p-6' : 'gap-4 p-4'}`}>
                <div className={`bg-gray-800 rounded-xl border-t-4 border-red-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <span className={`bg-red-900/60 text-red-400 px-3 py-1 rounded-full font-bold self-start mb-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>AO1</span>
                  <h3 className={`text-white font-bold mb-3 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Describe</h3>
                  <p className={`text-gray-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>
                    Lorenz's research on imprinting in goslings and its key findings
                  </p>
                </div>
                <div className={`bg-gray-800 rounded-xl border-t-4 border-red-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <span className={`bg-red-900/60 text-red-400 px-3 py-1 rounded-full font-bold self-start mb-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>AO1</span>
                  <h3 className={`text-white font-bold mb-3 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Explain</h3>
                  <p className={`text-gray-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>
                    Harlow's research on contact comfort and maternal deprivation in monkeys
                  </p>
                </div>
                <div className={`bg-gray-800 rounded-xl border-t-4 border-teal-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <span className={`bg-teal-900/60 text-teal-400 px-3 py-1 rounded-full font-bold self-start mb-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>AO3</span>
                  <h3 className={`text-white font-bold mb-3 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Evaluate</h3>
                  <p className={`text-gray-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>
                    Strengths and limitations of using animal research to understand human attachment
                  </p>
                </div>
              </div>
            </Slide>
          );

        case 3:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: New Content"
                title="Lorenz's Imprinting Research (1935)"
                icon={Bird}
                time="10 MINS"
                isPresentation={isPresentation}
              />
              <div className={`grid grid-cols-1 lg:grid-cols-2 h-full ${isPresentation ? 'gap-8 p-6' : 'gap-4 p-4'}`}>
                {/* Method Card */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-amber-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`rounded-full bg-amber-900/60 ${isPresentation ? 'p-3' : 'p-2'}`}>
                      <FlaskConical className={`text-amber-400 ${isPresentation ? 'w-7 h-7' : 'w-5 h-5'}`} />
                    </div>
                    <h3 className={`text-amber-400 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>The Study</h3>
                  </div>
                  <ul className={`text-gray-300 space-y-3 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>Divided clutch of greylag goose eggs into two groups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span><strong>Group 1:</strong> Hatched naturally with mother present</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span><strong>Group 2:</strong> Hatched in incubator with Lorenz as first moving object</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>Both groups marked for identification, then mixed together</span>
                    </li>
                  </ul>
                </div>

                {/* Findings Card */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-red-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`rounded-full bg-red-900/60 ${isPresentation ? 'p-3' : 'p-2'}`}>
                      <Eye className={`text-red-400 ${isPresentation ? 'w-7 h-7' : 'w-5 h-5'}`} />
                    </div>
                    <h3 className={`text-red-400 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Key Findings</h3>
                  </div>
                  <ul className={`text-gray-300 space-y-3 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✓</span>
                      <span><strong>Imprinting:</strong> Goslings followed whichever figure they first encountered</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✓</span>
                      <span><strong>Critical period:</strong> Imprinting must occur within first few hours after hatching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✓</span>
                      <span><strong>Irreversible:</strong> Once imprinted, goslings couldn't transfer attachment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✓</span>
                      <span><strong>Sexual imprinting:</strong> Affected later mate preferences in adulthood</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Slide>
          );

        case 4:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: New Content"
                title="Harlow's Monkey Studies (1958)"
                icon={Baby}
                time="10 MINS"
                isPresentation={isPresentation}
              />
              <div className={`grid grid-cols-1 lg:grid-cols-2 h-full ${isPresentation ? 'gap-8 p-6' : 'gap-4 p-4'}`}>
                {/* Wire vs Cloth Mother */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-rose-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`rounded-full bg-rose-900/60 ${isPresentation ? 'p-3' : 'p-2'}`}>
                      <Heart className={`text-rose-400 ${isPresentation ? 'w-7 h-7' : 'w-5 h-5'}`} />
                    </div>
                    <h3 className={`text-rose-400 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Surrogate Mother Study</h3>
                  </div>
                  <div className={`space-y-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <p className="text-gray-400 font-semibold mb-2">🔧 Wire Mother</p>
                      <p className="text-gray-300">Cold wire frame with feeding bottle attached - provided food</p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <p className="text-rose-400 font-semibold mb-2">🧸 Cloth Mother</p>
                      <p className="text-gray-300">Soft, warm cloth-covered frame - provided comfort but no food</p>
                    </div>
                    <div className="bg-rose-900/30 border border-rose-500/50 rounded-lg p-4">
                      <p className="text-rose-300 font-semibold">💡 Finding: Monkeys spent 17-18 hours/day with cloth mother, only visiting wire mother to feed</p>
                    </div>
                  </div>
                </div>

                {/* Key Conclusion */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-red-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`rounded-full bg-red-900/60 ${isPresentation ? 'p-3' : 'p-2'}`}>
                      <Lightbulb className={`text-red-400 ${isPresentation ? 'w-7 h-7' : 'w-5 h-5'}`} />
                    </div>
                    <h3 className={`text-red-400 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Key Conclusions</h3>
                  </div>
                  <ul className={`text-gray-300 space-y-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 font-bold">1.</span>
                      <span><strong className="text-red-300">Contact Comfort</strong> is more important than food for attachment formation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 font-bold">2.</span>
                      <span>Challenges <strong className="text-red-300">behaviourist theory</strong> that attachment forms through feeding (cupboard love)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 font-bold">3.</span>
                      <span>When frightened, monkeys ran to <strong className="text-red-300">cloth mother</strong> for security - safe base behavior</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 font-bold">4.</span>
                      <span>Supports <strong className="text-red-300">Bowlby's idea</strong> that attachment is innate and serves an evolutionary function</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Slide>
          );

        case 5:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: New Content"
                title="Long-Term Effects of Deprivation"
                icon={AlertTriangle}
                time="8 MINS"
                isPresentation={isPresentation}
              />
              <div className={`flex flex-col h-full ${isPresentation ? 'p-6' : 'p-4'}`}>
                <div className={`bg-gradient-to-r from-red-900/40 to-red-800/20 border-l-4 border-red-500 rounded-r-xl mb-6 ${isPresentation ? 'p-6' : 'p-4'}`}>
                  <p className={`text-red-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>
                    Harlow followed up on the monkeys raised with surrogate mothers to observe their adult behaviour...
                  </p>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-3 flex-grow ${isPresentation ? 'gap-6' : 'gap-4'}`}>
                  <div className={`bg-gray-800 rounded-xl border-t-4 border-orange-500 shadow-xl ${isPresentation ? 'p-6' : 'p-4'}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className={`text-orange-400 ${isPresentation ? 'w-6 h-6' : 'w-5 h-5'}`} />
                      <h4 className={`text-orange-400 font-bold ${isPresentation ? 'text-xl' : 'text-base'}`}>Social Problems</h4>
                    </div>
                    <ul className={`text-gray-300 space-y-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <li>• Aggressive towards other monkeys</li>
                      <li>• Difficulty with social interactions</li>
                      <li>• Failed to mate normally</li>
                      <li>• Socially withdrawn</li>
                    </ul>
                  </div>

                  <div className={`bg-gray-800 rounded-xl border-t-4 border-rose-500 shadow-xl ${isPresentation ? 'p-6' : 'p-4'}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <Baby className={`text-rose-400 ${isPresentation ? 'w-6 h-6' : 'w-5 h-5'}`} />
                      <h4 className={`text-rose-400 font-bold ${isPresentation ? 'text-xl' : 'text-base'}`}>"Motherless Mothers"</h4>
                    </div>
                    <ul className={`text-gray-300 space-y-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <li>• Neglected their own offspring</li>
                      <li>• Some were abusive</li>
                      <li>• Failed to nurse properly</li>
                      <li>• Shows intergenerational effects</li>
                    </ul>
                  </div>

                  <div className={`bg-gray-800 rounded-xl border-t-4 border-green-500 shadow-xl ${isPresentation ? 'p-6' : 'p-4'}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className={`text-green-400 ${isPresentation ? 'w-6 h-6' : 'w-5 h-5'}`} />
                      <h4 className={`text-green-400 font-bold ${isPresentation ? 'text-xl' : 'text-base'}`}>Critical Period</h4>
                    </div>
                    <ul className={`text-gray-300 space-y-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <li>• 90 days isolation = recovery possible</li>
                      <li>• 6+ months = permanent damage</li>
                      <li>• Supports critical period concept</li>
                      <li>• Implications for human development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Slide>
          );

        case 6:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 3: Application"
                title="Research Lab Simulator"
                icon={FlaskConical}
                time="12 MINS"
                isPresentation={isPresentation}
              />
              <Lesson4Simulation isPresentation={isPresentation} />
            </Slide>
          );

        case 7:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 4: Check"
                title="Understanding Check"
                icon={Brain}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <UnderstandingCheck
                questions={[
                  { id: 1, type: 'scenario', question: 'What is imprinting according to Lorenz?', options: [{ text: 'A learned behaviour through classical conditioning', correct: false }, { text: 'An innate tendency to follow the first moving object seen during a critical period', correct: true }, { text: 'A gradual bonding process that takes several months', correct: false }, { text: 'A type of maternal behaviour only seen in birds', correct: false }], feedback: 'Correct! Imprinting is an innate behaviour where goslings attach to the first moving object they see during a critical period shortly after hatching.' },
                  { id: 2, type: 'scenario', question: 'What did Harlow\'s research demonstrate about attachment?', options: [{ text: 'Food provision is the main basis for attachment (cupboard love)', correct: false }, { text: 'Contact comfort is more important than food for attachment', correct: true }, { text: 'Monkeys cannot form attachments to inanimate objects', correct: false }, { text: 'Wire mothers are preferred over cloth mothers', correct: false }], feedback: 'Correct! Harlow found infant monkeys spent most time with the cloth mother despite it providing no food, showing contact comfort is more important than food for attachment.' },
                  { id: 3, type: 'scenario', question: 'What happened to monkeys raised with surrogate mothers when they became adults?', options: [{ text: 'They showed normal social and parenting behaviour', correct: false }, { text: 'They were aggressive and showed poor parenting skills', correct: true }, { text: 'They formed stronger attachments than normally-raised monkeys', correct: false }, { text: 'They showed no lasting effects from their upbringing', correct: false }], feedback: 'Correct! The "motherless mothers" were often aggressive, neglectful, or abusive to their own offspring, showing lasting effects of early maternal deprivation.' },
                  { id: 4, type: 'scenario', question: 'What is a key limitation of using animal studies to understand human attachment?', options: [{ text: 'Animals do not form genuine attachments', correct: false }, { text: 'The studies are too old to be relevant today', correct: false }, { text: 'Humans have more complex cognition making generalisation difficult', correct: true }, { text: 'Laboratory conditions are never controlled properly', correct: false }], feedback: 'Correct! Humans have more complex cognition, language, and cultural influences that make it difficult to directly generalise animal findings to human attachment.' },
                  { id: 5, type: 'scenario', question: 'What does Harlow\'s finding about the 6-month isolation period suggest?', options: [{ text: 'Any length of isolation causes permanent damage', correct: false }, { text: 'There is a critical period for normal social development', correct: true }, { text: 'Isolation has no effect on monkey development', correct: false }, { text: 'Recovery is always possible regardless of isolation duration', correct: false }], feedback: 'Correct! Monkeys isolated for 90 days could recover, but 6 months caused permanent damage - supporting the concept of a critical period for social development.' }
                ]}
                themeColor="red"
                isPresentation={isPresentation}
              />
            </Slide>
          );

        case 8:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 5: Assessment"
                title="Evaluation Points"
                icon={Scale}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <div className={`grid grid-cols-1 lg:grid-cols-2 h-full ${isPresentation ? 'gap-8 p-6' : 'gap-4 p-4'}`}>
                {/* Strengths */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-green-500 shadow-xl ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <h3 className={`text-green-400 font-bold mb-4 flex items-center gap-2 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                    ✓ Strengths
                  </h3>
                  <ul className={`text-gray-300 space-y-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <li className="bg-green-900/20 border-l-4 border-green-500 pl-4 py-2 rounded-r">
                      <strong className="text-green-300">Scientific control:</strong> Laboratory conditions allow precise manipulation of variables (e.g., isolation duration)
                    </li>
                    <li className="bg-green-900/20 border-l-4 border-green-500 pl-4 py-2 rounded-r">
                      <strong className="text-green-300">Challenged behaviourism:</strong> Harlow disproved "cupboard love" theory that attachment forms through feeding
                    </li>
                    <li className="bg-green-900/20 border-l-4 border-green-500 pl-4 py-2 rounded-r">
                      <strong className="text-green-300">Practical applications:</strong> Influenced understanding of institutional care and importance of early nurturing
                    </li>
                  </ul>
                </div>

                {/* Limitations */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-red-500 shadow-xl ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <h3 className={`text-red-400 font-bold mb-4 flex items-center gap-2 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                    ✗ Limitations
                  </h3>
                  <ul className={`text-gray-300 space-y-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <li className="bg-red-900/20 border-l-4 border-red-500 pl-4 py-2 rounded-r">
                      <strong className="text-red-300">Generalisability:</strong> Humans have more complex cognition, language, and cultural influences than animals
                    </li>
                    <li className="bg-red-900/20 border-l-4 border-red-500 pl-4 py-2 rounded-r">
                      <strong className="text-red-300">Ethics:</strong> Harlow's studies caused extreme suffering - would not be permitted today
                    </li>
                    <li className="bg-red-900/20 border-l-4 border-red-500 pl-4 py-2 rounded-r">
                      <strong className="text-red-300">Lorenz's imprinting:</strong> Birds imprint differently to mammals - human attachment forms gradually, not instantly
                    </li>
                  </ul>
                </div>
              </div>
            </Slide>
          );

        case 9:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 5: Assessment"
                title="Essay Plan"
                icon={Clock}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <div className={`w-full h-full flex flex-col ${isPresentation ? 'px-8' : 'px-4'}`}>
                <div className={`bg-gradient-to-r from-red-900/40 to-red-800/20 border-l-4 border-red-500 rounded-r-xl shadow-xl mb-6 ${isPresentation ? 'p-6' : 'p-4'}`}>
                  <p className={`text-red-300 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                    📝 Sample Question: "Outline and evaluate animal studies of attachment." (16 marks)
                  </p>
                </div>

                {/* Click to Reveal Button */}
                {!showEssayPlan4 ? (
                  <div className="flex-grow flex items-center justify-center">
                    <button
                      onClick={() => setShowEssayPlan4(true)}
                      className={`group flex flex-col items-center gap-4 bg-gray-800 hover:bg-gray-700 border-2 border-dashed border-red-500/50 hover:border-red-400 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-red-500/20 ${isPresentation ? 'px-16 py-12' : 'px-12 py-8'}`}
                    >
                      <div className={`rounded-full bg-red-900/50 group-hover:bg-red-800/60 transition-colors ${isPresentation ? 'p-6' : 'p-4'}`}>
                        <Eye size={isPresentation ? 48 : 32} className="text-red-400 group-hover:text-red-300 transition-colors" />
                      </div>
                      <span className={`text-red-400 group-hover:text-red-300 font-semibold transition-colors ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                        Click to Reveal Essay Plan
                      </span>
                      <span className={`text-gray-500 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        Try planning your answer first!
                      </span>
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Hide Button */}
                    <button
                      onClick={() => setShowEssayPlan4(false)}
                      className={`self-end mb-3 flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors ${isPresentation ? 'text-base' : 'text-sm'}`}
                    >
                      <EyeOff size={isPresentation ? 18 : 14} />
                      Hide Plan
                    </button>

                <div className={`grid grid-cols-1 lg:grid-cols-2 flex-grow ${isPresentation ? 'gap-8' : 'gap-5'} animate-fadeIn`}>
                  <div className={`bg-gray-800 rounded-xl border-t-4 border-red-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <span className={`bg-red-900/60 text-red-400 font-bold rounded-lg ${isPresentation ? 'px-4 py-2 text-xl' : 'px-3 py-1 text-sm'}`}>AO1</span>
                      <h4 className={`font-bold text-red-400 ${isPresentation ? 'text-xl' : 'text-base'}`}>Knowledge (6 marks)</h4>
                    </div>
                    <ul className={`text-gray-300 space-y-2 flex-grow ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <li>✓ Lorenz - imprinting procedure & findings</li>
                      <li>✓ Critical period and sexual imprinting</li>
                      <li>✓ Harlow - wire vs cloth mother</li>
                      <li>✓ Contact comfort over food</li>
                      <li>✓ Long-term effects on "motherless mothers"</li>
                    </ul>
                  </div>

                  <div className={`bg-gray-800 rounded-xl border-t-4 border-teal-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <span className={`bg-teal-900/60 text-teal-400 font-bold rounded-lg ${isPresentation ? 'px-4 py-2 text-xl' : 'px-3 py-1 text-sm'}`}>AO3</span>
                      <h4 className={`font-bold text-teal-400 ${isPresentation ? 'text-xl' : 'text-base'}`}>Evaluation (10 marks)</h4>
                    </div>
                    <ul className={`text-gray-300 space-y-2 flex-grow ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <li>✓ Scientific control advantage</li>
                      <li>✓ Challenged behaviourist theory</li>
                      <li>✓ Practical applications for childcare</li>
                      <li>✓ Limitation: Generalisability to humans</li>
                      <li>✓ Ethical concerns about animal suffering</li>
                    </ul>
                  </div>
                </div>
                  </>
                )}
              </div>
            </Slide>
          );
      }
    }

    // Lesson 5: Explanations of Attachment
    if (currentLesson === 5) {
      switch (currentSlide) {
        case 0:
          return (
            <Slide isPresentation={isPresentation}>
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className={`rounded-full bg-yellow-900/50 mb-6 animate-pulse-yellow ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <BookOpen className={`text-yellow-400 ${isPresentation ? 'w-20 h-20' : 'w-12 h-12'}`} />
                </div>
                <h1 className={`font-black text-white mb-4 tracking-tighter animate-slideDown ${isPresentation ? 'text-6xl' : 'text-4xl'}`}>
                  Explanations of Attachment
                </h1>
                <p className={`text-yellow-400 font-bold tracking-widest animate-fadeIn ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                  LESSON 05 • LEARNING THEORY VS BOWLBY
                </p>
                <div className={`flex items-center gap-4 mt-8 ${isPresentation ? 'gap-6' : 'gap-4'}`}>
                  <div className={`flex items-center gap-2 text-gray-500 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <Clock size={isPresentation ? 20 : 16} />
                    <span>50 mins</span>
                  </div>
                  <div className={`bg-yellow-900/50 text-yellow-400 rounded-full font-bold ${isPresentation ? 'px-5 py-2 text-lg' : 'px-4 py-1 text-sm'}`}>
                    A-Level Psychology
                  </div>
                </div>
              </div>
            </Slide>
          );

        case 1:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 1: Prior Learning"
                title="Do Now Quiz"
                icon={Brain}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <DoNowQuiz questions={lesson5DoNow} isPresentation={isPresentation} />
            </Slide>
          );

        case 2:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: New Content"
                title="Learning Objectives"
                icon={Target}
                time="2 MINS"
                isPresentation={isPresentation}
              />
              <div className={`grid grid-cols-1 md:grid-cols-3 h-full ${isPresentation ? 'gap-8 p-6' : 'gap-4 p-4'}`}>
                <div className={`bg-gray-800 rounded-xl border-t-4 border-yellow-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <span className={`bg-yellow-900/60 text-yellow-400 px-3 py-1 rounded-full font-bold self-start mb-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>AO1</span>
                  <h3 className={`text-white font-bold mb-3 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Describe</h3>
                  <p className={`text-gray-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>
                    Learning Theory explanations of attachment (classical & operant conditioning)
                  </p>
                </div>
                <div className={`bg-gray-800 rounded-xl border-t-4 border-yellow-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <span className={`bg-yellow-900/60 text-yellow-400 px-3 py-1 rounded-full font-bold self-start mb-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>AO1</span>
                  <h3 className={`text-white font-bold mb-3 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Explain</h3>
                  <p className={`text-gray-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>
                    Bowlby's Monotropic Theory and key concepts (monotropy, IWM, social releasers)
                  </p>
                </div>
                <div className={`bg-gray-800 rounded-xl border-t-4 border-teal-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <span className={`bg-teal-900/60 text-teal-400 px-3 py-1 rounded-full font-bold self-start mb-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>AO3</span>
                  <h3 className={`text-white font-bold mb-3 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Evaluate</h3>
                  <p className={`text-gray-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>
                    Compare and evaluate both theories using research evidence
                  </p>
                </div>
              </div>
            </Slide>
          );

        case 3:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: New Content"
                title="Learning Theory (Dollard & Miller, 1950)"
                icon={Brain}
                time="10 MINS"
                isPresentation={isPresentation}
              />
              <div className={`grid grid-cols-1 lg:grid-cols-2 h-full ${isPresentation ? 'gap-8 p-6' : 'gap-4 p-4'}`}>
                {/* Classical Conditioning */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-blue-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`rounded-full bg-blue-900/60 ${isPresentation ? 'p-3' : 'p-2'}`}>
                      <Brain className={`text-blue-400 ${isPresentation ? 'w-7 h-7' : 'w-5 h-5'}`} />
                    </div>
                    <h3 className={`text-blue-400 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Classical Conditioning</h3>
                  </div>
                  <ul className={`text-gray-300 space-y-3 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span><strong className="text-blue-300">Food</strong> = Unconditioned Stimulus (UCS)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span><strong className="text-blue-300">Pleasure</strong> = Unconditioned Response (UCR)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span><strong className="text-blue-300">Caregiver</strong> = Neutral Stimulus → Conditioned Stimulus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Caregiver becomes associated with food pleasure</span>
                    </li>
                  </ul>
                  <div className={`mt-4 bg-blue-900/30 border border-blue-500/50 rounded-lg ${isPresentation ? 'p-4' : 'p-3'}`}>
                    <p className={`text-blue-300 ${isPresentation ? 'text-base' : 'text-xs'}`}>
                      💡 "Cupboard Love" - attachment forms because caregiver provides food
                    </p>
                  </div>
                </div>

                {/* Operant Conditioning */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-purple-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`rounded-full bg-purple-900/60 ${isPresentation ? 'p-3' : 'p-2'}`}>
                      <Activity className={`text-purple-400 ${isPresentation ? 'w-7 h-7' : 'w-5 h-5'}`} />
                    </div>
                    <h3 className={`text-purple-400 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Operant Conditioning</h3>
                  </div>
                  <ul className={`text-gray-300 space-y-3 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span><strong className="text-purple-300">Hunger</strong> creates discomfort (drive)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span><strong className="text-purple-300">Food</strong> = Primary reinforcer (reduces drive)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span><strong className="text-purple-300">Caregiver</strong> = Secondary reinforcer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Infant seeks caregiver to reduce discomfort</span>
                    </li>
                  </ul>
                  <div className={`mt-4 bg-purple-900/30 border border-purple-500/50 rounded-lg ${isPresentation ? 'p-4' : 'p-3'}`}>
                    <p className={`text-purple-300 ${isPresentation ? 'text-base' : 'text-xs'}`}>
                      💡 Caregiver becomes rewarding through association with drive reduction
                    </p>
                  </div>
                </div>
              </div>
            </Slide>
          );

        case 4:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: New Content"
                title="Bowlby's Monotropic Theory (1969)"
                icon={Heart}
                time="10 MINS"
                isPresentation={isPresentation}
              />
              <div className={`grid grid-cols-1 lg:grid-cols-2 h-full ${isPresentation ? 'gap-8 p-6' : 'gap-4 p-4'}`}>
                {/* Core Ideas */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-rose-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`rounded-full bg-rose-900/60 ${isPresentation ? 'p-3' : 'p-2'}`}>
                      <Heart className={`text-rose-400 ${isPresentation ? 'w-7 h-7' : 'w-5 h-5'}`} />
                    </div>
                    <h3 className={`text-rose-400 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Core Principles</h3>
                  </div>
                  <ul className={`text-gray-300 space-y-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <li className="bg-rose-900/20 border-l-4 border-rose-500 pl-4 py-2 rounded-r">
                      <strong className="text-rose-300">Innate:</strong> Attachment is biological, not learned - programmed by evolution for survival
                    </li>
                    <li className="bg-rose-900/20 border-l-4 border-rose-500 pl-4 py-2 rounded-r">
                      <strong className="text-rose-300">Monotropy:</strong> One special attachment (usually mother) that is qualitatively different
                    </li>
                    <li className="bg-rose-900/20 border-l-4 border-rose-500 pl-4 py-2 rounded-r">
                      <strong className="text-rose-300">Critical Period:</strong> Attachment must form by ~2.5 years or damage is permanent
                    </li>
                  </ul>
                </div>

                {/* Key Concepts */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-yellow-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`rounded-full bg-yellow-900/60 ${isPresentation ? 'p-3' : 'p-2'}`}>
                      <Lightbulb className={`text-yellow-400 ${isPresentation ? 'w-7 h-7' : 'w-5 h-5'}`} />
                    </div>
                    <h3 className={`text-yellow-400 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Key Concepts</h3>
                  </div>
                  <div className={`space-y-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <p className="text-yellow-400 font-semibold mb-1">👶 Social Releasers</p>
                      <p className="text-gray-300">Innate behaviours (crying, smiling) that trigger caregiving responses</p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <p className="text-yellow-400 font-semibold mb-1">🧠 Internal Working Model</p>
                      <p className="text-gray-300">Mental template for relationships based on primary attachment - affects all future relationships</p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <p className="text-yellow-400 font-semibold mb-1">🔒 Continuity Hypothesis</p>
                      <p className="text-gray-300">Early attachment quality predicts later relationship quality</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          );

        case 5:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: New Content"
                title="Evaluation: Learning Theory"
                icon={Scale}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <div className={`grid grid-cols-1 lg:grid-cols-2 h-full ${isPresentation ? 'gap-8 p-6' : 'gap-4 p-4'}`}>
                {/* Strengths */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-green-500 shadow-xl ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <h3 className={`text-green-400 font-bold mb-4 flex items-center gap-2 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                    ✓ Strengths
                  </h3>
                  <ul className={`text-gray-300 space-y-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <li className="bg-green-900/20 border-l-4 border-green-500 pl-4 py-2 rounded-r">
                      <strong className="text-green-300">Scientific basis:</strong> Based on well-established conditioning principles with laboratory evidence
                    </li>
                    <li className="bg-green-900/20 border-l-4 border-green-500 pl-4 py-2 rounded-r">
                      <strong className="text-green-300">Some evidence:</strong> Infants do learn to associate caregivers with feeding
                    </li>
                  </ul>
                </div>

                {/* Limitations */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-red-500 shadow-xl ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <h3 className={`text-red-400 font-bold mb-4 flex items-center gap-2 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                    ✗ Limitations
                  </h3>
                  <ul className={`text-gray-300 space-y-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <li className="bg-red-900/20 border-l-4 border-red-500 pl-4 py-2 rounded-r">
                      <strong className="text-red-300">Harlow's research:</strong> Monkeys preferred comfort over food - contradicts "cupboard love"
                    </li>
                    <li className="bg-red-900/20 border-l-4 border-red-500 pl-4 py-2 rounded-r">
                      <strong className="text-red-300">Schaffer & Emerson:</strong> 39% of infants' primary attachment was NOT to person who fed them
                    </li>
                    <li className="bg-red-900/20 border-l-4 border-red-500 pl-4 py-2 rounded-r">
                      <strong className="text-red-300">Reductionist:</strong> Ignores emotional and cognitive aspects of attachment
                    </li>
                  </ul>
                </div>
              </div>
            </Slide>
          );

        case 6:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 3: Application"
                title="Theory Sorting Challenge"
                icon={Scale}
                time="12 MINS"
                isPresentation={isPresentation}
              />
              <Lesson5Simulation isPresentation={isPresentation} />
            </Slide>
          );

        case 7:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 4: Check"
                title="Understanding Check"
                icon={Brain}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <UnderstandingCheck
                questions={[
                  { id: 1, type: 'scenario', question: 'According to Learning Theory, why do infants become attached to their caregivers?', options: [{ text: 'Because caregivers provide food which becomes associated with pleasure', correct: true }, { text: 'Because attachment is an innate biological mechanism', correct: false }, { text: 'Because infants are born with social releasers', correct: false }, { text: 'Because of the internal working model', correct: false }], feedback: 'Correct! Learning theory proposes that caregivers become associated with the pleasure of food through classical conditioning, making them secondary reinforcers.' },
                  { id: 2, type: 'scenario', question: 'What does "monotropy" mean in Bowlby\'s theory?', options: [{ text: 'Infants form equal attachments to all caregivers', correct: false }, { text: 'Infants form one special primary attachment that is unique', correct: true }, { text: 'Attachment can only form through feeding', correct: false }, { text: 'Attachment is learned through conditioning', correct: false }], feedback: 'Correct! Monotropy is the idea that infants form one special attachment (usually to the mother) that is qualitatively different from all other attachments.' },
                  { id: 3, type: 'scenario', question: 'What is the Internal Working Model?', options: [{ text: 'A type of classical conditioning', correct: false }, { text: 'A mental template for relationships based on primary attachment', correct: true }, { text: 'A method of measuring attachment', correct: false }, { text: 'A behaviour that triggers caregiving', correct: false }], feedback: 'Correct! The IWM is a mental template created from the primary attachment that shapes expectations and behaviours in all future relationships.' },
                  { id: 4, type: 'scenario', question: 'How does Harlow\'s research challenge Learning Theory?', options: [{ text: 'It showed monkeys cannot form attachments', correct: false }, { text: 'It showed contact comfort was more important than food', correct: true }, { text: 'It supported the idea of cupboard love', correct: false }, { text: 'It proved attachment is learned', correct: false }], feedback: 'Correct! Harlow\'s monkeys preferred the cloth mother (comfort) over the wire mother (food), directly contradicting the learning theory idea that attachment is based on food provision.' },
                  { id: 5, type: 'scenario', question: 'What did Schaffer & Emerson find that challenged Learning Theory?', options: [{ text: 'All infants attached to their mothers first', correct: false }, { text: 'Attachment only forms through feeding', correct: false }, { text: '39% of primary attachments were not to the person who fed them', correct: true }, { text: 'Conditioning is the basis of attachment', correct: false }], feedback: 'Correct! Schaffer & Emerson found 39% of infants formed their primary attachment to someone other than the person who fed them, challenging the "cupboard love" hypothesis.' }
                ]}
                themeColor="yellow"
                isPresentation={isPresentation}
              />
            </Slide>
          );

        case 8:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 5: Assessment"
                title="Evaluation: Bowlby's Theory"
                icon={Scale}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <div className={`grid grid-cols-1 lg:grid-cols-2 h-full ${isPresentation ? 'gap-8 p-6' : 'gap-4 p-4'}`}>
                {/* Strengths */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-green-500 shadow-xl ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <h3 className={`text-green-400 font-bold mb-4 flex items-center gap-2 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                    ✓ Strengths
                  </h3>
                  <ul className={`text-gray-300 space-y-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <li className="bg-green-900/20 border-l-4 border-green-500 pl-4 py-2 rounded-r">
                      <strong className="text-green-300">Research support:</strong> Harlow's and Lorenz's animal studies support innate attachment and critical periods
                    </li>
                    <li className="bg-green-900/20 border-l-4 border-green-500 pl-4 py-2 rounded-r">
                      <strong className="text-green-300">Practical applications:</strong> Influenced hospital visiting policies, adoption practices, and childcare
                    </li>
                    <li className="bg-green-900/20 border-l-4 border-green-500 pl-4 py-2 rounded-r">
                      <strong className="text-green-300">IWM support:</strong> Research shows early attachment quality correlates with adult relationships
                    </li>
                  </ul>
                </div>

                {/* Limitations */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-red-500 shadow-xl ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <h3 className={`text-red-400 font-bold mb-4 flex items-center gap-2 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                    ✗ Limitations
                  </h3>
                  <ul className={`text-gray-300 space-y-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <li className="bg-red-900/20 border-l-4 border-red-500 pl-4 py-2 rounded-r">
                      <strong className="text-red-300">Multiple attachments:</strong> Rutter argued multiple attachments form from the start, not hierarchically
                    </li>
                    <li className="bg-red-900/20 border-l-4 border-red-500 pl-4 py-2 rounded-r">
                      <strong className="text-red-300">Gender bias:</strong> Overemphasises mother's role; fathers and others can be primary attachments
                    </li>
                    <li className="bg-red-900/20 border-l-4 border-red-500 pl-4 py-2 rounded-r">
                      <strong className="text-red-300">Sensitive vs critical:</strong> Romanian orphan studies suggest sensitive period, not critical - recovery is possible
                    </li>
                  </ul>
                </div>
              </div>
            </Slide>
          );

        case 9:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 5: Assessment"
                title="Essay Plan"
                icon={Clock}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <div className={`w-full h-full flex flex-col ${isPresentation ? 'px-8' : 'px-4'}`}>
                <div className={`bg-gradient-to-r from-yellow-900/40 to-yellow-800/20 border-l-4 border-yellow-500 rounded-r-xl shadow-xl mb-6 ${isPresentation ? 'p-6' : 'p-4'}`}>
                  <p className={`text-yellow-300 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                    📝 Sample Question: "Outline and evaluate learning theory as an explanation of attachment." (16 marks)
                  </p>
                </div>

                {/* Click to Reveal Button */}
                {!showEssayPlan5 ? (
                  <div className="flex-grow flex items-center justify-center">
                    <button
                      onClick={() => setShowEssayPlan5(true)}
                      className={`group flex flex-col items-center gap-4 bg-gray-800 hover:bg-gray-700 border-2 border-dashed border-yellow-500/50 hover:border-yellow-400 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-yellow-500/20 ${isPresentation ? 'px-16 py-12' : 'px-12 py-8'}`}
                    >
                      <div className={`rounded-full bg-yellow-900/50 group-hover:bg-yellow-800/60 transition-colors ${isPresentation ? 'p-6' : 'p-4'}`}>
                        <Eye size={isPresentation ? 48 : 32} className="text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                      </div>
                      <span className={`text-yellow-400 group-hover:text-yellow-300 font-semibold transition-colors ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                        Click to Reveal Essay Plan
                      </span>
                      <span className={`text-gray-500 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        Try planning your answer first!
                      </span>
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Hide Button */}
                    <button
                      onClick={() => setShowEssayPlan5(false)}
                      className={`self-end mb-3 flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors ${isPresentation ? 'text-base' : 'text-sm'}`}
                    >
                      <EyeOff size={isPresentation ? 18 : 14} />
                      Hide Plan
                    </button>

                <div className={`grid grid-cols-1 lg:grid-cols-2 flex-grow ${isPresentation ? 'gap-8' : 'gap-5'} animate-fadeIn`}>
                  <div className={`bg-gray-800 rounded-xl border-t-4 border-yellow-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <span className={`bg-yellow-900/60 text-yellow-400 font-bold rounded-lg ${isPresentation ? 'px-4 py-2 text-xl' : 'px-3 py-1 text-sm'}`}>AO1</span>
                      <h4 className={`font-bold text-yellow-400 ${isPresentation ? 'text-xl' : 'text-base'}`}>Knowledge (6 marks)</h4>
                    </div>
                    <ul className={`text-gray-300 space-y-2 flex-grow ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <li>✓ Classical conditioning - UCS, UCR, CS, CR</li>
                      <li>✓ Operant conditioning - primary/secondary reinforcers</li>
                      <li>✓ Drive reduction theory</li>
                      <li>✓ "Cupboard love" explanation</li>
                    </ul>
                  </div>

                  <div className={`bg-gray-800 rounded-xl border-t-4 border-teal-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <span className={`bg-teal-900/60 text-teal-400 font-bold rounded-lg ${isPresentation ? 'px-4 py-2 text-xl' : 'px-3 py-1 text-sm'}`}>AO3</span>
                      <h4 className={`font-bold text-teal-400 ${isPresentation ? 'text-xl' : 'text-base'}`}>Evaluation (10 marks)</h4>
                    </div>
                    <ul className={`text-gray-300 space-y-2 flex-grow ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <li>✓ Harlow - contact comfort over food</li>
                      <li>✓ Schaffer & Emerson - 39% not fed by PAF</li>
                      <li>✓ Reductionist - ignores emotions</li>
                      <li>✓ Compare to Bowlby's innate theory</li>
                    </ul>
                  </div>
                </div>
                  </>
                )}
              </div>
            </Slide>
          );
      }
    }

    // Lesson 6: Types of Attachment
    if (currentLesson === 6) {
      switch (currentSlide) {
        case 0:
          return (
            <Slide isPresentation={isPresentation}>
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className={`rounded-full bg-teal-900/50 mb-6 animate-pulse-teal ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <Baby className={`text-teal-400 ${isPresentation ? 'w-20 h-20' : 'w-12 h-12'}`} />
                </div>
                <h1 className={`font-black text-white mb-4 tracking-tighter animate-slideDown ${isPresentation ? 'text-6xl' : 'text-4xl'}`}>
                  Types of Attachment
                </h1>
                <p className={`text-teal-400 font-bold tracking-widest animate-fadeIn ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                  LESSON 06 • AINSWORTH'S STRANGE SITUATION
                </p>
                <div className={`flex items-center gap-4 mt-8 ${isPresentation ? 'gap-6' : 'gap-4'}`}>
                  <div className={`flex items-center gap-2 text-gray-500 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <Clock size={isPresentation ? 20 : 16} />
                    <span>50 mins</span>
                  </div>
                  <div className={`bg-teal-900/50 text-teal-400 rounded-full font-bold ${isPresentation ? 'px-5 py-2 text-lg' : 'px-4 py-1 text-sm'}`}>
                    A-Level Psychology
                  </div>
                </div>
              </div>
            </Slide>
          );

        case 1:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 1: Prior Learning"
                title="Do Now Quiz"
                icon={Brain}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <DoNowQuiz questions={lesson6DoNow} isPresentation={isPresentation} />
            </Slide>
          );

        case 2:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: New Content"
                title="Learning Objectives"
                icon={Target}
                time="2 MINS"
                isPresentation={isPresentation}
              />
              <div className={`grid grid-cols-1 md:grid-cols-3 h-full ${isPresentation ? 'gap-8 p-6' : 'gap-4 p-4'}`}>
                <div className={`bg-gray-800 rounded-xl border-t-4 border-teal-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <span className={`bg-teal-900/60 text-teal-400 px-3 py-1 rounded-full font-bold self-start mb-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>AO1</span>
                  <h3 className={`text-white font-bold mb-3 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Describe</h3>
                  <p className={`text-gray-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>
                    Ainsworth's Strange Situation procedure and the three attachment types
                  </p>
                </div>
                <div className={`bg-gray-800 rounded-xl border-t-4 border-teal-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <span className={`bg-teal-900/60 text-teal-400 px-3 py-1 rounded-full font-bold self-start mb-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>AO1</span>
                  <h3 className={`text-white font-bold mb-3 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Identify</h3>
                  <p className={`text-gray-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>
                    Behaviours associated with secure, insecure-avoidant, and insecure-resistant types
                  </p>
                </div>
                <div className={`bg-gray-800 rounded-xl border-t-4 border-cyan-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <span className={`bg-cyan-900/60 text-cyan-400 px-3 py-1 rounded-full font-bold self-start mb-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>AO3</span>
                  <h3 className={`text-white font-bold mb-3 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Evaluate</h3>
                  <p className={`text-gray-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>
                    Strengths and limitations of the Strange Situation as a research method
                  </p>
                </div>
              </div>
            </Slide>
          );

        case 3:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: New Content"
                title="The Strange Situation (Ainsworth, 1970)"
                icon={Eye}
                time="8 MINS"
                isPresentation={isPresentation}
              />
              <div className={`flex flex-col h-full ${isPresentation ? 'p-6' : 'p-4'}`}>
                <div className={`bg-gradient-to-r from-teal-900/40 to-teal-800/20 border-l-4 border-teal-500 rounded-r-xl mb-6 ${isPresentation ? 'p-5' : 'p-4'}`}>
                  <p className={`text-teal-300 ${isPresentation ? 'text-lg' : 'text-base'}`}>
                    A controlled observation to assess attachment type through 8 episodes of separation and reunion
                  </p>
                </div>

                <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 ${isPresentation ? 'gap-4' : 'gap-3'}`}>
                  {[
                    { num: 1, desc: 'Mother & infant enter room' },
                    { num: 2, desc: 'Infant explores, mother passive' },
                    { num: 3, desc: 'Stranger enters, talks to mother' },
                    { num: 4, desc: 'Mother leaves, stranger offers comfort' },
                    { num: 5, desc: 'Mother returns, stranger leaves' },
                    { num: 6, desc: 'Mother leaves, infant alone' },
                    { num: 7, desc: 'Stranger enters, offers comfort' },
                    { num: 8, desc: 'Mother returns, stranger leaves' }
                  ].map((ep) => (
                    <div key={ep.num} className={`bg-gray-800 rounded-lg border border-gray-700 ${isPresentation ? 'p-4' : 'p-3'}`}>
                      <span className={`bg-teal-900/60 text-teal-400 font-bold rounded ${isPresentation ? 'px-2 py-1 text-sm' : 'px-2 py-0.5 text-xs'}`}>
                        {ep.num}
                      </span>
                      <p className={`text-gray-300 mt-2 ${isPresentation ? 'text-base' : 'text-xs'}`}>{ep.desc}</p>
                    </div>
                  ))}
                </div>

                <div className={`bg-gray-800 rounded-xl border-t-4 border-teal-500 ${isPresentation ? 'p-5' : 'p-4'}`}>
                  <h4 className={`text-teal-400 font-bold mb-3 ${isPresentation ? 'text-xl' : 'text-base'}`}>Key Behaviours Observed:</h4>
                  <div className={`grid grid-cols-1 md:grid-cols-3 gap-4`}>
                    <div className="text-center">
                      <p className={`text-gray-400 font-semibold ${isPresentation ? 'text-base' : 'text-sm'}`}>Separation Anxiety</p>
                      <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Distress when caregiver leaves</p>
                    </div>
                    <div className="text-center">
                      <p className={`text-gray-400 font-semibold ${isPresentation ? 'text-base' : 'text-sm'}`}>Stranger Anxiety</p>
                      <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Response to unfamiliar adult</p>
                    </div>
                    <div className="text-center">
                      <p className={`text-gray-400 font-semibold ${isPresentation ? 'text-base' : 'text-sm'}`}>Reunion Behaviour</p>
                      <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Response when caregiver returns</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          );

        case 4:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: New Content"
                title="The Three Attachment Types"
                icon={Users}
                time="10 MINS"
                isPresentation={isPresentation}
              />
              <div className={`grid grid-cols-1 md:grid-cols-3 h-full ${isPresentation ? 'gap-6 p-6' : 'gap-4 p-4'}`}>
                {/* Secure */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-green-500 shadow-xl ${isPresentation ? 'p-6' : 'p-4'}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`bg-green-900/60 text-green-400 font-bold rounded-lg ${isPresentation ? 'px-3 py-1 text-lg' : 'px-2 py-1 text-sm'}`}>Type B</span>
                    <h3 className={`text-green-400 font-bold ${isPresentation ? 'text-xl' : 'text-base'}`}>Secure</h3>
                  </div>
                  <p className={`text-green-300 font-semibold mb-3 ${isPresentation ? 'text-lg' : 'text-sm'}`}>60-75% of infants</p>
                  <ul className={`text-gray-300 space-y-2 ${isPresentation ? 'text-base' : 'text-xs'}`}>
                    <li>✓ Uses mother as secure base</li>
                    <li>✓ Moderate distress at separation</li>
                    <li>✓ Enthusiastic at reunion</li>
                    <li>✓ Easily soothed by mother</li>
                    <li>✓ Wary of strangers</li>
                  </ul>
                  <div className={`mt-4 bg-green-900/30 border border-green-500/30 rounded-lg ${isPresentation ? 'p-3' : 'p-2'}`}>
                    <p className={`text-green-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                      <strong>Caregiver:</strong> Sensitive, responsive
                    </p>
                  </div>
                </div>

                {/* Insecure-Avoidant */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-blue-500 shadow-xl ${isPresentation ? 'p-6' : 'p-4'}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`bg-blue-900/60 text-blue-400 font-bold rounded-lg ${isPresentation ? 'px-3 py-1 text-lg' : 'px-2 py-1 text-sm'}`}>Type A</span>
                    <h3 className={`text-blue-400 font-bold ${isPresentation ? 'text-xl' : 'text-base'}`}>Insecure-Avoidant</h3>
                  </div>
                  <p className={`text-blue-300 font-semibold mb-3 ${isPresentation ? 'text-lg' : 'text-sm'}`}>20-25% of infants</p>
                  <ul className={`text-gray-300 space-y-2 ${isPresentation ? 'text-base' : 'text-xs'}`}>
                    <li>✓ Explores independently</li>
                    <li>✓ Little distress at separation</li>
                    <li>✓ Avoids mother at reunion</li>
                    <li>✓ Accepts comfort from strangers</li>
                    <li>✓ Shows little emotion</li>
                  </ul>
                  <div className={`mt-4 bg-blue-900/30 border border-blue-500/30 rounded-lg ${isPresentation ? 'p-3' : 'p-2'}`}>
                    <p className={`text-blue-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                      <strong>Caregiver:</strong> Rejecting, unresponsive
                    </p>
                  </div>
                </div>

                {/* Insecure-Resistant */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-amber-500 shadow-xl ${isPresentation ? 'p-6' : 'p-4'}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`bg-amber-900/60 text-amber-400 font-bold rounded-lg ${isPresentation ? 'px-3 py-1 text-lg' : 'px-2 py-1 text-sm'}`}>Type C</span>
                    <h3 className={`text-amber-400 font-bold ${isPresentation ? 'text-xl' : 'text-base'}`}>Insecure-Resistant</h3>
                  </div>
                  <p className={`text-amber-300 font-semibold mb-3 ${isPresentation ? 'text-lg' : 'text-sm'}`}>10-15% of infants</p>
                  <ul className={`text-gray-300 space-y-2 ${isPresentation ? 'text-base' : 'text-xs'}`}>
                    <li>✓ Reluctant to explore</li>
                    <li>✓ Extreme distress at separation</li>
                    <li>✓ Seeks & rejects comfort</li>
                    <li>✓ Hard to soothe</li>
                    <li>✓ Very wary of strangers</li>
                  </ul>
                  <div className={`mt-4 bg-amber-900/30 border border-amber-500/30 rounded-lg ${isPresentation ? 'p-3' : 'p-2'}`}>
                    <p className={`text-amber-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                      <strong>Caregiver:</strong> Inconsistent responsiveness
                    </p>
                  </div>
                </div>
              </div>
            </Slide>
          );

        case 5:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: New Content"
                title="Evaluation of the Strange Situation"
                icon={Scale}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <div className={`grid grid-cols-1 lg:grid-cols-2 h-full ${isPresentation ? 'gap-8 p-6' : 'gap-4 p-4'}`}>
                {/* Strengths */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-green-500 shadow-xl ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <h3 className={`text-green-400 font-bold mb-4 flex items-center gap-2 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                    ✓ Strengths
                  </h3>
                  <ul className={`text-gray-300 space-y-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <li className="bg-green-900/20 border-l-4 border-green-500 pl-4 py-2 rounded-r">
                      <strong className="text-green-300">Good reliability:</strong> Inter-rater reliability of 94% between observers
                    </li>
                    <li className="bg-green-900/20 border-l-4 border-green-500 pl-4 py-2 rounded-r">
                      <strong className="text-green-300">Predictive validity:</strong> Secure attachment predicts better social development
                    </li>
                    <li className="bg-green-900/20 border-l-4 border-green-500 pl-4 py-2 rounded-r">
                      <strong className="text-green-300">Real-world application:</strong> Used in social services to assess at-risk children
                    </li>
                  </ul>
                </div>

                {/* Limitations */}
                <div className={`bg-gray-800 rounded-xl border-t-4 border-red-500 shadow-xl ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <h3 className={`text-red-400 font-bold mb-4 flex items-center gap-2 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                    ✗ Limitations
                  </h3>
                  <ul className={`text-gray-300 space-y-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    <li className="bg-red-900/20 border-l-4 border-red-500 pl-4 py-2 rounded-r">
                      <strong className="text-red-300">Culture bias:</strong> Based on Western (USA) norms; may not apply cross-culturally
                    </li>
                    <li className="bg-red-900/20 border-l-4 border-red-500 pl-4 py-2 rounded-r">
                      <strong className="text-red-300">Ecological validity:</strong> Artificial lab setting may not reflect real-world behaviour
                    </li>
                    <li className="bg-red-900/20 border-l-4 border-red-500 pl-4 py-2 rounded-r">
                      <strong className="text-red-300">Ethics:</strong> May cause distress to infants; debatable whether this is justified
                    </li>
                  </ul>
                </div>
              </div>
            </Slide>
          );

        case 6:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 3: Application"
                title="Strange Situation Classifier"
                icon={Baby}
                time="12 MINS"
                isPresentation={isPresentation}
              />
              <Lesson6Simulation isPresentation={isPresentation} />
            </Slide>
          );

        case 7:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 4: Check"
                title="Understanding Check"
                icon={Brain}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <UnderstandingCheck
                questions={[
                  { id: 1, type: 'scenario', question: 'What is the Strange Situation designed to measure?', options: [{ text: 'Intelligence levels in infants', correct: false }, { text: 'Attachment type between infant and caregiver', correct: true }, { text: 'Language development in toddlers', correct: false }, { text: 'Motor skills development', correct: false }], feedback: 'Correct! The Strange Situation is a controlled observation designed to assess the quality of attachment between infant and caregiver.' },
                  { id: 2, type: 'scenario', question: 'Which attachment type shows the "approach-avoidance" conflict on reunion?', options: [{ text: 'Secure (Type B)', correct: false }, { text: 'Insecure-Avoidant (Type A)', correct: false }, { text: 'Insecure-Resistant (Type C)', correct: true }, { text: 'All types show this', correct: false }], feedback: 'Correct! Insecure-resistant infants show this conflict - they seek proximity to the caregiver but then resist comfort when it is offered.' },
                  { id: 3, type: 'scenario', question: 'What percentage of infants are typically classified as securely attached?', options: [{ text: '20-25%', correct: false }, { text: '40-50%', correct: false }, { text: '60-75%', correct: true }, { text: '90-100%', correct: false }], feedback: 'Correct! In Ainsworth\'s original research and most Western studies, around 60-75% of infants are classified as securely attached (Type B).' },
                  { id: 4, type: 'scenario', question: 'What caregiving style is associated with insecure-avoidant attachment?', options: [{ text: 'Sensitive and responsive', correct: false }, { text: 'Rejecting and unresponsive', correct: true }, { text: 'Inconsistent responsiveness', correct: false }, { text: 'Overprotective', correct: false }], feedback: 'Correct! Insecure-avoidant attachment is associated with caregivers who are rejecting and unresponsive to the infant\'s needs.' },
                  { id: 5, type: 'scenario', question: 'What is a key limitation of the Strange Situation?', options: [{ text: 'It has poor reliability', correct: false }, { text: 'It cannot measure attachment', correct: false }, { text: 'It may be culturally biased towards Western norms', correct: true }, { text: 'It takes too long to conduct', correct: false }], feedback: 'Correct! The Strange Situation was developed based on American norms and may not be valid across different cultures with different child-rearing practices.' }
                ]}
                themeColor="teal"
                isPresentation={isPresentation}
              />
            </Slide>
          );

        case 8:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 5: Assessment"
                title="Main & Solomon's Fourth Type"
                icon={AlertTriangle}
                time="3 MINS"
                isPresentation={isPresentation}
              />
              <div className={`flex flex-col h-full ${isPresentation ? 'p-6' : 'p-4'}`}>
                <div className={`bg-gradient-to-r from-purple-900/40 to-purple-800/20 border-l-4 border-purple-500 rounded-r-xl mb-6 ${isPresentation ? 'p-5' : 'p-4'}`}>
                  <p className={`text-purple-300 ${isPresentation ? 'text-lg' : 'text-base'}`}>
                    Main & Solomon (1986) identified a fourth attachment type that didn't fit Ainsworth's original categories...
                  </p>
                </div>

                <div className={`bg-gray-800 rounded-xl border-t-4 border-purple-500 shadow-xl flex-grow ${isPresentation ? 'p-8' : 'p-5'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`bg-purple-900/60 text-purple-400 font-bold rounded-lg ${isPresentation ? 'px-4 py-2 text-xl' : 'px-3 py-1 text-base'}`}>Type D</span>
                    <h3 className={`text-purple-400 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Insecure-Disorganised</h3>
                  </div>
                  
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 ${isPresentation ? 'gap-8' : 'gap-6'}`}>
                    <div>
                      <h4 className={`text-purple-300 font-semibold mb-3 ${isPresentation ? 'text-xl' : 'text-base'}`}>Behaviours:</h4>
                      <ul className={`text-gray-300 space-y-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        <li>• Lack of consistent attachment strategy</li>
                        <li>• Confused, contradictory behaviours</li>
                        <li>• May freeze or appear fearful of caregiver</li>
                        <li>• Approach with averted gaze</li>
                        <li>• Stereotyped movements</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className={`text-purple-300 font-semibold mb-3 ${isPresentation ? 'text-xl' : 'text-base'}`}>Associated with:</h4>
                      <ul className={`text-gray-300 space-y-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        <li>• Frightening or abusive caregivers</li>
                        <li>• Caregiver as source of fear AND comfort</li>
                        <li>• Unresolved trauma in the caregiver</li>
                        <li>• Higher rates in maltreated populations</li>
                        <li>• Predicts later psychological problems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          );

        case 9:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 5: Assessment"
                title="Essay Plan"
                icon={Clock}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <div className={`w-full h-full flex flex-col ${isPresentation ? 'px-8' : 'px-4'}`}>
                <div className={`bg-gradient-to-r from-teal-900/40 to-teal-800/20 border-l-4 border-teal-500 rounded-r-xl shadow-xl mb-6 ${isPresentation ? 'p-6' : 'p-4'}`}>
                  <p className={`text-teal-300 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                    📝 Sample Question: "Describe and evaluate types of attachment." (16 marks)
                  </p>
                </div>

                {/* Click to Reveal Button */}
                {!showEssayPlan6 ? (
                  <div className="flex-grow flex items-center justify-center">
                    <button
                      onClick={() => setShowEssayPlan6(true)}
                      className={`group flex flex-col items-center gap-4 bg-gray-800 hover:bg-gray-700 border-2 border-dashed border-teal-500/50 hover:border-teal-400 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-teal-500/20 ${isPresentation ? 'px-16 py-12' : 'px-12 py-8'}`}
                    >
                      <div className={`rounded-full bg-teal-900/50 group-hover:bg-teal-800/60 transition-colors ${isPresentation ? 'p-6' : 'p-4'}`}>
                        <Eye size={isPresentation ? 48 : 32} className="text-teal-400 group-hover:text-teal-300 transition-colors" />
                      </div>
                      <span className={`text-teal-400 group-hover:text-teal-300 font-semibold transition-colors ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                        Click to Reveal Essay Plan
                      </span>
                      <span className={`text-gray-500 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        Try planning your answer first!
                      </span>
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Hide Button */}
                    <button
                      onClick={() => setShowEssayPlan6(false)}
                      className={`self-end mb-3 flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors ${isPresentation ? 'text-base' : 'text-sm'}`}
                    >
                      <EyeOff size={isPresentation ? 18 : 14} />
                      Hide Plan
                    </button>

                <div className={`grid grid-cols-1 lg:grid-cols-2 flex-grow ${isPresentation ? 'gap-8' : 'gap-5'} animate-fadeIn`}>
                  <div className={`bg-gray-800 rounded-xl border-t-4 border-teal-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <span className={`bg-teal-900/60 text-teal-400 font-bold rounded-lg ${isPresentation ? 'px-4 py-2 text-xl' : 'px-3 py-1 text-sm'}`}>AO1</span>
                      <h4 className={`font-bold text-teal-400 ${isPresentation ? 'text-xl' : 'text-base'}`}>Knowledge (6 marks)</h4>
                    </div>
                    <ul className={`text-gray-300 space-y-2 flex-grow ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <li>✓ Describe Strange Situation procedure</li>
                      <li>✓ Type B - Secure (60-75%)</li>
                      <li>✓ Type A - Insecure-Avoidant (20-25%)</li>
                      <li>✓ Type C - Insecure-Resistant (10-15%)</li>
                      <li>✓ Caregiver sensitivity hypothesis</li>
                    </ul>
                  </div>

                  <div className={`bg-gray-800 rounded-xl border-t-4 border-cyan-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <span className={`bg-cyan-900/60 text-cyan-400 font-bold rounded-lg ${isPresentation ? 'px-4 py-2 text-xl' : 'px-3 py-1 text-sm'}`}>AO3</span>
                      <h4 className={`font-bold text-cyan-400 ${isPresentation ? 'text-xl' : 'text-base'}`}>Evaluation (10 marks)</h4>
                    </div>
                    <ul className={`text-gray-300 space-y-2 flex-grow ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      <li>✓ Good reliability (94% inter-rater)</li>
                      <li>✓ Predictive validity for outcomes</li>
                      <li>✓ Cultural bias limitation</li>
                      <li>✓ Type D - Disorganised (Main & Solomon)</li>
                      <li>✓ Temperament hypothesis (Kagan)</li>
                    </ul>
                  </div>
                </div>
                  </>
                )}
              </div>
            </Slide>
          );
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
    <div className="flex h-screen bg-gray-900 text-gray-100 font-sans overflow-hidden selection:bg-cyan-500 selection:text-white">
      {/* Sidebar */}
      {!isPresentation && (
        <div className={`${isSidebarOpen ? 'w-80' : 'w-0'} bg-gray-950 border-r border-gray-800 transition-all duration-300 flex flex-col z-20 shadow-2xl relative overflow-hidden`}>
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <span className="font-black text-xl text-cyan-500 tracking-tighter">ATTACH<span className="text-white">MENT</span></span>
          <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-white">
            <X size={20}/>
          </button>
        </div>
        <div className="flex-grow overflow-y-auto py-4">
          {lessons.map((lesson) => (
            <button 
              key={lesson.id} 
              onClick={() => { setCurrentLesson(lesson.id); setCurrentSlide(0); }} 
              className={`w-full text-left px-6 py-4 border-l-4 transition-all ${
                currentLesson === lesson.id 
                  ? 'border-cyan-500 bg-cyan-900/10 text-white shadow-[inset_10px_0_20px_-10px_rgba(6,182,212,0.3)]' 
                  : 'border-transparent text-gray-500 hover:text-gray-200 hover:bg-gray-900'
              }`}
            >
              <span className={`font-bold ${isPresentation ? 'text-lg' : 'text-sm'}`}>{lesson.title}</span>
            </button>
          ))}
        </div>
      </div>
      )}

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col h-full relative bg-[#0a0a0a]">
        {/* Top Controls */}
        <div className="absolute top-4 left-4 z-50 flex gap-2">
          {!isSidebarOpen && (
            <button 
              onClick={() => setSidebarOpen(true)} 
              className="bg-gray-800 p-2 rounded text-white hover:bg-gray-700 shadow-lg border border-gray-700"
            >
              <Menu size={20} />
            </button>
          )}
        </div>
        
        <div className="absolute top-4 right-4 z-50 flex gap-2">
          <button 
            onClick={() => { 
              if (!isPresentation) setSidebarOpen(false); 
              setIsPresentation(!isPresentation); 
            }} 
            className={`p-3 rounded-lg text-gray-400 hover:text-white border transition-all ${
              isPresentation 
                ? 'bg-red-600 hover:bg-red-500 border-red-500 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]' 
                : 'bg-slate-700 hover:bg-slate-600 border-slate-600 shadow-lg'
            }`} 
            title={isPresentation ? "Exit Presentation Mode (Esc)" : "Start Presentation Mode"}
          >
            <Projector size={20} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-gray-900 w-full">
          <div 
            className="h-full bg-gradient-to-r from-cyan-800 to-cyan-500 transition-all duration-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]" 
            style={{ width: `${((currentSlide + 1) / slideCount) * 100}%` }} 
          />
        </div>
        
        {/* Main Slide Area */}
        <main 
          className="flex-grow relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#050505] to-black"
          style={{ zoom: isPresentation ? "1.15" : "1" }}
        >
          {renderLesson()}
        </main>

        {/* Bottom Navigation */}
        {!isPresentation && (
          <div className="h-20 border-t border-gray-800 bg-black/50 backdrop-blur-sm flex items-center justify-between px-8 z-10">
            <button 
              onClick={prevSlide} 
              disabled={currentSlide === 0} 
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all ${
                currentSlide === 0 
                  ? 'text-gray-700 cursor-not-allowed' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              <ChevronLeft size={16} /> PREV
            </button>
            <span className="text-gray-600 font-mono text-xs tracking-widest">
              {currentSlide + 1} / {slideCount}
            </span>
            <button 
              onClick={nextSlide} 
              disabled={currentSlide === slideCount - 1} 
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all ${
                currentSlide === slideCount - 1 
                  ? 'text-gray-700 cursor-not-allowed' 
                  : 'bg-cyan-600 text-white hover:bg-cyan-500'
              }`}
            >
              NEXT <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
