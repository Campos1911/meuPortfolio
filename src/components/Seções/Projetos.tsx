"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Element } from "react-scroll";

const Projetos = () => {
  const router = useRouter();
  return (
    <Element name="projs">
      <section className="flex flex-col w-full px-2 pt-10 items-center">
        <div className="flex w-full items-center justify-center gap-10">
          <div className="border-b-2 w-[20%]"></div>
          <p className="md:text-4xl text-2xl font-bold">Projetos</p>
          <div className="border-b-2 w-[20%]"></div>
        </div>
        <div className="grid md:grid-cols-2 pt-10 gap-5 w-[90%] lg:w-[80%]">
          <Image
            src="/assets/mardu.png"
            alt="Mardu Cosméticos"
            width={1000}
            height={1000}
            className="rounded-md hover:opacity-30 duration-200 cursor-pointer"
            onClick={() => router.push("https://marducosmeticos.com/")}
          ></Image>
          <Image
            src="/assets/paulo.png"
            alt="Mardu Cosméticos"
            width={1000}
            height={1000}
            className="rounded-md hover:opacity-30 duration-200 cursor-pointer"
            onClick={() => router.push("https://dinheirofobia.com/")}
          />
        </div>
      </section>
    </Element>
  );
};

export default Projetos;
