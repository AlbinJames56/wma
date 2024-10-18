import React from 'react'
import './GallerySlide.css'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
function GallerySlide() {
  return (
    <div  className='gallery'>
    <div className="container p-5">
    <MDBCarousel showControls showIndicators>
    <MDBCarouselItem itemId={1}>
      <img
        src="https://artisangalway.com/wp-content/uploads/2018/09/Planning-an-amazing-Event.jpg"
        className="d-block w-100"
        alt="..."
      />
    </MDBCarouselItem>
    <MDBCarouselItem itemId={2}>
      <img
        src="https://t4.ftcdn.net/jpg/05/68/43/07/360_F_568430786_kCvAQDMq2RMOJgrVZCWpzoD7MyRGVotM.jpg"
        className="d-block w-100"
        alt="..."
      />
    </MDBCarouselItem>
    <MDBCarouselItem itemId={3}>
      <img
        src="https://us.123rf.com/450wm/9parusnikov/9parusnikov2204/9parusnikov220400348/185383032-black-silhouette-of-crowd-at-concert-enjoy-summer-music-festival.jpg?ver=6"
        className="d-block w-100"
        alt="..."
      />
    </MDBCarouselItem>
  </MDBCarousel>
  </div>
</div>
  )
}

export default GallerySlide