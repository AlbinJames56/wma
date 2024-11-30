import React, { useContext, useEffect, useState } from "react";
import "./GallerySlide.css";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { addGalleryContextResponse } from "../../../ContextAPI/ContextShare";
import { getGalleryImagesApi } from "../../../Services/AllApis";

function GallerySlide() {
  const { addGalleryResponse } = useContext(addGalleryContextResponse);
  const [images, setImages] = useState([]);

  // Fetching images from the database
  const fetchGalleryImages = async () => {
    try {
      const response = await getGalleryImagesApi();
      if (response.status === 200) {
        setImages(response.data);
      }
    } catch (error) {
      console.error("Error fetching gallery images:", error);
    }
  };

  useEffect(() => {
    fetchGalleryImages();
  }, [addGalleryResponse]);

  return (
    <div className="gallery">
      <div className="container p-5 d-flex justify-content-center galleryContainer">
        {images.length > 0 ? (
          <MDBCarousel showControls showIndicators>
            {images.map((image, index) => (
              <MDBCarouselItem itemId={index + 1} key={index}>
                <img
                  src={image.imageURL}
                  className="d-block w-100"
                  alt={`Gallery Image ${index + 1}`}
                />
              </MDBCarouselItem>
            ))}
          </MDBCarousel>
        ) : (
          <p>No images found.</p>
        )}
      </div>
    </div>
  );
}

export default GallerySlide;
