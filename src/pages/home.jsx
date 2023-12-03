import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const asunto = "Asunto Dinámico";
  const cuerpoMensaje = "Cuerpo del Mensaje Dinámico";

  const handleNavigate = () => {
    navigate("/about-us");
  };
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                ¡Bienvenido a VidaMia!
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                En el mundo digital, cada empresa tiene una historia única. La
                nuestra comienza contigo. Somos apasionados por transformar
                ideas en soluciones a medida. En <b>VidaMia</b>, fusionamos la
                creatividad con la tecnología para crear <b>software</b> que no
                solo resuelve problemas, sino que impulsa el crecimiento.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Experimenta la excelencia con VidaMia.
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                ¡Explora nuevas fronteras con VidaMia, una empresa visionaria en
                el mundo del desarrollo de software! En nuestro viaje inicial,
                nos inspira la pasión por transformar desafíos en oportunidades,
                impulsados por la innovación y la creatividad. En VidaMia, no
                solo creamos líneas de código; tejemos historias digitales que
                dan vida a tus visiones empresariales.
                <br />
                <br />
                Nuestra filosofía radica en la búsqueda constante de soluciones
                elegantes para complejas problemáticas. Con un equipo diverso de
                mentes brillantes, abrazamos cada desafío como una oportunidad
                para aprender y crecer. En VidaMia, creemos en el poder de la
                colaboración y la flexibilidad, construyendo puentes entre la
                visión y la realidad con soluciones que trascienden lo
                convencional.
              </Typography>
              <Button variant="filled" onClick={handleNavigate}>
                read more
              </Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="rounded-lg border shadow-lg shadow-gray-500/10">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.png"
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    Enterprise
                  </Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    VidaMia
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    VidaMia: Creando contenido especial para personas
                    extraordinarias. Creemos en la motivación y perseverancia
                    para alcanzar tus metas. Ofrecemos soluciones tecnológicas
                    avanzadas y contamos con una división de diseño que da vida
                    a tus ideas con creatividad. Descubre un mundo de
                    posibilidades donde innovación y diseño se encuentran para
                    ofrecerte experiencias únicas. ¡Vive la vida con VidaMia! ✨
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-48 pt-20">
        <div className="container mx-auto">
          <PageTitle
            section="Nuestro Equipo"
            heading="Conoce a nuestros talentos"
          >
            Siguiendo la filosofía de VidaMia en el desarrollo de software,
            nuestros expertos, liderados por Alejandra Pachón, directora de
            desarrollo, destacan en la creación de soluciones innovadoras y
            eficientes.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name, link }) => (
                      <a href={link} key={name} target="_blank">
                        <IconButton color={color} variant="text">
                          <i className={`fa-brands text-xl fa-${name}`} />
                        </IconButton>
                      </a>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-white px-4 py-24">
        <div className="container mx-auto">
          <PageTitle section="VidaMia" heading="Servicios">
            Experimenta la excelencia con VidaMia. Sumérgete en nuestros
            destacados servicios diseñados para satisfacer tus necesidades
            únicas:
          </PageTitle>
          <div className="mx-auto mb-48 mt-20 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle
            section="Contáctanos"
            heading="¿Quieres trabajar con nosotros?"
          >
            Completa este formulario y nos pondremos en contacto contigo en 24
            horas.
          </PageTitle>

          <form
            className="mx-auto mt-12 w-full max-w-2xl"
            action={`mailto:vidastylecompany@gmail.com?subject=${encodeURIComponent(
              asunto,
            )}&body=${encodeURIComponent(cuerpoMensaje)}`}
            method="post"
            encType="text/plain"
          >
            <div className="mb-8 flex flex-col gap-8 lg:flex-row">
              <Input
                variant="outlined"
                size="lg"
                label="Nombre completo"
                className="flex-1"
              />
              <Input
                variant="outlined"
                size="lg"
                label="Direccion de correo"
                className="flex-1"
              />
            </div>
            <Textarea
              variant="outlined"
              size="lg"
              label="Mensaje"
              rows={8}
              className="w-full"
            />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  Acepto los{" "}
                  <a
                    href="#"
                    className="ml-1 font-medium transition-colors hover:text-gray-900"
                  >
                    Términos y Condiciones
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button
              type="submit"
              variant="gradient"
              size="lg"
              className="mt-8"
              fullWidth
            >
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-wcursorhite">
        <Footer />
      </div>
    </>
  );
}

export default Home;
