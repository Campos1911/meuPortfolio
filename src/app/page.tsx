/* eslint-disable @next/next/no-img-element */
import { Layout } from "@/components/Layout";
import { Apresent } from "@/components/Seções";
import Image from "next/image";

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
      </section>
    </Layout>
  );
}
