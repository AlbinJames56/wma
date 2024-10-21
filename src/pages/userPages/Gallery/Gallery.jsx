import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {IoIosArrowDroprightCircle,IoIosArrowDropleftCircle} from "react-icons/io";
function Gallery() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  const getThumbnailWidth = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 767) {
      return 50;
    } else if (windowWidth <= 1024) {
      return 100;
    } else {
      return 150;
    }
  };

  const getOriginalImageWidth = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 767) {
      return 300;
    } else if (windowWidth <= 1024) {
      return 600;
    } else {
      return 1000;
    }
  };

  // Custom left navigation button
  const renderLeftNav = (onClick, disabled) => (
    <button
      className="image-gallery-custom-nav"
      style={{ position: "absolute", top: "50%", left: "0", transform: "translateY(-50%)", zIndex: 1,border:"none",  background:"transparent" }}
      onClick={onClick}
      disabled={disabled}
    >
      < IoIosArrowDropleftCircle  size={30}   />
    </button>
  );

  // Custom right navigation button
  const renderRightNav = (onClick, disabled) => (
    <button
      className="image-gallery-custom-nav"
      style={{ position: "absolute", top: "50%", right: "0", transform: "translateY(-50%)", zIndex: 1, border:"none",  background:"transparent"}}
      onClick={onClick}
      disabled={disabled}
    >
      <IoIosArrowDroprightCircle  size={30}   />
    </button>
  );

  return (
    <div className="container" style={{ marginTop: "150px", marginBottom: "50px" }}>
      <div className="row justify-content-center">
        <div className="col-12">
          <ImageGallery
            items={images}
            thumbnailWidth={getThumbnailWidth()}
            renderItem={(item) => (
              <div className="d-flex justify-content-center" style={{ height: "70vh" }}>
                <img
                  src={item.original}
                  alt={item.originalAlt}
                  width={getOriginalImageWidth()}
                  className="img-fluid"
                  style={{ objectFit: "contain" }}
                />
              </div>
            )}
            renderLeftNav={renderLeftNav}
            renderRightNav={renderRightNav}
          />
        </div>
      </div>
    </div>
  );
}
export default Gallery;