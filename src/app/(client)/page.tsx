'use client';

import ex from '../../../public/images/ex.jpg';
import { Card } from '@/components/interface/card';
import { Slide } from '@/components/slide';
import { PostModel } from '@/models/post.model';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Component() {
  const [isMounted, setIsMounted] = useState(false);
  const [slidePosts, setSlidePosts] = useState<PostModel[]>([]);
  const [cardPosts, setCardPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(`/api/posts`);
      const data = await response.json();

      const slide = data.slice(0, 3);
      const card = data.slice(3);
      setSlidePosts(slide);
      setCardPosts(card);
      setIsMounted(true);
    };

    getPost();
  }, [isMounted]);

  if (!isMounted) <div>Loading...</div>;

  return (
    <main className='flex-grow text-gray-500 p-4'>
      <div className='flex items-center justify-center min-w-full px-8'>
        <Link href='/post/12'>
          <Image
            src='http://34.18.51.177/wp-content/uploads/2024/11/Ilustracao_ComEspaco_ComRuido_E_Texto_720px.png'
            width={1024}
            height={0}
            alt='Manifesto image'
            objectFit='cover'
            className='rounded-lg'
          />
        </Link>
      </div>
      <Slide posts={slidePosts} />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4'>
        {cardPosts.map((post) => (
          <Card post={post} key={post.id}>
            Veja a cobertura completa pela Transmídia
          </Card>
        ))}
      </div>
    </main>
  );
}
