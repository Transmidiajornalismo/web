'use client';

import { EDITORIAS } from '@/constants/editorias';
import { Search, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Separator } from './ui/separator';
import { Social } from './social';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditoriasOpen, setIsEditoriasOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
        <button className='font-bold flex justify-center w-[25vw]'>APOIE</button>
        <button className='font-bold flex justify-center w-[25vw]'>
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
              d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
            />
          </svg>
        </button>
        <button onClick={toggleSearch} className='font-bold flex justify-center w-[25vw]'>
          <Search className='w-6 h-6' />
        </button>
        <button onClick={toggleMenu} className='font-bold flex justify-center w-[25vw]'>
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
                  <a href='#' className='hover:underline'>
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
                  <a href='#' className='hover:underline'>
                    Colunas
                  </a>
                </li>
              </ul>
            </nav>
            <Social />
          </div>
          <div className='absolute bottom-0 left-0 right-0 h-64 pointer-events-none'>
            <div className='relative h-full'>
              <div className='absolute top-1/4 left-1/4 w-16 h-16 bg-gray-200 rounded-full opacity-25'></div>
              <div className='absolute top-1/2 left-1/2 w-24 h-24 bg-gray-200 rounded-sm opacity-25'></div>
              <div className='absolute bottom-1/4 right-1/4 w-0 h-0 border-l-[40px] border-l-transparent border-b-[69.3px] border-b-gray-200 border-r-[40px] border-r-transparent opacity-25'></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
