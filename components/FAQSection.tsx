'use client';

import { useState } from 'react';
import { siteContent } from '@/lib/data';

export default function FAQSection() {
  const { faq } = siteContent.es;
  const [openId, setOpenId] = useState<number | null>(0); // Primer item abierto por defecto

  const toggleOpen = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-moss font-semibold mb-8">
            Respuestas a tus dudas sobre el Birdwatching Tour
          </p>
          <div className="h-1 w-24 bg-sunrise mx-auto mb-8"></div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faq.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-forest/10 rounded-lg overflow-hidden hover:border-forest/30 transition-colors animate-fade-in"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <button
                onClick={() => toggleOpen(idx)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-forest/5 to-transparent hover:from-forest/10 transition-colors text-left"
              >
                <h3 className="text-lg font-serif font-bold text-forest pr-4 flex-1">
                  {item.question}
                </h3>
                <span
                  className={`text-2xl text-forest flex-shrink-0 transition-transform duration-300 ${
                    openId === idx ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Answer section */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === idx ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 bg-beige/30 border-t border-forest/10">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-forest/5 to-moss/5 p-8 rounded-xl border-2 border-forest/10 text-center">
          <p className="text-lg text-gray-700 mb-6">
            ¿No encontraste lo que buscas?
          </p>
          <a
            href="https://wa.me/50687654321?text=Hola%20tengo%20una%20pregunta%20sobre%20el%20tour%20de%20birdwatching" // TODO: Reemplazar número
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-forest hover:bg-forest-dark"
          >
            Contacta por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
