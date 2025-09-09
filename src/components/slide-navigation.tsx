import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function SlideNavigation({ currentSlide, totalSlides, onPrevious, onNext }: SlideNavigationProps) {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <>
  {/* bottom compact controls: prev / progress / next */}

      {/* compact bottom bar for mobile and progress */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30 w-[min(96%,920px)] bg-background/95 backdrop-blur-sm border border-white/8 rounded-full px-3 py-2 flex items-center gap-3">
        <button onClick={onPrevious} aria-label="previous" className="flex items-center gap-2 px-3 py-2 rounded-full bg-white text-primary-700 dark:bg-black dark:text-primary-300 shadow-md disabled:opacity-40 disabled:pointer-events-none">
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex-1 px-2">
          <div className="w-full bg-white/10 dark:bg-black/20 rounded-full h-2">
            <div style={{ width: `${progress}%` }} className="h-2 bg-primary rounded-full transition-all duration-300" />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>Слайд {currentSlide + 1}</span>
            <span>из {totalSlides}</span>
          </div>
        </div>

        <button onClick={onNext} aria-label="next" className="flex items-center gap-2 px-3 py-2 rounded-full bg-white text-primary-700 dark:bg-black dark:text-primary-300 shadow-md disabled:opacity-40 disabled:pointer-events-none">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}