import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import SeriesGrid from "../../components/SeriesGrid";
import UltimosPodcast from "../../components/UltimosPodcast";
import Error from "next/error";
import styles from "../../styles/Channel.module.css";

const Channel = ({ channel, audioClips, series, statusCode }) => {
  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <div>
      <Layout title={channel.title}>
        <Banner channel={channel}></Banner>
        <div className={styles.asd}>
          
          <SeriesGrid series={series}></SeriesGrid>
          <UltimosPodcast audioClips={audioClips}></UltimosPodcast>
        </div>
      </Layout>
    </div>
  );
};

Channel.getInitialProps = async ({ query, res }) => {
  try {
    let idChannel = query.id;
    let [reqChannel, reqSeries, reqAudios] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
    ]);

    if (reqChannel.status >= 404) {
      res.statusCode = reqChannel.status;
      return {
        channel: null,
        audioClips: null,
        series: null,
        statusCode: reqChannel.status,
      };
    }

    let dataChannel = await reqChannel.json();
    let channel = dataChannel.body.channel;

    let dataAudios = await reqAudios.json();
    let audioClips = dataAudios.body.audio_clips;

    let dataSeries = await reqSeries.json();
    let series = dataSeries.body.channels;

    return { channel, audioClips, series, statusCode: 200 };
  } catch (e) {
    res.statusCode = 503;
    return { channel: null, audioClips: null, series: null, statusCode: 503 };
  }
};

export default Channel;
