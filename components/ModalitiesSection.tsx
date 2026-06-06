'use client';

import { siteContent } from '@/lib/data';

export default function ModalitiesSection() {
  const { modalities } = siteContent.es;

  const handleConsult = (modalityName: string) => {
    const message = `Hola, me gustaría información sobre la modalidad "${modalityName}" del Birdwatching tour.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/50687654321?text=${encoded}`, '_blank'); // TODO: Reemplazar número
  };

  return (
    <section id="modalities" className="section-padding bg-gradient-to-b from-warm-white via-beige to-warm-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-4">
            {modalities.title}
          </h2>
          <p className="text-xl text-moss font-semibold mb-8">{modalities.subtitle}</p>
          <div className="h-1 w-24 bg-sunrise mx-auto mb-8"></div>
        </div>

        {/* Modalities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {modalities.items.map((modality) => (
            <div
              key={modality.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 card-hover border-t-4 border-forest"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-forest to-forest-dark text-white p-6 text-center">
                <div className="text-5xl mb-3">{modality.icon}</div>
                <h3 className="text-2xl font-serif font-bold">{modality.name}</h3>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 font-medium italic">
                  {modality.description}
                </p>

                {/* Key details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-sunrise text-lg font-bold">👥</span>
                    <div>
                      <p className="font-semibold text-sm text-gray-600">Público</p>
                      <p className="text-gray-800">{modality.audience}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sunrise text-lg font-bold">⏱️</span>
                    <div>
                      <p className="font-semibold text-sm text-gray-600">Duración</p>
                      <p className="text-gray-800">{modality.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sunrise text-lg font-bold">🏔️</span>
                    <div>
                      <p className="font-semibold text-sm text-gray-600">Nivel físico</p>
                      <p className="text-gray-800">{modality.physicalLevel}</p>
                    </div>
                  </div>
                </div>

                {/* Details list */}
                <div className="bg-forest/5 p-4 rounded-lg mb-6">
                  <p className="text-sm font-semibold text-forest mb-3">Incluye:</p>
                  <ul className="space-y-2">
                    {modality.details.slice(0, 3).map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-forest font-bold">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="bg-sunrise/10 p-4 rounded-lg mb-6 text-center">
                  <p className="text-sm text-gray-600 mb-2">Desde</p>
                  <p className="text-2xl font-serif font-bold text-forest">
                    {modality.priceEsBRL}
                  </p>
                  <p className="text-xs text-gray-500">≈ {modality.priceUSD}</p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleConsult(modality.name)}
                  className="w-full btn-primary bg-forest hover:bg-forest-dark text-white font-semibold py-2 rounded-lg transition-all"
                >
                  {modality.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note about customization */}
        <div className="bg-beige border-l-4 border-forest p-6 rounded-lg text-center max-w-2xl mx-auto">
          <p className="text-gray-700 text-lg">
            <strong>¿No encuentras lo que buscas?</strong> Todas nuestras modalidades pueden personalizarse según tus necesidades.
            Contáctanos para diseñar tu experiencia perfecta.
          </p>
        </div>
      </div>
    </section>
  );
}
