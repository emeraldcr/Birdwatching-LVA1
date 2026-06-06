'use client';

export default function HeroBirdwatching() {
  const handleReserve = () => {
    const message = 'Hola, me gustaría información sobre el Birdwatching tour en La Vieja Adventures.';
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/50687654321?text=${encoded}`, '_blank'); // TODO: Reemplazar número
  };

  const handleModalities = () => {
    document.getElementById('modalities')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(29, 93, 59, 0.6) 0%, rgba(15, 61, 36, 0.7) 100%), url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1200 800%27%3E%3Crect fill=%27%231d5d3b%27 width=%271200%27 height=%27800%27/%3E%3Cpath fill=%27%236b8e6f%27 d=%27M0,400 Q300,350 600,400 T1200,400 L1200,800 L0,800 Z%27 opacity=%270.3%27/%3E%3Cpath fill=%27%238fa68f%27 d=%27M0,500 Q300,450 600,500 T1200,500 L1200,800 L0,800 Z%27 opacity=%270.2%27/%3E%3C/svg%3E")',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Placeholder for real image */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest/40 to-forest-dark/60 flex items-center justify-center text-white text-center">
          <p className="text-sm opacity-75">[Imagen de fondo: Bosque, aves, mirador o amanecer - TODO: Reemplazar]</p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          Birdwatching at La Vieja Adventures
        </h1>
        <p className="text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Una experiencia guiada para observar, fotografiar y conectar con las aves de Sucre, San Carlos.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleReserve}
            className="btn-primary bg-forest hover:bg-forest-dark shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Reservar tour
          </button>
          <button
            onClick={handleModalities}
            className="btn-secondary-light border-white hover:bg-white hover:text-forest"
          >
            Ver modalidades
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
