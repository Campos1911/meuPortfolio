"use client";

import Image from "next/image";
import React from "react";
import { Element } from "react-scroll";
import TypeIt from "typeit-react";

const Apresent = () => {
  return (
    <Element name="inic">
      <section className="flex flex-col items-center w-full justify-center pt-28">
        <div className="flex md:gap-4 gap-2 text-2xl md:text-7xl font-bold">
          Desenvolvedor
          <p className="text-roxo">
            <TypeIt
              options={{ loop: true }}
              getBeforeInit={(instance) => {
                instance
                  .type("Front-End")
                  .pause(2500)
                  .delete()
                  .pause(2500)
                  .type("Web");
                return instance;
              }}
            />
          </p>
        </div>
        <p className="md:text-3xl text-sm">
          Foco em resultados e designs responsivos
        </p>
      </section>

      <div className="md:flex justify-between w-full pt-6 hidden">
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

      <div className="justify-between w-full pt-6 hidden">
        <Image
          src="/assets/pattern1.png"
          alt="pattern1"
          width={100}
          height={100}
        />
        <Image
          src="/assets/pattern3.png"
          alt="pattern1"
          width={200}
          height={200}
        />
        <Image
          src="/assets/pattern4.png"
          alt="pattern1"
          width={100}
          height={100}
        />
      </div>
    </Element>
  );
};

export default Apresent;
