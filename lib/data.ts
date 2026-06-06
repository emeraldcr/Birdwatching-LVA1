// Contenido completo del sitio web
// Estructura preparada para soporte bilingüe

export const siteContent = {
  es: {
    // Información general
    company: {
      name: 'La Vieja Adventures',
      location: 'Sucre, San Carlos, Alajuela, Costa Rica',
      phone: '+506 8765-4321', // TODO: Reemplazar con número real
      whatsapp: '50687654321', // TODO: Reemplazar con número real
      email: 'info@lavieja-adventures.com', // TODO: Reemplazar con email real
      instagram: '@lavieja.adventures', // TODO: Reemplazar con Instagram real
      website: 'www.lavieja-adventures.com', // TODO: Reemplazar con sitio real
    },

    // Hero
    hero: {
      title: 'Birdwatching at La Vieja Adventures',
      subtitle: 'Una experiencia guiada para observar, fotografiar y conectar con las aves de Sucre, San Carlos.',
      cta1: 'Reservar tour',
      cta2: 'Ver modalidades',
      backgroundImageAlt: 'Paisaje de bosque con aves en Costa Rica',
    },

    // Introducción
    intro: {
      title: 'Descubre el mundo de las aves',
      subtitle: 'Una experiencia auténtica en la naturaleza',
      content: `Birdwatching at La Vieja Adventures es más que un tour: es una inmersión en la biodiversidad de Costa Rica. 
      
Ubicados en Sucre, San Carlos, en el corazón de una región con alta riqueza en especies de aves, ofrecemos experiencias guiadas que combinan aventura, aprendizaje y fotografía natural. Nuestros guías locales conocen cada sendero, cada mirador y cada rincón donde habitan las aves que hacen especial este lugar.

Desde observadores principiantes hasta birdwatchers avanzados, fotógrafos de naturaleza, familias y grupos educativos: aquí encontrarás la experiencia perfecta para conectar con la naturaleza.`,
      highlights: [
        'Guías locales expertos',
        'Senderos naturales de La Vieja Adventures',
        'Estaciones de observación equipadas',
        'Checklist oficial de aves',
        'Experiencia de bajo impacto ambiental',
        'Beneficio directo para la comunidad',
      ],
    },

    // Modalidades del tour
    modalities: {
      title: 'Modalidades del tour',
      subtitle: 'Elige la experiencia que mejor se adapta a ti',
      items: [
        {
          id: 'classic',
          name: 'Birdwatching Clásico',
          icon: '🦅',
          description: 'La experiencia completa de observación de aves con guía experto.',
          details: [
            'Caminata guiada por los senderos principales',
            'Visita a las mejores estaciones de observación',
            'Explicación sobre aves, ecosistemas y naturaleza local',
            'Paradas estratégicas para observar y fotografiar',
            'Acceso a checklist oficial de aves',
            'Ideal para familias y observadores generales',
          ],
          audience: 'Observadores, turistas, familias',
          duration: '2.5 - 3 horas',
          physicalLevel: 'Bajo a moderado',
          cta: 'Consultar disponibilidad',
          priceEsBRL: '₡35,000', // TODO: Confirmar precio
          priceUSD: '$65',
        },
        {
          id: 'photography',
          name: 'Bird Photography Tour',
          icon: '📸',
          description: 'Especializado en fotografía. Los mejores ángulos, luz y momentos.',
          details: [
            'Enfoque en técnicas de fotografía natural',
            'Horarios de luz óptima para capturar imágenes',
            'Puntos estratégicos para composición',
            'Tiempo extendido en spots principales',
            'Recomendaciones de equipo y configuración',
            'Comportamiento responsable de la fauna',
          ],
          audience: 'Fotógrafos aficionados y avanzados',
          duration: '3.5 - 4 horas',
          physicalLevel: 'Moderado',
          cta: 'Consultar disponibilidad',
          priceEsBRL: '₡45,000', // TODO: Confirmar precio
          priceUSD: '$85',
        },
        {
          id: 'sunrise',
          name: 'Sunrise Birdwatching + Café Local',
          icon: '☀️',
          description: 'Madrugada mágica con aves activas y cierre con café costarricense.',
          details: [
            'Salida al amanecer (5:30 - 6:00 a.m.)',
            'Observación durante las horas más activas',
            'Vistas del amanecer desde miradores',
            'Cierre con café local tradicional',
            'Desayuno ligero según modalidad',
            'Retorno antes de media mañana',
          ],
          audience: 'Madrugadores, románticos, fotógrafos',
          duration: '2.5 - 3 horas',
          physicalLevel: 'Bajo',
          cta: 'Consultar disponibilidad',
          priceEsBRL: '₡40,000', // TODO: Confirmar precio
          priceUSD: '$75',
        },
        {
          id: 'private',
          name: 'Private Birding Experience',
          icon: '👥',
          description: 'Tour completamente personalizado para ti, tu familia o grupo.',
          details: [
            'Experiencia 100% personalizada',
            'Horario a tu conveniencia',
            'Rutas adaptadas a tus intereses',
            'Ritmo propio de observación',
            'Atención exclusiva del guía',
            'Disponible para parejas, familias o grupos pequeños',
          ],
          audience: 'Parejas, familias, grupos pequeños',
          duration: 'Flexible (2.5 - 5 horas)',
          physicalLevel: 'A definir',
          cta: 'Solicitar tour privado',
          priceEsBRL: 'Consultar', // TODO: Definir según grupo
          priceUSD: 'Consultar',
        },
        {
          id: 'educational',
          name: 'Educational Birding Tour',
          icon: '📚',
          description: 'Tour educativo con enfoque científico y de conservación.',
          details: [
            'Registro y documentación de especies',
            'Explicación sobre ecología y comportamiento',
            'Información sobre conservación local',
            'Checklist detallado con datos científicos',
            'Ideal para grupos académicos',
            'Puede incluir guías bilingües',
          ],
          audience: 'Estudiantes, universidades, grupos educativos',
          duration: '3 - 4 horas',
          physicalLevel: 'Bajo a moderado',
          cta: 'Consultar disponibilidad',
          priceEsBRL: 'Según grupo', // TODO: Definir según grupo
          priceUSD: 'Según grupo',
        },
      ],
    },

    // Spots de observación
    birdingSpots: {
      title: 'Estaciones de observación',
      subtitle: 'Recorrido por los mejores puntos para avistar aves',
      spots: [
        {
          id: 1,
          name: 'Plataforma Principal',
          number: '1',
          description: 'Punto de partida con vista amplia hacia el bosque y valle.',
          features: [
            'Bancas rústicas',
            'Letrero interpretativo',
            'Vistas 180°',
            'Ideal para primeros avistamientos',
          ],
          commonBirds: ['Trogones', 'Tangaras', 'Colibríes'],
          accessibility: 'Acceso principal',
        },
        {
          id: 2,
          name: 'Mirador 2',
          number: '2',
          description: 'Mirador estratégico con vistas al cañón y áreas abiertas.',
          features: [
            'Plataforma elevada',
            'Binoculares fijos (futuro)',
            'Información sobre rápaces',
            'Excelente para fotografía',
          ],
          commonBirds: ['Rapaces', 'Momotos', 'Aves de bosque'],
          accessibility: 'Moderado',
        },
        {
          id: 3,
          name: 'Mirador 1',
          number: '3',
          description: 'Punto con vista panorámica del paisaje montañoso.',
          features: [
            'Bancas con respaldo',
            'Sombra natural',
            'Letrero con mapa de aves',
            'Quieto y tranquilo',
          ],
          commonBirds: ['Tucanes', 'Aves de sotobosque', 'Tangaras'],
          accessibility: 'Bajo',
        },
        {
          id: 4,
          name: 'Plataforma de Montaña',
          number: '4',
          description: 'Altura estratégica para observar aves de dosel superior.',
          features: [
            'Estructura segura',
            'Binoculares recomendados',
            'Vistas de copas de árboles',
            'Espacio para espera silenciosa',
          ],
          commonBirds: ['Trogones', 'Colibríes', 'Aves de dosel'],
          accessibility: 'Moderado',
        },
        {
          id: 5,
          name: 'Mirador Plancillo',
          number: '5',
          description: 'Mirador premium con vistas inmejorables (pendiente de habilitar).',
          features: [
            'Vistas panorámicas 360°',
            'En desarrollo',
            'Acceso futuro',
            'Mayor altura',
          ],
          commonBirds: ['Rapaces', 'Aves migratorias', 'Observación general'],
          accessibility: 'Futuro',
        },
      ],
    },

    // Qué incluye
    includes: {
      title: '¿Qué incluye tu experiencia?',
      subtitle: 'Detalles de lo que recibirás en tu tour',
      items: [
        {
          icon: '👤',
          title: 'Guía local experto',
          description: 'Profesional conocedor de la zona, especies y naturaleza local.',
        },
        {
          icon: '🛤️',
          title: 'Acceso a senderos',
          description: 'Acceso completo a todos los senderos y estaciones de La Vieja Adventures.',
        },
        {
          icon: '🔭',
          title: 'Estaciones de observación',
          description: 'Visita a todas las plataformas y miradores equipados.',
        },
        {
          icon: '📋',
          title: 'Checklist oficial',
          description: 'Impreso con categorías de aves del área.',
        },
        {
          icon: '🌳',
          title: 'Interpretación ambiental',
          description: 'Explicación sobre ecosistemas, flora y fauna local.',
        },
        {
          icon: '📸',
          title: 'Tiempo para fotografía',
          description: 'Paradas estratégicas para capturar tus mejores fotos.',
        },
        {
          icon: '☕',
          title: 'Opción de café local',
          description: 'Disponible en modalidades incluidas o como add-on.',
        },
        {
          icon: '🤝',
          title: 'Asistencia del guía',
          description: 'Apoyo durante todo el recorrido para identificar aves y naturaleza.',
        },
      ],
    },

    // Qué traer
    whatToBring: {
      title: '¿Qué debes traer?',
      subtitle: 'Recomendaciones para una experiencia cómoda y segura',
      items: [
        {
          category: 'Ropa',
          items: [
            'Ropa cómoda y con movimiento',
            'Colores naturales (verde, café, gris)',
            'Capas (la temperatura puede variar)',
            'Manga larga (protección)',
          ],
        },
        {
          category: 'Calzado',
          items: [
            'Zapatos de senderismo o cerrados',
            'Suela con buen agarre',
            'Cómodos para caminar 1.5 - 2 km',
            'Evitar sandalias',
          ],
        },
        {
          category: 'Accesorios',
          items: [
            'Binoculares (si tienes)',
            'Cámara fotográfica (opcional)',
            'Repelente de insectos',
            'Bloqueador solar',
          ],
        },
        {
          category: 'Hidratación y protección',
          items: [
            'Agua (mínimo 1.5L)',
            'Impermeable ligero o poncho',
            'Gorro o sombrero',
            'Toalla pequeña',
          ],
        },
        {
          category: 'Actitud',
          items: [
            'Silencio y paciencia',
            'Respeto por la naturaleza',
            'Mente abierta para sorpresas',
            'Espíritu de aventura',
          ],
        },
      ],
    },

    // Aves destacadas
    birds: {
      title: 'Aves que podrías observar',
      subtitle: 'Especies frecuentes según temporada, clima y condiciones naturales',
      disclaimer: 'No garantizamos avistamientos de especies específicas. La observación depende de factores naturales.',
      categories: [
        {
          id: 'trogons',
          name: 'Trogones',
          emoji: '🦜',
          description: 'Aves coloridas y vistosas del bosque. Importantes para el ecosistema.',
          species: ['Trogón Violáceo', 'Trogón Gargantirrojo', 'Trogón Cola Cuadrada'],
          season: 'Todo el año',
        },
        {
          id: 'motmots',
          name: 'Momotos',
          emoji: '🐦',
          description: 'Pájaros únicos con colas dramáticas y comportamiento fascinante.',
          species: ['Momoto Corona Azul', 'Momoto Pecho Gris', 'Momoto Pico Oscuro'],
          season: 'Todo el año',
        },
        {
          id: 'tanagers',
          name: 'Tangaras',
          emoji: '🦆',
          description: 'Aves coloridas, a menudo en grupos. Muy activas y vistosas.',
          species: ['Tangara Escarlata', 'Tangara Azuleja', 'Tangara Dorsiazul'],
          season: 'Residente e invierno',
        },
        {
          id: 'hummingbirds',
          name: 'Colibríes',
          emoji: '🌻',
          description: 'Maravillas en miniatura. Rápidos, ágiles y fascinantes de observar.',
          species: ['Colibrí Garganta Rubí', 'Colibrí Vientre Canela', 'Colibrí Pico Recto'],
          season: 'Todo el año',
        },
        {
          id: 'toucans',
          name: 'Tucanes',
          emoji: '🦣',
          description: 'Iconos de Costa Rica. Inconfundibles por su enorme pico de colores.',
          species: ['Tucán Pico Iris', 'Tucán Castañero', 'Aracari Verde'],
          season: 'Todo el año',
        },
        {
          id: 'raptors',
          name: 'Rapaces',
          emoji: '🦅',
          description: 'Depredadores aéreos. Majestuosos y difíciles de observar.',
          species: ['Águila Solitaria', 'Gavilán Cangrejero', 'Halcón Peregrino'],
          season: 'Todo el año',
        },
        {
          id: 'forest-birds',
          name: 'Aves de bosque',
          emoji: '🌲',
          description: 'Residentes del sotobosque y dosel. Vocalizaciones distintivas.',
          species: ['Chirote Pico Rojo', 'Oropéndola de Montezuma', 'Hormiguero Barreteado'],
          season: 'Todo el año',
        },
        {
          id: 'open-area-birds',
          name: 'Aves de áreas abiertas',
          emoji: '☀️',
          description: 'Aves de bordes, claros y zonas abiertas. A menudo en pares.',
          species: ['Gavilán Ceniciento', 'Azacuán', 'Loro Frente Roja'],
          season: 'Todo el año',
        },
      ],
    },

    // Fotografía
    photography: {
      title: 'Photography de aves',
      subtitle: 'Una modalidad especializada para capturar la belleza natural',
      intro: 'Si eres fotógrafo o quieres mejorar tus habilidades, nuestro Bird Photography Tour está diseñado para ti.',
      features: [
        {
          title: 'Horarios óptimos',
          description: 'Madrugadas y primeras horas con luz dorada ideal.',
        },
        {
          title: 'Puntos estratégicos',
          description: 'Ubicaciones con fondos naturales y composición perfecta.',
        },
        {
          title: 'Tiempo extendido',
          description: 'Pausas más largas en cada spot para esperar el momento perfecto.',
        },
        {
          title: 'Recomendaciones técnicas',
          description: 'Asesoría sobre configuración de cámara y lentes.',
        },
        {
          title: 'Comportamiento responsable',
          description: 'Practicamos fotografía ética, respetando el bienestar animal.',
        },
      ],
      equipment: {
        title: 'Equipo recomendado',
        essential: ['Cámara con buen zoom óptico', 'Lentes 200mm+', 'Trípode o monopie'],
        optional: ['Filtros ND', 'Batería extra', 'Tarjetas de memoria extra', 'Lentes macro'],
      },
    },

    // Sostenibilidad
    sustainability: {
      title: 'Turismo responsable y sostenible',
      subtitle: 'Nuestro compromiso con la naturaleza y la comunidad',
      commitments: [
        {
          title: 'Conservación de hábitats',
          description: 'Mantener y proteger los senderos y zonas de nidación de aves.',
          icon: '🌱',
        },
        {
          title: 'Educación ambiental',
          description: 'Cada tour incluye aprendizaje sobre la importancia de la biodiversidad.',
          icon: '📚',
        },
        {
          title: 'Bajo impacto',
          description: 'Grupos reducidos, senderos establecidos, mínima huella de carbono.',
          icon: '👣',
        },
        {
          title: 'Beneficio comunitario',
          description: 'Los ingresos del tour apoyan a guías locales y sus familias.',
          icon: '🤝',
        },
        {
          title: 'Valoración de aves',
          description: 'Promover la importancia ecológica de las aves en el ecosistema.',
          icon: '🦅',
        },
        {
          title: 'Investigación local',
          description: 'Colaborar con estudiantes y investigadores en estudios de avifauna.',
          icon: '🔬',
        },
      ],
    },

    // Horarios
    schedule: {
      title: 'Horarios disponibles',
      subtitle: 'Mejor observación en las primeras horas de la mañana',
      note: 'Las aves son más activas y vocales al amanecer. Las primeras horas ofrecen mejor luz, menos calor y mayor probabilidad de avistamientos.',
      times: [
        { time: '5:30 a.m.', label: 'Extra temprano (Sunrise tour)', suitable: true },
        { time: '6:00 a.m.', label: 'Muy temprano (Recomendado)', suitable: true },
        { time: '7:00 a.m.', label: 'Temprano (Aceptable)', suitable: true },
        { time: '3:00 p.m.', label: 'Tarde (Menor actividad)', suitable: false },
      ],
      custom: 'Los horarios pueden adaptarse según demanda y disponibilidad.',
    },

    // Preguntas frecuentes
    faq: [
      {
        question: '¿Necesito experiencia previa en birdwatching?',
        answer: 'No. Nuestro tour es para todos los niveles. Contamos con modalidades para principiantes y avanzados. El guía explica todo de forma didáctica.',
      },
      {
        question: '¿El tour es difícil?',
        answer: 'Nuestros senderos son de dificultad baja a moderada. La mayoría son caminos bien mantenidos. Sin embargo, hay cambios de elevación. Consulta con nosotros si tienes limitaciones físicas.',
      },
      {
        question: '¿Se garantizan aves específicas?',
        answer: 'No. La observación de aves depende de factores naturales: clima, estación, hora y comportamiento animal. Sin embargo, la probabilidad de ver varias especies es muy alta.',
      },
      {
        question: '¿Puedo llevar cámara o binoculares?',
        answer: 'Sí, claro. Los binoculares son recomendados. Las cámaras son bienvenidas, especialmente en nuestro Bird Photography Tour.',
      },
      {
        question: '¿Es apto para niños?',
        answer: 'Sí. Es una excelente actividad educativa para niños. Recomendamos mayores de 6 años. Grupos familiares pueden beneficiarse del tour privado.',
      },
      {
        question: '¿Qué pasa si llueve?',
        answer: 'En Costa Rica, lluvia no significa cancelación. Muchas aves siguen activas. Recomendamos traer impermeable ligero. En caso de lluvia extrema, ofrecemos reprogramación.',
      },
      {
        question: '¿Puedo reservar un tour privado?',
        answer: 'Absolutamente. Ofrecemos tours privados personalizados para parejas, familias y grupos pequeños. El precio varía según tamaño del grupo.',
      },
      {
        question: '¿Incluye binoculares?',
        answer: 'No está incluido, pero puedes traer los tuyos. Si necesitas rentar binoculares, consulta con nuestro equipo.',
      },
      {
        question: '¿Cuál es la mejor época para el birdwatching?',
        answer: 'Todo el año es excelente. La estación seca (diciembre-abril) tiene aves residentes. La estación lluviosa (mayo-noviembre) incluye aves migratorias.',
      },
      {
        question: '¿Cuánto tiempo debo dejar disponible?',
        answer: 'Depende de la modalidad. El tour típico es de 2.5 a 4 horas. Incluye tiempo de traslado a punto de partida.',
      },
    ],

    // Sección de reservas
    booking: {
      title: '¿Listo para tu aventura de avistamiento?',
      subtitle: 'Reserva fácilmente por WhatsApp o contáctanos para más información',
      ctaText: 'Reservar por WhatsApp',
      consultText: 'Consultar disponibilidad',
      privateText: 'Solicitar tour privado',
      message: 'Hola, me gustaría información sobre el Birdwatching tour en La Vieja Adventures.',
    },

    // Footer
    footer: {
      description: 'La Vieja Adventures ofrece experiencias auténticas de turismo de aventura y naturaleza en Sucre, San Carlos, Costa Rica.',
      sections: {
        about: {
          title: 'Sobre nosotros',
          links: [
            { text: 'Misión y valores', href: '#' },
            { text: 'Nuestros guías', href: '#' },
            { text: 'Sostenibilidad', href: '#' },
            { text: 'Prensa', href: '#' },
          ],
        },
        tours: {
          title: 'Otros tours',
          links: [
            { text: 'Senderismo de montaña', href: '#' },
            { text: 'Tour de cañones', href: '#' },
            { text: 'Aventura en ríos', href: '#' },
            { text: 'Tours privados', href: '#' },
          ],
        },
        contact: {
          title: 'Contacto',
          phone: '+506 8765-4321', // TODO: Reemplazar
          whatsapp: '+506 8765-4321', // TODO: Reemplazar
          email: 'info@lavieja-adventures.com', // TODO: Reemplazar
          address: 'Sucre, San Carlos, Alajuela, Costa Rica',
        },
      },
      legal: 'Todos los derechos reservados © 2024 La Vieja Adventures. Términos y condiciones | Política de privacidad',
    },
  },

  en: {
    // English version (estructura similar)
    // TODO: Traducir al inglés si es necesario
    // Por ahora se mantiene la misma estructura en español como base
  },
};

// Colores personalizados
export const colors = {
  primary: '#1d5d3b', // forest green
  secondary: '#8b6f47', // earth
  accent: '#f4d03f', // sunrise
  light: '#f5f0e8', // beige
  dark: '#0f3d24', // forest dark
};

// Palabras clave de SEO
export const seoKeywords = [
  'birdwatching Costa Rica',
  'observación de aves',
  'birdwatching San Carlos',
  'fotografía de aves Costa Rica',
  'avistamiento de aves',
  'tour de aves San Carlos',
  'ecoturismo Sucre',
  'La Vieja Adventures',
  'tour naturaleza Costa Rica',
  'aves de Costa Rica',
];
