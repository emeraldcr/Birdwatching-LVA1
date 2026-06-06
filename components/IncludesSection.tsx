import { siteContent } from '@/lib/data';

export default function IncludesSection() {
  const { includes } = siteContent.es;

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-4">
            {includes.title}
          </h2>
          <p className="text-xl text-moss font-semibold mb-8">{includes.subtitle}</p>
          <div className="h-1 w-24 bg-sunrise mx-auto mb-8"></div>
        </div>

        {/* Includes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {includes.items.map((item, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-beige to-warm-white p-6 rounded-lg border-l-4 border-forest hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-serif font-bold text-forest mb-3 group-hover:text-forest-dark">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Value proposition */}
        <div className="mt-16 bg-forest/5 rounded-xl p-8 border-2 border-forest/10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-forest mb-4">
                Valor completo en cada tour
              </h3>
              <p className="text-gray-700 mb-4">
                Cada experiencia está diseñada para ofrecerte el máximo valor. No solo observas aves, sino que vives una experiencia educativa, sostenible y auténtica.
              </p>
              <p className="text-gray-700">
                Nuestros guías locales comparten décadas de conocimiento. Cada detalle está pensado para tu comodidad y aprendizaje.
              </p>
            </div>
            <div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-sunrise text-2xl font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-forest">Experiencia inmersiva</p>
                    <p className="text-sm text-gray-600">Conexión real con la naturaleza</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sunrise text-2xl font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-forest">Educación ambiental</p>
                    <p className="text-sm text-gray-600">Aprende sobre ecosistemas locales</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sunrise text-2xl font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-forest">Impacto positivo</p>
                    <p className="text-sm text-gray-600">Tu compra apoya a guías locales</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sunrise text-2xl font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-forest">Recuerdos memorables</p>
                    <p className="text-sm text-gray-600">Fotos y experiencias para toda la vida</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
