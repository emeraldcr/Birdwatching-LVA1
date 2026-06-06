import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Birdwatching at La Vieja Adventures | Sucre, San Carlos, Costa Rica',
  description: 'Experiencia guiada de observación de aves en Costa Rica. Tours de fotografía de aves, tours privados, educativos y más en Sucre, San Carlos, Alajuela.',
  keywords: 'birdwatching Costa Rica, observación de aves, San Carlos, fotografía de aves, ecoturismo, La Vieja Adventures, avistamiento aves, tour naturaleza',
  openGraph: {
    title: 'Birdwatching at La Vieja Adventures',
    description: 'Experiencia guiada de observación de aves en Sucre, San Carlos, Costa Rica',
    type: 'website',
    locale: 'es_CR',
  },
  alternates: {
    languages: {
      es: 'https://example.com/es',
      en: 'https://example.com/en',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1d5d3b" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-warm-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
