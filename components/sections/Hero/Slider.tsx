import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Slider = () => {
  return (
    <Carousel>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1 relative z-0">
              <img
                src="/slide.jpg"
                alt="img"
                className="w-full h-[432px] object-cover rounded-md"
              />
              <p className="font-semibold text-2xl absolute z-10 left-8 bottom-8 bg-black bg-opacity-50 text-white rounded-tr-lg  py-2 px-4 max-w-lg">
                Купуйте будь-яке крісло або диван і отримайте подушку у
                подарунок
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2" />
      <CarouselNext className="absolute right-2" />
    </Carousel>
  );
};
