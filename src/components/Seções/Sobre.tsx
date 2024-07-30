import Image from "next/image";
import React from "react";

const Sobre = () => {
  return (
    <section className="flex flex-col h-screen w-full pt-24 items-center">
      <div className="flex w-full items-center justify-center gap-10">
        <div className="border-b-2 w-[20%]"></div>
        <div className="text-4xl font-bold flex gap-2">
          Sobre <p className="text-roxo">Mim</p>
        </div>
        <div className="border-b-2 w-[20%]"></div>
      </div>
      <div className="w-full justify-center flex pt-10 gap-10 px-[5%] h-screen">
        <div className="w-[40%] flex flex-col gap-3 text-xl">
          <p className="font-bold text-4xl">Anthoni Campos</p>
          <p>Vila Velha - ES</p>
          <p>
            Estudante de Engenharia Elétrica na Universidade Federal do Espírito
            Santo - UFES
          </p>
          <p>Atualmente estou me especializando no desenvolvimento Front-end</p>
          <p>
            No geral, meu principal objetivo é buscar conhecimentos novos e me
            aprofundar no desenvolvimento WEB
          </p>
        </div>
        <div className="w-[30%] h-[80%] rounded-md ">
          <Image
            src="/assets/profile-pic.jpg"
            alt="Minha foto"
            width={1000}
            height={1000}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Sobre;
