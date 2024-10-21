import Image from 'next/image';
import profile from '../../../../public/images/image.jpg';
import ex from '../../../../public/images/ex.jpg';

interface IPostProps {
  params: {
    slug: string;
  };
}

export default function Post({ params }: IPostProps) {
  return (
    <main className='flex-grow p-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='relative w-48 h-48 mx-auto mb-4'>
          <div className='absolute inset-0 bg-red-300 rounded-full'></div>
          <div className='absolute inset-2 bg-[#fffdf5] rounded-full'></div>
          <div className='absolute inset-4 bg-red-300 rounded-full overflow-hidden'>
            <Image
              className='w-full h-full object-cover'
              src={profile}
              alt='Author'
            />
          </div>
          <div className="mb-6">
            <div className='w-[100w]'>
              <Image 
                // width={1200}
                fill
                // height={0}
                src={ex}
                alt="Article main image" 
                className="min-w-full rounded-lg"
              />
              <div className="mt-2 text-right">
                <p className="text-sm text-gray-500 italic">Foto: Nome do Fotógrafo</p>
                <p className="text-sm text-gray-700">Legenda da imagem: Breve descrição do que está sendo mostrado na fotografia.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='py-4'>
          <span className='text-xs'>Categoria</span>
          <h2 className='text-4xl'>{params.slug}</h2>
          <div className='flex justify-between text-gray-500'>
            <p className='text-sm'>Autora</p>
            <p className='text-sm'>22.05.2024</p>
          </div>
        </div>

        <div className='space-y-4'>
          <p className='indent-8 text-justify leading-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
            tempor risus. Phasellus sodales lorem et sapien viverra, a
            ullamcorper arcu mollis. Ut sed porta odio. Sed consequat porta
            pulvinar. Pellentesque semper efficitur nunc, fringilla faucibus
            dolor accumsan id. Integer a lacinia dolor. Maecenas fringilla
            ligula in sodales tempor. Curabitur eget pulvinar sapien.
          </p>
          <p className='indent-8 text-justify leading-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
            tempor risus. Phasellus sodales lorem et sapien viverra, a
            ullamcorper arcu mollis. Ut sed porta odio. Sed consequat porta
            pulvinar. Pellentesque semper efficitur nunc, fringilla faucibus
            dolor accumsan id.
          </p>
        </div>
      </div>
    </main>
  );
}
