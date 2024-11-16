import Image from 'next/image';
import logo from '../../public/images/logo.svg';
import { Separator } from '@/components/ui/separator';
import { Social } from './social';
import { EDITORIAS } from '@/constants/editorias';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='bg-[#CFB2F5] text-black p-4'>
      <div className='flex items-center justify-center'>
        <Image src={logo} alt='Transmídia' className='w-[268px]' />
      </div>
      <Social />
      <div className='flex justify-between mb-10'>
        <div className='min-w-[160px]'>
          <h4 className='font-bold text-white'>Institucional</h4>
          <Separator className='bg-black' />
          <ul className='text-sm font-medium leading-6'>
            <li>
              <Link href='/quem-somos'>Quem somos</Link>
            </li>
            <li>
              <Link
                href='https://www.catarse.me/transmidia_vozes_trans_na_comunicacao_99ab?ref=project_link'
                target='_blank'
              >
                Apoie Transmídia
              </Link>
            </li>
          </ul>
        </div>
        <div className='text-right min-w-[160px]'>
          <h4 className='font-bold text-white'>Jornalismo</h4>
          <Separator className='bg-black' />
          <ul className='text-sm font-medium leading-6 capitalize'>
            {Object.keys(EDITORIAS).map((editoria) => (
              <li key={editoria}>
                <a href={`/editoria/${editoria.toLowerCase()}`}>
                  {EDITORIAS[editoria].title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
