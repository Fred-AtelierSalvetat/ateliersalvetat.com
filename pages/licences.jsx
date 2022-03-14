//import ContactButton from "../components/ContactButton/ContactButton";

import Licences from "../components/Licences";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

export default function LicencesPage() {
  return (
    <div className="App">
      <Head>
        <title>Atelier Salvetat, licences</title>
        <meta
          name="description"
          content={"Citations des licenses libres utilisées"}
        />
      </Head>
      <Layout>
        <Licences />
      </Layout>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
