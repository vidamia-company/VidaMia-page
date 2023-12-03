import React from "react";
import { Footer, PageTitle } from "@/widgets/layout";

export function Services() {
  return (
    <>
      <section className="relative block h-[16vh] overflow-hidden">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>

      <div className="container mx-auto my-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Services pendiente reny son los mismos del home pero mas ampliados*/}
        
      </div>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

