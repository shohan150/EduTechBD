import CommonHeading from "../../AllSharedComponents/CommonHeading";
import "./videoGallery.css";

export default function VideoGallery() {
  return (
    <div
      className="container-xxl py-5 animate__animated animate__fadeInUp"
      data-wow-delay="0.1s"
    >
      <CommonHeading
        heading="School Video Gallery"
        subheading="Video Gallery"
      />

      <div className="video-gallery mb-5">
        {/* for vedio in vedioList */}
        <div className="gallery-item">
          {/* if vedio.img */}
          <img src="{{vedio.img.url}}" />
          {/* endif */}
          <div className="gallery-item-caption">
            <div>
              <h2 className="text-secondary">video heading</h2>
              <p>video sub heading</p>
            </div>
            <a
              id="play-video"
              className="video-popup video-play-button middle-button"
              href="{{video.link}}"
              target="_blank"
            >
              <span style={{ zIndex: "100" }} className="text-white"></span>
            </a>
          </div>
        </div>
        <div className="gallery-item">
          {/* if vedio.img */}
          <img src="{{vedio.img.url}}" />
          {/* endif */}
          <div className="gallery-item-caption">
            <div>
              <h2 className="text-secondary">video heading</h2>
              <p>video sub heading</p>
            </div>
            <a
              id="play-video"
              className="video-popup video-play-button middle-button"
              href="{{vedio.link}}"
              target="_blank"
            >
              <span style={{ zIndex: "100" }} className="text-white"></span>
            </a>
          </div>
        </div>

        {/* endfor */}
      </div>
    </div>
  );
}
