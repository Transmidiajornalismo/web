import { Card } from '@/components/interface/card';
import { Slide } from '@/components/slide';
import { PostModel } from '@/models/post.model';
import Image from 'next/image';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function Component() {
  const response = await fetch(`https://transmidiajornalismo.com.br/api/posts`);
  const posts: PostModel[] = await response.json();
  const slidePosts = posts.slice(0, 3);
  const cardPosts = posts.slice(3);

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
