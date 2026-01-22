import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen overflow-y-auto"> 
      <Navbar />
     
      <section id="home"><Hero /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="resume"><Resume /></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}