/* eslint-disable @next/next/no-img-element */
import React from "react";

interface TecsProps {
  nome: string;
  path: string;
}

const Tecs = ({ nome, path }: TecsProps) => {
  return (
    <div className="border-roxo flex flex-col items-center justify-between h-60 border-2 p-3 rounded-lg">
      <img src={path} alt={`${nome} logo`} />
      <p className="text-roxo font-bold text-2xl">{nome}</p>
    </div>
  );
};

export default Tecs;
