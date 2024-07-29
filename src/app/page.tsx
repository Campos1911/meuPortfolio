import { Layout } from "@/components/Layout";
import { Apresent, Tecnologias } from "@/components/Seções";

export default function Home() {
  return (
    <Layout>
      <Apresent />
      <Tecnologias />
      <section className="flex flex-col h-screen w-full pt-10 items-center">
        <div className="flex w-full items-center justify-center gap-10">
          <div className="border-b-2 w-[20%]"></div>
          <p className="text-4xl font-bold">Projetos</p>
          <div className="border-b-2 w-[20%]"></div>
        </div>
      </section>
    </Layout>
  );
}
