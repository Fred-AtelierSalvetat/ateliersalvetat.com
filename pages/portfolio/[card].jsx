import Head from "next/head";
import Layout from "../../components/Layout/Layout";

import { cardList, cards } from "../../components/Portfolio/projects_data";
import PortfolioProjectPitch from "../../components/Portfolio/PortfolioProjectPitch";

const PortfolioProjectPage = ({ meta__title, meta__content, ...project }) => {
  return (
    <div className="App">
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1,initial-scale=1"
      />
      <title>{meta__title}</title>
      <meta name="description" content={meta__content} />
      <Layout>
        <PortfolioProjectPitch {...project} />
      </Layout>
    </div>
  );
};

export async function getStaticProps({ params: { card } }) {
  return { props: cards[card] };
}

export async function getStaticPaths() {
  return {
    paths: cardList?.map((card) => ({
      params: {
        card: card.page,
      },
    })),
    fallback: false,
  };
}

export default PortfolioProjectPage;
