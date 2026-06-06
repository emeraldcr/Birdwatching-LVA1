import { siteContent } from '@/lib/data';

export default function TourIntro() {
  const { intro } = siteContent.es;

  return (
    <section className="section-padding bg-warm-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-4">
            {intro.title}
          </h2>
          <p className="text-xl text-moss font-semibold mb-8">{intro.subtitle}</p>
          <div className="h-1 w-24 bg-sunrise mx-auto mb-8"></div>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none text-gray-700">
              {intro.content.split('\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 leading-relaxed text-lg">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-forest/5 p-8 rounded-lg border-l-4 border-forest h-fit">
            <h3 className="text-xl font-serif font-bold text-forest mb-6">¿Por qué elegirnos?</h3>
            <ul className="space-y-3">
              {intro.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-sunrise text-xl font-bold mt-1">✓</span>
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats or visual element */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t-2 border-forest/10">
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-forest mb-2">150+</div>
            <p className="text-gray-600 text-sm">Especies de aves registradas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-forest mb-2">5</div>
            <p className="text-gray-600 text-sm">Estaciones de observación</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-forest mb-2">10+</div>
            <p className="text-gray-600 text-sm">Años de experiencia local</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-forest mb-2">4.9★</div>
            <p className="text-gray-600 text-sm">Calificación de clientes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
