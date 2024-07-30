import Image from "next/image";
import React from "react";

const Contato = () => {
  return (
    <section className="flex flex-col h-screen w-full pt-10 items-center absolute">
      <div className="flex w-full items-center justify-center gap-10">
        <div className="border-b-2 w-[20%]"></div>
        <div className="text-4xl font-bold flex gap-2">Contato</div>
        <div className="border-b-2 w-[20%]"></div>
      </div>

      <div className="w-full justify-center flex py-10 px-[5%]">
        <div className="border-2 border-roxo w-[80%] rounded-xl p-10 gap-10 flex flex-col items-center">
          <p className="font-bold text-3xl">Vamos construir algo juntos!</p>

          <form className="w-full flex flex-col gap-5 items-center">
            <section className="flex flex-col gap-2 w-full ">
              <p className="text-xl font-bold">Qual o seu nome?</p>
              <input
                className="rounded-lg h-8 text-black outline-none"
                type="text"
                name="nome"
                id="nome"
              />
            </section>

            <section className="flex flex-col gap-2 w-full ">
              <p className="text-xl font-bold">Email para contato:</p>
              <input
                className="rounded-lg h-8 text-black outline-none"
                type="text"
                name="nome"
                id="nome"
              />
            </section>

            <section className="flex flex-col gap-2 w-full ">
              <p className="text-xl font-bold">Me conte sobre sua ideia:</p>
              <textarea
                className="rounded-lg h-28 text-black outline-none"
                name="nome"
                id="nome"
              />
            </section>

            <button className="bg-roxo w-[25%] h-10 rounded-lg hover:bg-purple-900 duration-200">
              Enviar
            </button>
          </form>

          <Image
            src="/assets/pattern1.png"
            alt="Pattern 5"
            width={300}
            height={300}
            className="absolute left-0 z-[-10]"
          />
          <Image
            src="/assets/pattern2.png"
            alt="Pattern 2"
            width={200}
            height={200}
            className="absolute right-0 translate-y-[-50%] z-[-10]"
          />
        </div>
      </div>
    </section>
  );
};

export default Contato;
