'use client';

import { siteContent } from '@/lib/data';

export default function BookingCTA() {
  const { booking } = siteContent.es;

  const handleWhatsApp = () => {
    const message = encodeURIComponent(booking.message);
    window.open(`https://wa.me/50687654321?text=${message}`, '_blank'); // TODO: Reemplazar número
  };

  const handleConsult = () => {
    handleWhatsApp();
  };

  const handlePrivate = () => {
    const message = encodeURIComponent('Hola, me gustaría solicitar un tour privado personalizado.');
    window.open(`https://wa.me/50687654321?text=${message}`, '_blank'); // TODO: Reemplazar número
  };

  return (
    <section className="section-padding bg-gradient-to-r from-forest to-forest-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sunrise rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-moss rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
            {booking.title}
          </h2>
          <p className="text-xl md:text-2xl text-warm-white mb-12 font-light">
            {booking.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <button
              onClick={handleWhatsApp}
              className="px-8 py-4 bg-white text-forest font-bold rounded-lg hover:bg-warm-white transform hover:scale-105 transition-all shadow-lg hover:shadow-xl text-lg flex items-center gap-2"
            >
              <span>💬</span>
              {booking.ctaText}
            </button>
            <button
              onClick={handleConsult}
              className="px-8 py-4 bg-sunrise text-forest font-bold rounded-lg hover:bg-yellow-400 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl text-lg"
            >
              {booking.consultText}
            </button>
            <button
              onClick={handlePrivate}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl text-lg"
            >
              {booking.privateText}
            </button>
          </div>

          {/* Additional info */}
          <div className="mt-12 pt-8 border-t border-white/30">
            <p className="text-warm-white text-sm opacity-90">
              Responde en menos de 2 horas durante horario comercial. <br />
              Oficina: Sucre, San Carlos, Alajuela, Costa Rica
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
