import React from 'react';
import { LucideIcon, Clock } from 'lucide-react';

export interface PhaseHeaderProps {
  phase: string;
  title: string;
  icon: LucideIcon;
  time?: string;
  isPresentation: boolean;
}

const PhaseHeader: React.FC<PhaseHeaderProps> = ({ phase, title, icon: Icon, time, isPresentation }) => (
  <div className={`flex items-center justify-between border-b border-gray-700 transition-all ${isPresentation ? 'mb-6 pb-3' : 'mb-6 pb-4'}`}>
    <div className="flex items-center gap-4">
      <div className={`rounded-xl border border-cyan-500/40 transition-all shadow-lg shadow-cyan-500/10 ${isPresentation ? 'p-3 bg-cyan-900/50' : 'p-3 bg-cyan-900/30'}`}>
        <Icon size={isPresentation ? 40 : 28} className="text-cyan-400" />
      </div>
      <div>
        <h4 className={`font-bold text-cyan-400 uppercase tracking-widest transition-all ${isPresentation ? 'text-base mb-1' : 'text-xs mb-0.5'}`}>{phase}</h4>
        <h2 className={`font-bold text-gray-100 transition-all ${isPresentation ? 'text-5xl' : 'text-3xl'}`}>{title}</h2>
      </div>
    </div>
    {time && (
      <div className={`flex items-center gap-2 text-cyan-500 font-mono bg-cyan-900/20 rounded-full border border-cyan-500/30 transition-all ${isPresentation ? 'text-lg px-4 py-2' : 'text-xs px-3 py-1'}`}>
        <Clock size={isPresentation ? 18 : 12} /> {time}
      </div>
    )}
  </div>
);

export default PhaseHeader;
