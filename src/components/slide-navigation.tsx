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
      {/* floating side arrows */}
      <div className="hidden md:flex fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
        <button aria-label="previous" onClick={onPrevious} className="floating-arrow bg-white/90 dark:bg-black/60 w-12 h-12 rounded-full flex items-center justify-center shadow-lg disabled:opacity-40 disabled:pointer-events-none">
          <ChevronLeft className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
      <div className="hidden md:flex fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
        <button aria-label="next" onClick={onNext} className="floating-arrow bg-white/90 dark:bg-black/60 w-12 h-12 rounded-full flex items-center justify-center shadow-lg disabled:opacity-40 disabled:pointer-events-none">
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* compact bottom bar for mobile and progress */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30 w-[min(94%,820px)] bg-background/85 backdrop-blur-sm border border-white/6 rounded-full px-4 py-3 flex items-center gap-4">
        <button onClick={onPrevious} aria-label="previous" className="px-3 py-2 rounded-full bg-primary/10 text-primary-700 hover:bg-primary/20 disabled:opacity-40 disabled:pointer-events-none">
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex-1">
          <Progress value={progress} className="h-2 rounded-full" />
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>Слайд {currentSlide + 1}</span>
            <span>{totalSlides}</span>
          </div>
        </div>

        <button onClick={onNext} aria-label="next" className="px-3 py-2 rounded-full bg-primary/10 text-primary-700 hover:bg-primary/20 disabled:opacity-40 disabled:pointer-events-none">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </>
  );
}