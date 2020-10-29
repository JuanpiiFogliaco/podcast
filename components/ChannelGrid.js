import Link from "next/link";
import Card from '../components/Card';
const ChannelGrid = ({ channels }) => {
  return (
    <div className="channels">
      {channels.map((channel) => (
        <Link href={`/channel/` + channel.id}>
          <a>
            <Card channel={channel}></Card>
          </a>
        </Link>
      ))}
      <style jsx>
        {`
          .channels {
            display: grid;
            background:whitesmoke;
            grid-gap: 25px;
            padding: 25px;
            margin-top:45px;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            align-items:center;
          }
        `}
      </style>
    </div>
  );
};

export default ChannelGrid;
