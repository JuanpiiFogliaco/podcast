import Link from "next/link";

const Modal = ({ clip }) => {
  return (
    <div className="modal">
     
      <div className="clip">
        <div className="nav">
          <Link href={`/channel/${clip.channel.id}`}>
            <a className="a">Volver</a>
          </Link>
        </div>

        <picture className="picture">
          <div
            className="pictureDiv"
            style={{
              backgroundImage: `url(${
                clip.urls.image || clip.channel.urls.logo_image.original
              })`,
            }}
          />
        </picture>

        <div className="player">
          <h3>{clip.title}</h3>
          <h6>{clip.channel.title}</h6>
          <audio controls autoPlay={true}>
            <source src={clip.urls.high_mp3} type="audio/mpeg" />
          </audio>
        </div>
      </div>
      <style jsx>
        {`
          .nav {
            background: none;
          }
          .a {
            display: inline-block;
            padding: 15px;
            color: white;
            cursor: pointer;
            text-decoration: none;
            background: cornflowerblue;
            border-radius: 22px;
            margin: 11px;
          }
          .a:hover {
            background: rgb(52, 113, 226);
          }

          .clip {
            display: flex;
            height: 100%;
            flex-direction: column;
            background: #8756ca;
            color: white;
          }
          .picture {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1 1;
            flex-direction: column;
            width: auto;
            padding: 10%;
          }
          .pictureDiv {
            width: 100%;
            height: 100%;
            background-position: 50% 50%;
            background-size: contain;
            background-repeat: no-repeat;
          }
          .player {
            padding: 30px;
            background: rgba(0, 0, 0, 0.3);
            text-align: center;
          }
          h3 {
            margin: 0;
          }
          h6 {
            margin: 0;
            margin-top: 1em;
          }
          audio {
            margin-top: 2em;
            width: 100%;
          }

          .modal {
            position: fixed;
            top: 0px;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 99999;
          }
        `}
      </style>
    </div>
  );
};

export default Modal;
