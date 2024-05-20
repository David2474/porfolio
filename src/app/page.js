import Navbar from "./components/navbar/Navbar"
import Aboutme from "./components/information/Aboutme";
import ImageProfile from "./components/information/ImageProfile";
import Proyects from "./components/information/Proyects";
import TecnoList from "./components/tecnologies/TecnoList";
import "./globals.css";
import ContactForm from "./components/contact/ContactForm";



export default function Home() {
  return (
    <main className="flex min-h-screen border text-white bg-zinc-900 flex-col items-center ">
      {/* SECTION OF NAVBAR */}
      <section className="flex flex-col w-11/12 items-center justify-center">
        <section className="flex flex-col justify-center items-center">
          <div className="w-11/12 flex items-center justify-center flex-col sm:flex-row sm:justify-between">
            <Navbar />
          </div>

          <div className="flex flex-col w-11/12 justify-center sm:justify-around items-center sm:flex-row-reverse">
            <ImageProfile />
            <Aboutme />
          </div>
        </section>

        {/* SECTION OF TECNOLOGIES */}

        <section className="w-11/12 flex flex-col">
          <hr className="w-full border-[1.5px]"></hr>
          <TecnoList />
        </section>

        {/* SECTION OF PROYECTS */}

        <section className="w-11/12 flex flex-col items-center justify-center">
          <hr className="w-full border-[1.5px]"></hr>
          <Proyects />
          <hr className="w-full border-[1.5px]"></hr>
        </section>

        {/* SECTION OF CONTACT ME */}

        <section className="w-11/12 flex flex-col  sm:flex-row justify-center sm:justify-around items-center">
          <div className="flex flex-col justify-center  items-center sm:w-2/4 w-12/12">
            <p className="text-xl font-semibold sm:text-4xl my-2">Contactame</p>
            <p className="w-11/12 text-gray-300">
            Contáctame para hablar sobre tus proyectos y crear software innovador juntos
            </p>
          </div>
          <ContactForm />
        </section>
      </section>

      {/* FOOTER */}

      <section className="flex w-10/12 flex-col justify-center items-center my-10">
        <hr className="w-full border-[1.5px]"></hr>
        <div className="w-11/12 flex my-8 items-center justify-center flex-col sm:flex-row sm:justify-between">
          <Navbar />
        </div>
      </section>
    </main>
  );
}
