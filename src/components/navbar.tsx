'use client';

import { EDITORIAS } from '@/constants/editorias';
import {
  Search,
  X,
  ChevronDown,
  Share2,
  Facebook,
  MessageCircle,
} from 'lucide-react';
import { useState } from 'react';
import { Separator } from './ui/separator';
import { Social } from './social';
import Link from 'next/link';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isEditoriasOpen, setIsEditoriasOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl,
      )}`,
      '_blank',
    );
  };

  const shareOnWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`,
      '_blank',
    );
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleEditorias = () => {
    setIsEditoriasOpen(!isEditoriasOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <>
      <nav className='fixed bottom-0 left-0 right-0 bg-[#E1E993] text-black flex justify-between items-center p-2 rounded-tr-xl rounded-tl-xl'>
        <Link
          href='https://www.catarse.me/transmidia_vozes_trans_na_comunicacao_99ab?ref=project_link'
          className='font-bold flex justify-center w-[25vw]'
          target='_blank'
        >
          APOIE
        </Link>
        <div className='relative'>
          <button onClick={() => setIsShareOpen(!isShareOpen)}>
            <Share2 className='w-6 h-6' />
          </button>
          {isShareOpen && (
            <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white rounded-lg shadow-lg p-2 flex space-x-2'>
              <button
                onClick={shareOnFacebook}
                className='p-2 hover:bg-gray-100 rounded-full'
              >
                <Facebook className='w-6 h-6' />
              </button>
              <button
                onClick={shareOnWhatsApp}
                className='p-2 hover:bg-gray-100 rounded-full'
              >
                <MessageCircle className='w-6 h-6' />
              </button>
            </div>
          )}
        </div>
        <button
          onClick={toggleSearch}
          className='font-bold flex justify-center w-[25vw]'
        >
          <Search className='w-6 h-6' />
        </button>
        <button
          onClick={toggleMenu}
          className='font-bold flex justify-center w-[25vw]'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </nav>

      {isSearchOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white p-4 rounded-lg w-full max-w-2xl mx-4'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Pesquisar conteúdo no Transmídia'
                className='w-full py-2 pl-10 pr-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E8FE41]'
              />
              <Search
                className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                size={20}
              />
              <button
                onClick={toggleSearch}
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {isMenuOpen && (
        <div className='fixed inset-0 bg-[#fffdf5] text-black z-50 overflow-y-auto'>
          <div className='container mx-auto px-4 py-8'>
            <button onClick={toggleMenu} className='absolute top-4 left-4'>
              <X size={24} />
            </button>
            <div className='mt-12 mb-8'>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Pesquisar conteúdo no Transmídia'
                  className='w-full py-2 pl-10 pr-4 border-b-2 border-black bg-transparent focus:outline-none'
                />
                <Search
                  className='absolute left-0 top-1/2 transform -translate-y-1/2'
                  size={20}
                />
              </div>
            </div>
            <nav>
              <ul className='space-y-6 text-2xl'>
                <li>
                  <a href='/quem-somos' className='hover:underline'>
                    Quem somos
                  </a>
                </li>
                <Separator className='bg-black' />
                <li>
                  <button
                    onClick={toggleEditorias}
                    className='flex items-center justify-between w-full hover:underline'
                  >
                    Editorias
                    <ChevronDown
                      size={24}
                      className={`transform transition-transform ${
                        isEditoriasOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isEditoriasOpen && (
                    <>
                      <Separator className='bg-black my-2' />
                      <ul className='mt-2 ml-4 space-y-2'>
                        {Object.keys(EDITORIAS).map((editoria) => (
                          <li
                            key={editoria}
                            className='hover:underline cursor-pointer'
                          >
                            <a href={`/editoria/${editoria.toLowerCase()}`}>
                              {EDITORIAS[editoria].title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
                <Separator className='bg-black' />
                <li>
                  <a href='/colunas' className='hover:underline'>
                    Colunas
                  </a>
                </li>
              </ul>
            </nav>
            <Social />
          </div>
        </div>
      )}
    </>
  );
};
