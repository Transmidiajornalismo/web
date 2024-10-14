import Image from 'next/image';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import logo from '../../../public/images/logo.svg';
import twitter from '../../assets/social/twitter.png';
import facebook from '../../assets/social/facebook.png';
import instagram from '../../assets/social/instagram.png';
import tiktok from '../../assets/social/tiktok.png';
import linkedin from '../../assets/social/linkedin.png';
import { Separator } from '../ui/separator';

export const Footer = () => {
  return (
    <footer className='bg-[#CFB2F5] text-black p-4'>
      <div className='flex items-center justify-center'>
      <Image src={logo} alt='Transmídia' className='w-[268px]'/>
      </div>
      <div className='flex justify-center space-x-4 my-2'>
        <Image src={twitter} alt='Transmídia' width={24} height={0} />
        <Image src={facebook} alt='Transmídia' width={24} height={0} />
        <Image src={instagram} alt='Transmídia' width={24} height={0} />
        <Image src={tiktok} alt='Transmídia' width={24} height={0} />
        <Image src={linkedin} alt='Transmídia' width={24} height={0} />
      </div>
      <div className='flex justify-between mb-10'>
        <div className='min-w-[160px]'>
          <h4 className='font-bold text-white'>Institucional</h4>
          <Separator className='bg-black' />
          <ul className='text-sm'>
            <li>Quem somos</li>
            <li>Apoie Transmídia</li>
            <li>Termos de uso</li>
            <li>Política de privacidade</li>
          </ul>
        </div>
        <div className='text-right min-w-[160px]'>
          <h4 className='font-bold text-white'>Jornalismo</h4>
          <Separator className='bg-black' />
          <ul className='text-sm'>
            <li>Acué</li>
            <li>Saúde</li>
            <li>Cultura</li>
            <li>Política</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
