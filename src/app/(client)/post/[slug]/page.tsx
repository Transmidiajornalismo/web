'use client';

import Image from 'next/image';
import parse from 'html-react-parser';
import { useState, useEffect } from 'react';

interface IPostProps {
  params: {
    slug: string;
  };
}

interface PostModel {
  id: number;
  date: string;
  title: string;
  content: string;
  imageURL: string;
  author: string;
  category: string;
}

export default function Post({ params }: IPostProps) {
  const { slug } = params;
  const [isMounted, setIsMounted] = useState(false);
  const [post, setPost] = useState<null | PostModel>(null);

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(`/api/posts/${slug}`);
      const data = await response.json();

      setPost(data.post);
      setIsMounted(true);
    };

    getPost();
  }, [isMounted]);

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  return (
    <main className='flex-grow p-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='max-w-3xl mx-auto'>
          <div className='relative'>
            <div className='relative'>
              <Image
                src={post?.imageURL!}
                width={256 * 3}
                height={0}
                alt='Manifesto image'
                objectFit='cover'
                className='rounded-lg'
              />
            </div>
            <div className='mt-2 text-right'>
              <p className='text-sm text-gray-500'>
                {post?.title === 'Manifesto' &&
                  parse(
                    "Imagem por <span className='font-bold'>Brune Hebert</span>",
                  )}
              </p>
            </div>
          </div>
        </div>
        {/* <div className='relative w-48 h-48 mx-auto mb-4'>
          <div className='absolute inset-0 bg-red-300 rounded-full'></div>
          <div className='absolute inset-2 bg-[#fffdf5] rounded-full'></div>
          <div className='absolute inset-4 bg-red-300 rounded-full overflow-hidden'>
            <Image
              className='w-full h-full object-cover'
              src={profile}
              alt='Author'
            />
          </div>
        </div> */}
        <div className='py-4'>
          <span className='text-xs'>{post?.category}</span>
          <h2 className='text-4xl'>{post?.title}</h2>
          <div className='flex justify-between text-gray-500'>
            <p className='text-sm'>{post?.author}</p>
            <p className='text-sm'>{post?.date}</p>
          </div>
        </div>

        <div className='space-y-4 indent-8 text-justify leading-6'>
          {parse(post?.content!)}
        </div>
      </div>
    </main>
  );
}
