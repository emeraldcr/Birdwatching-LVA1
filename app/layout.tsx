import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://lavieja-adventures.com'),
  title: {
    default: 'La Vieja Adventures Birdwatching | Tours de aves en Costa Rica',
    template: '%s | La Vieja Adventures',
  },
  description:
    'Reserva experiencias premium de birdwatching, fotografía de naturaleza, senderismo y turismo rural auténtico en Sucre, San Carlos, Costa Rica.',
  keywords: [
    'La Vieja Adventures Birdwatching',
    'birdwatching Costa Rica',
    'observación de aves San Carlos',
    'fotografía de aves Costa Rica',
    'turismo de naturaleza Costa Rica',
    'ecoturismo Sucre San Carlos',
    'tours privados de aves Costa Rica',
  ],
  applicationName: 'La Vieja Adventures Birdwatching',
  authors: [{ name: 'La Vieja Adventures' }],
  creator: 'La Vieja Adventures',
  publisher: 'La Vieja Adventures',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'La Vieja Adventures Birdwatching',
    description:
      'Experiencias guiadas de observación de aves, fotografía de naturaleza y aventura rural en Sucre, San Carlos, Costa Rica.',
    url: 'https://lavieja-adventures.com',
    siteName: 'La Vieja Adventures',
    locale: 'es_CR',
    type: 'website',
    images: [
      {
        url: '/images/birdwatching/og-birdwatching.svg',
        width: 1200,
        height: 630,
        alt: 'Birdwatching en el bosque tropical de Costa Rica con La Vieja Adventures',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Vieja Adventures Birdwatching',
    description: 'Tours premium de observación de aves y fotografía de naturaleza en Costa Rica.',
    images: ['/images/birdwatching/og-birdwatching.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CR">
      <body className="font-sans">{children}</body>
    </html>
  );
}
