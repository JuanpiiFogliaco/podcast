const Banner = ({ channel }) => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${channel.urls.banner_image.original})` }}
    >
      <style jsx>
        {`
          .banner {
            margin-top:50px;
            width: 100%;
            padding-bottom: 25%;
            background-position: 50% 50%;
            background-size: cover;
            background-color: #aaa;
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
