//import ContactButton from "../components/ContactButton/ContactButton";

import Hero from "../components/Homepage/Hero";
import Skills from "../components/Homepage/Skills";
import Portfolio from "../components/Portfolio/Portfolio";
//import Temoignage from "../components/Temoignage";

//import Contact from "../components/Contact";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

export default function App() {
  return (
    <div className="App">
      <Head>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <title>Atelier Salvetat, Développement Front-end</title>
        <meta
          name="description"
          content={
            "Développeur web indépendant à votre service. Ma spécialité : les interface graphiques complexes, sur-mesure pour les applications et site web avancés. Garantie coût,délai,qualité."
          }
        />
      </Head>
      {/* <ContactButton /> */}
      <Layout>
        <Hero />
        <Skills />
        <Portfolio />
      </Layout>

      {/* <Temoignage /> */}
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
