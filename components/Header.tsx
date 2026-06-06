'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Modalidades', href: '#modalities' },
    { label: 'Rutas', href: '#spots' },
    { label: 'Preguntas', href: '#faq' },
    { label: 'Contacto', href: '#booking' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50 border-b border-forest/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🦅</span>
            <div>
              <p className="font-serif font-bold text-forest text-sm md:text-base">
                La Vieja Adventures
              </p>
              <p className="text-xs text-moss hidden sm:block">Birdwatching</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-forest font-medium transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <button
            onClick={() => {
              const message = 'Hola, me gustaría información sobre el Birdwatching tour.';
              const encoded = encodeURIComponent(message);
              window.open(`https://wa.me/50687654321?text=${encoded}`, '_blank'); // TODO: Reemplazar número
            }}
            className="hidden md:block btn-primary bg-forest hover:bg-forest-dark text-sm py-2 px-4"
          >
            Reservar
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-forest/10 rounded-lg transition-colors"
            aria-label="Menú"
          >
            <svg
              className="w-6 h-6 text-forest"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-forest/10 py-4 animate-fade-in">
            <nav className="flex flex-col gap-3 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-700 hover:text-forest font-medium transition-colors px-2 py-2 hover:bg-beige rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <button
              onClick={() => {
                const message = 'Hola, me gustaría información sobre el Birdwatching tour.';
                const encoded = encodeURIComponent(message);
                window.open(`https://wa.me/50687654321?text=${encoded}`, '_blank'); // TODO: Reemplazar número
                setIsMenuOpen(false);
              }}
              className="w-full btn-primary bg-forest hover:bg-forest-dark text-sm"
            >
              Reservar
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
