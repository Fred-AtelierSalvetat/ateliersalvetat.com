import cards from "../../components/Portfolio/projects_data";

const PortfolioProjectPage = ({ card }) => {
  return <p>La page existe {card}</p>;
};

export async function getStaticProps({ params: { card } }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return { props: { card } };
}

export async function getStaticPaths() {
  return {
    paths: cards?.map((card) => ({
      params: {
        card: card.page,
      },
    })),
    fallback: false,
  };
}

export default PortfolioProjectPage;
