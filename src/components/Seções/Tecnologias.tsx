import React from "react";
import { Tecs } from "../Tecs";

const Tecnologias = () => {
  return (
    <section className="flex flex-col h-screen w-full pt-10 items-center">
      <div className="flex w-full items-center justify-center gap-10">
        <div className="border-b-2 w-[20%]"></div>
        <p className="text-4xl font-bold">Tecnologias</p>
        <div className="border-b-2 w-[20%]"></div>
      </div>
      <div className="grid grid-cols-4 pt-10 gap-y-5 gap-x-10">
        {tecs.map((tecnologia, index) => (
          <Tecs nome={tecnologia.nome} path={tecnologia.path} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Tecnologias;

const tecs = [
  {
    nome: "React",
    path: "/assets/react.svg",
  },
  {
    nome: "Next",
    path: "/assets/next.svg",
  },
  {
    nome: "Javascript",
    path: "/assets/javascript.svg",
  },
  {
    nome: "HTML",
    path: "/assets/html.svg",
  },
  {
    nome: "CSS",
    path: "/assets/css.svg",
  },
  {
    nome: "Supabase",
    path: "/assets/supabase.svg",
  },
  {
    nome: "Wordpress",
    path: "/assets/wordpress.svg",
  },
  {
    nome: "Typescript",
    path: "/assets/typescript.svg",
  },
];
