import Image from "next/image";
import React from "react";

const Sobre = () => {
  return (
    <section className="flex flex-col w-full md:px-0 px-2 pt-24 items-center">
      <div className="flex w-full items-center justify-center gap-10">
        <div className="border-b-2 w-[20%]"></div>
        <div className="md:text-4xl text-2xl font-bold flex gap-2">
          Sobre <p className="text-roxo">Mim</p>
        </div>
        <div className="border-b-2 w-[20%]"></div>
      </div>
      <div className="w-full justify-center flex md:flex-row flex-col pt-10 gap-10 px-[5%]">
        <div className="md:w-[40%] w-full flex flex-col gap-3 text-xl">
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
        <div className="md:w-[30%] w-full h-[80%] rounded-md ">
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
