'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ex from '../../public/images/ex.jpg';

const newsItems = [
  {
    id: 1,
    category: 'acué',
    title: 'TSE aprova nome social de transgêneros nas urnas',
    author: 'Nome Sobrenome',
    date: '05.06.2024',
  },
  {
    id: 2,
    category: 'saúde',
    title: 'Novo estudo revela avanços em terapia hormonal',
    author: 'Dr. Silva',
    date: '04.06.2024',
  },
  {
    id: 3,
    category: 'cultura',
    title: 'Festival de cinema LGBTQIA+ anuncia programação',
    author: 'Maria Santos',
    date: '03.06.2024',
  },
  {
    id: 4,
    category: 'política',
    title: 'Projeto de lei sobre identidade de gênero avança',
    author: 'João Oliveira',
    date: '02.06.2024',
  },
  {
    id: 5,
    category: 'acué',
    title: 'Pesquisa aponta aumento na visibilidade trans na mídia',
    author: 'Ana Rodrigues',
    date: '01.06.2024',
  },
];

export const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length,
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextIndex = (currentIndex + 1) % newsItems.length;

  return (
    <div className='relative rounded-lg p-4 mb-4'>
      <button
        onClick={prevSlide}
        className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md z-10'
      >
        <ChevronLeft className='w-6 h-6' />
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md z-10'
      >
        <ChevronRight className='w-6 h-6' />
      </button>
      <div className='overflow-hidden'>
        <div
          className='flex transition-transform duration-300 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {newsItems.map((item) => (
            <div
              key={item.id}
              className='w-full flex-shrink-0 flex lg:justify-center space-x-1 p-2'
            >
              <div className='w-3/4 bg-gray-200 rounded-lg'>
                <div className='relative mt-2 w-full h-[400px] rounded-xl flex justify-center items-center'>
                  <span className='absolute top-2 left-2 bg-yellow-300 text-black mt-2 px-2 py-1 rounded text-sm'>
                    {item.category}
                  </span>
                  <Image
                    className='p-1 object-cover rounded-xl w-full h-full'
                    src={ex}
                    alt='Imagem'
                    width={432}
                  />
                </div>
                <h3 className='text-xl font-bold mt-2'>{item.title}</h3>
                <p className='text-sm text-gray-600'>
                  Por {item.author} | {item.date}
                </p>
              </div>
              <div className='w-1/4 lg:w-[240px] flex flex-col justify-center items-center bg-gray-100 rounded-lg'>
                <div className='mt-1 w-full h-full rounded-lg'>
                  <Image
                    className='object-cover rounded-xl w-full h-full'
                    objectFit='cover'
                    src={ex}
                    alt='Imagem'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <div className='flex space-x-2'>
          {newsItems.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
        <Link href='#' className='text-black underline flex items-center'>
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
        </Link>
      </div>
    </div>
  );
};
