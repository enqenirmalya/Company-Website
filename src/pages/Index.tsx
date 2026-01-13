import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Process } from '@/components/Process';
import { Team } from '@/components/Team';
import { Clients } from '@/components/Clients';
import { News } from '@/components/News';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Process />
      <Team />
      <Clients />
      <News />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
