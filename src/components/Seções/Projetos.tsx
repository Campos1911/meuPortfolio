import React from "react";

const Projetos = () => {
  return (
    <section className="flex flex-col w-full px-2 pt-10 items-center">
      <div className="flex w-full items-center justify-center gap-10">
        <div className="border-b-2 w-[20%]"></div>
        <p className="md:text-4xl text-2xl font-bold">Projetos</p>
        <div className="border-b-2 w-[20%]"></div>
      </div>
      <div className="grid md:grid-cols-2 pt-10 gap-5 w-[80%]">
        <div className="w-[100%] h-64 bg-gray-200 rounded-xl"></div>
        <div className="w-[100%] h-64 bg-gray-200 rounded-xl"></div>
        <div className="w-[100%] h-64 bg-gray-200 rounded-xl"></div>
        <div className="w-[100%] h-64 bg-gray-200 rounded-xl"></div>
      </div>
    </section>
  );
};

export default Projetos;
