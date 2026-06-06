import { siteContent } from '@/lib/data';

export default function SustainabilitySection() {
  const { sustainability } = siteContent.es;

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-4">
            {sustainability.title}
          </h2>
          <p className="text-xl text-moss font-semibold mb-8">{sustainability.subtitle}</p>
          <div className="h-1 w-24 bg-sunrise mx-auto mb-8"></div>
        </div>

        {/* Commitments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sustainability.commitments.map((commitment, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-beige to-warm-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-forest hover:border-t-8 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform origin-left">
                {commitment.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-forest mb-3 group-hover:text-forest-dark">
                {commitment.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {commitment.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact statement */}
        <div className="mt-16 bg-gradient-to-r from-forest to-forest-dark text-white rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-6">
                Impacto de tu experiencia
              </h3>
              <p className="text-warm-white leading-relaxed mb-4">
                Cada tour que realizas contribuye directamente a:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-sunrise text-2xl">→</span>
                  <span className="text-warm-white">Ingresos para guías locales y sus familias</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sunrise text-2xl">→</span>
                  <span className="text-warm-white">Mantenimiento de senderos y estaciones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sunrise text-2xl">→</span>
                  <span className="text-warm-white">Protección de hábitats naturales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sunrise text-2xl">→</span>
                  <span className="text-warm-white">Programas de investigación local</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-serif font-bold mb-6">
                Nuestros números
              </h3>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-sunrise text-4xl font-bold">+150</p>
                  <p className="text-warm-white">Especies de aves protegidas</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-sunrise text-4xl font-bold">500+</p>
                  <p className="text-warm-white">Tours realizados anualmente</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-sunrise text-4xl font-bold">8+</p>
                  <p className="text-warm-white">Guías locales beneficiados</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conservation initiatives */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-forest/5 p-8 rounded-xl border-2 border-forest/10">
            <h3 className="text-2xl font-serif font-bold text-forest mb-6">
              Iniciativas de conservación
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-forest text-2xl">🌱</span>
                <div>
                  <p className="font-semibold text-forest">Reforestación</p>
                  <p className="text-sm text-gray-700">Plantamos árboles nativos anualmente</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-forest text-2xl">📊</span>
                <div>
                  <p className="font-semibold text-forest">Monitoreo de aves</p>
                  <p className="text-sm text-gray-700">Registro de especies y tendencias</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-forest text-2xl">🚫</span>
                <div>
                  <p className="font-semibold text-forest">Control de depredadores</p>
                  <p className="text-sm text-gray-700">Protección de nidos y áreas sensibles</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-forest text-2xl">🎓</span>
                <div>
                  <p className="font-semibold text-forest">Educación ambiental</p>
                  <p className="text-sm text-gray-700">Talleres en comunidades locales</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-sunrise/10 to-sunrise/5 p-8 rounded-xl border-2 border-sunrise/30">
            <h3 className="text-2xl font-serif font-bold text-forest mb-6">
              Tu rol en la conservación
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Como visitante responsable, eres parte del éxito de nuestros programas de conservación.
            </p>
            <div className="space-y-4 bg-white/50 p-6 rounded-lg">
              <p className="font-semibold text-forest mb-4">Puedes ayudar:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Compartiendo tus fotos en redes sociales (etiquétanos)</li>
                <li>✓ Recomendando el tour a amigos y familia</li>
                <li>✓ Respetando la naturaleza durante tu visita</li>
                <li>✓ Aprendiendo sobre conservación local</li>
                <li>✓ Apoyando a nuestros guías locales</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
