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
              <div className="relative flex gap-6 items-start">
                {/* Avatar de la fundadora */}
                <div className="-mt-20 w-40">
                  <Avatar
                    src="/img/founder-avatar.jpg"
                    alt="Founder's Picture"
                    variant="circular"
                    className="h-full w-full"
                  />
                </div>
                {/* Detalles de la fundadora */}
                <div className="flex flex-col mt-2">
                  <Typography variant="h4" color="blue-gray">
                    Nombre de la Fundadora
                  </Typography>
                  <Typography variant="paragraph" color="gray" className="!mt-0 font-normal">
                    Correo Electrónico: fundadora@mail.com
                  </Typography>
                </div>
              </div>

              {/* Estadísticas de la Empresa */}
              <div className="mt-10 mb-10 flex lg:flex-col justify-between items-center lg:justify-end lg:mb-0 lg:px-4 flex-wrap lg:-mt-5">
                <Button className="bg-primary text-white w-fit lg:ml-auto">Conectar</Button>
                <div className="flex justify-start py-4 pt-8 lg:pt-4">
                  <div className="mr-4 p-3 text-center">
                    <Typography variant="lead" color="blue-gray" className="font-bold uppercase">
                      22
                    </Typography>
                    <Typography variant="small" className="font-normal text-blue-gray-500">
                      Amigos
                    </Typography>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <Typography variant="lead" color="blue-gray" className="font-bold uppercase">
                      10
                    </Typography>
                    <Typography variant="small" className="font-normal text-blue-gray-500">
                      Fotos
                    </Typography>
                  </div>
                  <div className="p-3 text-center lg:mr-4">
                    <Typography variant="lead" color="blue-gray" className="font-bold uppercase">
                      89
                    </Typography>
                    <Typography variant="small" className="font-normal text-blue-gray-500">
                      Comentarios
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            {/* Detalles adicionales de la Fundadora */}
            <div className="mb-10 space-y-2">
              <div className="flex items-center gap-2">
                <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                <Typography className="font-medium text-blue-gray-500">
                  Los Angeles, California
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                <Typography className="font-medium text-blue-gray-500">
                  Gerente de Soluciones - Oficial Creativo de Tim
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                <Typography className="font-medium text-blue-gray-500">
                  Universidad de Ciencias de la Computación
                </Typography>
              </div>
            </div>

            {/* Historia de la Fundadora */}
            <div className="py-6">
              <div className="flex w-full flex-col items-start lg:w-1/2">
                <Typography className="mb-6 font-normal text-blue-gray-500">
                  Bienvenidos a [Nombre de la Empresa], donde cada historia tiene un comienzo
                  único. Fundada por [Nombre de la Fundadora], nuestra misión es [tu misión].
                  Con visión de futuro y determinación, [Nombre de la Fundadora] transformó
                  su visión en realidad, estableciendo [Nombre de la Empresa] como un referente en
                  [tu industria]. Conoce más sobre nosotros y únete a nuestra historia en constante
                  evolución.
                </Typography>
                <Button variant="text">Leer más</Button>
              </div>
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
