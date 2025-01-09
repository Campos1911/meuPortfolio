"use client";

import Image from "next/image";
import React from "react";
import { Element } from "react-scroll";
import TypeIt from "typeit-react";

const Apresent = () => {
  return (
    <Element name="inic">
      <section className="flex flex-col items-center w-full justify-center pt-28">
        <div className="flex md:gap-4 gap-2 text-2xl md:text-5xl lg:text-7xl font-bold">
          Desenvolvedor
          <p className="text-roxo">
            <TypeIt
              options={{ loop: true }}
              getBeforeInit={(instance) => {
                instance
                  .type("Fullstack")
                  .pause(2500)
                  .delete()
                  .pause(2500)
                  .type("Web");
                return instance;
              }}
            />
          </p>
        </div>
        <p className="text-sm md:text-2xl lg:text-3xl">
          Foco em resultados e designs responsivos
        </p>
      </section>

      <div className="lg:flex justify-between w-full pt-6 hidden">
        <Image
          src="/assets/pattern1.png"
          alt="pattern1"
          width={300}
          height={300}
        />
        <Image
          src="/assets/pattern3.png"
          alt="pattern1"
          width={600}
          height={600}
        />
        <Image
          src="/assets/pattern4.png"
          alt="pattern1"
          width={300}
          height={300}
        />
      </div>
    </Element>
  );
};

export default Apresent;
