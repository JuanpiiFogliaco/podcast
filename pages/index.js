import "isomorphic-fetch";
import ChannelGrid from "../components/ChannelGrid";
import Layout from "../components/Layout";
import Error from "next/error";

const Home = ({ channels, statusCode }) => {
  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <Layout title="Podcast">
      <ChannelGrid channels={channels}></ChannelGrid>
    </Layout>
  );
};

Home.getInitialProps = async ({ res }) => {
  try {
    let req = await fetch("https://api.audioboom.com/channels/recommended");
    let { body: channels } = await req.json();
    return { channels, statusCode: 200 };
  } catch (e) {
    res.statusCode = 503;
    return { channels: null, statusCode: 503 };
  }
};

export default Home;
