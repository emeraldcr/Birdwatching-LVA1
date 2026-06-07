const whatsappNumber = '50687654321';
const bookingMessage = encodeURIComponent(
  'Hola La Vieja Adventures, quiero reservar una experiencia de Birdwatching. ¿Me pueden compartir disponibilidad y opciones?'
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${bookingMessage}`;

const navItems = [
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Incluye', href: '#incluye' },
  { label: 'FAQ', href: '#faq' },
];

const birdwatchingImage = (fileName: string) => `/images/birdwatching/${fileName}`;

const heroImages = [
  birdwatchingImage('ade4cbcb-0faa-48a1-9d51-e1ef35b4ea76.jpeg'),
  birdwatchingImage('10e47434-c50d-4425-b82b-ed4236d80b5d.jpeg'),
  birdwatchingImage('5aff8c5b-442c-4ef8-8acb-412c073f9100.jpeg'),
];

const gallery = [
  {
    src: birdwatchingImage('ade4cbcb-0faa-48a1-9d51-e1ef35b4ea76.jpeg'),
    alt: 'Fotografía de referencia del tour de birdwatching de La Vieja Adventures',
    label: 'Birdwatching real',
  },
  {
    src: birdwatchingImage('10e47434-c50d-4425-b82b-ed4236d80b5d.jpeg'),
    alt: 'Imagen de referencia de aves y naturaleza para la experiencia guiada',
    label: 'Aves locales',
  },
  {
    src: birdwatchingImage('5aff8c5b-442c-4ef8-8acb-412c073f9100.jpeg'),
    alt: 'Fotografía de referencia de biodiversidad local en el recorrido',
    label: 'Biodiversidad',
  },
  {
    src: birdwatchingImage('2f727422-8f07-4936-8c40-69e9d530a087.jpeg'),
    alt: 'Imagen del entorno natural usado como referencia visual de la página',
    label: 'Bosque tropical',
  },
  {
    src: birdwatchingImage('b8cd51a3-ba04-4c29-88ba-fa3b88e07bf3.jpeg'),
    alt: 'Fotografía de referencia para senderos y puntos de observación',
    label: 'Senderos',
  },
  {
    src: birdwatchingImage('31555f0b-5b6c-43cc-a3ef-efd8976a0a10.jpeg'),
    alt: 'Imagen de referencia del ambiente de La Vieja Adventures',
    label: 'Experiencia local',
  },
  {
    src: birdwatchingImage('8a916eb1-9ac7-4eef-9ca5-4e7fca45fbe7.jpeg'),
    alt: 'Fotografía de referencia para composición de naturaleza y aves',
    label: 'Fotografía ética',
  },
  {
    src: birdwatchingImage('5adaf470-7207-482e-a023-dcb2fa9f1fb6.jpeg'),
    alt: 'Detalle visual de la experiencia de observación de aves',
    label: 'Detalles del tour',
  },
  {
    src: birdwatchingImage('100ccdec-209d-4d37-86ed-981a3060dc8d.jpeg'),
    alt: 'Imagen de referencia de naturaleza para el contenido web',
    label: 'Naturaleza viva',
  },
  {
    src: birdwatchingImage('a04cb7a1-b5f4-48fd-b5fc-38e05d5362c3.jpeg'),
    alt: 'Fotografía de referencia para visitantes del tour de birdwatching',
    label: 'Momentos reales',
  },
  {
    src: birdwatchingImage('94cbfada-965f-4039-8dc9-1f8042be93bd.jpeg'),
    alt: 'Imagen de referencia de paisaje natural de la experiencia',
    label: 'Paisaje',
  },
  {
    src: birdwatchingImage('2ab6f78f-832a-4a94-901e-dc346f41dacb.jpeg'),
    alt: 'Fotografía de referencia de avistamiento y entorno rural',
    label: 'Avistamientos',
  },
  {
    src: birdwatchingImage('5207a9ea-d688-41a7-a4b8-4ab7c0e37ecc.jpeg'),
    alt: 'Imagen de referencia para cierre visual de la galería',
    label: 'La Vieja Adventures',
  },
];

const experiences = [
  {
    title: 'Birdwatching Clásico',
    eyebrow: 'Ideal para empezar',
    duration: '2.5–3 horas',
    copy: 'Caminata guiada por senderos, estaciones de observación y puntos de alta actividad para descubrir especies locales con interpretación naturalista.',
    points: ['Guía local experto', 'Checklist de aves', 'Ritmo familiar'],
  },
  {
    title: 'Bird Photography Tour',
    eyebrow: 'Para fotógrafos',
    duration: '3.5–4 horas',
    copy: 'Ruta diseñada alrededor de luz, paciencia, composición y comportamiento ético para capturar aves sin alterar su entorno.',
    points: ['Luz de amanecer', 'Pausas extendidas', 'Consejos técnicos'],
  },
  {
    title: 'Sunrise + Café Local',
    eyebrow: 'Más reservado',
    duration: '5:30 a.m.',
    copy: 'Vive la actividad más intensa del bosque en las primeras horas y cierra la mañana con café costarricense y conversación local.',
    points: ['Aves activas', 'Café de la zona', 'Ambiente premium'],
  },
  {
    title: 'Private Birding Experience',
    eyebrow: 'Exclusivo',
    duration: 'Flexible',
    copy: 'Experiencia privada para parejas, familias o grupos pequeños, ajustada a tus intereses, condición física y objetivos de fotografía.',
    points: ['Ruta personalizada', 'Atención 1:1', 'Horarios a convenir'],
  },
];

const benefits = [
  { value: '120+', label: 'especies potenciales en la zona' },
  { value: '5:30', label: 'hora recomendada de salida' },
  { value: '100%', label: 'experiencia local auténtica' },
  { value: 'Bajo', label: 'impacto ambiental del tour' },
];

const included = [
  'Guía local con conocimiento de comportamiento de aves',
  'Acceso a senderos y puntos de observación de La Vieja Adventures',
  'Interpretación ambiental de bosque, clima y biodiversidad',
  'Paradas estratégicas para fotografía y uso de binoculares',
  'Recomendaciones antes del tour para ropa, equipo y seguridad',
  'Opciones privadas para parejas, familias y grupos pequeños',
];

const testimonials = [
  {
    quote: 'Una experiencia íntima, silenciosa y muy profesional. El guía sabía exactamente dónde esperar y cómo leer el bosque.',
    author: 'María G.',
    detail: 'Viajera de naturaleza',
  },
  {
    quote: 'Perfecto para fotografía: buena luz, paciencia y rutas sin prisa. Se siente auténtico, no masivo.',
    author: 'Daniel R.',
    detail: 'Fotógrafo aficionado',
  },
  {
    quote: 'El amanecer, el café y las aves hicieron que fuera uno de los mejores momentos de nuestro viaje a Costa Rica.',
    author: 'Sophie & Mark',
    detail: 'Tour privado',
  },
];

const faqs = [
  {
    q: '¿Necesito experiencia previa?',
    a: 'No. Adaptamos la experiencia a principiantes, familias, fotógrafos y observadores avanzados.',
  },
  {
    q: '¿Se garantizan especies específicas?',
    a: 'La naturaleza no se garantiza. Sí optimizamos hora, ruta y silencio para aumentar la probabilidad de avistamientos memorables.',
  },
  {
    q: '¿Qué debo llevar?',
    a: 'Zapatos cerrados, ropa de colores naturales, impermeable ligero, agua, repelente, binoculares si tienes y cámara opcional.',
  },
  {
    q: '¿Cuál es el mejor horario?',
    a: 'Recomendamos salir entre 5:30 a.m. y 6:00 a.m., cuando las aves están más activas y la luz es ideal.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristTrip',
  name: 'La Vieja Adventures Birdwatching',
  description:
    'Experiencias guiadas de observación de aves, fotografía de naturaleza y turismo rural auténtico en Sucre, San Carlos, Costa Rica.',
  touristType: ['Birdwatchers', 'Nature photographers', 'Families', 'Eco travelers'],
  provider: {
    '@type': 'LocalBusiness',
    name: 'La Vieja Adventures',
    address: 'Sucre, San Carlos, Alajuela, Costa Rica',
    telephone: '+506 8765-4321',
    areaServed: 'Costa Rica',
  },
  location: {
    '@type': 'Place',
    name: 'Sucre, San Carlos, Costa Rica',
  },
};

export default function Home() {
  return (
    <main className="site-shell overflow-hidden bg-[#f8f3e8] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <a href="#contenido" className="skip-link">
        Saltar al contenido principal
      </a>

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#07180f]/80 text-white shadow-2xl shadow-black/10 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Navegación principal">
          <a href="#inicio" className="group flex items-center gap-3 text-white" aria-label="La Vieja Adventures Birdwatching inicio">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-emerald-200/30 bg-white/10 text-xl shadow-inner shadow-white/10 transition-transform group-hover:scale-105">
              ◌
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold uppercase tracking-[0.22em] text-emerald-100">La Vieja</span>
              <span className="block font-serif text-lg font-bold tracking-tight">Adventures</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-semibold text-white/80 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href={whatsappUrl} className="btn btn-small hidden sm:inline-flex" target="_blank" rel="noreferrer">
              Reservar
            </a>
            <details className="mobile-menu lg:hidden">
              <summary aria-label="Abrir menú móvil">Menú</summary>
              <div className="absolute right-4 top-16 w-[min(22rem,calc(100vw-2rem))] rounded-3xl border border-white/15 bg-[#07180f] p-4 shadow-2xl">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="block rounded-2xl px-4 py-3 font-semibold text-white/85 hover:bg-white/10 hover:text-white">
                    {item.label}
                  </a>
                ))}
                <a href={whatsappUrl} className="btn mt-3 w-full justify-center" target="_blank" rel="noreferrer">
                  Reservar por WhatsApp
                </a>
              </div>
            </details>
          </div>
        </nav>
      </header>

      <section id="inicio" className="hero relative min-h-[100svh] isolate overflow-hidden text-white">
        <div className="hero-slider absolute inset-0 -z-20" aria-hidden="true">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className="hero-frame absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})`, animationDelay: `${index * 5}s` }}
            />
          ))}
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_25%,rgba(217,171,83,.28),transparent_34%),linear-gradient(90deg,rgba(4,18,12,.95),rgba(4,18,12,.67)_42%,rgba(4,18,12,.18))]" />

        <div id="contenido" className="mx-auto grid min-h-[100svh] max-w-7xl items-center px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div className="max-w-3xl reveal">
            <p className="eyebrow text-emerald-100">Birdwatching premium en Costa Rica</p>
            <h1 className="mt-5 font-serif text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              La Vieja Adventures Birdwatching
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86 sm:text-xl">
              Observa, fotografía y conecta con la biodiversidad de Sucre, San Carlos, en una experiencia guiada por locales que conocen los ritmos del bosque tropical.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} className="btn" target="_blank" rel="noreferrer">
                Reservar Tour
              </a>
              <a href="#contacto" className="btn btn-ghost">
                Contactar
              </a>
              <a href="#experiencias" className="btn btn-glass">
                Ver Experiencias
              </a>
            </div>
          </div>

          <aside className="mt-12 grid gap-4 lg:mt-0 reveal reveal-delay" aria-label="Datos clave del tour">
            <div className="premium-card bg-white/12 text-white backdrop-blur-md">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-100">Experiencia recomendada</p>
              <h2 className="mt-3 font-serif text-3xl font-bold">Sunrise Birdwatching + Café Local</h2>
              <p className="mt-4 text-white/78">Salida al amanecer, senderos privados, fotografía ética y cierre con café costarricense.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                  <strong className="block font-serif text-3xl text-amber-200">{item.value}</strong>
                  <span className="mt-2 block text-sm text-white/76">{item.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="relative -mt-10 z-10 px-4 sm:px-6 lg:px-8" aria-label="Beneficios destacados">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] border border-emerald-950/10 bg-white p-4 shadow-2xl shadow-emerald-950/10 md:grid-cols-3">
          {['Guías locales expertos', 'Reservas rápidas por WhatsApp', 'Turismo rural de bajo impacto'].map((item) => (
            <div key={item} className="flex items-center gap-4 rounded-[1.5rem] bg-emerald-50 p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-emerald-900 text-amber-200">✓</span>
              <p className="font-bold text-emerald-950">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="intro-title">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div className="reveal">
            <p className="eyebrow text-emerald-900">Naturaleza, aventura y autenticidad</p>
            <h2 id="intro-title" className="section-title">Una experiencia diseñada para ver más que aves.</h2>
          </div>
          <div className="reveal reveal-delay space-y-6 text-lg leading-8 text-slate-700">
            <p>
              La Vieja Adventures convierte el birdwatching en una inmersión tranquila y premium: senderos con ritmo pausado, lectura del paisaje, interpretación ambiental y espacios para fotografía sin prisa.
            </p>
            <p>
              La propuesta está pensada para viajeros que buscan Costa Rica real: biodiversidad, conocimiento local, hospitalidad rural y una aventura memorable lejos de experiencias masivas.
            </p>
          </div>
        </div>
      </section>

      <section id="experiencias" className="section bg-[#07180f] text-white" aria-labelledby="experiences-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center reveal">
            <p className="eyebrow text-amber-200">Modalidades</p>
            <h2 id="experiences-title" className="section-title text-white">Elige la ruta ideal para tu forma de explorar.</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {experiences.map((experience) => (
              <article key={experience.title} className="experience-card reveal">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">{experience.eyebrow}</p>
                <h3 className="mt-4 font-serif text-2xl font-bold">{experience.title}</h3>
                <p className="mt-2 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-emerald-100">{experience.duration}</p>
                <p className="mt-5 text-sm leading-7 text-white/72">{experience.copy}</p>
                <ul className="mt-6 space-y-3">
                  {experience.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-white/82">
                      <span className="text-amber-200">✦</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <a href={whatsappUrl} className="mt-8 inline-flex font-bold text-amber-200 hover:text-white" target="_blank" rel="noreferrer">
                  Consultar disponibilidad →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="section" aria-labelledby="gallery-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end reveal">
            <div className="max-w-3xl">
              <p className="eyebrow text-emerald-900">Galería visual</p>
              <h2 id="gallery-title" className="section-title">Fotos reales del repositorio como referencia visual de la experiencia.</h2>
            </div>
            <a href={whatsappUrl} className="btn btn-dark self-start" target="_blank" rel="noreferrer">
              Planear mi visita
            </a>
          </div>
          <div className="gallery-grid mt-12">
            {gallery.map((image, index) => (
              <figure key={image.src} className={`gallery-item reveal ${index === 0 || index === 3 ? 'gallery-tall' : ''}`}>
                <img src={image.src} alt={image.alt} loading={index < 2 ? 'eager' : 'lazy'} decoding="async" />
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="incluye" className="section bg-white" aria-labelledby="included-title">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:px-8">
          <div className="reveal">
            <p className="eyebrow text-emerald-900">Qué incluye</p>
            <h2 id="included-title" className="section-title">Todo lo necesario para una experiencia cómoda, segura y memorable.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {included.map((item) => (
                <div key={item} className="rounded-3xl border border-emerald-950/10 bg-[#f8f3e8] p-5 shadow-sm">
                  <span className="text-emerald-900">✓</span>
                  <p className="mt-3 font-semibold leading-7 text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="premium-card sticky top-28 h-fit bg-emerald-950 text-white reveal reveal-delay">
            <p className="eyebrow text-amber-200">Mejor conversión</p>
            <h3 className="mt-4 font-serif text-4xl font-bold">Reserva temprano. El bosque se despierta antes que el sol.</h3>
            <p className="mt-5 leading-7 text-white/76">Las primeras horas ofrecen mejor luz, menos calor y mayor actividad de aves. Recomendamos confirmar disponibilidad con anticipación.</p>
            <a href={whatsappUrl} className="btn mt-8" target="_blank" rel="noreferrer">
              Reservar ahora
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-emerald-50" aria-labelledby="trust-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center reveal">
            <p className="eyebrow text-emerald-900">Confianza</p>
            <h2 id="trust-title" className="section-title">Visitantes que buscan naturaleza real, no tours genéricos.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.author} className="rounded-[2rem] bg-white p-8 shadow-xl shadow-emerald-950/5 reveal">
                <p className="text-lg leading-8 text-slate-700">“{testimonial.quote}”</p>
                <footer className="mt-6 border-t border-emerald-950/10 pt-5">
                  <strong className="block text-emerald-950">{testimonial.author}</strong>
                  <span className="text-sm text-slate-500">{testimonial.detail}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section" aria-labelledby="faq-title">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center reveal">
            <p className="eyebrow text-emerald-900">FAQ</p>
            <h2 id="faq-title" className="section-title">Preguntas frecuentes antes de reservar.</h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="faq-item reveal">
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="px-4 pb-20 sm:px-6 lg:px-8" aria-labelledby="booking-title">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#07180f] text-white shadow-2xl shadow-emerald-950/20">
          <div className="grid lg:grid-cols-[1.1fr_.9fr]">
            <div className="p-8 sm:p-12 lg:p-16 reveal">
              <p className="eyebrow text-amber-200">Reserva directa</p>
              <h2 id="booking-title" className="font-serif text-4xl font-black tracking-tight sm:text-5xl">¿Listo para escuchar el bosque despertar?</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
                Escríbenos por WhatsApp para confirmar fecha, horario, modalidad, nivel físico y necesidades de fotografía. Te responderemos con una recomendación personalizada.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappUrl} className="btn" target="_blank" rel="noreferrer">
                  Reservar por WhatsApp
                </a>
                <a href="mailto:info@lavieja-adventures.com" className="btn btn-ghost">
                  Enviar email
                </a>
              </div>
            </div>
            <div className="relative min-h-[24rem]">
              <img
                src={birdwatchingImage('5207a9ea-d688-41a7-a4b8-4ab7c0e37ecc.jpeg')}
                alt="Experiencia de birdwatching en bosque tropical de Costa Rica"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07180f] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#04120c] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <p className="font-serif text-2xl font-bold">La Vieja Adventures Birdwatching</p>
            <p className="mt-4 max-w-xl leading-7 text-white/62">Turismo de naturaleza, observación de aves, senderismo, fotografía y experiencias rurales auténticas en Sucre, San Carlos, Costa Rica.</p>
          </div>
          <div>
            <h3 className="font-bold text-amber-200">Explorar</h3>
            <ul className="mt-4 space-y-3 text-white/70">
              {navItems.map((item) => (
                <li key={item.href}><a href={item.href} className="hover:text-white">{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-amber-200">Contacto</h3>
            <address className="mt-4 space-y-3 not-italic text-white/70">
              <p>Sucre, San Carlos, Alajuela</p>
              <p>Costa Rica</p>
              <a href={whatsappUrl} className="block hover:text-white" target="_blank" rel="noreferrer">WhatsApp: +506 8765-4321</a>
              <a href="mailto:info@lavieja-adventures.com" className="block hover:text-white">info@lavieja-adventures.com</a>
            </address>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/45">
          © 2026 La Vieja Adventures. Experiencias de turismo responsable en Costa Rica.
        </div>
        <p className="mx-auto mt-4 max-w-7xl text-xs text-white/45">
          Fotografías enlazadas desde <code>/public/images/birdwatching</code> como material visual propio del repositorio.
        </p>
      </footer>

      <a href={whatsappUrl} className="floating-whatsapp" target="_blank" rel="noreferrer" aria-label="Reservar por WhatsApp">
        <span aria-hidden="true">✆</span>
        <span>Reservar</span>
      </a>
    </main>
  );
}
