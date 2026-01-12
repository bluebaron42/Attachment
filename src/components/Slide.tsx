import React from 'react';

export interface SlideProps {
  isPresentation: boolean;
  children: React.ReactNode;
}

export default function Slide({ isPresentation, children }: SlideProps) {
  return (
    <div className={`
      w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black
      flex flex-col items-center justify-center
      ${isPresentation ? 'overflow-hidden' : 'overflow-auto'}
      transition-all duration-300
    `}>
      <div className={`
        w-full h-full
        ${isPresentation ? 'p-12' : 'p-8'}
        flex items-center justify-center
      `}>
        {children}
      </div>
    </div>
  );
}
