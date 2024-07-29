/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

interface TecsProps {
  nome: string;
  path: string;
}

const Tecs = ({ nome, path }: TecsProps) => {
  return (
    <div className="border-roxo flex flex-col items-center justify-between h-60 border-2 p-5 rounded-lg hover:translate-y-[-10px] duration-[250ms]">
      <Image src={path} alt={`${nome} logo`} width={130} height={130} />
      <p className="text-roxo font-bold text-2xl">{nome}</p>
    </div>
  );
};

export default Tecs;
