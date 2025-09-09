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
        <button onClick={onPrevious} aria-label="previous" className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white text-muted-foreground dark:bg-black/70 shadow-sm border border-white/6">
          <ChevronLeft className="w-4 h-4 text-muted-foreground" />
          <span className="hidden md:inline">Назад</span>
        </button>

        <div className="flex-1 px-2">
          <div>
            <div className="w-full bg-white/10 dark:bg-black/20 rounded-full h-3">
              <div style={{ width: `${progress}%` }} className="h-3 bg-primary rounded-full transition-all duration-300" />
            </div>
            <div className="flex justify-center text-sm font-medium text-muted-foreground mt-2">
              Слайд {currentSlide + 1} из {totalSlides}
            </div>
          </div>
        </div>

        <button onClick={onNext} aria-label="next" className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white text-muted-foreground dark:bg-black/70 shadow-sm border border-white/6">
          <span className="hidden md:inline">Далее</span>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </>
  );
}