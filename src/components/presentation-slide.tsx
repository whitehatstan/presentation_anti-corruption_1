import { ReactNode, useEffect, useState } from 'react';

interface PresentationSlideProps {
  children: ReactNode;
  className?: string;
  // allow passing key in JSX without type error
  key?: string;
}

export function PresentationSlide({ children, className = "" }: PresentationSlideProps) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`min-h-screen p-8 flex flex-col justify-center relative overflow-hidden ${className}`}>
      {/* decorative blurred blobs */}
      <div className="pointer-events-none absolute -left-40 -top-40 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-300 via-indigo-300 to-transparent opacity-40 blur-3xl animate-[spin_20s_linear_infinite]" />
      <div className="pointer-events-none absolute -right-52 bottom-[-8rem] w-80 h-80 rounded-full bg-gradient-to-br from-amber-200 via-pink-200 to-transparent opacity-30 blur-2xl" />

      <div className="max-w-4xl mx-auto">
        <div
          className="slide-inner bg-white/60 dark:bg-black/40 backdrop-blur-md rounded-2xl p-8 shadow-2xl ring-1 ring-white/30"
          style={{
            transform: entered ? 'translateY(0px) scale(1)' : 'translateY(14px) scale(.995)',
            opacity: entered ? 1 : 0,
            transition: 'opacity 520ms cubic-bezier(.2,.9,.2,1), transform 520ms cubic-bezier(.2,.9,.2,1)'
          }}
        >
          {/* local styles for portraits and small polish */}
          <style>{`
            .slide-inner img.portrait { border-radius: 0.75rem; box-shadow: 0 10px 30px rgba(2,6,23,0.35); border: 2px solid rgba(255,255,255,0.08); object-fit: cover; }
            .floating-arrow { transition: transform .18s ease, box-shadow .18s ease; }
            .floating-arrow:hover { transform: translateY(-4px) scale(1.03); box-shadow: 0 8px 24px rgba(2,6,23,0.35); }
            @keyframes spin { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
          `}</style>

          {children}
        </div>
      </div>
    </div>
  );
}