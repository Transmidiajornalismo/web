import Image from 'next/image';
import facebook from '../assets/social/facebook.png';
import instagram from '../assets/social/instagram.png';
import linkedin from '../assets/social/linkedin.png';
import Link from 'next/link';

export const Social = () => {
  return (
    <div className='flex justify-center space-x-4 my-2'>
      <Link
        href='https://www.facebook.com/profile.php?id=61563276732392&locale=pt_BR'
        target='_blank'
      >
        <Image src={facebook} alt='Transmídia' width={24} height={0} />
      </Link>
      <Link
        href='https://www.instagram.com/transmidia.jornalismo/'
        target='_blank'
      >
        <Image src={instagram} alt='Transmídia' width={24} height={0} />
      </Link>
      <Link
        href='https://www.instagram.com/transmidia.jornalismo/'
        target='_blank'
      >
        <Image src={linkedin} alt='Transmídia' width={24} height={0} />
      </Link>
    </div>
  );
};
