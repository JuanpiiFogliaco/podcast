const SeriesGrid = ({ series }) => {
  return (
    <div className="wrapper-channels">
      <h2>Series</h2>
      {series.length > 0 ? (
        <div>
          <div className="channels">
            {series.map((serie, i) => (
              <div className="channel" key={i}>
                <img
                  className="channelImg"
                  src={serie.urls.logo_image.original}
                  alt=""
                />
                <h2>{serie.title}</h2>
              </div>
            ))}
          </div>
        </div>
      ): 'No tiene series.'}
      <style jsx>
        {`
          .wrapper-channels {
            width: 50%;
            padding: 12px;
          }

          @media(max-width:800px){
            .wrapper-channels {
              width: auto;
            }
          }

          .channels {
            display: grid;
            grid-gap: 15px;
            padding: 15px;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            
          }

          .channelImg {
            border-radius: 3px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default SeriesGrid;
