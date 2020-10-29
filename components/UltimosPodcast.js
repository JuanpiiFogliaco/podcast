import List from "../components/List";

const UltimosPodcast = ({ audioClips }) => {
  return (
    <div className="wrapper-podcast">
      <h2>Ultimos podcast</h2>
      <div className="wrapper-list">
        <List audioClips={audioClips}></List>
      </div>
      <style jsx>
        {`
          .wrapper-podcast {
            width:auto;
            padding: 12px;
          }

          .wrapper-list {
            display: flex;
            justify-content: center;
          }

          .podcast {
            display: block;
            text-decoration: none;
            color: #333;
            padding: 15px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            cursor: pointer;
          }
          .podcast:hover {
            color: #000;
          }
          .podcast {
            margin: 0;
          }
          .podcast .meta {
            color: #666;
            margin-top: 0.5em;
            font-size: 0.8em;
          }
        `}
      </style>
    </div>
  );
};

export default UltimosPodcast;
