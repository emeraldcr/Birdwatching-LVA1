import Header from '@/components/Header';
import HeroBirdwatching from '@/components/HeroBirdwatching';
import TourIntro from '@/components/TourIntro';
import ModalitiesSection from '@/components/ModalitiesSection';
import BirdingSpotsSection from '@/components/BirdingSpotsSection';
import IncludesSection from '@/components/IncludesSection';
import WhatToBringSection from '@/components/WhatToBringSection';
import BirdSpeciesSection from '@/components/BirdSpeciesSection';
import PhotographySection from '@/components/PhotographySection';
import SustainabilitySection from '@/components/SustainabilitySection';
import ScheduleSection from '@/components/ScheduleSection';
import FAQSection from '@/components/FAQSection';
import BookingCTA from '@/components/BookingCTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroBirdwatching />

      {/* Main content sections */}
      <TourIntro />

      <ModalitiesSection />

      <section id="spots">
        <BirdingSpotsSection />
      </section>

      <IncludesSection />

      <WhatToBringSection />

      <BirdSpeciesSection />

      <PhotographySection />

      <SustainabilitySection />

      <ScheduleSection />

      <section id="faq">
        <FAQSection />
      </section>

      <section id="booking">
        <BookingCTA />
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </main>
  );
}
