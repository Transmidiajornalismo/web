import Link from 'next/link';
import Image from 'next/image';
import { PostModel } from '@/models/post.model';

interface ICardProps {
  post: PostModel;
  children: React.ReactNode;
}

export const Card = ({ post, children }: ICardProps) => {
  return (
    <Link
      href={`/post/${post.id}`}
      className='bg-[#F6F4E7] border-2 rounded-lg overflow-hidden shadow-lg'
    >
      <div className='p-4'>
        <div className='relative flex bg-gray-200 rounded-xl mb-4'>
          <span className='absolute top-2 left-2 bg-yellow-300 text-black px-2 py-1 rounded text-xs font-semibold'>
            {post.category}
          </span>
          <Image
            className='object-cover w-full h-[360px] rounded-xl'
            src={post.imageURL}
            alt={post.title}
            width={1024}
            height={0}
          />
        </div>
        <h3 className='text-xl font-bold text-[#1C1C14]'>{post.title}</h3>
        {/* <h4 className='text-lg mb-2 text-[#47483B]'>{subtitle}</h4> */}
        <p className='text-sm text-[#47483B]'>
          Por {post.author} | {post.date}
        </p>
        <p className='text-[#47483B] mt-2 inline-block'>{children}</p>
      </div>
    </Link>
  );
};
