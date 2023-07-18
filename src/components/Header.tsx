'use client'

import { useState } from 'react';
import { NavLinkMobile, NavLinkPc } from './NavLinks';


export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex items-center justify-between py-4 px-8 bg-green-500 text-white">
      <div className="flex items-center">
        <img
          src="logo.png" // Caminho da imagem do logotipo
          alt="Logo"
          width="100px" // Largura desejada da imagem
          className="mr-4"
        />
      </div>

    {/* Menu de Navegação para PC */}
      <nav className="hidden md:flex items-center">
            <NavLinkPc />
      </nav>

    {/* Menu de Navegação para Mobile */}
      <nav
        className={`fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        >
        <div className="relative bg-green-500 rounded p-8">
            <button
            className="absolute top-2 right-2 text-white text-lg"
            onClick={toggleMenu}
            >
            &times;
            </button>
            <NavLinkMobile />
        </div>
        </nav>



      <button className="md:hidden" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </header>
  );
};
