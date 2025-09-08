import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PopularTours from '@/components/PopularTours';
import Destinations from '@/components/Destinations';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';

import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PopularTours />
        <Destinations />
        <WhyChooseUs />
        <Testimonials />

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
