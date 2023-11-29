import React from "react";
import {
  Avatar,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function About() {
  return (
    <>
      {/* Sección de Encabezado */}
      <section className="relative block h-[50vh]">
        {/* Fondo de la sección */}
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        {/* Filtro oscuro sobre el fondo */}
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>

      {/* Sección Principal */}
      <section className="relative bg-white py-16">
        <div className="container mx-auto">
          {/* Información de la Fundadora */}
          <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <h2>Misión</h2>
              <p>
                Proporcionar soluciones en desarrollo de software, servicios de diseño y marketing de alta calidad que ayuden a nuestros clientes a alcanzar sus objetivos empresariales, destacarse en sus respectivas industrias y automatizar sus procesos. Ofrecemos soluciones innovadoras y personalizadas que impulsen el crecimiento y el éxito de nuestros clientes.
              </p>

              <h2>Visión</h2>
              <p>
                Ser reconocidos como líderes en el campo del desarrollo de software, diseño, marketing y automatizacion, brindando soluciones vanguardistas que superen las expectativas de nuestros clientes. Nos impulsamos por la excelencia y el compromiso.
              </p>

              <h2>Valores</h2>
              <ul>
                <li>Excelencia: Nos caracterizamos por la alta calidad en nuestros resultados, superando las expectativas de nuestros clientes.</li>
                <li>Innovación: Buscamos constantemente nuevas ideas y enfoques para impulsar la creatividad y la mejora continua.</li>
                <li>Colaboración: Trabajamos juntos para alcanzar metas comunes, valorando la diversidad de ideas y habilidades. Fomentamos un ambiente donde cada miembro del equipo es escuchado, contribuyendo así al éxito colectivo de la empresa.</li>
                <li>Integridad: La honestidad, ética y transparencia en todas nuestras relaciones y operaciones son principios fundadores.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pie de Página */}
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}
