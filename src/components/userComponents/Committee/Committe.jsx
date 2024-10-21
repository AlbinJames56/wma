import React from "react";
import Avatar from '../../../assets/avatar.png'
import './Committe.css'
function Committe({ item }) {
  return (
    <div className="d-flex justify-content-center align-items-center m-3">
      <div className="commitee_container bg-white rounded-3 shadow-sm p-0">
        <div className="committee_image">
          <img
            // src={item.file !== "" ? item.imageUrl : Avatar}
            src={item.file !== "" ? item.file : Avatar}

            alt="Profile"
            className="img-fluid rounded-top"
            style={{ maxHeight: "150px", objectFit: "cover" }}
          />
        </div>
        <div className="committee_content text-center p-2">
          <span className="p_name d-block fw-bold">{item.name}</span>
          <span className="po_name d-block fw-bold">{item.position}</span>
        </div>
      </div>
    </div>
  );
}
 

export default Committe;
