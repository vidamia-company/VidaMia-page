import React from "react";
import { Avatar, Typography, Button } from "@material-tailwind/react";
import { MapPinIcon, BriefcaseIcon, BuildingLibraryIcon } from "@heroicons/react/24/solid";
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
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            {/* Información de la Fundadora */}
            <div className="flex flex-col lg:flex-row justify-between items-center">

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
