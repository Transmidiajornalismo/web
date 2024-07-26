import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import profile from "../../public/images/image.jpg";
import { Badge } from "@/components/ui/badge";

const SlideContent = () => {
  return (
    <CarouselItem className="flex justify-center">
      <Card>
        <Badge
          className="top-5 left-10 min-w-[156px] justify-center text-base"
          variant="secondary"
        >
          CATEGORIA
        </Badge>
        <CardContent className="flex bg-gray/90 flex-col aspect-square items-center justify-center p-0">
          <Image
            className="rounded-lg"
            src={profile}
            alt="Imagem"
            width={432}
          />
          <div className="flex justify-start flex-col pl-3 w-full">
            <h2 className="text-2xl">Nathally Souza</h2>
            <p className="text-xs">Jornalista e desenvolvedora</p>
          </div>
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default function Home() {
  return (
    <div className="flex justify-center items-center px-20 py-5">
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <SlideContent key={index} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-black" />
        <CarouselNext className="text-black" />
      </Carousel>
    </div>
  );
}
