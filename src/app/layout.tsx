import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/Footer/Footer';
import { Navbar } from '@/components/Navbar/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/logo.svg';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Transmídia',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body
        className={cn(
          `flex flex-col min-h-screen bg-black text-white bg-[#1C1C14]`,
          rubik.className,
        )}
      >
        <header className='p-4 flex justify-between items-center'>
          <Link href='/'>
            <Image src={logo} alt='Transmídia' />
          </Link>
        </header>
        {children}

        <Footer />
        <Navbar />
      </body>
    </html>
  );
}
