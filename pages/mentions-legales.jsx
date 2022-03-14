//import ContactButton from "../components/ContactButton/ContactButton";

import LegalPage from "../components/LegalPage";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

export default function MentionsLegales() {
  return (
    <div className="App">
      <Head>
        <title>Atelier Salvetat, mentions légales</title>
        <meta name="description" content={"Mentions légales"} />
      </Head>
      <Layout>
        <LegalPage />
      </Layout>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
