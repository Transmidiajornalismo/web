import Image from 'next/image';
import parse from 'html-react-parser';

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

export const dynamic = 'force-dynamic';

export default async function Post({ params }: IPostProps) {
  const { slug } = params;
  const response = await fetch(
    `https://transmidiajornalismo.com.br/api/posts/${slug}`,
  );
  const data = await response.json();
  const post: PostModel = data.post;

  return (
    <main className='flex-grow p-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='max-w-3xl mx-auto'>
          <div className='relative'>
            <div className='relative'>
              <Image
                src={post?.imageURL!}
                width={1024}
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
        <div className='py-4'>
          <span className='text-xs font-bold'>
            {post?.category !== 'uncategorized' && post?.category}
          </span>
          <h2 className='text-4xl'>{parse(post?.title)}</h2>
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
