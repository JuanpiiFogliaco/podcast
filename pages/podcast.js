import "isomorphic-fetch";
import Modal from "../components/Modal";
import Layout from "../components/Layout";

const Podcast = ({ clip }) => {
  return (
    <Layout title={clip.title}>
      <Modal clip={clip}></Modal>
    </Layout>
  );
};

Podcast.getInitialProps = async ({ query }) => {
  let id = query.id;
  let fetchClip = await fetch(
    `https://api.audioboom.com/audio_clips/${id}.mp3`
  );
  let clip = (await fetchClip.json()).body.audio_clip;
  return { clip };
};

export default Podcast;
