import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface PhaseHeaderProps {
  phase: string;
  title: string;
  icon: LucideIcon;
  time: string;
  isPresentation: boolean;
}

export default function PhaseHeader({ phase, title, icon: Icon, time, isPresentation }: PhaseHeaderProps) {
  return (
    <div className={`w-full mb-8 flex items-center gap-6 ${isPresentation ? 'mb-12' : ''}`}>
      <div className={`${isPresentation ? 'p-6' : 'p-4'} bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl border border-gray-600`}>
        <Icon size={isPresentation ? 64 : 40} className="text-blue-400" />
      </div>
      <div>
        <p className={`text-gray-400 font-semibold tracking-wide ${isPresentation ? 'text-xl' : 'text-sm'}`}>{phase}</p>
        <h2 className={`font-bold text-white ${isPresentation ? 'text-5xl' : 'text-3xl'}`}>{title}</h2>
        <p className={`text-gray-500 ${isPresentation ? 'text-lg' : 'text-xs'}`}>{time}</p>
      </div>
    </div>
  );
}
