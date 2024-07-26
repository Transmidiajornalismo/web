import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import profile from "../../../public/images/image.jpg";

export default function Post() {
  return (
    <>
      <div className="flex justify-center">
        <Image
          className="rounded-full"
          src={profile}
          alt="Imagem"
          width={128}
          height={128}
        />
      </div>
      <article className="p-4">
        <div>
          <span className="text-xs">Categoria</span>
          <h2 className="text-xl">Titulo</h2>
          <div className="flex justify-between">
            <p className="text-sm">Autora</p>
            <p className="text-sm">22.05.2024</p>
          </div>
        </div>
        <p className="text-justify mt-4">
          Lorem ipsum do lor sit amet, consectetur adipiscing elit. Donec ut
          tempor risus. Phasellus sodales lorem et sapien viverra, a ullamcorper
          arcu mollis. Ut sed porta odio. Sed consequat porta pulvinar.
          Pellentesque semper efficitur nunc, fringilla faucibus dolor accumsan
          id. Integer a lacinia dolor. Maecenas fringilla ligula in sodales
          tempor. Curabitur eget pulvinar sapien.
        </p>
        <p className="text-justify mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
          tempor risus. Phasellus sodales lorem et sapien viverra, a ullamcorper
          arcu mollis. Ut sed porta odio. Sed consequat porta pulvinar.
          Pellentesque semper efficitur nunc, fringilla faucibus dolor accumsan
          id.{" "}
        </p>
        <p className="text-justify mt-4">
          Lorem ipsum do lor sit amet, consectetur adipiscing elit. Donec ut
          tempor risus. Phasellus sodales lorem et sapien viverra, a ullamcorper
          arcu mollis. Ut sed porta odio. Sed consequat porta pulvinar.
          Pellentesque semper efficitur nunc, fringilla faucibus dolor accumsan
          id. Integer a lacinia dolor. Maecenas fringilla ligula in sodales
          tempor. Curabitur eget pulvinar sapien.
        </p>
        <p className="text-justify mt-4">
          Lorem ipsum do lor sit amet, consectetur adipiscing elit. Donec ut
          tempor risus. Phasellus sodales lorem et sapien viverra, a ullamcorper
          arcu mollis. Ut sed porta odio. Sed consequat porta pulvinar.
          Pellentesque semper efficitur nunc, fringilla faucibus dolor accumsan
          id. Integer a lacinia dolor. Maecenas fringilla ligula in sodales
          tempor. Curabitur eget pulvinar sapien.
        </p>
        
      </article>
    </>
  );
}
