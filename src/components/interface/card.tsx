import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface ICardProps {
  slug: string;
  src: StaticImageData;
  alt: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  children: React.ReactNode;
}

export const Card = ({
  slug,
  src,
  alt,
  title,
  subtitle,
  author,
  date,
  children,
}: ICardProps) => {
  return (
    <Link
      href={`/post/${slug}`}
      className='bg-[#F6F4E7] border-2 rounded-lg overflow-hidden shadow-lg'
    >
      <div className='p-4'>
        <div className='relative flex bg-gray-200 rounded-xl mb-4'>
          <span className='absolute top-2 left-2 bg-yellow-300 text-black px-2 py-1 rounded text-xs font-semibold'>
            Editoria
          </span>
          <Image
            className='object-cover w-full h-[360px] rounded-xl'
            src={src}
            alt={alt}
          />
        </div>
        <h3 className='text-xl font-bold text-[#1C1C14]'>{title}</h3>
        <h4 className='text-lg mb-2 text-[#47483B]'>{subtitle}</h4>
        <p className='text-sm text-[#47483B]'>
          Por {author} | {date}
        </p>
        <p className='text-[#47483B] mt-2 inline-block'>{children}</p>
      </div>
    </Link>
  );
};
