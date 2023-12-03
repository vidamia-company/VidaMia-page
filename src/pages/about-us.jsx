import React from "react";
import { Footer, PageTitle } from "@/widgets/layout";

export function About() {
  return (
    <>
      <section className="relative block h-[16vh] overflow-hidden">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>

      <div className="container mx-auto my-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Primera Fila - Misión y Visión */}
        <div className="bg-white p-8 rounded-lg">
          <PageTitle section="" heading="Misión" />
          <p className="text-lg">
            Proporcionar soluciones en desarrollo de software, servicios de diseño y marketing de alta calidad que ayuden a nuestros clientes a alcanzar sus objetivos empresariales, destacarse en sus respectivas industrias y automatizar sus procesos. Ofrecemos soluciones innovadoras y personalizadas que impulsen el crecimiento y el éxito de nuestros clientes.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg">
          <PageTitle section="" heading="Visión" />
          <p className="text-lg">
            Ser reconocidos como líderes en el campo del desarrollo de software, diseño, marketing y automatizacion, brindando soluciones vanguardistas que superen las expectativas de nuestros clientes. Nos impulsamos por la excelencia y el compromiso.
          </p>
        </div>

        {/* Segunda Fila - Valores */}
        <div className="bg-white p-8 rounded-lg">
          <PageTitle section="" heading="Valores" />
          <ul className="list-disc pl-6">
            <li>Excelencia: Nos caracterizamos por la alta calidad en nuestros resultados, superando las expectativas de nuestros clientes.</li>
            <li>Innovación: Buscamos constantemente nuevas ideas y enfoques para impulsar la creatividad y la mejora continua.</li>
            <li>Colaboración: Trabajamos juntos para alcanzar metas comunes, valorando la diversidad de ideas y habilidades. Fomentamos un ambiente donde cada miembro del equipo es escuchado, contribuyendo así al éxito colectivo de la empresa.</li>
            <li>Integridad: La honestidad, ética y transparencia en todas nuestras relaciones y operaciones son principios fundadores.</li>
          </ul>
        </div>
      </div>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}
