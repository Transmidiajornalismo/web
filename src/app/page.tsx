'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import profile from '../../public/images/image.jpg';
import Image from 'next/image';
import { Card } from '@/components/interface/card';

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

const cardItems = [
  {
    id: 1,
    title: 'TRANSBAILE:',
    subtitle: 'Primeira premiação trans do Brasil',
    slug: 'primeira-premiacao-trans-do-brasil',
    author: 'Nome Sobrenome',
    date: '05.06.2024',
  },
  {
    id: 2,
    title: 'SAÚDE TRANS:',
    subtitle: 'Avanços em terapias hormonais',
    slug: 'avancos-em-terapias-hormonais',
    author: 'Dr. Silva',
    date: '04.06.2024',
  },
  {
    id: 3,
    title: 'CULTURA LGBTQIA+:',
    subtitle: 'Festival de cinema anuncia programação',
    slug: 'festival-de-cinema-anuncia-programacao',
    author: 'Maria Santos',
    date: '03.06.2024',
  },
  {
    id: 4,
    title: 'POLÍTICA TRANS:',
    subtitle: 'Novo projeto de lei em discussão',
    slug: 'novo-projeto-de-lei-em-discussao',
    author: 'João Oliveira',
    date: '02.06.2024',
  },
  {
    id: 5,
    title: 'VISIBILIDADE:',
    subtitle: 'Representatividade trans na mídia cresce',
    slug: 'representatividate-trans-na-midia-cresce',
    author: 'Ana Rodrigues',
    date: '01.06.2024',
  },
];

export default function Component() {
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
    <main className='flex-grow text-gray-500 p-4'>
      <h2 className='text-6xl font-bold mb-4'>Manifesto</h2>
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
            {newsItems.map((item, index) => (
              <div
                key={item.id}
                className='w-full flex-shrink-0 flex space-x-4 p-2'
              >
                <div className='w-3/4 bg-gray-200 rounded-lg p-2'>
                  <div className='relative mt-2 bg-purple-200 w-full h-[400px] rounded-xl flex justify-center items-center'>
                    <span className='absolute top-2 left-2 bg-yellow-300 text-black mt-2 px-2 py-1 rounded text-sm'>
                      {item.category}
                    </span>
                    <Image
                      className='py-2 object-cover rounded-xl w-full h-full'
                      src={profile}
                      alt='Imagem'
                      width={432}
                    />
                  </div>
                  <h3 className='text-xl font-bold mt-2'>{item.title}</h3>
                  <p className='text-sm text-gray-600'>
                    Por {item.author} | {item.date}
                  </p>
                </div>
                <div className='w-1/4 flex flex-col justify-center items-center bg-gray-100 rounded-lg'>
                  <div className='m-2 rounded h-full'>
                    <span className='text-xs font-semibold ml-4'>
                      Próxima notícia
                    </span>
                    <div className='mt-1 bg-purple-200 h-[400px] rounded-lg'>
                      <Image
                        className='py-2 object-cover rounded-xl w-full h-full'
                        src={profile}
                        alt='Imagem'
                        width={100}
                      />
                    </div>
                    <h4 className='text-sm font-bold mt-1 line-clamp-2'>
                      {newsItems[(index + 1) % newsItems.length].title}
                    </h4>
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

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4'>
        {cardItems.map((card) => (
          <Card
            slug={card.slug}
            src={profile}
            alt='Imagem'
            title={card.title}
            subtitle={card.subtitle}
            author={card.author}
            date={card.date}
            key={card.id}
          >
            Veja a cobertura completa pela Transmídia
          </Card>
        ))}
      </div>
    </main>
  );
}
