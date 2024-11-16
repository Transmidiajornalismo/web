'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { PostModel } from '@/models/post.model';

interface ISlideProps {
  posts: PostModel[];
}

export const Slide = ({ posts }: ISlideProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + posts.length) % posts.length,
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + posts.length) % posts.length,
    );
  };

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isMounted, posts]);

  if (!isMounted && posts.length === 0) return null;

  return (
    <div className='relative rounded-lg p-4 mb-4'>
      <button
        onClick={prevSlide}
        className='overflow absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md z-10'
      >
        <ChevronLeft className='w-6 h-6' />
      </button>
      <button
        onClick={nextSlide}
        className='overflow absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md z-10'
      >
        <ChevronRight className='w-6 h-6' />
      </button>
      <div className='overflow-hidden'>
        <div
          className='flex transition-transform duration-300 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {posts.map((post, index) => {
            const nextIndex = (index + 1) % posts.length;

            return (
              <div
                key={post.id}
                className='w-full flex-shrink-0 flex lg:justify-center space-x-1 p-2'
              >
                <Link
                  href={`/post/${post.id}`}
                  className='w-3/4 bg-gray-200 rounded-lg px-2 pb-4'
                >
                  <div className='relative mt-2 w-full h-[400px] rounded-xl flex justify-center items-center'>
                    <span className='absolute top-2 left-2 bg-yellow-300 text-black mt-2 px-2 py-1 rounded text-sm'>
                      {post.category}
                    </span>
                    <Image
                      className='p-1 object-cover rounded-xl w-full h-full'
                      src={post.imageURL}
                      alt='Imagem'
                      width={256}
                      height={0}
                    />
                  </div>
                  <h3 className='text-xl font-bold mt-2 text-start'>
                    {post.title}
                  </h3>
                  <p className='text-sm text-gray-600'>
                    Por {post.author} | {post.date}
                  </p>
                </Link>
                <div className='w-1/4 lg:w-[240px] flex flex-col justify-center items-center bg-gray-100 rounded-lg'>
                  <div className='mt-1 w-full h-full rounded-lg'>
                    <Image
                      className='object-cover rounded-xl w-full h-full'
                      objectFit='cover'
                      src={posts[nextIndex].imageURL}
                      alt='Imagem'
                      width={256}
                      height={0}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <div className='flex space-x-2'>
          {posts.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
        {/* <Link href='#' className='text-black underline flex items-center'>
          Veja as notícias recentes
          <svg
            className='w-4 h-4 ml-1'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </Link> */}
      </div>
    </div>
  );
};
