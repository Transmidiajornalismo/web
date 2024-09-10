import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className='bg-[#E8FE41] text-black p-4'>
      <div className='flex justify-center space-x-4 mb-4'>
        <Twitter size={24} />
        <Facebook size={24} />
        <Instagram size={24} />
        <svg className='w-6 h-6' viewBox='0 0 24 24' fill='currentColor'>
          <path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z' />
        </svg>
        <Linkedin size={24} />
      </div>
      <div className='flex justify-between'>
        <div>
          <h4 className='font-bold'>Institucional</h4>
          <ul className='text-sm'>
            <li>Quem somos</li>
            <li>Apoie Transmídia</li>
            <li>Termos de uso</li>
            <li>Política de privacidade</li>
          </ul>
        </div>
        <div>
          <h4 className='font-bold'>Jornalismo</h4>
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
