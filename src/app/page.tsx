import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { Courses } from "@/components/Courses";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { PageMargin } from "@/components/PageMargin";

export default function Home() {
  return (
    <>
      <PageMargin />
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
