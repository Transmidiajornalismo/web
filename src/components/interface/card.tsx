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
  children
}: ICardProps) => {
  return (
    <Link
      href={`/post/${slug}`}
      className='bg-white rounded-lg overflow-hidden shadow-md'
    >
      <div className='p-4'>
        <div className='bg-gray-200 rounded-xl mb-4'>
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
        <p className='text-black underline mt-2 inline-block'>
          { children }
        </p>
      </div>
    </Link>
  );
};
