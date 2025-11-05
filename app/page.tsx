import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Ecosystem from '@/components/sections/Ecosystem';
import DockPlusAI from '@/components/sections/DockPlusAI';
import Skills from '@/components/sections/Skills';
import Faith from '@/components/sections/Faith';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Ecosystem />
      <DockPlusAI />
      <Skills />
      <Faith />
      <Contact />
    </main>
  );
}
