import { Layout } from "@/components/Layout";
import {
  Apresent,
  Contato,
  Projetos,
  Sobre,
  Tecnologias,
} from "@/components/Seções";

export default function Home() {
  return (
    <Layout>
      <Apresent />
      <Tecnologias />
      <Projetos />
      <Sobre />
      <Contato />
    </Layout>
  );
}
