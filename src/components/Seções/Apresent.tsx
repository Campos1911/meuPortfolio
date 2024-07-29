"use client";

import Image from "next/image";
import React from "react";
import TypeIt from "typeit-react";

const Apresent = () => {
  return (
    <>
      <section className="flex flex-col items-center w-full justify-center pt-28">
        <div className="flex gap-4 text-7xl font-bold">
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
        <p className="text-3xl">Foco em resultados e designs responsivos</p>
      </section>

      <div className="flex justify-between w-full">
        <Image
          src="/assets/pattern1.png"
          alt="pattern1"
          width={300}
          height={300}
        />
        <Image
          src="/assets/pattern3.png"
          alt="pattern1"
          width={500}
          height={500}
        />
        <Image
          src="/assets/pattern4.png"
          alt="pattern1"
          width={300}
          height={300}
        />
      </div>
    </>
  );
};

export default Apresent;
