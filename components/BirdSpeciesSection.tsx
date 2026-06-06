'use client';

import { useState } from 'react';
import { siteContent } from '@/lib/data';

export default function BirdSpeciesSection() {
  const { birds } = siteContent.es;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-4">
            {birds.title}
          </h2>
          <p className="text-xl text-moss font-semibold mb-8">{birds.subtitle}</p>
          
          {/* Disclaimer */}
          <div className="inline-block bg-yellow-50 border-l-4 border-yellow-400 px-6 py-4 rounded-r-lg mb-8">
            <p className="text-yellow-800 text-sm italic">
              ⚠️ {birds.disclaimer}
            </p>
          </div>
          <div className="h-1 w-24 bg-sunrise mx-auto mb-8"></div>
        </div>

        {/* Birds Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {birds.categories.map((category) => (
            <div
              key={category.id}
              onClick={() => toggleExpanded(category.id)}
              className="cursor-pointer group relative bg-gradient-to-br from-warm-white to-beige rounded-xl p-6 border-2 border-forest/20 hover:border-forest transition-all hover:shadow-lg overflow-hidden animate-fade-in"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/3 transition-all"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-3">{category.emoji}</div>
                <h3 className="text-xl font-serif font-bold text-forest mb-2 group-hover:text-forest-dark">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{category.description}</p>

                {/* Season badge */}
                <div className="inline-block bg-forest text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {category.season}
                </div>

                {/* Species preview */}
                {expandedId === category.id ? (
                  <div className="mt-4 pt-4 border-t-2 border-forest/20">
                    <p className="text-xs font-semibold text-forest mb-2">Especies frecuentes:</p>
                    <ul className="space-y-2">
                      {category.species.map((sp, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-sunrise">•</span>
                          <span>{sp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="text-xs text-gray-500 mt-3 italic">Haz clic para ver especies</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Identification guide section */}
        <div className="bg-forest/5 rounded-xl p-8 border-2 border-forest/10">
          <h3 className="text-2xl font-serif font-bold text-forest mb-6">Guía de identificación</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-serif font-bold text-forest mb-4 text-lg">Características clave</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <p className="font-semibold text-forest">Color</p>
                    <p className="text-sm text-gray-700">Observa los colores únicos de cada especie</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🔊</span>
                  <div>
                    <p className="font-semibold text-forest">Vocalización</p>
                    <p className="text-sm text-gray-700">Aprende a identificar por sonidos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🦅</span>
                  <div>
                    <p className="font-semibold text-forest">Tamaño y forma</p>
                    <p className="text-sm text-gray-700">Forma del pico, alas y cola</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <p className="font-semibold text-forest">Hábitat</p>
                    <p className="text-sm text-gray-700">Dónde buscas según la ubicación</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-forest mb-4 text-lg">Tips para observar</h4>
              <ol className="space-y-3 list-decimal list-inside">
                <li className="text-gray-700">
                  <span className="font-semibold">Escucha primero</span> - A menudo oyes antes de ver
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">Muévete lentamente</span> - Los movimientos rápidos las asustan
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">Usa binoculares</span> - Mejor vista sin estar muy cerca
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">Ten paciencia</span> - Espera en un lugar tranquilo
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">Aprende patrones</span> - Rutina diaria de las aves
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
