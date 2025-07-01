import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Nome */}
        <h1 className="text-xl font-bold text-blue-600">BiblioTake</h1>

        {/* Links de Navegação */}
        <nav className="hidden md:flex gap-6">
          <Link href="#livros" className="hover:text-blue-500 transition-colors">
            Livros
          </Link>
          <Link href="#emprestimos" className="hover:text-blue-500 transition-colors">
            Empréstimos
          </Link>
          <Link href="#usuarios" className="hover:text-blue-500 transition-colors">
            Usuários
          </Link>
        </nav>

        {/* Botão Mobile (opcional) */}
        <button className="md:hidden">☰</button>
      </div>
    </header>
  );
}