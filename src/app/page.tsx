'use client';

import ex from '../../public/images/ex.jpg';
import { Card } from '@/components/interface/card';
import { Slide } from '@/components/slide';

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
  return (
    <main className='flex-grow text-gray-500 p-4'>
      <h2 className='text-6xl font-bold mb-4'>Manifesto</h2>
      <Slide />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4'>
        {cardItems.map((card) => (
          <Card
            slug={card.slug}
            src={ex}
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
