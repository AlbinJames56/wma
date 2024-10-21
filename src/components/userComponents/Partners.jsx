import React from "react";
import { Link } from "react-router-dom";

function Partners() {
  return (
    <div>
      <div>
        <h1 className="text-center text-info mt-5">Our Partners</h1>
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row p-5 d-flex">
          <div className="col-6 justify-content-end">
            <Link>
              <img
                className="img-fluid d-block mx-auto"
                style={{ width: "50%" }}
                src="https://content.jdmagicbox.com/comp/ernakulam/x4/0484px484.x484.190323200923.e1x4/catalogue/kerala-football-association-kaloor-ernakulam-associations-oyrahgf7hm.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="col-6 justify-content-start">
            <Link>
              <img
                className="img-fluid d-block mx-auto"
                style={{ width: "50%" }}
                src="https://www.cultura.org.au/wp-content/uploads/2022/02/logo-colour-2048x507.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
