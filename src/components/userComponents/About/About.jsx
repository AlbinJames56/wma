import React from "react";
import logo from '../../../assets/logo-bgremoved.png';
import './About.css';

function About() {
  return (
    <div className="about pt-5">
      <div className="container d-flex justify-content-center align-items-center pt-5">
        <div className="p-5 p-md-5">
          <h1 className="fw-500 text-center text-info pt-4">About Us</h1>
          <div className="d-flex flex-column flex-md-row">
            <div className="col-md-8  ">
              <p className="mt-2 ms-0 p-md-3" style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
                libero tempora nesciunt ullam enim provident assumenda cum
                eligendi praesentium fugiat, perferendis ipsum error nam nemo quia
                aliquam, architecto at! Voluptates. Maiores beatae nulla
                repellendus, fugit reprehenderit modi sunt laudantium ullam
                delectus repudiandae sequi, reiciendis molestiae dolor facere
                doloremque in dicta rerum facilis veniam culpa a eaque sint.
                Similique, delectus neque! In sit, consectetur doloremque animi
                dolores beatae delectus iure perferendis odit reprehenderit
                voluptatibus perspiciatis neque earum labore vero molestiae atque
                quos est commodi numquam, blanditiis a qui id! Voluptatibus,
                explicabo.
              </p>
            </div>
            <div className=" d-flex justify-content-center">
              <img className="mt-md-0 mt-4 mb-4 mb-md-0" width={ 250} src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
