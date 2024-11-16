import Image from 'next/image';
import profile from '../../../public/images/image.jpg';
import quem from '@/assets/info/quem-somos.svg';
import frame from '../../../public/images/frame.svg';

export default function About() {
  return (
    <main className='flex-grow p-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex flex-col justify-center items-center py-8'>
          <h1 className='text-6xl font-bold text-black mb-2'>quem somos</h1>
        </div>

        <div className='space-y-2'>
          <p className='text-2xl font-bold text-black'>Sobre nós</p>
          <p className='indent-8 text-justify leading-6'>
            A Transmídia é o primeiro portal de notícias especializado na
            cobertura da pauta trans no Brasil dedicado, exclusivamente, a
            produzir conteúdos diversificados e de impacto para a transgênero
            comunidade.
          </p>

          <p className='text-2xl font-bold text-black'>Missão</p>
          <p className='indent-8 text-justify leading-6'>
            A Transmídia Jornalismo tem como missão produzir informações
            qualificadas que impactem estruturalmente a realidade da população
            trans e travesti no Brasil, assim como valorizar a cultura da nossa
            comunidade.
          </p>

          <p className='text-2xl font-bold text-black'>Visão</p>
          <p className='indent-8 text-justify leading-6'>
            <li>Jornalismo sem transfobia</li>
            <li>Jornalismo interseccional</li>
            <li>Jornalismo coletivo e colaborativo</li>
          </p>

          <p className='text-2xl font-bold text-black'>Valores</p>
          <p className='indent-8 text-justify leading-6'>
            O jornalismo brasileiro tem contribuído há anos para as estatísticas
            de violência e marginalização da população trans. A Transmídia vem
            para mudar esse cenário e reafirmar a nossa existência. Nosso mote
            é:
          </p>

          <div className='p-6 min-h-[300px] flex items-center justify-center bg-[#2D2D2D] '>
            <div className='relative max-w-md w-full aspect-square'>
              <Image
                src={quem}
                alt='Decorative frame'
                layout='fill'
                objectFit='contain'
                className='pointer-events-none'
              />
              {/* <div className='absolute inset-0 flex items-center justify-center p-10'>
                <p className='text-2xl leading-10'>
                  &quot;Falar sobre transgeneridade, infelizmente, ainda é falar
                  sobre um assunto espinhoso.&quot;
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
