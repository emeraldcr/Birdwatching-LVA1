import { siteContent } from '@/lib/data';

export default function WhatToBringSection() {
  const { whatToBring } = siteContent.es;

  const categoryIcons: Record<string, string> = {
    Ropa: '👕',
    Calzado: '👟',
    Accesorios: '🎒',
    'Hidratación y protección': '💧',
    Actitud: '💪',
  };

  return (
    <section className="section-padding bg-gradient-to-b from-beige/30 to-warm-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-4">
            {whatToBring.title}
          </h2>
          <p className="text-xl text-moss font-semibold mb-8">{whatToBring.subtitle}</p>
          <div className="h-1 w-24 bg-sunrise mx-auto mb-8"></div>
        </div>

        {/* Packing list grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {whatToBring.items.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border-t-4 border-forest animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-forest/10">
                <span className="text-3xl">{categoryIcons[category.category] || '📦'}</span>
                <h3 className="text-xl font-serif font-bold text-forest">
                  {category.category}
                </h3>
              </div>

              {/* Items list */}
              <ul className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <span className="text-sunrise font-bold mt-0.5">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tips section */}
        <div className="bg-gradient-to-r from-forest/5 to-moss/5 rounded-xl p-8 border-l-4 border-forest">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-forest mb-4 flex items-center gap-2">
                <span>💡</span>
                Consejos prácticos
              </h3>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>Capas:</strong> El clima en la montaña puede cambiar. Trae prenda de más.
                </li>
                <li className="text-gray-700">
                  <strong>Colores:</strong> Verde, café y gris ayudan a pasar desapercibido con la fauna.
                </li>
                <li className="text-gray-700">
                  <strong>Zapatos:</strong> Asegúrate de estar cómodo. Caminarás en terreno natural.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-forest mb-4 flex items-center gap-2">
                <span>🎯</span>
                Lo más importante
              </h3>
              <div className="bg-white p-4 rounded-lg border-2 border-sunrise">
                <p className="text-lg font-serif font-bold text-forest mb-2">
                  Silencio y paciencia
                </p>
                <p className="text-gray-700 text-sm">
                  Las aves detectan movimiento rápido y ruido. Camina lentamente, habla bajito y espera con tranquilidad. Esa es la actitud que hará tu experiencia memorable.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rentals note */}
        <div className="mt-12 bg-beige p-6 rounded-lg text-center">
          <p className="text-gray-700 text-lg">
            <strong>¿Olvidaste algo?</strong> Consulta con nosotros sobre opciones de renta o préstamo de binoculares y otros equipos.
          </p>
        </div>
      </div>
    </section>
  );
}
