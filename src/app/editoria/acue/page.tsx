import Link from 'next/link';
import Image from 'next/image';
import profile from '../../../../public/images/image.jpg';
import { EDITORIAS } from '@/constants/editorias';
import { cn } from '@/lib/utils';

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

export default function Acue() {
  const { title, description, color, textColor } = EDITORIAS.ACUE;

  return (
    <main className='flex-grow text-gray-500 p-4'>
      <div className='flex flex-col justify-center items-center py-8'>
        <h1 className='text-3xl font-bold text-gray-400 mb-2'>{title}</h1>
        <p className={cn('rounded-full px-4 py-1', `${color} ${textColor}`)}>
          {description}
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4'>
        {cardItems.map((card) => (
          <Link
            href={`/post/${card.slug}`}
            key={card.id}
            className='bg-white rounded-lg overflow-hidden shadow-md'
          >
            <div className='p-4'>
              <div className='bg-gray-200 rounded-xl'>
                <Image
                  className='object-cover w-full h-[360px] rounded-xl'
                  src={profile}
                  alt='Imagem'
                />
              </div>
              <h3 className='text-xl font-bold'>{card.title}</h3>
              <h4 className='text-lg mb-2'>{card.subtitle}</h4>
              <p className='text-sm text-gray-600'>
                Por {card.author} | {card.date}
              </p>
              <p className='text-black underline mt-2 inline-block'>
                Veja a cobertura completa pela Transmídia
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
