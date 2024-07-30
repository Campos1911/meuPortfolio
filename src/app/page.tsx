import { Layout } from "@/components/Layout";
import { Apresent, Projetos, Sobre, Tecnologias } from "@/components/Seções";

export default function Home() {
  return (
    <Layout>
      <Apresent />
      <Tecnologias />
      <Projetos />
      <Sobre />
    </Layout>
  );
}
