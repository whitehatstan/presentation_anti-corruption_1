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
      {/* floating side arrows (always visible, larger for touch) */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40">
        <button aria-label="previous" onClick={onPrevious} className="floating-arrow bg-white dark:bg-black w-14 h-14 rounded-full flex items-center justify-center shadow-2xl disabled:opacity-40 disabled:pointer-events-none ring-2 ring-white/80 dark:ring-black/60">
          <ChevronLeft className="w-6 h-6 text-primary-700 dark:text-primary-300" />
        </button>
      </div>
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
        <button aria-label="next" onClick={onNext} className="floating-arrow bg-white dark:bg-black w-14 h-14 rounded-full flex items-center justify-center shadow-2xl disabled:opacity-40 disabled:pointer-events-none ring-2 ring-white/80 dark:ring-black/60">
          <ChevronRight className="w-6 h-6 text-primary-700 dark:text-primary-300" />
        </button>
      </div>

      {/* compact bottom bar for mobile and progress */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30 w-[min(96%,920px)] bg-background/90 backdrop-blur-md border border-white/8 rounded-xl px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-3">
          <button onClick={onPrevious} aria-label="previous" className="px-3 py-2 rounded-md bg-primary text-white hover:bg-primary/90 disabled:opacity-40 disabled:pointer-events-none shadow-md">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="text-sm font-medium">{currentSlide + 1} / {totalSlides}</div>
        </div>

        <div className="flex-1 px-2">
          <Progress value={progress} className="h-3 rounded-full" />
        </div>

        <div className="flex items-center gap-3">
          <div className="text-sm text-muted-foreground">Пройдено {(progress).toFixed(0)}%</div>
          <button onClick={onNext} aria-label="next" className="px-3 py-2 rounded-md bg-primary text-white hover:bg-primary/90 disabled:opacity-40 disabled:pointer-events-none shadow-md">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
}