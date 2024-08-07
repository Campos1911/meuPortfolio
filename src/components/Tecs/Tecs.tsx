/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

interface TecsProps {
  nome: string;
  path: string;
}

const Tecs = ({ nome, path }: TecsProps) => {
  return (
    <div
      className="border-roxo flex flex-col items-center justify-between md:h-60 border-2  
      p-5 rounded-lg hover:translate-y-[-10px] duration-[250ms] hover:border-white hover:text-white text-roxo"
    >
      <Image src={path} alt={`${nome} logo`} width={130} height={130} />
      <p className="font-bold pt-2 md:text-2xl">{nome}</p>
    </div>
  );
};

export default Tecs;
