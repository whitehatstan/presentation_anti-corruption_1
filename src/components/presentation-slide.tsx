import { ReactNode } from 'react';

interface PresentationSlideProps {
  children: ReactNode;
  className?: string;
  // allow passing key in JSX without type error
  key?: string;
}

export function PresentationSlide({ children, className = "" }: PresentationSlideProps) {
  return (
    <div className={`min-h-screen p-8 flex flex-col justify-center ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/60 dark:bg-black/40 backdrop-blur-md rounded-2xl p-8 shadow-2xl ring-1 ring-white/30 transition-transform duration-300 hover:scale-[1.01]">
          {children}
        </div>
      </div>
    </div>
  );
}