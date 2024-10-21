import { cn } from '@/lib/utils';
import { Card } from './card';
import profile from '../../../public/images/image.jpg';

interface IEditoriasLayoutProps {
  title: string;
  description: string;
  color: string;
  textColor: string;
  items: any;
}

export const EditoriasLayout = ({
  title,
  description,
  color,
  textColor,
  items,
}: IEditoriasLayoutProps) => {
  return (
    <main className='flex-grow text-gray-500 p-4'>
      <div className='flex flex-col justify-center items-center py-8'>
        <h1 className='text-6xl font-bold text-black mb-2'>{title}</h1>
        <p className={cn('rounded-full px-4 py-1', `${color} ${textColor}`)}>
          {description}
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4'>
        {items.map((item: any) => (
          <Card
            slug={item.slug}
            src={profile}
            alt='Imagem'
            title={item.title}
            subtitle={item.subtitle}
            author={item.author}
            date={item.date}
            key={item.id}
          >
            Veja a cobertura completa pela Transmídia
          </Card>
        ))}
      </div>
    </main>
  );
};
