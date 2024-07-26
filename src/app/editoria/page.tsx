import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import profile from "../../../public/images/image.jpg";

const CardNews = () => {
  return (
    <Card className="my-10 md:max-w-[420px] md:mx-auto border-2 border-gray-700">
      <CardContent className="flex bg-gray/90 flex-col aspect-square items-center justify-center p-0">
        <Image className="rounded-lg w-full" src={profile} alt="Imagem" />
        <div className="flex justify-start flex-col pl-3 w-full mt-5">
          <h3 className="text-2xl font-bold">Nathally Souza</h3>
          <p className="text-xl font-bold">Jornalista e desenvolvedora</p>
          <p className="text-xs">Por Nathally Souza | 05.06.2024</p>
          <p className="my-5">Veja a cobertura completa pela Transmídia</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default function Post() {
  return (
    <main className="p-4">
      <div className="flex justify-center items-center flex-col w-full">
        <h2 className="text-6xl">acué</h2>
        <span className="text-md bg-[#E8FE41] text-black px-4 rounded-full mt-5">
          Trabalho, economia e empreendedorismo
        </span>
      </div>
      {Array.from({ length: 5 }).map((_, index) => (
            <CardNews key={index} />
          ))}
      
    </main>
  );
}
