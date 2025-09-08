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
        {children}
      </div>
    </div>
  );
}