import { siteContent } from '@/lib/data';

export default function Footer() {
  const { footer, company } = siteContent.es;

  return (
    <footer className="bg-forest-dark text-warm-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              La Vieja Adventures
            </h3>
            <p className="text-warm-white/80 mb-6 leading-relaxed">
              {footer.description}
            </p>
            <p className="text-sm text-warm-white/60">
              {company.location}
            </p>
          </div>

          {/* About section */}
          <div>
            <h4 className="font-serif font-bold text-white text-lg mb-6">
              {footer.sections.about.title}
            </h4>
            <ul className="space-y-3">
              {footer.sections.about.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-warm-white/80 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tours section */}
          <div>
            <h4 className="font-serif font-bold text-white text-lg mb-6">
              {footer.sections.tours.title}
            </h4>
            <ul className="space-y-3">
              {footer.sections.tours.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-warm-white/80 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact section */}
          <div>
            <h4 className="font-serif font-bold text-white text-lg mb-6">
              {footer.sections.contact.title}
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-warm-white/60 text-sm mb-1">Teléfono</p>
                <a
                  href={`tel:${footer.sections.contact.phone}`}
                  className="text-warm-white hover:text-white transition-colors font-semibold"
                >
                  {footer.sections.contact.phone}
                </a>
              </div>
              <div>
                <p className="text-warm-white/60 text-sm mb-1">WhatsApp</p>
                <a
                  href={`https://wa.me/${footer.sections.contact.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-white hover:text-white transition-colors font-semibold"
                >
                  {footer.sections.contact.whatsapp}
                </a>
              </div>
              <div>
                <p className="text-warm-white/60 text-sm mb-1">Email</p>
                <a
                  href={`mailto:${footer.sections.contact.email}`}
                  className="text-warm-white hover:text-white transition-colors font-semibold"
                >
                  {footer.sections.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social and divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Social links */}
            <div className="flex gap-4">
              <a
                href={`https://instagram.com/${company.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-sunrise text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <span className="text-sm font-bold">f</span>
              </a>
              <a
                href={`https://instagram.com/${company.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-sunrise text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-green-500 text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                💬
              </a>
            </div>

            {/* Legal text */}
            <p className="text-sm text-warm-white/60 text-center md:text-right">
              {footer.legal}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black/40 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-warm-white/50">
            Birdwatching at La Vieja Adventures © {new Date().getFullYear()} - Sucre, San Carlos, Costa Rica
          </p>
        </div>
      </div>
    </footer>
  );
}
