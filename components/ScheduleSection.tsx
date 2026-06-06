import { siteContent } from '@/lib/data';

export default function ScheduleSection() {
  const { schedule } = siteContent.es;

  return (
    <section className="section-padding bg-gradient-to-b from-beige/30 to-warm-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-4">
            {schedule.title}
          </h2>
          <p className="text-xl text-moss font-semibold mb-8">{schedule.subtitle}</p>
          <div className="h-1 w-24 bg-sunrise mx-auto mb-8"></div>
        </div>

        {/* Note about best times */}
        <div className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-xl border-l-4 border-forest shadow-md">
          <p className="text-lg text-gray-700 leading-relaxed">
            {schedule.note}
          </p>
        </div>

        {/* Schedule times */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {schedule.times.map((slot, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-xl transition-all transform hover:scale-105 animate-fade-in ${
                slot.suitable
                  ? 'bg-gradient-to-br from-forest/5 to-moss/5 border-2 border-forest shadow-md'
                  : 'bg-gray-50 border-2 border-gray-300 opacity-60'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-4xl font-serif font-bold text-forest mb-2">
                    {slot.time}
                  </p>
                  <p className="text-gray-700 font-medium">{slot.label}</p>
                </div>
                <div className="text-3xl">
                  {slot.suitable ? '⭐' : '◆'}
                </div>
              </div>
              {slot.suitable && (
                <p className="text-sm text-forest font-semibold mt-4">
                  Horario recomendado
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Custom arrangements note */}
        <div className="max-w-3xl mx-auto bg-forest/10 p-8 rounded-xl border-2 border-forest/20 text-center">
          <p className="text-lg text-gray-700">
            <strong>¿Necesitas un horario diferente?</strong> <br />
            <span className="text-sm">{schedule.custom}</span>
          </p>
        </div>

        {/* Why early is better - Visual comparison */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-b from-sunrise/20 to-sunrise/5 p-6 rounded-lg border-t-4 border-sunrise">
            <div className="text-4xl mb-3">🌅</div>
            <h4 className="font-serif font-bold text-forest mb-2">Temprano</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>✓ Mayor actividad de aves</li>
              <li>✓ Luz dorada perfecta</li>
              <li>✓ Menos calor</li>
              <li>✓ Ambiente tranquilo</li>
              <li>✓ Mejores fotos</li>
            </ul>
          </div>

          <div className="bg-gradient-to-b from-yellow-100 to-yellow-50 p-6 rounded-lg border-t-4 border-yellow-400">
            <div className="text-4xl mb-3">☀️</div>
            <h4 className="font-serif font-bold text-forest mb-2">Mediodía</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>◇ Menor actividad</li>
              <li>◇ Luz muy fuerte</li>
              <li>◇ Calor intenso</li>
              <li>◇ Aves en reposo</li>
              <li>◇ Menos vistosos</li>
            </ul>
          </div>

          <div className="bg-gradient-to-b from-moss/20 to-moss/5 p-6 rounded-lg border-t-4 border-moss">
            <div className="text-4xl mb-3">🌤️</div>
            <h4 className="font-serif font-bold text-forest mb-2">Tarde</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>△ Actividad moderada</li>
              <li>△ Luz más blanda</li>
              <li>△ Temperatura baja</li>
              <li>△ Algunos cantos</li>
              <li>△ Opción secundaria</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
