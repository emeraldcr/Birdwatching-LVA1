import { siteContent } from '@/lib/data';

export default function PhotographySection() {
  const { photography } = siteContent.es;

  return (
    <section className="section-padding bg-gradient-to-b from-beige/30 to-warm-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-4">
            {photography.title}
          </h2>
          <p className="text-xl text-moss font-semibold mb-8">{photography.subtitle}</p>
          <div className="h-1 w-24 bg-sunrise mx-auto mb-8"></div>
        </div>

        {/* Intro */}
        <div className="max-w-3xl mx-auto mb-16 text-center bg-white p-8 rounded-xl shadow-md border-l-4 border-forest">
          <p className="text-lg text-gray-700 leading-relaxed">
            {photography.intro}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {photography.features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-6 border-t-4 border-forest animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-serif font-bold text-forest mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Equipment section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Essential equipment */}
          <div className="bg-gradient-to-br from-forest to-forest-dark text-white rounded-xl p-8">
            <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
              <span>📷</span>
              {photography.equipment.title}
            </h3>
            
            <div className="mb-8">
              <h4 className="font-semibold mb-4 text-sunrise text-lg">Equipamiento esencial:</h4>
              <ul className="space-y-3">
                {photography.equipment.essential.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-sunrise font-bold">✓</span>
                    <span className="text-warm-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/30 pt-8">
              <h4 className="font-semibold mb-4 text-sunrise text-lg">Opcional (recomendado):</h4>
              <ul className="space-y-3">
                {photography.equipment.optional.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-sunrise">◇</span>
                    <span className="text-warm-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Photography tips */}
          <div className="bg-gradient-to-br from-beige to-earth/10 rounded-xl p-8">
            <h3 className="text-2xl font-serif font-bold text-forest mb-6">
              📸 Tips de fotografía
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-forest mb-2">Composición</h4>
                <p className="text-gray-700 text-sm">
                  Usa la regla de los tercios. Posiciona el ave en las líneas de intersección para composiciones dinámicas.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-forest mb-2">Luz natural</h4>
                <p className="text-gray-700 text-sm">
                  Las primeras horas de la mañana ofrecen luz dorada perfecta. Evita la luz dura del mediodía.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-forest mb-2">Velocidad de obturación</h4>
                <p className="text-gray-700 text-sm">
                  Usa 1/1000s o más rápido para congelar el movimiento de aves en vuelo.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-forest mb-2">Fondo</h4>
                <p className="text-gray-700 text-sm">
                  Busca fondos naturales pero desenfocados. Utiliza aperturas amplias (f/5.6 - f/8).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Behavior and ethics */}
        <div className="bg-forest/5 rounded-xl p-8 border-2 border-forest/10">
          <h3 className="text-2xl font-serif font-bold text-forest mb-6">
            Comportamiento responsable
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-forest mb-4">Lo que SÍ hacer:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  Mantén distancia (mínimo 10 metros)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  Espera pacientemente el momento
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  Sigue las indicaciones del guía
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  Camina silenciosamente
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-forest mb-4">Lo que NO hacer:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-600 font-bold">✗</span>
                  Usar flash (daña la visión de aves)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-600 font-bold">✗</span>
                  Hacer ruidos fuertes
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-600 font-bold">✗</span>
                  Perseguir a las aves
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-600 font-bold">✗</span>
                  Abandonar senderos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
