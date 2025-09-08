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
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t p-4">
      <div className="max-w-4xl mx-auto flex items-center gap-4">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onPrevious}
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Назад
        </Button>
        
        <div className="flex-1">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-2">
            <span className="text-sm text-muted-foreground">
              Слайд {currentSlide + 1} из {totalSlides}
            </span>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
        >
          Далее
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}