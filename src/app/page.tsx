import { Layout } from "@/components/Layout";
import { Apresent } from "@/components/Seções";
import { Tecs } from "@/components/Tecs";
import path from "path";

export default function Home() {
  return (
    <Layout>
      <Apresent />

      <section className="flex flex-col h-screen w-full pt-5 items-center">
        <div className="flex w-full items-center justify-center gap-10">
          <div className="border-b-2 w-[20%]"></div>
          <p className="text-4xl font-bold">Tecnologias</p>
          <div className="border-b-2 w-[20%]"></div>
        </div>
        <div className="grid grid-cols-4 pt-10 gap-5">
          {tecs.map((tecnologia, index) => (
            <Tecs nome={tecnologia.nome} path={tecnologia.path} key={index} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

const tecs = [
  {
    nome: "React",
    path: "/assets/react.svg",
  },
  {
    nome: "React",
    path: "/assets/react.svg",
  },
  {
    nome: "React",
    path: "/assets/react.svg",
  },
  {
    nome: "React",
    path: "/assets/react.svg",
  },
  {
    nome: "React",
    path: "/assets/react.svg",
  },
  {
    nome: "React",
    path: "/assets/react.svg",
  },
  {
    nome: "React",
    path: "/assets/react.svg",
  },
  {
    nome: "React",
    path: "/assets/react.svg",
  },
];
