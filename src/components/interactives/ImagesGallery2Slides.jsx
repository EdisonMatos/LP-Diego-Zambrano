import ImageGallery from "react-image-gallery";
import PropTypes from "prop-types";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ImagesGallery2Slides(props) {
  const { slide1, slide2, slide3, className } = props;

  ImagesGallery2Slides.propTypes = {
    slide1: PropTypes.any,
    slide2: PropTypes.any,
    slide3: PropTypes.any,
    className: PropTypes.string,
  };

  const images = [
    {
      original: slide1,
      thumbnail: slide1,
      originalAlt: "Print de teste",
      originalHeight: 400,  
      originalWidth: 600,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide2,
      thumbnail: slide2,
      originalAlt: "Print de teste",
      originalHeight: 400,
      originalWidth: 600,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide3,
      thumbnail: slide3,
      originalAlt: "Print de teste",
      originalHeight: 400,
      originalWidth: 600,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
  ];

  return (
    <div className={`w-full ${className}`}>
      <ImageGallery
        items={images}
        showBullets={true}
        autoPlay={true}
        showFullscreenButton={false}
        showThumbnails={false}
        slideInterval={9000}
      />
    </div>
  );
}
