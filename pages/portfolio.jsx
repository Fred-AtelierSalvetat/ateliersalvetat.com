//import ContactButton from "../components/ContactButton/ContactButton";

import Portfolio from "../components/Portfolio/Portfolio";

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
        <title>Atelier Salvetat, Développement Front-end, mon portfolio</title>
        <meta
          name="description"
          content={
            "Développeur web indépendant à votre service. Voici quelques une de mes réalisations."
          }
        />
        <link
          rel="stylesheet"
          href="fonts/subset/glory-culture-alt-regular.css"
          crossOrigin=""
        />
      </Head>
      <Layout>
        <Portfolio />
      </Layout>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
