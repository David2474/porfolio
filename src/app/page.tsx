import { Button } from "../../@/components/ui/button";
import ContactForm from './components/contact/ContactForm'
import "./globals.css";
import ExperienceTimeline from "./components/experience/TimeLineItem";



export default function Home() {
  return (
    <main className="flex min-h-screen text-white bg-zinc-900 flex-col items-center ">
      <header className="py-6 px-4 md:px-6 lg:px-8 border-b border-zinc-700">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-emerald-400">Mi Portafolio</h1>
          <div className="space-x-4">
            <Button variant="ghost" className="text-zinc-300 hover:text-emerald-400 hover:bg-zinc-800">Sobre mí</Button>
            <Button variant="ghost" className="text-zinc-300 hover:text-emerald-400 hover:bg-zinc-800">Proyectos</Button>
            <Button variant="ghost" className="text-zinc-300 hover:text-emerald-400 hover:bg-zinc-800">Contacto</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-2 text-emerald-400">Hola, soy David Gutierrez</h2>
          <p className="text-xl mb-6 text-zinc-300">Desarrollador Web FrontEnd</p>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-zinc-100">Ver mis proyectos</Button>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Sobre mí</h3>
          <p className="mb-4 text-zinc-300">
            Soy un desarrollador apasionado por crear soluciones web innovadoras y eficientes. 
            Con experiencia en tecnologías front-end y back-end, me especializo en construir 
            aplicaciones web robustas y escalables.
          </p>
        </section>

        <section>
          <h4 className="text-2xl font-semibold mb-4 text-emerald-400">Experiencia</h4>
          <ExperienceTimeline/>
        </section>

        <section className="mb-12">
          {/* proyectos */}
        </section>

        <section className="border border-red-600 flex justify-center">
          <ContactForm/>
        </section>
      </main>

    </main>
  );
}
