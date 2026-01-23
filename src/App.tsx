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
import Lesson7Simulation from './components/Lesson7Simulation';
import Lesson8Simulation from './components/Lesson8Simulation';
import { lessons, lesson1DoNow, lesson2DoNow, lesson3DoNow, lesson4DoNow, lesson5DoNow, lesson6DoNow, lesson7DoNow, lesson8DoNow, lessonThemes } from './constants';
import { Activity, Brain, Clock, Heart, Baby, Users, Target, Eye, EyeOff, Scale, Dna, BookOpen, Bird, Feather, FlaskConical, AlertTriangle, Lightbulb, Globe2, Shield, Home } from 'lucide-react';

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
  const [showEssayPlan7, setShowEssayPlan7] = useState(false);
  const [showEssayPlan8, setShowEssayPlan8] = useState(false);

  const getSlideCount = (_lessonId: number) => {
    return 10; // Standard 10-slide lesson
  };

  const slideCount = getSlideCount(currentLesson);
  const lessonTheme = lessonThemes[currentLesson];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') {
        if (isPresentation) {
          if (document.fullscreenElement) {
            document.exitFullscreen().catch(() => {});
          }
        }
        setIsPresentation(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slideCount, isPresentation]);

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
              <div className="flex flex-col items-center justify-center h-full text-center relative">
                {/* Background glow effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 blur-[150px] opacity-15 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500 blur-[120px] opacity-10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                
                <div className="relative mb-8 z-10">
                  <div className="absolute inset-0 bg-cyan-500 blur-[80px] opacity-25 rounded-full animate-pulse"></div>
                  <div className="relative z-10 flex gap-6 p-6 glass-panel rounded-2xl">
                    <Baby size={isPresentation ? 100 : 80} className="text-cyan-400 animate-heartbeat drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                    <Heart size={isPresentation ? 100 : 80} className="text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
                  </div>
                </div>
                <h1 className={`font-bold text-white mb-4 tracking-widest uppercase text-neon-cyan ${isPresentation ? 'text-8xl' : 'text-6xl'}`}>
                  Caregiver-Infant <span className="text-cyan-400">Interactions</span>
                </h1>
                <div className="h-1 w-64 bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-6 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                <h2 className="text-cyan-500 text-xs tracking-[0.5em] uppercase mb-12 font-bold">
                  Attachment Lesson 01
                </h2>
                <button
                  onClick={nextSlide}
                  className={`group relative bg-slate-900/80 border-2 border-cyan-500 text-cyan-400 font-bold px-12 py-4 rounded-xl hover:bg-cyan-900/40 hover:text-white transition-all ${isPresentation ? 'text-2xl' : 'text-lg'} uppercase shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] animate-pulse-neon-cyan`}
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
                  <div className={`bg-gray-800/90 rounded-2xl border border-cyan-500/30 shadow-xl overflow-hidden card-hover-glow relative group ${isPresentation ? 'p-10' : 'p-6'}`}>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-2xl rounded-full group-hover:bg-cyan-500/10 transition-colors"></div>
                    <h3 className={`text-cyan-400 font-bold mb-4 ${isPresentation ? 'text-3xl' : 'text-xl'}`}>
                      What is Reciprocity?
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
                  <div className={`bg-gray-800/90 rounded-2xl border border-cyan-500/30 shadow-xl flex flex-col card-hover-glow relative group ${isPresentation ? 'p-10' : 'p-6'}`}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-2xl rounded-full group-hover:bg-cyan-500/10 transition-colors"></div>
                    <h3 className={`text-cyan-400 font-bold mb-4 border-b border-gray-700/50 pb-3 ${isPresentation ? 'text-3xl' : 'text-xl'}`}>
                      Research Evidence
                    </h3>
                    <div className={`bg-cyan-900/20 rounded-xl border-l-4 border-cyan-500 flex-grow shadow-[inset_0_0_20px_rgba(6,182,212,0.05)] ${isPresentation ? 'p-6' : 'p-4'}`}>
                      <p className={`font-bold text-cyan-300 uppercase mb-2 tracking-wider ${isPresentation ? 'text-lg' : 'text-xs'}`}>Brazleton et al. (1975)</p>
                      <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                        Described caregiver-infant interaction as a <span className="text-cyan-300 font-semibold">"dance"</span> where each partner responds to the other's cues.
                        When caregivers ignored infant signals, babies showed <span className="text-red-300 font-semibold">distress</span>.
                      </p>
                    </div>
                    <div className={`mt-4 bg-gray-900/60 rounded-xl border border-gray-700/50 ${isPresentation ? 'p-6' : 'p-4'}`}>
                      <h4 className={`text-white font-bold mb-2 ${isPresentation ? 'text-xl' : 'text-sm'}`}>Example Chain</h4>
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
                    📝 Sample Question: "Outline and evaluate research into caregiver-infant interactions." (12 marks)
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
              <div className="flex flex-col items-center justify-center h-full text-center relative">
                {/* Background glow effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-amber-500 blur-[150px] opacity-15 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-yellow-500 blur-[120px] opacity-10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="absolute inset-0 bg-amber-500 blur-[80px] opacity-20 rounded-full"></div>
                  <div className="relative z-10 flex gap-4 p-6 glass-panel rounded-2xl">
                    <Clock size={isPresentation ? 64 : 48} className="text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                    <Baby size={isPresentation ? 64 : 48} className="text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                  </div>
                </div>
                <h1 className={`font-black mb-4 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg ${isPresentation ? 'text-7xl' : 'text-5xl'}`}>
                  Schaffer's Stages of Attachment
                </h1>
                <div className="h-1 w-64 bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-4 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                <p className={`text-amber-400 max-w-2xl mb-8 tracking-widest uppercase font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                  How attachment develops over the first year of life
                </p>
                <div className={`flex flex-wrap justify-center gap-3 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                  <span className="bg-amber-900/40 text-amber-400 px-4 py-2 rounded-full border border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.15)]">4 Developmental Stages</span>
                  <span className="bg-amber-900/40 text-amber-400 px-4 py-2 rounded-full border border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.15)]">Schaffer & Emerson (1964)</span>
                  <span className="bg-amber-900/40 text-amber-400 px-4 py-2 rounded-full border border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.15)]">Glasgow Babies Study</span>
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
                {/* Timeline connector line */}
                <div className="relative">
                  <div className={`absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-slate-600 via-blue-500 via-amber-500 to-green-500 rounded-full opacity-30 hidden lg:block ${isPresentation ? 'mx-12' : 'mx-6'}`}></div>
                </div>
                
                <div className={`grid grid-cols-1 lg:grid-cols-4 h-full ${isPresentation ? 'gap-6' : 'gap-4'}`}>
                  {/* Stage 1 - Asocial */}
                  <div className={`group relative bg-gradient-to-br from-slate-900/60 to-slate-800/30 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-slate-500/20 transition-all duration-500 cursor-pointer transform hover:scale-[1.03] hover:-translate-y-1 flex flex-col overflow-hidden ${isPresentation ? 'p-6' : 'p-4'}`}>
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Stage indicator with pulse */}
                    <div className="flex items-center justify-between mb-3 relative z-10">
                      <div className="flex items-center gap-2">
                        <div className={`relative ${isPresentation ? 'w-12 h-12' : 'w-9 h-9'}`}>
                          <div className="absolute inset-0 bg-slate-500/30 rounded-full animate-ping opacity-20"></div>
                          <div className={`relative w-full h-full bg-gradient-to-br from-slate-500 to-slate-700 rounded-full flex items-center justify-center shadow-lg shadow-slate-500/30`}>
                            <span className={`text-white font-black ${isPresentation ? 'text-xl' : 'text-base'}`}>1</span>
                          </div>
                        </div>
                        <h4 className={`font-black text-slate-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>Asocial</h4>
                      </div>
                    </div>
                    
                    {/* Age badge */}
                    <div className={`bg-slate-800/80 border border-slate-500/40 rounded-lg mb-3 text-center ${isPresentation ? 'py-2 px-3' : 'py-1.5 px-2'}`}>
                      <span className={`text-slate-300 font-bold ${isPresentation ? 'text-lg' : 'text-sm'}`}>0-6 weeks</span>
                    </div>
                    
                    <ul className={`text-gray-300 space-y-2 flex-grow relative z-10 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                      <li className="flex items-start gap-2 group-hover:translate-x-1 transition-transform">
                        <span className="text-slate-400 mt-0.5">●</span>
                        <span>Similar responses to objects & people</span>
                      </li>
                      <li className="flex items-start gap-2 group-hover:translate-x-1 transition-transform delay-75">
                        <span className="text-slate-400 mt-0.5">●</span>
                        <span>Preference for faces/eyes</span>
                      </li>
                      <li className="flex items-start gap-2 group-hover:translate-x-1 transition-transform delay-100">
                        <span className="text-slate-400 mt-0.5">●</span>
                        <span>No specific attachments</span>
                      </li>
                    </ul>
                    
                    {/* Bottom gradient bar */}
                    <div className="h-1 w-full bg-gradient-to-r from-slate-600 to-slate-400 rounded-full mt-3 group-hover:shadow-[0_0_10px_rgba(148,163,184,0.5)] transition-shadow"></div>
                  </div>

                  {/* Stage 2 - Indiscriminate */}
                  <div className={`group relative bg-gradient-to-br from-blue-900/60 to-blue-800/30 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer transform hover:scale-[1.03] hover:-translate-y-1 flex flex-col overflow-hidden ${isPresentation ? 'p-6' : 'p-4'}`}>
                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex items-center justify-between mb-3 relative z-10">
                      <div className="flex items-center gap-2">
                        <div className={`relative ${isPresentation ? 'w-12 h-12' : 'w-9 h-9'}`}>
                          <div className="absolute inset-0 bg-blue-500/30 rounded-full animate-ping opacity-20"></div>
                          <div className={`relative w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30`}>
                            <span className={`text-white font-black ${isPresentation ? 'text-xl' : 'text-base'}`}>2</span>
                          </div>
                        </div>
                        <h4 className={`font-black text-blue-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>Indiscriminate</h4>
                      </div>
                    </div>
                    
                    <div className={`bg-blue-800/80 border border-blue-500/40 rounded-lg mb-3 text-center ${isPresentation ? 'py-2 px-3' : 'py-1.5 px-2'}`}>
                      <span className={`text-blue-200 font-bold ${isPresentation ? 'text-lg' : 'text-sm'}`}>6 wks - 6 mo</span>
                    </div>
                    
                    <ul className={`text-gray-300 space-y-2 flex-grow relative z-10 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                      <li className="flex items-start gap-2 group-hover:translate-x-1 transition-transform">
                        <span className="text-blue-400 mt-0.5">●</span>
                        <span>Prefer humans to objects</span>
                      </li>
                      <li className="flex items-start gap-2 group-hover:translate-x-1 transition-transform delay-75">
                        <span className="text-blue-400 mt-0.5">●</span>
                        <span>Happy with any caregiver</span>
                      </li>
                      <li className="flex items-start gap-2 group-hover:translate-x-1 transition-transform delay-100">
                        <span className="text-blue-400 mt-0.5">●</span>
                        <span>No stranger anxiety</span>
                      </li>
                    </ul>
                    
                    <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mt-3 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-shadow"></div>
                  </div>

                  {/* Stage 3 - Specific */}
                  <div className={`group relative bg-gradient-to-br from-amber-900/60 to-amber-800/30 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 cursor-pointer transform hover:scale-[1.03] hover:-translate-y-1 flex flex-col overflow-hidden ${isPresentation ? 'p-6' : 'p-4'}`}>
                    <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex items-center justify-between mb-3 relative z-10">
                      <div className="flex items-center gap-2">
                        <div className={`relative ${isPresentation ? 'w-12 h-12' : 'w-9 h-9'}`}>
                          <div className="absolute inset-0 bg-amber-500/30 rounded-full animate-ping opacity-20"></div>
                          <div className={`relative w-full h-full bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30`}>
                            <span className={`text-white font-black ${isPresentation ? 'text-xl' : 'text-base'}`}>3</span>
                          </div>
                        </div>
                        <h4 className={`font-black text-amber-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>Specific</h4>
                      </div>
                    </div>
                    
                    <div className={`bg-amber-800/80 border border-amber-500/40 rounded-lg mb-3 text-center ${isPresentation ? 'py-2 px-3' : 'py-1.5 px-2'}`}>
                      <span className={`text-amber-200 font-bold ${isPresentation ? 'text-lg' : 'text-sm'}`}>7+ months</span>
                    </div>
                    
                    <ul className={`text-gray-300 space-y-2 flex-grow relative z-10 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                      <li className="flex items-start gap-2 group-hover:translate-x-1 transition-transform">
                        <span className="text-amber-400 mt-0.5">●</span>
                        <span>Primary attachment forms</span>
                      </li>
                      <li className="flex items-start gap-2 group-hover:translate-x-1 transition-transform delay-75">
                        <span className="text-red-400 mt-0.5">⚠</span>
                        <span className="text-red-300 font-semibold">Stranger anxiety appears</span>
                      </li>
                      <li className="flex items-start gap-2 group-hover:translate-x-1 transition-transform delay-100">
                        <span className="text-red-400 mt-0.5">⚠</span>
                        <span className="text-red-300 font-semibold">Separation anxiety</span>
                      </li>
                    </ul>
                    
                    <div className="h-1 w-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full mt-3 group-hover:shadow-[0_0_10px_rgba(245,158,11,0.5)] transition-shadow"></div>
                  </div>

                  {/* Stage 4 - Multiple */}
                  <div className={`group relative bg-gradient-to-br from-green-900/60 to-green-800/30 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 cursor-pointer transform hover:scale-[1.03] hover:-translate-y-1 flex flex-col overflow-hidden ${isPresentation ? 'p-6' : 'p-4'}`}>
                    <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex items-center justify-between mb-3 relative z-10">
                      <div className="flex items-center gap-2">
                        <div className={`relative ${isPresentation ? 'w-12 h-12' : 'w-9 h-9'}`}>
                          <div className="absolute inset-0 bg-green-500/30 rounded-full animate-ping opacity-20"></div>
                          <div className={`relative w-full h-full bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30`}>
                            <span className={`text-white font-black ${isPresentation ? 'text-xl' : 'text-base'}`}>4</span>
                          </div>
                        </div>
                        <h4 className={`font-black text-green-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>Multiple</h4>
                      </div>
                    </div>
                    
                    <div className={`bg-green-800/80 border border-green-500/40 rounded-lg mb-3 text-center ${isPresentation ? 'py-2 px-3' : 'py-1.5 px-2'}`}>
                      <span className={`text-green-200 font-bold ${isPresentation ? 'text-lg' : 'text-sm'}`}>10+ months</span>
                    </div>
                    
                    <ul className={`text-gray-300 space-y-2 flex-grow relative z-10 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                      <li className="flex items-start gap-2 group-hover:translate-x-1 transition-transform">
                        <span className="text-green-400 mt-0.5">●</span>
                        <span>Secondary attachments form</span>
                      </li>
                      <li className="flex items-start gap-2 group-hover:translate-x-1 transition-transform delay-75">
                        <span className="text-green-400 mt-0.5">●</span>
                        <span>Extended family bonds</span>
                      </li>
                      <li className="flex items-start gap-2 group-hover:translate-x-1 transition-transform delay-100">
                        <span className="text-green-400 mt-0.5">●</span>
                        <span>Hierarchy of attachments</span>
                      </li>
                    </ul>
                    
                    <div className="h-1 w-full bg-gradient-to-r from-green-600 to-green-400 rounded-full mt-3 group-hover:shadow-[0_0_10px_rgba(34,197,94,0.5)] transition-shadow"></div>
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
                    📝 Sample Question: "Outline and evaluate Schaffer's stages of attachment." (12 marks)
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
              <div className="flex flex-col items-center justify-center h-full text-center relative">
                {/* Background glow effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500 blur-[150px] opacity-15 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-teal-500 blur-[120px] opacity-10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="absolute inset-0 bg-orange-500 blur-[80px] opacity-20 rounded-full"></div>
                  <div className="relative z-10 flex gap-4 p-6 glass-panel rounded-2xl">
                    <Users size={isPresentation ? 64 : 48} className="text-orange-400 drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                    <Scale size={isPresentation ? 64 : 48} className="text-orange-400 drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                  </div>
                </div>
                <h1 className={`font-black mb-4 bg-gradient-to-r from-orange-400 via-orange-300 to-amber-400 bg-clip-text text-transparent drop-shadow-lg ${isPresentation ? 'text-7xl' : 'text-5xl'}`}>
                  The Role of the Father
                </h1>
                <div className="h-1 w-64 bg-gradient-to-r from-transparent via-orange-500 to-transparent mb-4 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                <p className={`text-orange-400 max-w-2xl mb-8 tracking-widest uppercase font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                  Biological instinct or social construction?
                </p>
                <div className={`flex flex-wrap justify-center gap-3 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                  <span className="bg-orange-900/40 text-orange-400 px-4 py-2 rounded-full border border-orange-500/40 shadow-[0_0_10px_rgba(249,115,22,0.15)]">Nature vs Nurture</span>
                  <span className="bg-orange-900/40 text-orange-400 px-4 py-2 rounded-full border border-orange-500/40 shadow-[0_0_10px_rgba(249,115,22,0.15)]">Grossmann et al.</span>
                  <span className="bg-orange-900/40 text-orange-400 px-4 py-2 rounded-full border border-orange-500/40 shadow-[0_0_10px_rgba(249,115,22,0.15)]">Field (1978)</span>
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
                    📝 Sample Question: "Discuss the role of the father in attachment." (12 marks)
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
              <div className="flex flex-col items-center justify-center h-full text-center relative">
                {/* Background glow effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-red-500 blur-[150px] opacity-15 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-rose-500 blur-[120px] opacity-10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="absolute inset-0 bg-red-500 blur-[80px] opacity-20 rounded-full"></div>
                  <div className="relative z-10 flex gap-4 p-6 glass-panel rounded-2xl">
                    <Bird size={isPresentation ? 64 : 48} className="text-red-400 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                    <Feather size={isPresentation ? 64 : 48} className="text-red-400 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  </div>
                </div>
                <h1 className={`font-black mb-4 bg-gradient-to-r from-red-400 via-red-300 to-rose-400 bg-clip-text text-transparent drop-shadow-lg ${isPresentation ? 'text-7xl' : 'text-5xl'}`}>
                  Animal Studies of Attachment
                </h1>
                <div className="h-1 w-64 bg-gradient-to-r from-transparent via-red-500 to-transparent mb-4 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                <p className={`text-red-400 max-w-2xl mb-8 tracking-widest uppercase font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                  Lorenz & Harlow
                </p>
                <div className={`flex flex-wrap justify-center gap-3 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                  <span className="bg-red-900/40 text-red-400 px-4 py-2 rounded-full border border-red-500/40 shadow-[0_0_10px_rgba(239,68,68,0.15)]">Imprinting & Critical Periods</span>
                  <span className="bg-red-900/40 text-red-400 px-4 py-2 rounded-full border border-red-500/40 shadow-[0_0_10px_rgba(239,68,68,0.15)]">Contact Comfort</span>
                  <span className="bg-red-900/40 text-red-400 px-4 py-2 rounded-full border border-red-500/40 shadow-[0_0_10px_rgba(239,68,68,0.15)]">Surrogate Mothers</span>
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
                    📝 Sample Question: "Outline and evaluate animal studies of attachment." (12 marks)
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
              <div className="flex flex-col items-center justify-center h-full text-center relative">
                {/* Background glow effects */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/20 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-500/20 rounded-full blur-[150px]"></div>
                
                <div className="flex items-center gap-4 mb-6 relative">
                  <div className="absolute inset-0 bg-yellow-500 blur-[100px] opacity-30 rounded-full"></div>
                  <div className="glass-panel p-4 rounded-2xl">
                    <BookOpen size={isPresentation ? 64 : 48} className="text-yellow-400 relative z-10" />
                  </div>
                  <div className="glass-panel p-4 rounded-2xl">
                    <Brain size={isPresentation ? 64 : 48} className="text-yellow-400 relative z-10" />
                  </div>
                </div>
                <h1 className={`font-black mb-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent text-neon-amber ${isPresentation ? 'text-7xl' : 'text-5xl'}`}>
                  Explanations of Attachment
                </h1>
                <div className={`h-1 w-64 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-4 shadow-[0_0_15px_rgba(234,179,8,0.5)]`}></div>
                <p className={`text-yellow-400 max-w-2xl mb-8 tracking-widest uppercase font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                  Learning Theory vs Bowlby
                </p>
                <div className={`flex flex-wrap justify-center gap-3 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                  <span className="bg-yellow-900/30 text-yellow-400 px-4 py-2 rounded-full border border-yellow-500/30 shadow-[0_0_10px_rgba(234,179,8,0.2)]">Classical & Operant Conditioning</span>
                  <span className="bg-yellow-900/30 text-yellow-400 px-4 py-2 rounded-full border border-yellow-500/30 shadow-[0_0_10px_rgba(234,179,8,0.2)]">Monotropic Theory</span>
                  <span className="bg-yellow-900/30 text-yellow-400 px-4 py-2 rounded-full border border-yellow-500/30 shadow-[0_0_10px_rgba(234,179,8,0.2)]">IWM & Social Releasers</span>
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
                    📝 Sample Question: "Outline and evaluate learning theory as an explanation of attachment." (12 marks)
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
              <div className="flex flex-col items-center justify-center h-full text-center relative">
                {/* Background glow effects */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/20 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-[150px]"></div>
                
                <div className="flex items-center gap-4 mb-6 relative">
                  <div className="absolute inset-0 bg-teal-500 blur-[100px] opacity-30 rounded-full"></div>
                  <div className="glass-panel p-4 rounded-2xl">
                    <Baby size={isPresentation ? 64 : 48} className="text-teal-400 relative z-10" />
                  </div>
                  <div className="glass-panel p-4 rounded-2xl">
                    <Heart size={isPresentation ? 64 : 48} className="text-teal-400 relative z-10" />
                  </div>
                </div>
                <h1 className={`font-black mb-4 bg-gradient-to-r from-teal-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent text-neon-cyan ${isPresentation ? 'text-7xl' : 'text-5xl'}`}>
                  Types of Attachment
                </h1>
                <div className={`h-1 w-64 bg-gradient-to-r from-transparent via-teal-500 to-transparent mb-4 shadow-[0_0_15px_rgba(20,184,166,0.5)]`}></div>
                <p className={`text-teal-400 max-w-2xl mb-8 tracking-widest uppercase font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                  Ainsworth's Strange Situation
                </p>
                <div className={`flex flex-wrap justify-center gap-3 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                  <span className="bg-teal-900/30 text-teal-400 px-4 py-2 rounded-full border border-teal-500/30 shadow-[0_0_10px_rgba(20,184,166,0.2)]">Secure, Avoidant & Resistant</span>
                  <span className="bg-teal-900/30 text-teal-400 px-4 py-2 rounded-full border border-teal-500/30 shadow-[0_0_10px_rgba(20,184,166,0.2)]">Ainsworth (1970)</span>
                  <span className="bg-teal-900/30 text-teal-400 px-4 py-2 rounded-full border border-teal-500/30 shadow-[0_0_10px_rgba(20,184,166,0.2)]">Attachment Styles</span>
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
                  <p className={`text-teal-300 font-semibold ${isPresentation ? 'text-lg' : 'text-base'}`}>
                    A controlled observation with 8 episodes of separation and reunion to assess attachment type
                  </p>
                </div>

                <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 ${isPresentation ? 'gap-4' : 'gap-3'}`}>
                  {[
                    { num: 1, desc: 'Mother & infant enter room', icon: '🚪' },
                    { num: 2, desc: 'Infant explores, mother passive', icon: '🧸' },
                    { num: 3, desc: 'Stranger enters, talks to mother', icon: '👤' },
                    { num: 4, desc: 'Mother leaves, stranger offers comfort', icon: '👋' },
                    { num: 5, desc: 'Mother returns, stranger leaves', icon: '👋' },
                    { num: 6, desc: 'Mother leaves, infant alone', icon: '😢' },
                    { num: 7, desc: 'Stranger enters, offers comfort', icon: '🤝' },
                    { num: 8, desc: 'Mother returns, stranger leaves', icon: '🤗' }
                  ].map((ep) => (
                    <div key={ep.num} className={`group bg-gradient-to-br from-teal-900/40 to-teal-800/10 rounded-xl border border-teal-500/30 hover:border-teal-400 shadow-lg hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 transform hover:scale-105 cursor-pointer ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`bg-teal-900/80 text-teal-300 font-black rounded-lg group-hover:bg-teal-700 transition-colors ${isPresentation ? 'px-3 py-1 text-xl' : 'px-2 py-1 text-lg'}`}>
                          {ep.num}
                        </span>
                        <span className={`text-gray-400 group-hover:text-teal-300 transition-colors ${isPresentation ? 'text-xl' : 'text-base'}`}>{ep.icon}</span>
                      </div>
                      <p className={`text-gray-300 group-hover:text-gray-100 transition-colors ${isPresentation ? 'text-sm' : 'text-xs'}`}>{ep.desc}</p>
                    </div>
                  ))}
                </div>

                <div className={`bg-gradient-to-br from-teal-900/30 to-teal-800/10 rounded-xl border-t-4 border-teal-500 shadow-xl ${isPresentation ? 'p-6' : 'p-4'}`}>
                  <h4 className={`text-teal-300 font-black mb-4 flex items-center gap-2 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                    🔍 Key Behaviours Observed:
                  </h4>
                  <div className={`grid grid-cols-1 md:grid-cols-3 gap-4`}>
                    <div className={`bg-teal-900/40 border border-teal-500/30 rounded-lg hover:border-teal-400 transition-colors ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <div className={`flex items-center gap-2 mb-2 ${isPresentation ? 'mb-3' : 'mb-2'}`}>
                        <span className={`text-teal-400 ${isPresentation ? 'text-2xl' : 'text-xl'}`}>⏱️</span>
                        <p className={`text-teal-300 font-bold ${isPresentation ? 'text-lg' : 'text-sm'}`}>Separation Anxiety</p>
                      </div>
                      <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>Distress level when caregiver leaves</p>
                    </div>
                    <div className={`bg-teal-900/40 border border-teal-500/30 rounded-lg hover:border-teal-400 transition-colors ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <div className={`flex items-center gap-2 mb-2 ${isPresentation ? 'mb-3' : 'mb-2'}`}>
                        <span className={`text-teal-400 ${isPresentation ? 'text-2xl' : 'text-xl'}`}>👤</span>
                        <p className={`text-teal-300 font-bold ${isPresentation ? 'text-lg' : 'text-sm'}`}>Stranger Anxiety</p>
                      </div>
                      <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>Response to unfamiliar adults</p>
                    </div>
                    <div className={`bg-teal-900/40 border border-teal-500/30 rounded-lg hover:border-teal-400 transition-colors ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <div className={`flex items-center gap-2 mb-2 ${isPresentation ? 'mb-3' : 'mb-2'}`}>
                        <span className={`text-teal-400 ${isPresentation ? 'text-2xl' : 'text-xl'}`}>🤗</span>
                        <p className={`text-teal-300 font-bold ${isPresentation ? 'text-lg' : 'text-sm'}`}>Reunion Behaviour</p>
                      </div>
                      <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>Response when caregiver returns</p>
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
                <div className={`group bg-gradient-to-br from-green-900/40 to-green-800/10 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] card-hover-glow flex flex-col ${isPresentation ? 'p-6' : 'p-4'}`}>
                  {/* Header with Circular Gauge */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className={`bg-green-900/60 text-green-400 font-bold rounded-lg inline-block shadow-[0_0_10px_rgba(34,197,94,0.3)] ${isPresentation ? 'px-3 py-1 text-lg' : 'px-2 py-1 text-sm'}`}>Type B</span>
                      <h3 className={`text-green-400 font-black mt-2 text-neon ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Secure</h3>
                    </div>
                    {/* Circular Progress Ring */}
                    <div className={`relative ${isPresentation ? 'w-24 h-24' : 'w-16 h-16'}`}>
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="50%"
                          cy="50%"
                          r="45%"
                          stroke="rgba(34, 197, 94, 0.2)"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="50%"
                          cy="50%"
                          r="45%"
                          stroke="url(#greenGradient)"
                          strokeWidth="8"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray="283"
                          strokeDashoffset="90"
                          className="transition-all duration-1000 ease-out"
                          style={{ filter: 'drop-shadow(0 0 6px rgba(34, 197, 94, 0.6))' }}
                        />
                        <defs>
                          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#22c55e" />
                            <stop offset="100%" stopColor="#4ade80" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`text-green-400 font-black ${isPresentation ? 'text-lg' : 'text-sm'}`}>68%</span>
                      </div>
                    </div>
                  </div>

                  <div className={`flex-grow ${isPresentation ? 'p-4 space-y-3' : 'p-3 space-y-2'} bg-green-900/30 rounded-lg border border-green-500/20 mb-4`}>
                    <h4 className={`text-green-300 font-bold ${isPresentation ? 'text-base' : 'text-sm'}`}>Key Behaviours:</h4>
                    <ul className={`text-gray-300 space-y-1 ${isPresentation ? 'text-base' : 'text-xs'}`}>
                      <li className="flex items-start gap-2"><span className="text-green-400 font-bold">✓</span> <span>Uses mother as secure base</span></li>
                      <li className="flex items-start gap-2"><span className="text-green-400 font-bold">✓</span> <span>Moderate separation distress</span></li>
                      <li className="flex items-start gap-2"><span className="text-green-400 font-bold">✓</span> <span>Enthusiastic at reunion</span></li>
                      <li className="flex items-start gap-2"><span className="text-green-400 font-bold">✓</span> <span>Easily comforted by caregiver</span></li>
                    </ul>
                  </div>

                  <div className={`bg-green-500/10 border border-green-500/30 rounded-lg group-hover:bg-green-500/20 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all ${isPresentation ? 'p-4' : 'p-3'}`}>
                    <p className={`text-green-300 font-semibold mb-1 ${isPresentation ? 'text-base' : 'text-sm'}`}>Caregiver Style:</p>
                    <p className={`text-green-200 font-bold ${isPresentation ? 'text-lg' : 'text-sm'}`}>Sensitive & Responsive</p>
                  </div>
                </div>

                {/* Insecure-Avoidant */}
                <div className={`group bg-gradient-to-br from-blue-900/40 to-blue-800/10 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] card-hover-glow flex flex-col ${isPresentation ? 'p-6' : 'p-4'}`}>
                  {/* Header with Circular Gauge */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className={`bg-blue-900/60 text-blue-400 font-bold rounded-lg inline-block shadow-[0_0_10px_rgba(59,130,246,0.3)] ${isPresentation ? 'px-3 py-1 text-lg' : 'px-2 py-1 text-sm'}`}>Type A</span>
                      <h3 className={`text-blue-400 font-black mt-2 ${isPresentation ? 'text-3xl' : 'text-xl'}`} style={{textShadow: '0 0 5px rgba(59, 130, 246, 0.5)'}}>Avoidant</h3>
                    </div>
                    {/* Circular Progress Ring */}
                    <div className={`relative ${isPresentation ? 'w-24 h-24' : 'w-16 h-16'}`}>
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="50%"
                          cy="50%"
                          r="45%"
                          stroke="rgba(59, 130, 246, 0.2)"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="50%"
                          cy="50%"
                          r="45%"
                          stroke="url(#blueGradient)"
                          strokeWidth="8"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray="283"
                          strokeDashoffset="218"
                          className="transition-all duration-1000 ease-out"
                          style={{ filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.6))' }}
                        />
                        <defs>
                          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#60a5fa" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`text-blue-400 font-black ${isPresentation ? 'text-lg' : 'text-sm'}`}>23%</span>
                      </div>
                    </div>
                  </div>

                  <div className={`flex-grow ${isPresentation ? 'p-4 space-y-3' : 'p-3 space-y-2'} bg-blue-900/30 rounded-lg border border-blue-500/20 mb-4`}>
                    <h4 className={`text-blue-300 font-bold ${isPresentation ? 'text-base' : 'text-sm'}`}>Key Behaviours:</h4>
                    <ul className={`text-gray-300 space-y-1 ${isPresentation ? 'text-base' : 'text-xs'}`}>
                      <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">⚠</span> <span>Explores independently</span></li>
                      <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">⚠</span> <span>Little separation distress</span></li>
                      <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">⚠</span> <span>Avoids mother at reunion</span></li>
                      <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">⚠</span> <span>Shows little emotion</span></li>
                    </ul>
                  </div>

                  <div className={`bg-blue-500/10 border border-blue-500/30 rounded-lg group-hover:bg-blue-500/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all ${isPresentation ? 'p-4' : 'p-3'}`}>
                    <p className={`text-blue-300 font-semibold mb-1 ${isPresentation ? 'text-base' : 'text-sm'}`}>Caregiver Style:</p>
                    <p className={`text-blue-200 font-bold ${isPresentation ? 'text-lg' : 'text-sm'}`}>Rejecting & Unresponsive</p>
                  </div>
                </div>

                {/* Insecure-Resistant */}
                <div className={`group bg-gradient-to-br from-amber-900/40 to-amber-800/10 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] card-hover-glow flex flex-col ${isPresentation ? 'p-6' : 'p-4'}`}>
                  {/* Header with Circular Gauge */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className={`bg-amber-900/60 text-amber-400 font-bold rounded-lg inline-block shadow-[0_0_10px_rgba(245,158,11,0.3)] ${isPresentation ? 'px-3 py-1 text-lg' : 'px-2 py-1 text-sm'}`}>Type C</span>
                      <h3 className={`text-amber-400 font-black mt-2 text-neon-amber ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Resistant</h3>
                    </div>
                    {/* Circular Progress Ring */}
                    <div className={`relative ${isPresentation ? 'w-24 h-24' : 'w-16 h-16'}`}>
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="50%"
                          cy="50%"
                          r="45%"
                          stroke="rgba(245, 158, 11, 0.2)"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="50%"
                          cy="50%"
                          r="45%"
                          stroke="url(#amberGradient)"
                          strokeWidth="8"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray="283"
                          strokeDashoffset="246"
                          className="transition-all duration-1000 ease-out"
                          style={{ filter: 'drop-shadow(0 0 6px rgba(245, 158, 11, 0.6))' }}
                        />
                        <defs>
                          <linearGradient id="amberGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f59e0b" />
                            <stop offset="100%" stopColor="#fbbf24" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`text-amber-400 font-black ${isPresentation ? 'text-lg' : 'text-sm'}`}>13%</span>
                      </div>
                    </div>
                  </div>

                  <div className={`flex-grow ${isPresentation ? 'p-4 space-y-3' : 'p-3 space-y-2'} bg-amber-900/30 rounded-lg border border-amber-500/20 mb-4`}>
                    <h4 className={`text-amber-300 font-bold ${isPresentation ? 'text-base' : 'text-sm'}`}>Key Behaviours:</h4>
                    <ul className={`text-gray-300 space-y-1 ${isPresentation ? 'text-base' : 'text-xs'}`}>
                      <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">⚠</span> <span>Reluctant to explore</span></li>
                      <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">⚠</span> <span>Extreme separation distress</span></li>
                      <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">⚠</span> <span>Seek-reject comfort cycle</span></li>
                      <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">⚠</span> <span>Hard to soothe</span></li>
                    </ul>
                  </div>

                  <div className={`bg-amber-500/10 border border-amber-500/30 rounded-lg group-hover:bg-amber-500/20 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all ${isPresentation ? 'p-4' : 'p-3'}`}>
                    <p className={`text-amber-300 font-semibold mb-1 ${isPresentation ? 'text-base' : 'text-sm'}`}>Caregiver Style:</p>
                    <p className={`text-amber-200 font-bold ${isPresentation ? 'text-lg' : 'text-sm'}`}>Inconsistent Responsiveness</p>
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
                    📝 Sample Question: "Describe and evaluate types of attachment." (12 marks)
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

    // Lesson 7: Cultural Variations & Maternal Deprivation
    if (currentLesson === 7) {
      switch (currentSlide) {
        case 0:
          return (
            <Slide isPresentation={isPresentation}>
              <div className="flex flex-col items-center justify-center h-full text-center relative">
                {/* Background glow effects */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-[150px]"></div>
                
                <div className="flex items-center gap-4 mb-6 relative">
                  <div className="absolute inset-0 bg-purple-500 blur-[100px] opacity-30 rounded-full"></div>
                  <div className="glass-panel p-4 rounded-2xl">
                    <Globe2 size={isPresentation ? 64 : 48} className="text-purple-300 relative z-10" />
                  </div>
                  <div className="glass-panel p-4 rounded-2xl">
                    <AlertTriangle size={isPresentation ? 64 : 48} className="text-purple-300 relative z-10" />
                  </div>
                </div>
                <h1 className={`font-black mb-4 bg-gradient-to-r from-purple-400 via-purple-300 to-pink-400 bg-clip-text text-transparent text-neon-pink ${isPresentation ? 'text-7xl' : 'text-5xl'}`}>
                  Cultural Variations & Maternal Deprivation
                </h1>
                <div className={`h-1 w-64 bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-4 shadow-[0_0_15px_rgba(168,85,247,0.5)]`}></div>
                <p className={`text-purple-400 max-w-2xl mb-8 tracking-widest uppercase font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                  Imposed Etics & Critical Periods
                </p>
                <div className={`flex flex-wrap justify-center gap-3 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                  <span className="bg-purple-900/30 text-purple-400 px-4 py-2 rounded-full border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]">van IJzendoorn & Kroonenberg</span>
                  <span className="bg-purple-900/30 text-purple-400 px-4 py-2 rounded-full border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]">Cultural Variation in Attachment</span>
                  <span className="bg-purple-900/30 text-purple-400 px-4 py-2 rounded-full border border-purple-500/30">Bowlby's Deprivation Hypothesis</span>
                </div>
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
              <DoNowQuiz questions={lesson7DoNow} isPresentation={isPresentation} />
            </Slide>
          );

        case 2:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: Objectives"
                title="Learning Goals"
                icon={Target}
                time="4 MINS"
                isPresentation={isPresentation}
              />
              <div className={`grid grid-cols-1 md:grid-cols-3 h-full ${isPresentation ? 'gap-8 p-8' : 'gap-5 p-5'}`}>
                <div className="bg-gray-800 rounded-xl border-t-4 border-purple-500 shadow-xl p-5">
                  <p className="text-purple-300 font-bold mb-2">AO1 Describe</p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Define cultural variation and imposed etic</li>
                    <li>• Summarise van IJzendoorn & Kroonenberg findings</li>
                    <li>• Outline Bowlby\'s maternal deprivation hypothesis</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-xl border-t-4 border-blue-500 shadow-xl p-5">
                  <p className="text-blue-300 font-bold mb-2">AO2 Apply</p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Interpret cross-cultural Strange Situation data</li>
                    <li>• Link deprivation theory to real scenarios</li>
                    <li>• Distinguish deprivation vs privation</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-xl border-t-4 border-green-500 shadow-xl p-5">
                  <p className="text-green-300 font-bold mb-2">AO3 Evaluate</p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Imposed etic and within-culture variation</li>
                    <li>• Flawed evidence in 44 thieves/Goldfarb</li>
                    <li>• Critical vs sensitive period debate</li>
                  </ul>
                </div>
              </div>
            </Slide>
          );

        case 3:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: Concept"
                title="van IJzendoorn & Kroonenberg"
                icon={Globe2}
                time="8 MINS"
                isPresentation={isPresentation}
              />
              <div className={`grid grid-cols-1 lg:grid-cols-2 h-full ${isPresentation ? 'gap-8 p-6' : 'gap-5 p-4'}`}>
                {/* Left: Study Overview Card */}
                <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-t-4 border-purple-500 shadow-2xl overflow-hidden flex flex-col ${isPresentation ? 'p-8' : 'p-6'}`}>
                  <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-4">
                    <div className="p-3 bg-purple-900/50 rounded-lg">
                      <Globe2 size={isPresentation ? 32 : 24} className="text-purple-400" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-purple-300 ${isPresentation ? 'text-2xl' : 'text-xl'}`}>Meta-Analysis</h3>
                      <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-xs'}`}>van IJzendoorn & Kroonenberg (1988)</p>
                    </div>
                  </div>

                  {/* Sample Stats */}
                  <div className={`grid grid-cols-2 gap-4 mb-6 ${isPresentation ? 'gap-6' : 'gap-4'}`}>
                    <div className="bg-purple-900/30 rounded-xl p-4 border border-purple-500/30">
                      <p className={`text-purple-400 font-bold mb-1 ${isPresentation ? 'text-4xl' : 'text-3xl'}`}>32</p>
                      <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>Studies</p>
                    </div>
                    <div className="bg-purple-900/30 rounded-xl p-4 border border-purple-500/30">
                      <p className={`text-purple-400 font-bold mb-1 ${isPresentation ? 'text-4xl' : 'text-3xl'}`}>8</p>
                      <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>Countries</p>
                    </div>
                    <div className="col-span-2 bg-purple-900/30 rounded-xl p-4 border border-purple-500/30">
                      <p className={`text-purple-400 font-bold mb-1 ${isPresentation ? 'text-4xl' : 'text-3xl'}`}>1,990</p>
                      <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>Total Infants Assessed</p>
                    </div>
                  </div>

                  {/* Key Finding */}
                  <div className={`bg-gradient-to-r from-green-900/40 to-green-800/20 border-l-4 border-green-500 rounded-r-xl ${isPresentation ? 'p-6' : 'p-4'}`}>
                    <p className={`text-green-300 font-bold mb-2 ${isPresentation ? 'text-xl' : 'text-base'}`}>🌍 Universal Norm</p>
                    <p className={`text-gray-300 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      Secure attachment was the <strong className="text-green-400">most common classification</strong> in every country sampled
                    </p>
                  </div>

                  {/* Critical Stat */}
                  <div className={`mt-6 bg-amber-900/20 border border-amber-500/40 rounded-xl ${isPresentation ? 'p-5' : 'p-4'}`}>
                    <p className={`text-amber-300 font-bold mb-1 ${isPresentation ? 'text-lg' : 'text-sm'}`}>⚠️ Critical Finding</p>
                    <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-xs'}`}>
                      Within-country variation was <strong className="text-amber-400">150% greater</strong> than between-country variation
                    </p>
                  </div>
                </div>

                {/* Right: Country Data Comparison */}
                <div className="flex flex-col gap-4">
                  {/* Country Cards */}
                  <div className={`bg-gray-800 rounded-xl border-t-4 border-blue-500 shadow-xl overflow-hidden ${isPresentation ? 'p-6' : 'p-4'}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className={`font-bold text-blue-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>🇬🇧 Great Britain</h4>
                        <p className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Highest secure proportion</p>
                      </div>
                      <div className={`text-right`}>
                        <p className={`text-green-400 font-black ${isPresentation ? 'text-5xl' : 'text-3xl'}`}>75%</p>
                        <p className={`text-gray-500 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Secure</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className={`bg-green-900/30 rounded-lg ${isPresentation ? 'p-3' : 'p-2'}`}>
                        <p className={`text-green-400 font-bold ${isPresentation ? 'text-xl' : 'text-base'}`}>75%</p>
                        <p className={`text-gray-400 ${isPresentation ? 'text-xs' : 'text-[10px]'}`}>Secure</p>
                      </div>
                      <div className={`bg-blue-900/30 rounded-lg ${isPresentation ? 'p-3' : 'p-2'}`}>
                        <p className={`text-blue-400 font-bold ${isPresentation ? 'text-xl' : 'text-base'}`}>22%</p>
                        <p className={`text-gray-400 ${isPresentation ? 'text-xs' : 'text-[10px]'}`}>Avoidant</p>
                      </div>
                      <div className={`bg-red-900/30 rounded-lg ${isPresentation ? 'p-3' : 'p-2'}`}>
                        <p className={`text-red-400 font-bold ${isPresentation ? 'text-xl' : 'text-base'}`}>3%</p>
                        <p className={`text-gray-400 ${isPresentation ? 'text-xs' : 'text-[10px]'}`}>Resistant</p>
                      </div>
                    </div>
                  </div>

                  <div className={`bg-gray-800 rounded-xl border-t-4 border-red-500 shadow-xl overflow-hidden ${isPresentation ? 'p-6' : 'p-4'}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className={`font-bold text-red-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>🇨🇳 China</h4>
                        <p className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Lowest secure proportion</p>
                      </div>
                      <div className={`text-right`}>
                        <p className={`text-amber-400 font-black ${isPresentation ? 'text-5xl' : 'text-3xl'}`}>50%</p>
                        <p className={`text-gray-500 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Secure</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className={`bg-green-900/30 rounded-lg ${isPresentation ? 'p-3' : 'p-2'}`}>
                        <p className={`text-green-400 font-bold ${isPresentation ? 'text-xl' : 'text-base'}`}>50%</p>
                        <p className={`text-gray-400 ${isPresentation ? 'text-xs' : 'text-[10px]'}`}>Secure</p>
                      </div>
                      <div className={`bg-blue-900/30 rounded-lg ${isPresentation ? 'p-3' : 'p-2'}`}>
                        <p className={`text-blue-400 font-bold ${isPresentation ? 'text-xl' : 'text-base'}`}>25%</p>
                        <p className={`text-gray-400 ${isPresentation ? 'text-xs' : 'text-[10px]'}`}>Avoidant</p>
                      </div>
                      <div className={`bg-red-900/30 rounded-lg ${isPresentation ? 'p-3' : 'p-2'}`}>
                        <p className={`text-red-400 font-bold ${isPresentation ? 'text-xl' : 'text-base'}`}>25%</p>
                        <p className={`text-gray-400 ${isPresentation ? 'text-xs' : 'text-[10px]'}`}>Resistant</p>
                      </div>
                    </div>
                  </div>

                  {/* Cultural Pattern Box */}
                  <div className={`bg-gradient-to-br from-purple-900/40 to-pink-900/20 border-2 border-purple-500/50 rounded-xl ${isPresentation ? 'p-6' : 'p-4'}`}>
                    <h4 className={`font-bold text-purple-300 mb-3 flex items-center gap-2 ${isPresentation ? 'text-lg' : 'text-base'}`}>
                      <Globe2 size={isPresentation ? 24 : 18} />
                      Cultural Patterns
                    </h4>
                    <ul className={`text-gray-300 space-y-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span><strong className="text-blue-300">Individualist cultures:</strong> Low resistant (&lt;14%)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span><strong className="text-red-300">Collectivist cultures:</strong> Higher resistant (25%+), lower avoidant</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span><strong className="text-purple-300">Imposed etic risk:</strong> Strange Situation may over-classify distress in proximity-focused cultures</span>
                      </li>
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
                phase="Phase 2: Concept"
                title="Contemporary Cross-Cultural Research"
                icon={BookOpen}
                time="6 MINS"
                isPresentation={isPresentation}
              />
              <div className={`h-full ${isPresentation ? 'p-6' : 'p-4'}`}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 h-full`}>
                  {/* Italy Study Card */}
                  <div className={`bg-gradient-to-br from-purple-900/40 via-gray-800 to-gray-900 rounded-2xl border-2 border-purple-500/40 shadow-2xl overflow-hidden flex flex-col ${isPresentation ? 'p-8' : 'p-6'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-16 h-16 rounded-full bg-purple-900/50 flex items-center justify-center border-2 border-purple-500/50">
                        <span className="text-3xl">🇮🇹</span>
                      </div>
                      <div>
                        <h3 className={`font-black text-purple-200 ${isPresentation ? 'text-2xl' : 'text-xl'}`}>Italy</h3>
                        <p className={`text-purple-400 ${isPresentation ? 'text-base' : 'text-sm'}`}>Simonelli et al. (2014)</p>
                      </div>
                    </div>

                    <div className={`bg-gray-900/60 rounded-xl border border-purple-500/30 mb-4 ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className={`text-purple-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Sample Size</p>
                          <p className={`text-white font-bold ${isPresentation ? 'text-3xl' : 'text-2xl'}`}>76</p>
                        </div>
                        <div>
                          <p className={`text-purple-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Age</p>
                          <p className={`text-white font-bold ${isPresentation ? 'text-3xl' : 'text-2xl'}`}>12m</p>
                        </div>
                      </div>
                      
                      {/* Attachment Distribution */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>Secure</span>
                          <span className={`text-green-400 font-bold ${isPresentation ? 'text-xl' : 'text-lg'}`}>50%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '50%'}}></div>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <span className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>Avoidant</span>
                          <span className={`text-blue-400 font-bold ${isPresentation ? 'text-xl' : 'text-lg'}`}>36%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '36%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className={`bg-gradient-to-r from-blue-900/30 to-blue-800/10 border-l-4 border-blue-500 rounded-r-xl flex-grow ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <p className={`text-blue-300 font-bold mb-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>👩‍💼 Interpretation</p>
                      <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                        Higher avoidant rates linked to <strong className="text-blue-400">working mothers</strong> and increased use of <strong className="text-blue-400">professional childcare</strong>
                      </p>
                    </div>
                  </div>

                  {/* Korea Study Card */}
                  <div className={`bg-gradient-to-br from-blue-900/40 via-gray-800 to-gray-900 rounded-2xl border-2 border-blue-500/40 shadow-2xl overflow-hidden flex flex-col ${isPresentation ? 'p-8' : 'p-6'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-16 h-16 rounded-full bg-blue-900/50 flex items-center justify-center border-2 border-blue-500/50">
                        <span className="text-3xl">🇰🇷</span>
                      </div>
                      <div>
                        <h3 className={`font-black text-blue-200 ${isPresentation ? 'text-2xl' : 'text-xl'}`}>Korea</h3>
                        <p className={`text-blue-400 ${isPresentation ? 'text-base' : 'text-sm'}`}>Jin et al. (2012)</p>
                      </div>
                    </div>

                    <div className={`bg-gray-900/60 rounded-xl border border-blue-500/30 mb-4 ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className={`text-blue-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Sample Size</p>
                          <p className={`text-white font-bold ${isPresentation ? 'text-3xl' : 'text-2xl'}`}>87</p>
                        </div>
                        <div>
                          <p className={`text-blue-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Pattern</p>
                          <p className={`text-white font-bold ${isPresentation ? 'text-xl' : 'text-base'}`}>🇯🇵 Similar</p>
                        </div>
                      </div>
                      
                      {/* Attachment Distribution */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>Secure (Most)</span>
                          <span className={`text-green-400 font-bold ${isPresentation ? 'text-xl' : 'text-lg'}`}>65%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '65%'}}></div>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <span className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>Resistant (Higher)</span>
                          <span className={`text-red-400 font-bold ${isPresentation ? 'text-xl' : 'text-lg'}`}>32%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{width: '32%'}}></div>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <span className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>Avoidant (Very Low)</span>
                          <span className={`text-blue-400 font-bold ${isPresentation ? 'text-xl' : 'text-lg'}`}>3%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '3%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className={`bg-gradient-to-r from-purple-900/30 to-purple-800/10 border-l-4 border-purple-500 rounded-r-xl flex-grow ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <p className={`text-purple-300 font-bold mb-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>🏯 Cultural Context</p>
                      <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                        Mirrors Japan with <strong className="text-purple-400">proximity-focused caregiving</strong> → higher resistant, very low avoidant pattern
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Takeaway Banner */}
                <div className={`mt-6 bg-gradient-to-r from-green-900/40 to-teal-900/20 border-2 border-green-500/50 rounded-2xl ${isPresentation ? 'p-6' : 'p-5'}`}>
                  <h4 className={`font-bold text-green-300 mb-3 flex items-center gap-2 ${isPresentation ? 'text-xl' : 'text-lg'}`}>
                    ✅ Key Takeaways
                  </h4>
                  <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                    <p className="text-gray-300"><span className="text-green-400 font-bold">•</span> Secure attachment remains <strong className="text-green-300">modal type</strong> across cultures</p>
                    <p className="text-gray-300"><span className="text-blue-400 font-bold">•</span> Cultural practices <strong className="text-blue-300">alter avoidant/resistant balance</strong></p>
                    <p className="text-gray-300"><span className="text-purple-400 font-bold">•</span> Avoid <strong className="text-purple-300">imposed etic</strong> — Strange Situation may misclassify in proximity cultures</p>
                  </div>
                </div>
              </div>
            </Slide>
          );

        case 5:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 3: Concept"
                title="Bowlby: Maternal Deprivation Hypothesis"
                icon={Shield}
                time="7 MINS"
                isPresentation={isPresentation}
              />
              <div className={`h-full flex flex-col ${isPresentation ? 'p-6' : 'p-4'}`}>
                {/* Timeline Header */}
                <div className={`bg-gradient-to-r from-purple-900/50 to-purple-800/20 rounded-2xl border-2 border-purple-500/50 mb-6 ${isPresentation ? 'p-6' : 'p-5'}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-purple-900/60 rounded-xl">
                      <Shield size={isPresentation ? 32 : 24} className="text-purple-400" />
                    </div>
                    <div>
                      <h3 className={`font-black text-purple-200 ${isPresentation ? 'text-3xl' : 'text-2xl'}`}>Critical Period Hypothesis</h3>
                      <p className={`text-purple-400 ${isPresentation ? 'text-lg' : 'text-base'}`}>Continuous care needed in early years</p>
                    </div>
                  </div>
                  
                  {/* Visual Timeline */}
                  <div className="relative">
                    <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-purple-600 to-red-600"></div>
                    <div className="relative flex justify-between items-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-green-600 border-4 border-gray-900 flex items-center justify-center mb-2 mx-auto relative z-10">
                          <span className={`text-white font-bold ${isPresentation ? 'text-xl' : 'text-base'}`}>0</span>
                        </div>
                        <p className={`text-green-300 font-semibold ${isPresentation ? 'text-base' : 'text-sm'}`}>Birth</p>
                        <p className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>✅ Optimal</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-amber-600 border-4 border-gray-900 flex items-center justify-center mb-2 mx-auto relative z-10">
                          <span className={`text-white font-bold ${isPresentation ? 'text-xl' : 'text-base'}`}>30m</span>
                        </div>
                        <p className={`text-amber-300 font-semibold ${isPresentation ? 'text-base' : 'text-sm'}`}>Critical Limit</p>
                        <p className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>⚠️ Risk increases</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-red-600 border-4 border-gray-900 flex items-center justify-center mb-2 mx-auto relative z-10">
                          <span className={`text-white font-bold ${isPresentation ? 'text-xl' : 'text-base'}`}>5y+</span>
                        </div>
                        <p className={`text-red-300 font-semibold ${isPresentation ? 'text-base' : 'text-sm'}`}>Beyond Period</p>
                        <p className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>❌ Severe impact</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Core Claims & Evidence Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow">
                  {/* Core Claims */}
                  <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-t-4 border-purple-500 shadow-2xl overflow-hidden ${isPresentation ? 'p-8' : 'p-6'}`}>
                    <h4 className={`font-bold text-purple-300 mb-4 flex items-center gap-2 ${isPresentation ? 'text-2xl' : 'text-xl'}`}>
                      📝 Core Claims
                    </h4>
                    <div className="space-y-4">
                      <div className={`bg-purple-900/30 rounded-xl border-l-4 border-purple-500 ${isPresentation ? 'p-5' : 'p-4'}`}>
                        <p className={`text-purple-300 font-bold mb-2 ${isPresentation ? 'text-lg' : 'text-base'}`}>⏰ Critical Period</p>
                        <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                          Up to ~30 months for continuous emotional care
                        </p>
                      </div>
                      <div className={`bg-red-900/30 rounded-xl border-l-4 border-red-500 ${isPresentation ? 'p-5' : 'p-4'}`}>
                        <p className={`text-red-300 font-bold mb-2 ${isPresentation ? 'text-lg' : 'text-base'}`}>🚨 Potential Outcomes</p>
                        <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                          Prolonged separation → low IQ, affectionless psychopathy
                        </p>
                      </div>
                      <div className={`bg-blue-900/30 rounded-xl border-l-4 border-blue-500 ${isPresentation ? 'p-5' : 'p-4'}`}>
                        <p className={`text-blue-300 font-bold mb-2 ${isPresentation ? 'text-lg' : 'text-base'}`}>🧠 Internal Working Model</p>
                        <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                          Mental template disrupted by prolonged loss of primary attachment figure
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Evidence Cards */}
                  <div className="space-y-4">
                    <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-t-4 border-amber-500 shadow-2xl overflow-hidden ${isPresentation ? 'p-6' : 'p-5'}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-amber-900/50 flex items-center justify-center">
                          <span className="text-2xl">👮</span>
                        </div>
                        <div>
                          <h5 className={`font-bold text-amber-300 ${isPresentation ? 'text-xl' : 'text-lg'}`}>44 Thieves Study</h5>
                          <p className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Bowlby (1944)</p>
                        </div>
                      </div>
                      <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                        Affectionless thieves often had <strong className="text-amber-400">prolonged early separations</strong> from primary caregiver
                      </p>
                    </div>

                    <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-t-4 border-blue-500 shadow-2xl overflow-hidden ${isPresentation ? 'p-6' : 'p-5'}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center">
                          <span className="text-2xl">🏛️</span>
                        </div>
                        <div>
                          <h5 className={`font-bold text-blue-300 ${isPresentation ? 'text-xl' : 'text-lg'}`}>Goldfarb Study</h5>
                          <p className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Orphanage vs Foster Care (1943)</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="bg-blue-900/30 rounded-lg p-3 text-center">
                          <p className={`text-blue-400 font-black ${isPresentation ? 'text-3xl' : 'text-2xl'}`}>68</p>
                          <p className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Orphanage IQ</p>
                        </div>
                        <div className="bg-green-900/30 rounded-lg p-3 text-center">
                          <p className={`text-green-400 font-black ${isPresentation ? 'text-3xl' : 'text-2xl'}`}>96</p>
                          <p className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Fostered IQ</p>
                        </div>
                      </div>
                      <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                        Institutional care linked to <strong className="text-blue-400">significant IQ deficit</strong>
                      </p>
                    </div>

                    <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-t-4 border-green-500 shadow-2xl overflow-hidden ${isPresentation ? 'p-6' : 'p-5'}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-green-900/50 flex items-center justify-center">
                          <span className="text-2xl">👶</span>
                        </div>
                        <div>
                          <h5 className={`font-bold text-green-300 ${isPresentation ? 'text-xl' : 'text-lg'}`}>Czech Twins</h5>
                          <p className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Counter-evidence</p>
                        </div>
                      </div>
                      <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                        Severe early privation but <strong className="text-green-400">full recovery</strong> with quality care → suggests <strong className="text-green-400">sensitive period</strong> not absolute critical period
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          );

        case 6:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 3: Evaluation"
                title="Evaluating the Maternal Deprivation Hypothesis"
                icon={Brain}
                time="6 MINS"
                isPresentation={isPresentation}
              />
              <div className={`h-full flex flex-col ${isPresentation ? 'p-6' : 'p-4'}`}>
                {/* Evaluation Header */}
                <div className={`bg-gradient-to-r from-purple-900/40 to-pink-900/20 rounded-2xl border-2 border-purple-500/50 mb-6 ${isPresentation ? 'p-5' : 'p-4'}`}>
                  <h3 className={`font-bold text-purple-200 text-center ${isPresentation ? 'text-2xl' : 'text-xl'}`}>
                    ⚖️ Critical Analysis: Is Bowlby's Hypothesis Valid?
                  </h3>
                </div>

                {/* Three-Column Critique Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-grow">
                  {/* Flawed Evidence */}
                  <div className={`bg-gradient-to-br from-red-900/40 via-gray-800 to-gray-900 rounded-2xl border-2 border-red-500/50 shadow-2xl overflow-hidden flex flex-col ${isPresentation ? 'p-6' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <div className="w-12 h-12 rounded-full bg-red-900/50 flex items-center justify-center">
                        <span className="text-2xl">❌</span>
                      </div>
                      <h4 className={`font-bold text-red-300 ${isPresentation ? 'text-xl' : 'text-lg'}`}>Flawed Evidence</h4>
                    </div>
                    
                    <div className="space-y-3 flex-grow">
                      <div className={`bg-red-900/20 border-l-4 border-red-500 rounded-r-lg ${isPresentation ? 'p-4' : 'p-3'}`}>
                        <p className={`text-red-300 font-semibold mb-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>🔬 Researcher Bias</p>
                        <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                          Bowlby <strong className="text-red-400">both assessed and interviewed</strong> the 44 thieves → high risk of confirmation bias
                        </p>
                      </div>

                      <div className={`bg-red-900/20 border-l-4 border-red-500 rounded-r-lg ${isPresentation ? 'p-4' : 'p-3'}`}>
                        <p className={`text-red-300 font-semibold mb-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>🔀 Confounds</p>
                        <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                          Goldfarb: <strong className="text-red-400">trauma + poor institutional care</strong> confounded — can't isolate deprivation as cause
                        </p>
                      </div>

                      <div className={`bg-red-900/20 border-l-4 border-red-500 rounded-r-lg ${isPresentation ? 'p-4' : 'p-3'}`}>
                        <p className={`text-red-300 font-semibold mb-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>🔁 Failed Replication</p>
                        <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                          Lewis (500 cases) <strong className="text-red-400">found no link</strong> to affectionless psychopathy
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Deprivation vs Privation */}
                  <div className={`bg-gradient-to-br from-blue-900/40 via-gray-800 to-gray-900 rounded-2xl border-2 border-blue-500/50 shadow-2xl overflow-hidden flex flex-col ${isPresentation ? 'p-6' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center">
                        <span className="text-2xl">🔄</span>
                      </div>
                      <h4 className={`font-bold text-blue-300 ${isPresentation ? 'text-xl' : 'text-lg'}`}>Conceptual Clarity</h4>
                    </div>

                    <div className={`bg-blue-900/30 rounded-xl border border-blue-500/40 mb-3 ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <p className={`text-blue-300 font-bold mb-2 ${isPresentation ? 'text-lg' : 'text-base'}`}>🧩 Rutter's Distinction</p>
                      <div className="space-y-3">
                        <div className={`bg-gray-900/50 rounded-lg ${isPresentation ? 'p-3' : 'p-2'}`}>
                          <p className={`text-cyan-400 font-semibold ${isPresentation ? 'text-base' : 'text-sm'}`}>Deprivation</p>
                          <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Loss <strong>after</strong> bond formed</p>
                        </div>
                        <div className="text-center text-gray-500">≠</div>
                        <div className={`bg-gray-900/50 rounded-lg ${isPresentation ? 'p-3' : 'p-2'}`}>
                          <p className={`text-purple-400 font-semibold ${isPresentation ? 'text-base' : 'text-sm'}`}>Privation</p>
                          <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}><strong>No</strong> attachment formed</p>
                        </div>
                      </div>
                    </div>

                    <div className={`bg-gradient-to-r from-blue-900/30 to-blue-800/10 border-l-4 border-blue-500 rounded-r-xl flex-grow ${isPresentation ? 'p-4' : 'p-3'}`}>
                      <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                        Severe outcomes often reflect <strong className="text-blue-400">privation</strong> (institutionalization) not deprivation → Bowlby <strong className="text-blue-400">overstated</strong> deprivation effects
                      </p>
                    </div>
                  </div>

                  {/* Critical vs Sensitive Period */}
                  <div className={`bg-gradient-to-br from-green-900/40 via-gray-800 to-gray-900 rounded-2xl border-2 border-green-500/50 shadow-2xl overflow-hidden flex flex-col ${isPresentation ? 'p-6' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <div className="w-12 h-12 rounded-full bg-green-900/50 flex items-center justify-center">
                        <span className="text-2xl">🕐</span>
                      </div>
                      <h4 className={`font-bold text-green-300 ${isPresentation ? 'text-xl' : 'text-lg'}`}>Period Type Debate</h4>
                    </div>

                    <div className="space-y-3 flex-grow">
                      <div className={`bg-amber-900/30 rounded-xl border border-amber-500/40 ${isPresentation ? 'p-4' : 'p-3'}`}>
                        <p className={`text-amber-300 font-bold mb-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>⏰ Critical Period</p>
                        <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                          Bowlby's claim: <strong className="text-amber-400">absolute window</strong> — damage after ~30m is irreversible
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="inline-block bg-gray-700 rounded-full px-4 py-1">
                          <span className={`text-gray-400 font-bold ${isPresentation ? 'text-base' : 'text-sm'}`}>vs.</span>
                        </div>
                      </div>

                      <div className={`bg-green-900/30 rounded-xl border border-green-500/40 ${isPresentation ? 'p-4' : 'p-3'}`}>
                        <p className={`text-green-300 font-bold mb-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>🌱 Sensitive Period</p>
                        <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                          Evidence suggests: <strong className="text-green-400">optimal window</strong> — recovery possible with quality later care
                        </p>
                      </div>
                    </div>

                    <div className={`mt-4 bg-gradient-to-r from-green-900/30 to-green-800/10 border-l-4 border-green-500 rounded-r-xl ${isPresentation ? 'p-4' : 'p-3'}`}>
                      <p className={`text-green-300 font-semibold mb-1 ${isPresentation ? 'text-sm' : 'text-xs'}`}>✅ Czech Twins Evidence</p>
                      <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                        Recovered with quality care → supports <strong className="text-green-400">sensitive</strong> not critical period
                      </p>
                    </div>

                    <div className={`mt-3 bg-blue-900/20 rounded-lg ${isPresentation ? 'p-3' : 'p-2'}`}>
                      <p className={`text-blue-300 font-semibold mb-1 ${isPresentation ? 'text-xs' : 'text-[10px]'}`}>🐀 Levy Rat Study</p>
                      <p className={`text-gray-300 ${isPresentation ? 'text-xs' : 'text-[10px]'}`}>
                        Animal evidence: short separations have <strong className="text-blue-400">social impacts</strong>
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
                phase="Phase 4: Application"
                title="Global Attachment Analyst"
                icon={Globe2}
                time="12 MINS"
                isPresentation={isPresentation}
              />
              <Lesson7Simulation isPresentation={isPresentation} />
            </Slide>
          );

        case 8:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 5: Check"
                title="Understanding Check"
                icon={Brain}
                time="6 MINS"
                isPresentation={isPresentation}
              />
              <UnderstandingCheck
                questions={[
                  { id: 1, type: 'scenario', question: 'Which country in van IJzendoorn & Kroonenberg showed the lowest secure proportion (~50%)?', options: [{ text: 'China', correct: true }, { text: 'Great Britain', correct: false }, { text: 'Germany', correct: false }, { text: 'Israel', correct: false }], feedback: 'China had ~50% secure, the lowest in the meta-analysis.' },
                  { id: 2, type: 'scenario', question: 'Simonelli et al. (2014) in Italy mainly found...', options: [{ text: 'More avoidant infants linked to working mothers and childcare', correct: true }, { text: 'More resistant infants due to co-sleeping', correct: false }, { text: 'No secure attachments at all', correct: false }, { text: 'Only Type D disorganised', correct: false }], feedback: 'Higher avoidant rates were attributed to increased maternal employment and childcare use.' },
                  { id: 3, type: 'scenario', question: 'What key criticism did Rutter raise about Bowlby\'s deprivation?', options: [{ text: 'He said attachment is impossible to study', correct: false }, { text: 'He argued Bowlby confused deprivation with privation', correct: true }, { text: 'He rejected critical periods entirely', correct: false }, { text: 'He said affectionless psychopathy is fictional', correct: false }], feedback: 'Rutter distinguished deprivation (loss) from privation (no attachment formed); severe outcomes often reflect privation.' },
                  { id: 4, type: 'scenario', question: 'What does a large within-country variation (150% greater) suggest?', options: [{ text: 'Culture has no effect', correct: false }, { text: 'Differences within cultures can be bigger than between countries', correct: true }, { text: 'Strange Situation is invalid everywhere', correct: false }, { text: 'Only resistant attachment exists', correct: false }], feedback: 'Samples within a country can vary widely; avoid over-generalising national averages.' },
                  { id: 5, type: 'scenario', question: 'Critical vs sensitive period debate was informed by which case?', options: [{ text: 'Czech twins recovering after severe early privation', correct: true }, { text: 'Harlow\'s monkeys choosing wire mother', correct: false }, { text: 'Meltzoff and Moore facial imitation', correct: false }, { text: 'Grossmann father play study', correct: false }], feedback: 'Czech twins recovered with high-quality care, suggesting a sensitive rather than fixed critical period.' }
                ]}
                themeColor="purple"
                isPresentation={isPresentation}
              />
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
                <div className={`bg-gradient-to-r from-purple-900/40 to-purple-800/20 border-l-4 border-purple-500 rounded-r-xl shadow-xl mb-6 ${isPresentation ? 'p-6' : 'p-4'}`}>
                  <p className={`text-purple-200 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                    📝 Sample Question: "Discuss cultural variations in attachment and evaluate Bowlby\'s maternal deprivation hypothesis." (12 marks)
                  </p>
                </div>

                {!showEssayPlan7 ? (
                  <div className="flex-grow flex items-center justify-center">
                    <button
                      onClick={() => setShowEssayPlan7(true)}
                      className={`group flex flex-col items-center gap-4 bg-gray-800 hover:bg-gray-700 border-2 border-dashed border-purple-500/50 hover:border-purple-400 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-purple-500/20 ${isPresentation ? 'px-16 py-12' : 'px-12 py-8'}`}
                    >
                      <div className={`rounded-full bg-purple-900/50 group-hover:bg-purple-800/60 transition-colors ${isPresentation ? 'p-6' : 'p-4'}`}>
                        <Eye size={isPresentation ? 48 : 32} className="text-purple-300 group-hover:text-purple-200 transition-colors" />
                      </div>
                      <span className={`text-purple-300 group-hover:text-purple-200 font-semibold transition-colors ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                        Click to Reveal Essay Plan
                      </span>
                      <span className={`text-gray-500 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        Try planning your answer first!
                      </span>
                    </button>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => setShowEssayPlan7(false)}
                      className={`self-end mb-3 flex items-center gap-2 text-gray-400 hover:text-purple-300 transition-colors ${isPresentation ? 'text-base' : 'text-sm'}`}
                    >
                      <EyeOff size={isPresentation ? 18 : 14} />
                      Hide Plan
                    </button>

                    <div className={`grid grid-cols-1 lg:grid-cols-2 flex-grow ${isPresentation ? 'gap-8' : 'gap-5'} animate-fadeIn`}>
                      <div className={`bg-gray-800 rounded-xl border-t-4 border-purple-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                        <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                          <span className={`bg-purple-900/60 text-purple-300 font-bold rounded-lg ${isPresentation ? 'px-4 py-2 text-xl' : 'px-3 py-1 text-sm'}`}>AO1</span>
                          <h4 className={`font-bold text-purple-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>Knowledge (6 marks)</h4>
                        </div>
                        <ul className={`text-gray-300 space-y-2 flex-grow ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                          <li>✓ Define cultural variation & imposed etic</li>
                          <li>✓ van IJzendoorn & Kroonenberg findings</li>
                          <li>✓ Examples: Japan/Korea vs Germany patterns</li>
                          <li>✓ Bowlby deprivation: critical period, outcomes</li>
                          <li>✓ 44 thieves + Goldfarb evidence</li>
                        </ul>
                      </div>

                      <div className={`bg-gray-800 rounded-xl border-t-4 border-green-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                        <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                          <span className={`bg-green-900/60 text-green-300 font-bold rounded-lg ${isPresentation ? 'px-4 py-2 text-xl' : 'px-3 py-1 text-sm'}`}>AO3</span>
                          <h4 className={`font-bold text-green-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>Evaluation (10 marks)</h4>
                        </div>
                        <ul className={`text-gray-300 space-y-2 flex-grow ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                          <li>✓ Secure norm supports universality</li>
                          <li>✓ Imposed etic & within-culture variation</li>
                          <li>✓ Flawed evidence + confounds (44 thieves/Goldfarb)</li>
                          <li>✓ Deprivation vs privation (Rutter)</li>
                          <li>✓ Critical vs sensitive period (Czech twins)</li>
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

    // Lesson 8: Romanian Orphan Studies & Later Relationships
    if (currentLesson === 8) {
      switch (currentSlide) {
        case 0:
          return (
            <Slide isPresentation={isPresentation}>
              <div className="flex flex-col items-center justify-center h-full text-center relative">
                {/* Background glow effects */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-slate-400/20 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-[150px]"></div>
                
                <div className="flex items-center gap-4 mb-6 relative">
                  <div className="absolute inset-0 bg-slate-400 blur-[100px] opacity-30 rounded-full"></div>
                  <div className="glass-panel p-4 rounded-2xl">
                    <Home size={isPresentation ? 64 : 48} className="text-slate-200 relative z-10" />
                  </div>
                  <div className="glass-panel p-4 rounded-2xl">
                    <Heart size={isPresentation ? 64 : 48} className="text-slate-300 relative z-10" />
                  </div>
                </div>
                <h1 className={`font-black mb-4 bg-gradient-to-r from-slate-300 via-slate-200 to-blue-300 bg-clip-text text-transparent ${isPresentation ? 'text-7xl' : 'text-5xl'}`}>
                  Romanian Orphan Studies & Later Relationships
                </h1>
                <div className={`h-1 w-64 bg-gradient-to-r from-transparent via-slate-400 to-transparent mb-4 shadow-[0_0_15px_rgba(148,163,184,0.5)]`}></div>
                <p className={`text-slate-400 max-w-2xl mb-8 tracking-widest uppercase font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                  Rutter & Deprivation vs Privation
                </p>
                <div className={`flex flex-wrap justify-center gap-3 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                  <span className="bg-slate-900/30 text-slate-300 px-4 py-2 rounded-full border border-slate-500/30 shadow-[0_0_10px_rgba(148,163,184,0.2)]">Profound Deprivation</span>
                  <span className="bg-slate-900/30 text-slate-300 px-4 py-2 rounded-full border border-slate-500/30 shadow-[0_0_10px_rgba(148,163,184,0.2)]">Sensitive vs Critical Periods</span>
                  <span className="bg-slate-900/30 text-slate-300 px-4 py-2 rounded-full border border-slate-500/30 shadow-[0_0_10px_rgba(148,163,184,0.2)]">Recovery & Resilience</span>
                </div>
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
              <DoNowQuiz questions={lesson8DoNow} isPresentation={isPresentation} />
            </Slide>
          );

        case 2:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: Objectives"
                title="Learning Goals"
                icon={Target}
                time="4 MINS"
                isPresentation={isPresentation}
              />
              <div className={`grid grid-cols-1 md:grid-cols-3 h-full ${isPresentation ? 'gap-8 p-8' : 'gap-5 p-5'}`}>
                <div className="bg-gray-800 rounded-xl border-t-4 border-slate-400 shadow-xl p-5">
                  <p className="text-slate-200 font-bold mb-2">AO1 Describe</p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Rutter ERA findings (IQ, disinhibited attachment)</li>
                    <li>• Zeanah (BEI-style) institutional findings</li>
                    <li>• Internal working model and later relationships</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-xl border-t-4 border-blue-500 shadow-xl p-5">
                  <p className="text-blue-300 font-bold mb-2">AO2 Apply</p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Predict outcomes by age of adoption</li>
                    <li>• Link attachment type to romantic patterns</li>
                    <li>• Use IWM to interpret case material</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-xl border-t-4 border-green-500 shadow-xl p-5">
                  <p className="text-green-300 font-bold mb-2">AO3 Evaluate</p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Real-world applications (key worker model)</li>
                    <li>• Confounds/attrition and cultural limits</li>
                    <li>• Probabilistic view of continuity vs determinism</li>
                  </ul>
                </div>
              </div>
            </Slide>
          );

        case 3:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: Concept"
                title="English & Romanian Adoptees (ERA) Study"
                icon={Shield}
                time="7 MINS"
                isPresentation={isPresentation}
              />
              <div className={`h-full flex flex-col ${isPresentation ? 'p-6' : 'p-4'}`}>
                {/* Study Header */}
                <div className={`bg-gradient-to-r from-slate-900/60 to-slate-800/30 rounded-2xl border-2 border-slate-400/50 mb-6 ${isPresentation ? 'p-6' : 'p-5'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-slate-900/60 rounded-xl">
                        <Shield size={isPresentation ? 32 : 24} className="text-slate-200" />
                      </div>
                      <div>
                        <h3 className={`font-black text-slate-100 ${isPresentation ? 'text-3xl' : 'text-2xl'}`}>Rutter et al.</h3>
                        <p className={`text-slate-400 ${isPresentation ? 'text-lg' : 'text-base'}`}>Longitudinal Natural Experiment</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-slate-300 font-bold ${isPresentation ? 'text-xl' : 'text-lg'}`}>Assessment Points</p>
                      <p className={`text-slate-400 ${isPresentation ? 'text-base' : 'text-sm'}`}>Ages: 4, 6, 11, 15</p>
                    </div>
                  </div>
                </div>

                {/* Adoption Timeline & Outcomes */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-grow">
                  {/* Group 1: Early Adoption */}
                  <div className={`bg-gradient-to-br from-green-900/40 via-gray-800 to-gray-900 rounded-2xl border-2 border-green-500/50 shadow-2xl overflow-hidden flex flex-col ${isPresentation ? 'p-6' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <div className="w-16 h-16 rounded-full bg-green-900/50 flex items-center justify-center border-2 border-green-500/50">
                        <span className={`text-white font-black ${isPresentation ? 'text-2xl' : 'text-xl'}`}>&lt;6m</span>
                      </div>
                      <div>
                        <h4 className={`font-bold text-green-300 ${isPresentation ? 'text-xl' : 'text-lg'}`}>Early Adoption</h4>
                        <p className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Before 6 months</p>
                      </div>
                    </div>

                    {/* IQ Outcome */}
                    <div className={`bg-gray-900/60 rounded-xl border border-green-500/30 mb-4 ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <p className={`text-green-300 font-semibold mb-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>📊 IQ at Age 11</p>
                      <div className="flex items-baseline gap-2">
                        <p className={`text-green-400 font-black ${isPresentation ? 'text-6xl' : 'text-5xl'}`}>102</p>
                        <p className={`text-gray-400 ${isPresentation ? 'text-lg' : 'text-base'}`}>Normal range</p>
                      </div>
                      <div className="mt-3 w-full bg-gray-700 rounded-full h-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{width: '102%'}}></div>
                      </div>
                    </div>

                    {/* Attachment Outcome */}
                    <div className={`bg-gradient-to-r from-green-900/30 to-green-800/10 border-l-4 border-green-500 rounded-r-xl flex-grow ${isPresentation ? 'p-4' : 'p-3'}`}>
                      <p className={`text-green-300 font-bold mb-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>✅ Attachment Quality</p>
                      <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                        <strong className="text-green-400">Rare</strong> disinhibited attachment — near-normal development
                      </p>
                    </div>
                  </div>

                  {/* Group 2: Mid Adoption */}
                  <div className={`bg-gradient-to-br from-amber-900/40 via-gray-800 to-gray-900 rounded-2xl border-2 border-amber-500/50 shadow-2xl overflow-hidden flex flex-col ${isPresentation ? 'p-6' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <div className="w-16 h-16 rounded-full bg-amber-900/50 flex items-center justify-center border-2 border-amber-500/50">
                        <span className={`text-white font-black ${isPresentation ? 'text-xl' : 'text-lg'}`}>6-24m</span>
                      </div>
                      <div>
                        <h4 className={`font-bold text-amber-300 ${isPresentation ? 'text-xl' : 'text-lg'}`}>Mid Adoption</h4>
                        <p className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>6 to 24 months</p>
                      </div>
                    </div>

                    {/* IQ Outcome */}
                    <div className={`bg-gray-900/60 rounded-xl border border-amber-500/30 mb-4 ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <p className={`text-amber-300 font-semibold mb-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>📊 IQ at Age 11</p>
                      <div className="flex items-baseline gap-2">
                        <p className={`text-amber-400 font-black ${isPresentation ? 'text-6xl' : 'text-5xl'}`}>86</p>
                        <p className={`text-gray-400 ${isPresentation ? 'text-lg' : 'text-base'}`}>Moderate lag</p>
                      </div>
                      <div className="mt-3 w-full bg-gray-700 rounded-full h-3">
                        <div className="bg-amber-500 h-3 rounded-full" style={{width: '86%'}}></div>
                      </div>
                    </div>

                    {/* Attachment Outcome */}
                    <div className={`bg-gradient-to-r from-amber-900/30 to-amber-800/10 border-l-4 border-amber-500 rounded-r-xl flex-grow ${isPresentation ? 'p-4' : 'p-3'}`}>
                      <p className={`text-amber-300 font-bold mb-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>⚠️ Attachment Quality</p>
                      <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                        <strong className="text-amber-400">Some</strong> disinhibited attachment — higher risk than early group
                      </p>
                    </div>
                  </div>

                  {/* Group 3: Late Adoption */}
                  <div className={`bg-gradient-to-br from-red-900/40 via-gray-800 to-gray-900 rounded-2xl border-2 border-red-500/50 shadow-2xl overflow-hidden flex flex-col ${isPresentation ? 'p-6' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <div className="w-16 h-16 rounded-full bg-red-900/50 flex items-center justify-center border-2 border-red-500/50">
                        <span className={`text-white font-black ${isPresentation ? 'text-xl' : 'text-lg'}`}>&gt;24m</span>
                      </div>
                      <div>
                        <h4 className={`font-bold text-red-300 ${isPresentation ? 'text-xl' : 'text-lg'}`}>Late Adoption</h4>
                        <p className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>After 24 months</p>
                      </div>
                    </div>

                    {/* IQ Outcome */}
                    <div className={`bg-gray-900/60 rounded-xl border border-red-500/30 mb-4 ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <p className={`text-red-300 font-semibold mb-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>📊 IQ at Age 11</p>
                      <div className="flex items-baseline gap-2">
                        <p className={`text-red-400 font-black ${isPresentation ? 'text-6xl' : 'text-5xl'}`}>77</p>
                        <p className={`text-gray-400 ${isPresentation ? 'text-lg' : 'text-base'}`}>Lower range</p>
                      </div>
                      <div className="mt-3 w-full bg-gray-700 rounded-full h-3">
                        <div className="bg-red-500 h-3 rounded-full" style={{width: '77%'}}></div>
                      </div>
                    </div>

                    {/* Attachment Outcome */}
                    <div className={`bg-gradient-to-r from-red-900/30 to-red-800/10 border-l-4 border-red-500 rounded-r-xl flex-grow ${isPresentation ? 'p-4' : 'p-3'}`}>
                      <p className={`text-red-300 font-bold mb-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>❌ Attachment Quality</p>
                      <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                        <strong className="text-red-400">Pronounced</strong> disinhibited attachment — significant challenges
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Conclusion Banner */}
                <div className={`mt-6 bg-gradient-to-r from-blue-900/40 to-cyan-900/20 border-2 border-blue-500/50 rounded-2xl ${isPresentation ? 'p-5' : 'p-4'}`}>
                  <h4 className={`font-bold text-blue-300 mb-2 flex items-center gap-2 ${isPresentation ? 'text-xl' : 'text-lg'}`}>
                    💡 Critical Insights
                  </h4>
                  <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                    <p className="text-gray-300"><span className="text-blue-400 font-bold">•</span> <strong className="text-blue-300">Timing matters:</strong> Earlier adoption = better outcomes</p>
                    <p className="text-gray-300"><span className="text-cyan-400 font-bold">•</span> <strong className="text-cyan-300">Recovery possible:</strong> Some catch-up even in late group</p>
                    <p className="text-gray-300"><span className="text-teal-400 font-bold">•</span> <strong className="text-teal-300">Sensitive period:</strong> Not absolute — plasticity exists</p>
                  </div>
                </div>
              </div>
            </Slide>
          );

        case 4:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 2: Concept"
                title="Bucharest Early Intervention (BEI) Project"
                icon={AlertTriangle}
                time="6 MINS"
                isPresentation={isPresentation}
              />
              <div className={`h-full flex flex-col ${isPresentation ? 'p-6' : 'p-4'}`}>
                {/* Study Header */}
                <div className={`bg-gradient-to-r from-slate-900/60 to-blue-900/30 rounded-2xl border-2 border-slate-400/50 mb-6 ${isPresentation ? 'p-6' : 'p-5'}`}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-900/60 rounded-xl">
                      <AlertTriangle size={isPresentation ? 32 : 24} className="text-slate-200" />
                    </div>
                    <div className="flex-grow">
                      <h3 className={`font-black text-slate-100 ${isPresentation ? 'text-3xl' : 'text-2xl'}`}>Zeanah et al.</h3>
                      <p className={`text-slate-400 ${isPresentation ? 'text-lg' : 'text-base'}`}>Institutional vs Family-Reared Children</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-slate-300 font-bold ${isPresentation ? 'text-2xl' : 'text-xl'}`}>145</p>
                      <p className={`text-slate-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Total Children</p>
                    </div>
                  </div>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow">
                  {/* Institutional Group */}
                  <div className={`bg-gradient-to-br from-red-900/40 via-gray-800 to-gray-900 rounded-2xl border-2 border-red-500/50 shadow-2xl overflow-hidden ${isPresentation ? 'p-8' : 'p-6'}`}>
                    <div className="flex items-center gap-3 mb-6 border-b border-gray-700 pb-4">
                      <div className="w-16 h-16 rounded-full bg-red-900/50 flex items-center justify-center border-2 border-red-500/50">
                        <span className="text-3xl">🏛️</span>
                      </div>
                      <div>
                        <h4 className={`font-bold text-red-300 ${isPresentation ? 'text-2xl' : 'text-xl'}`}>Institutional Care</h4>
                        <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-sm'}`}>n = 95 (ages 12-31 months)</p>
                      </div>
                    </div>

                    {/* Attachment Distribution Pie */}
                    <div className={`bg-gray-900/60 rounded-xl border border-red-500/30 mb-6 ${isPresentation ? 'p-6' : 'p-5'}`}>
                      <p className={`text-red-300 font-bold mb-4 ${isPresentation ? 'text-xl' : 'text-lg'}`}>🔴 Attachment Distribution</p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>Secure</span>
                          <span className={`text-green-400 font-bold ${isPresentation ? 'text-2xl' : 'text-xl'}`}>19%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-4">
                          <div className="bg-green-500 h-4 rounded-full" style={{width: '19%'}}></div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <span className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>Disorganised</span>
                          <span className={`text-red-400 font-bold ${isPresentation ? 'text-2xl' : 'text-xl'}`}>65%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-4">
                          <div className="bg-red-500 h-4 rounded-full" style={{width: '65%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className={`bg-gradient-to-r from-red-900/30 to-red-800/10 border-l-4 border-red-500 rounded-r-xl ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <p className={`text-red-300 font-bold mb-2 ${isPresentation ? 'text-lg' : 'text-base'}`}>⚠️ Disinhibited Attachment</p>
                      <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                        <strong className="text-red-400">High prevalence</strong> of indiscriminate friendliness and attention-seeking with strangers
                      </p>
                    </div>
                  </div>

                  {/* Control Group */}
                  <div className={`bg-gradient-to-br from-green-900/40 via-gray-800 to-gray-900 rounded-2xl border-2 border-green-500/50 shadow-2xl overflow-hidden ${isPresentation ? 'p-8' : 'p-6'}`}>
                    <div className="flex items-center gap-3 mb-6 border-b border-gray-700 pb-4">
                      <div className="w-16 h-16 rounded-full bg-green-900/50 flex items-center justify-center border-2 border-green-500/50">
                        <span className="text-3xl">🏠</span>
                      </div>
                      <div>
                        <h4 className={`font-bold text-green-300 ${isPresentation ? 'text-2xl' : 'text-xl'}`}>Family-Reared</h4>
                        <p className={`text-gray-400 ${isPresentation ? 'text-base' : 'text-sm'}`}>n = 50 (controls)</p>
                      </div>
                    </div>

                    {/* Attachment Distribution Pie */}
                    <div className={`bg-gray-900/60 rounded-xl border border-green-500/30 mb-6 ${isPresentation ? 'p-6' : 'p-5'}`}>
                      <p className={`text-green-300 font-bold mb-4 ${isPresentation ? 'text-xl' : 'text-lg'}`}>🟢 Attachment Distribution</p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>Secure</span>
                          <span className={`text-green-400 font-bold ${isPresentation ? 'text-2xl' : 'text-xl'}`}>74%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-4">
                          <div className="bg-green-500 h-4 rounded-full" style={{width: '74%'}}></div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <span className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>Disorganised</span>
                          <span className={`text-amber-400 font-bold ${isPresentation ? 'text-2xl' : 'text-xl'}`}>22%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-4">
                          <div className="bg-amber-500 h-4 rounded-full" style={{width: '22%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className={`bg-gradient-to-r from-green-900/30 to-green-800/10 border-l-4 border-green-500 rounded-r-xl ${isPresentation ? 'p-5' : 'p-4'}`}>
                      <p className={`text-green-300 font-bold mb-2 ${isPresentation ? 'text-lg' : 'text-base'}`}>✅ Typical Development</p>
                      <p className={`text-gray-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                        <strong className="text-green-400">Normal range</strong> of attachment classifications with secure as modal type
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Interpretation */}
                <div className={`mt-6 bg-gradient-to-r from-blue-900/40 to-purple-900/20 border-2 border-blue-500/50 rounded-2xl ${isPresentation ? 'p-6' : 'p-5'}`}>
                  <h4 className={`font-bold text-blue-300 mb-3 flex items-center gap-2 ${isPresentation ? 'text-xl' : 'text-lg'}`}>
                    🔍 Interpretation
                  </h4>
                  <p className={`text-gray-300 ${isPresentation ? 'text-lg' : 'text-base'}`}>
                    Findings demonstrate <strong className="text-blue-400">institution-specific effects</strong> on attachment quality. 
                    The high rate of disorganized attachment (65% vs 22%) and disinhibited attachment in the institutional group 
                    supports the role of <strong className="text-purple-400">early caregiving quality</strong> in attachment development.
                  </p>
                </div>
              </div>
            </Slide>
          );

        case 5:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 3: Evaluation"
                title="Evaluating Institutionalization Research"
                icon={Brain}
                time="6 MINS"
                isPresentation={isPresentation}
              />
              <div className={`h-full flex flex-col ${isPresentation ? 'p-6' : 'p-4'}`}>
                {/* Evaluation Header */}
                <div className={`bg-gradient-to-r from-slate-900/50 to-blue-900/20 rounded-2xl border-2 border-slate-400/50 mb-6 ${isPresentation ? 'p-5' : 'p-4'}`}>
                  <h3 className={`font-bold text-slate-100 text-center ${isPresentation ? 'text-2xl' : 'text-xl'}`}>
                    ⚖️ Critical Appraisal: ERA & BEI Studies
                  </h3>
                </div>

                {/* Strengths, Limitations, Interpretation Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-grow">
                  {/* Strengths */}
                  <div className={`bg-gradient-to-br from-green-900/40 via-gray-800 to-gray-900 rounded-2xl border-2 border-green-500/50 shadow-2xl overflow-hidden flex flex-col ${isPresentation ? 'p-6' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <div className="w-12 h-12 rounded-full bg-green-900/50 flex items-center justify-center">
                        <span className="text-2xl">✅</span>
                      </div>
                      <h4 className={`font-bold text-green-300 ${isPresentation ? 'text-xl' : 'text-lg'}`}>Strengths</h4>
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                      <div className={`bg-green-900/20 border-l-4 border-green-500 rounded-r-lg ${isPresentation ? 'p-4' : 'p-3'}`}>
                        <p className={`text-green-300 font-semibold mb-2 flex items-center gap-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                          <span>🌍</span> Real-World Impact
                        </p>
                        <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                          Findings led to <strong className="text-green-400">policy reforms</strong>: key worker model, avoidance of large rotating staff in care institutions
                        </p>
                      </div>

                      <div className={`bg-green-900/20 border-l-4 border-green-500 rounded-r-lg ${isPresentation ? 'p-4' : 'p-3'}`}>
                        <p className={`text-green-300 font-semibold mb-2 flex items-center gap-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                          <span>🧪</span> Natural Experiment
                        </p>
                        <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                          Clear timing of adoption groups allows causal inferences about <strong className="text-green-400">sensitive periods</strong>
                        </p>
                      </div>

                      <div className={`bg-green-900/20 border-l-4 border-green-500 rounded-r-lg ${isPresentation ? 'p-4' : 'p-3'}`}>
                        <p className={`text-green-300 font-semibold mb-2 flex items-center gap-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                          <span>📈</span> Longitudinal Design
                        </p>
                        <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                          Multiple assessment points (4, 6, 11, 15 years) track <strong className="text-green-400">developmental trajectories</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Limitations */}
                  <div className={`bg-gradient-to-br from-red-900/40 via-gray-800 to-gray-900 rounded-2xl border-2 border-red-500/50 shadow-2xl overflow-hidden flex flex-col ${isPresentation ? 'p-6' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <div className="w-12 h-12 rounded-full bg-red-900/50 flex items-center justify-center">
                        <span className="text-2xl">⚠️</span>
                      </div>
                      <h4 className={`font-bold text-red-300 ${isPresentation ? 'text-xl' : 'text-lg'}`}>Limitations</h4>
                    </div>

                    <div className="space-y-4 flex-grow">
                      <div className={`bg-red-900/20 border-l-4 border-red-500 rounded-r-lg ${isPresentation ? 'p-4' : 'p-3'}`}>
                        <p className={`text-red-300 font-semibold mb-2 flex items-center gap-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                          <span>🌎</span> Cultural Limits
                        </p>
                        <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                          Romanian context was <strong className="text-red-400">extreme</strong> (severe deprivation + malnutrition) — limits generalization to other care settings
                        </p>
                      </div>

                      <div className={`bg-red-900/20 border-l-4 border-red-500 rounded-r-lg ${isPresentation ? 'p-4' : 'p-3'}`}>
                        <p className={`text-red-300 font-semibold mb-2 flex items-center gap-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                          <span>🔀</span> Confounds
                        </p>
                        <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                          Cannot isolate attachment effects from <strong className="text-red-400">nutrition, medical care</strong>, and other deprivation factors
                        </p>
                      </div>

                      <div className={`bg-red-900/20 border-l-4 border-red-500 rounded-r-lg ${isPresentation ? 'p-4' : 'p-3'}`}>
                        <p className={`text-red-300 font-semibold mb-2 flex items-center gap-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                          <span>📉</span> Attrition
                        </p>
                        <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                          Longitudinal studies face <strong className="text-red-400">participant dropout</strong> — may bias results toward more stable adoptive families
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Interpretation */}
                  <div className={`bg-gradient-to-br from-blue-900/40 via-gray-800 to-gray-900 rounded-2xl border-2 border-blue-500/50 shadow-2xl overflow-hidden flex flex-col ${isPresentation ? 'p-6' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center">
                        <span className="text-2xl">🧠</span>
                      </div>
                      <h4 className={`font-bold text-blue-300 ${isPresentation ? 'text-xl' : 'text-lg'}`}>Interpretation</h4>
                    </div>

                    <div className="space-y-4 flex-grow">
                      <div className={`bg-blue-900/20 border-l-4 border-blue-500 rounded-r-lg ${isPresentation ? 'p-4' : 'p-3'}`}>
                        <p className={`text-blue-300 font-semibold mb-2 flex items-center gap-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                          <span>⏳</span> Sensitive Period
                        </p>
                        <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                          Evidence supports <strong className="text-blue-400">sensitive period</strong> (not absolute critical period) — recovery possible but <strong className="text-blue-400">timing matters</strong>
                        </p>
                      </div>

                      <div className={`bg-purple-900/20 border-l-4 border-purple-500 rounded-r-lg ${isPresentation ? 'p-4' : 'p-3'}`}>
                        <p className={`text-purple-300 font-semibold mb-2 flex items-center gap-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                          <span>🎲</span> Probabilistic View
                        </p>
                        <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                          Outcomes are <strong className="text-purple-400">probabilistic, not deterministic</strong> — early risk doesn't guarantee poor outcomes
                        </p>
                      </div>

                      <div className={`bg-teal-900/20 border-l-4 border-teal-500 rounded-r-lg ${isPresentation ? 'p-4' : 'p-3'}`}>
                        <p className={`text-teal-300 font-semibold mb-2 flex items-center gap-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                          <span>💚</span> Later Care Quality
                        </p>
                        <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                          High-quality adoptive care can promote <strong className="text-teal-400">significant recovery</strong> even after severe early privation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          );

        case 6:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 4: Application"
                title="Internal Working Models & Later Relationships"
                icon={Heart}
                time="8 MINS"
                isPresentation={isPresentation}
              />
              <div className={`h-full flex flex-col ${isPresentation ? 'p-6' : 'p-4'}`}>
                {/* IWM Concept Header */}
                <div className={`bg-gradient-to-r from-slate-900/60 to-pink-900/30 rounded-2xl border-2 border-pink-500/50 mb-6 ${isPresentation ? 'p-6' : 'p-5'}`}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-pink-900/50 rounded-xl">
                      <Heart size={isPresentation ? 32 : 24} className="text-pink-300" />
                    </div>
                    <div className="flex-grow">
                      <h3 className={`font-black text-pink-100 ${isPresentation ? 'text-3xl' : 'text-2xl'}`}>Internal Working Model (IWM)</h3>
                      <p className={`text-pink-300 ${isPresentation ? 'text-lg' : 'text-base'}`}>Mental representation of self, others, and relationships formed through early attachment experiences</p>
                    </div>
                  </div>
                </div>

                {/* Relationship Continuity Pathway */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow">
                  {/* Left: IWM Development Flow */}
                  <div className={`bg-gradient-to-br from-blue-900/40 via-gray-800 to-gray-900 rounded-2xl border-2 border-blue-500/50 shadow-2xl flex flex-col ${isPresentation ? 'p-6' : 'p-5'}`}>
                    <h4 className={`font-bold text-blue-300 mb-4 flex items-center gap-2 ${isPresentation ? 'text-xl' : 'text-lg'}`}>
                      <span>🧸</span> Continuity Hypothesis
                    </h4>

                    {/* Flow diagram */}
                    <div className="space-y-4 flex-grow">
                      {/* Stage 1: Early Attachment */}
                      <div className={`bg-gradient-to-r from-cyan-900/30 to-blue-900/20 border-2 border-cyan-500/50 rounded-xl ${isPresentation ? 'p-4' : 'p-3'}`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-cyan-500/30 flex items-center justify-center text-cyan-300 font-black">
                            1
                          </div>
                          <p className={`font-bold text-cyan-300 ${isPresentation ? 'text-lg' : 'text-base'}`}>👶 Early Attachment</p>
                        </div>
                        <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                          Caregiver responsiveness & availability during infancy
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex justify-center">
                        <div className="text-blue-400 text-3xl font-black">↓</div>
                      </div>

                      {/* Stage 2: IWM Formation */}
                      <div className={`bg-gradient-to-r from-purple-900/30 to-pink-900/20 border-2 border-purple-500/50 rounded-xl ${isPresentation ? 'p-4' : 'p-3'}`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-purple-500/30 flex items-center justify-center text-purple-300 font-black">
                            2
                          </div>
                          <p className={`font-bold text-purple-300 ${isPresentation ? 'text-lg' : 'text-base'}`}>🧠 IWM Formation</p>
                        </div>
                        <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                          Mental schema: "Am I worthy?" / "Are others trustworthy?"
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex justify-center">
                        <div className="text-pink-400 text-3xl font-black">↓</div>
                      </div>

                      {/* Stage 3: Later Relationships */}
                      <div className={`bg-gradient-to-r from-pink-900/30 to-red-900/20 border-2 border-pink-500/50 rounded-xl ${isPresentation ? 'p-4' : 'p-3'}`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-pink-500/30 flex items-center justify-center text-pink-300 font-black">
                            3
                          </div>
                          <p className={`font-bold text-pink-300 ${isPresentation ? 'text-lg' : 'text-base'}`}>💑 Later Relationships</p>
                        </div>
                        <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                          IWM shapes expectations & behaviors in adult romantic relationships
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Hazan & Shaver Evidence */}
                  <div className={`bg-gradient-to-br from-pink-900/40 via-gray-800 to-gray-900 rounded-2xl border-2 border-pink-500/50 shadow-2xl overflow-hidden ${isPresentation ? 'p-6' : 'p-5'}`}>
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                      <div className="w-12 h-12 rounded-full bg-pink-900/50 flex items-center justify-center">
                        <span className="text-2xl">📈</span>
                      </div>
                      <div>
                        <h4 className={`font-bold text-pink-300 ${isPresentation ? 'text-xl' : 'text-lg'}`}>Hazan & Shaver (1987)</h4>
                        <p className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>"Love Quiz" Study</p>
                      </div>
                    </div>

                    {/* Love Types Distribution */}
                    <div className="space-y-4">
                      <div className={`bg-green-900/20 border-l-4 border-green-500 rounded-r-xl ${isPresentation ? 'p-4' : 'p-3'}`}>
                        <div className="flex items-center justify-between mb-2">
                          <p className={`text-green-300 font-bold ${isPresentation ? 'text-lg' : 'text-base'}`}>💚 Secure Love</p>
                          <span className={`text-green-400 font-black ${isPresentation ? 'text-2xl' : 'text-xl'}`}>56%</span>
                        </div>
                        <p className={`text-gray-300 mb-2 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                          "I find it easy to get close to others"
                        </p>
                        <div className="w-full bg-gray-700 rounded-full h-3">
                          <div className="bg-green-500 h-3 rounded-full" style={{width: '56%'}}></div>
                        </div>
                      </div>

                      <div className={`bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl ${isPresentation ? 'p-4' : 'p-3'}`}>
                        <div className="flex items-center justify-between mb-2">
                          <p className={`text-amber-300 font-bold ${isPresentation ? 'text-lg' : 'text-base'}`}>💛 Avoidant Love</p>
                          <span className={`text-amber-400 font-black ${isPresentation ? 'text-2xl' : 'text-xl'}`}>25%</span>
                        </div>
                        <p className={`text-gray-300 mb-2 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                          "I'm uncomfortable being close to others"
                        </p>
                        <div className="w-full bg-gray-700 rounded-full h-3">
                          <div className="bg-amber-500 h-3 rounded-full" style={{width: '25%'}}></div>
                        </div>
                      </div>

                      <div className={`bg-red-900/20 border-l-4 border-red-500 rounded-r-xl ${isPresentation ? 'p-4' : 'p-3'}`}>
                        <div className="flex items-center justify-between mb-2">
                          <p className={`text-red-300 font-bold ${isPresentation ? 'text-lg' : 'text-base'}`}>❤️ Anxious Love</p>
                          <span className={`text-red-400 font-black ${isPresentation ? 'text-2xl' : 'text-xl'}`}>19%</span>
                        </div>
                        <p className={`text-gray-300 mb-2 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                          "I worry others don't really love me"
                        </p>
                        <div className="w-full bg-gray-700 rounded-full h-3">
                          <div className="bg-red-500 h-3 rounded-full" style={{width: '19%'}}></div>
                        </div>
                      </div>
                    </div>

                    {/* Key Finding */}
                    <div className={`mt-4 bg-gradient-to-r from-blue-900/30 to-purple-900/20 border-2 border-blue-500/50 rounded-xl ${isPresentation ? 'p-4' : 'p-3'}`}>
                      <p className={`text-blue-300 font-bold mb-2 flex items-center gap-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                        🔗 Key Finding
                      </p>
                      <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                        Distribution of adult love styles <strong className="text-blue-400">mirrors infant attachment types</strong>, supporting IWM continuity from early caregiving to adult romance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom: Mechanism Explanation */}
                <div className={`mt-6 bg-gradient-to-r from-purple-900/40 to-pink-900/20 border-2 border-purple-500/50 rounded-2xl ${isPresentation ? 'p-6' : 'p-5'}`}>
                  <h4 className={`font-bold text-purple-300 mb-3 flex items-center gap-2 ${isPresentation ? 'text-xl' : 'text-lg'}`}>
                    ⚙️ Mechanism: How IWM Shapes Relationships
                  </h4>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className={`bg-purple-900/20 rounded-lg ${isPresentation ? 'p-4' : 'p-3'}`}>
                      <p className={`text-purple-300 font-semibold mb-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>👁️ Perception Filter</p>
                      <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>IWM biases how we <strong>interpret</strong> partner's behaviors</p>
                    </div>
                    <div className={`bg-pink-900/20 rounded-lg ${isPresentation ? 'p-4' : 'p-3'}`}>
                      <p className={`text-pink-300 font-semibold mb-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>👣 Behavioral Script</p>
                      <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>IWM guides our <strong>reactions</strong> in intimacy & conflict</p>
                    </div>
                    <div className={`bg-blue-900/20 rounded-lg ${isPresentation ? 'p-4' : 'p-3'}`}>
                      <p className={`text-blue-300 font-semibold mb-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>🔄 Partner Selection</p>
                      <p className={`text-gray-300 ${isPresentation ? 'text-sm' : 'text-xs'}`}>IWM influences who we <strong>choose</strong> as romantic partners</p>
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
                phase="Phase 3: Evaluation"
                title="Evaluating Continuity"
                icon={Brain}
                time="5 MINS"
                isPresentation={isPresentation}
              />
              <div className={`grid grid-cols-1 lg:grid-cols-3 h-full ${isPresentation ? 'gap-8 p-8' : 'gap-5 p-5'}`}>
                <div className="bg-gray-800 rounded-xl border-t-4 border-green-500 shadow-xl p-5">
                  <h4 className="text-green-300 font-bold mb-2">Support</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Fearon & Roisman review: early attachment predicts later social/mental health</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-xl border-t-4 border-red-500 shadow-xl p-5">
                  <h4 className="text-red-300 font-bold mb-2">Challenges</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Retrospective self-report validity issues</li>
                    <li>• Confounds: parenting style, genetics</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-xl border-t-4 border-blue-500 shadow-xl p-5">
                  <h4 className="text-blue-300 font-bold mb-2">Interpretation</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Continuity is probabilistic, not destiny</li>
                    <li>• Early risk signals need for support, not determinism</li>
                  </ul>
                </div>
              </div>
            </Slide>
          );

        case 8:
          return (
            <Slide isPresentation={isPresentation}>
              <PhaseHeader
                phase="Phase 4: Application"
                title="Recovery & Relationships Lab"
                icon={Shield}
                time="12 MINS"
                isPresentation={isPresentation}
              />
              <Lesson8Simulation isPresentation={isPresentation} />
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
                <div className={`bg-gradient-to-r from-slate-900/60 to-slate-800/30 border-l-4 border-slate-400 rounded-r-xl shadow-xl mb-6 ${isPresentation ? 'p-6' : 'p-4'}`}>
                  <p className={`text-slate-100 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                    📝 Sample Question: "Discuss the effects of institutionalisation and the influence of early attachment on later relationships." (12 marks)
                  </p>
                </div>

                {!showEssayPlan8 ? (
                  <div className="flex-grow flex items-center justify-center">
                    <button
                      onClick={() => setShowEssayPlan8(true)}
                      className={`group flex flex-col items-center gap-4 bg-gray-800 hover:bg-gray-700 border-2 border-dashed border-slate-400/60 hover:border-slate-200 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-slate-300/20 ${isPresentation ? 'px-16 py-12' : 'px-12 py-8'}`}
                    >
                      <div className={`rounded-full bg-slate-900/60 group-hover:bg-slate-800/70 transition-colors ${isPresentation ? 'p-6' : 'p-4'}`}>
                        <Eye size={isPresentation ? 48 : 32} className="text-slate-100 group-hover:text-white transition-colors" />
                      </div>
                      <span className={`text-slate-100 font-semibold transition-colors ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                        Click to Reveal Essay Plan
                      </span>
                      <span className={`text-gray-500 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                        Try planning your answer first!
                      </span>
                    </button>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => setShowEssayPlan8(false)}
                      className={`self-end mb-3 flex items-center gap-2 text-gray-400 hover:text-slate-100 transition-colors ${isPresentation ? 'text-base' : 'text-sm'}`}
                    >
                      <EyeOff size={isPresentation ? 18 : 14} />
                      Hide Plan
                    </button>

                    <div className={`grid grid-cols-1 lg:grid-cols-2 flex-grow ${isPresentation ? 'gap-8' : 'gap-5'} animate-fadeIn`}>
                      <div className={`bg-gray-800 rounded-xl border-t-4 border-slate-400 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                        <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                          <span className={`bg-slate-900/60 text-slate-200 font-bold rounded-lg ${isPresentation ? 'px-4 py-2 text-xl' : 'px-3 py-1 text-sm'}`}>AO1</span>
                          <h4 className={`font-bold text-slate-200 ${isPresentation ? 'text-xl' : 'text-base'}`}>Knowledge (6 marks)</h4>
                        </div>
                        <ul className={`text-gray-300 space-y-2 flex-grow ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                          <li>✓ Rutter ERA: sample, timing, IQ/disinhibited findings</li>
                          <li>✓ Zeanah institutional findings (secure vs disorganised/disinhibited)</li>
                          <li>✓ Define disinhibited attachment</li>
                          <li>✓ Internal working model + Hazan & Shaver findings</li>
                        </ul>
                      </div>

                      <div className={`bg-gray-800 rounded-xl border-t-4 border-green-500 shadow-xl flex flex-col ${isPresentation ? 'p-8' : 'p-5'}`}>
                        <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                          <span className={`bg-green-900/60 text-green-300 font-bold rounded-lg ${isPresentation ? 'px-4 py-2 text-xl' : 'px-3 py-1 text-sm'}`}>AO3</span>
                          <h4 className={`font-bold text-green-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>Evaluation (10 marks)</h4>
                        </div>
                        <ul className={`text-gray-300 space-y-2 flex-grow ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                          <li>✓ Strengths: real-world reform, natural experiment</li>
                          <li>✓ Limits: Romanian context, confounds, attrition</li>
                          <li>✓ Sensitive period vs determinism; probabilistic continuity</li>
                          <li>✓ Validity issues in self-report/retrospective evidence for later relationships</li>
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
              const newState = !isPresentation;
              if (!newState) {
                // Exit presentation mode
                if (document.fullscreenElement) {
                  document.exitFullscreen().catch(() => {});
                }
              } else {
                // Enter presentation mode
                if (!document.fullscreenElement) {
                  document.documentElement.requestFullscreen().catch(() => {});
                }
                setSidebarOpen(false);
              }
              setIsPresentation(newState); 
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
