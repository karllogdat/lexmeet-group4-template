import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LawOfficeCarousel({
  images,
  className,
  imageClassName,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  return (
    <div className={`relative embla ${className || ""}`}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((img, index) => (
            <div key={index} className="embla__slide">
              <img
                src={img}
                className={`w-full aspect-4/3 object-cover ${imageClassName}`}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 -translate-y-1/2 left-4 bg-g4-700 text-white rounded-full p-2 embla__prev"
        onClick={goToPrev}
      >
        <ChevronLeft />
      </button>
      <button
        className="absolute top-1/2 -translate-y-1/2 right-4 bg-g4-700 text-white rounded-full p-2 embla__prev"
        onClick={goToNext}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
