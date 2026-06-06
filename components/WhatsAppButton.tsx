'use client';

import { useEffect, useState } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = 'Hola, me gustaría información sobre el Birdwatching tour en La Vieja Adventures.';
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/50687654321?text=${encoded}`, '_blank'); // TODO: Reemplazar número
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-40 animate-fade-in">
      <button
        onClick={handleWhatsAppClick}
        className="group relative flex items-center gap-3 bg-white text-forest rounded-full py-3 px-6 shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 font-semibold border-2 border-forest hover:border-forest-dark"
        aria-label="Contactar por WhatsApp"
      >
        {/* Desktop label */}
        <span className="hidden md:inline">Contactar</span>
        
        {/* WhatsApp icon */}
        <svg
          className="w-6 h-6 text-green-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.267-3.559 6.094-1.61 9.614 1.81 3.432 5.714 4.27 8.974 2.325.823-.485 1.604-1.14 2.307-1.852 1.307-1.355 2.699-2.76 2.982-4.55.321-2.031-.541-4.435-2.868-5.598-1.613-.816-3.622-.856-5.754.284zm0 0" />
        </svg>
      </button>

      {/* Floating label animation */}
      <div className="absolute bottom-20 right-0 bg-white text-forest px-4 py-2 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <p className="text-sm font-semibold">¡Hablemos!</p>
      </div>
    </div>
  );
}
