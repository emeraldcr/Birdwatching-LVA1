import { siteContent } from '@/lib/data';

export default function BirdingSpotsSection() {
  const { birdingSpots } = siteContent.es;

  return (
    <section className="section-padding bg-gradient-to-b from-warm-white to-beige/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-4">
            {birdingSpots.title}
          </h2>
          <p className="text-xl text-moss font-semibold mb-8">{birdingSpots.subtitle}</p>
          <div className="h-1 w-24 bg-sunrise mx-auto mb-8"></div>
        </div>

        {/* Route visualization */}
        <div className="mb-16">
          <div className="relative">
            {/* Vertical line connecting spots */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-forest via-moss to-beige/50 top-0"></div>

            {/* Spots Grid */}
            <div className="grid md:grid-cols-2 gap-8 relative">
              {birdingSpots.spots.map((spot, idx) => (
                <div
                  key={spot.id}
                  className={`animate-fade-in ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Spot number circle */}
                  <div className={`flex ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} mb-4`}>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-forest text-white rounded-full flex items-center justify-center font-serif font-bold text-lg border-4 border-warm-white z-10">
                      {spot.number}
                    </div>
                  </div>

                  {/* Spot Card */}
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-forest hover:shadow-xl transition-shadow">
                    <h3 className="text-2xl font-serif font-bold text-forest mb-2">
                      {spot.name}
                    </h3>
                    <p className="text-moss font-semibold mb-4">{spot.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-600 mb-2">Características:</p>
                      <ul className="space-y-2">
                        {spot.features.map((feature, fIdx) => (
                          <li key={fIdx} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-sunrise">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Common Birds */}
                    <div className="mb-4 bg-forest/5 p-4 rounded-lg">
                      <p className="text-sm font-semibold text-forest mb-2">Aves frecuentes:</p>
                      <div className="flex flex-wrap gap-2">
                        {spot.commonBirds.map((bird, bIdx) => (
                          <span
                            key={bIdx}
                            className="text-xs bg-forest text-white px-3 py-1 rounded-full"
                          >
                            {bird}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Accessibility */}
                    <div className="text-xs text-gray-500 border-t pt-3">
                      <span className="font-semibold">Accesibilidad:</span> {spot.accessibility}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Route info */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 pt-8 border-t-2 border-forest/10">
          <div className="text-center">
            <div className="text-3xl mb-2">🥾</div>
            <h4 className="font-serif font-bold text-forest mb-2">Distancia total</h4>
            <p className="text-gray-700">Aproximadamente 3-5 km según modalidad</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⏱️</div>
            <h4 className="font-serif font-bold text-forest mb-2">Tiempo de recorrido</h4>
            <p className="text-gray-700">2.5 a 4 horas incluyendo paradas</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🌿</div>
            <h4 className="font-serif font-bold text-forest mb-2">Terreno</h4>
            <p className="text-gray-700">Senderos naturales bien mantenidos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
