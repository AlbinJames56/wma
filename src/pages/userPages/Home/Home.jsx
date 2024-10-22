import React from "react";
import Events from "../Events/Events";
import Banner from "../../../components/userComponents/Banner/Banner";
import About from "../../../components/userComponents/About/About";
import MembershipForm from "../../../components/userComponents/Membership/MembershipForm";
import Contact from "../../../components/userComponents/Contact/Contact";
import Partners from "../../../components/userComponents/Partners"; 
import GallerySlide from "../../../components/userComponents/GallerySlider/GallerySlide";
import './Home.css'
function Home() {
  return (
    <div>
      <section id="banner">
        <Banner />
      </section>
      <section id="events">
        <GallerySlide/>
      </section>
      <section id="events">
        <Events />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="membershipForm">
        <MembershipForm />
      </section>
      <section id="partners">
        <Partners />
      </section>
      <section id="contact">
        <Contact />
      </section>

    </div>
  );
}

export default Home;
