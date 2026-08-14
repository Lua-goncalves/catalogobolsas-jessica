import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export type LightboxItem = { type: "image" | "video"; src: string };

interface MediaLightboxProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: LightboxItem[];
  startIndex: number;
  title: string;
}

const MediaLightbox = ({
  open,
  onOpenChange,
  items,
  startIndex,
  title,
}: MediaLightboxProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] sm:max-w-3xl w-full bg-background/95 border-0 p-4 sm:p-6">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        {open && (
          <Carousel className="w-full" opts={{ startIndex, loop: true }}>
            <CarouselContent>
              {items.map((item, i) => (
                <CarouselItem key={i}>
                  <div className="flex items-center justify-center h-[70vh] sm:h-[75vh]">
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        className="max-h-full max-w-full object-contain rounded-lg"
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={`${title} - imagem ${i + 1}`}
                        className="max-h-full max-w-full object-contain rounded-lg"
                      />
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 sm:-left-12" />
            <CarouselNext className="right-1 sm:-right-12" />
          </Carousel>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MediaLightbox;
