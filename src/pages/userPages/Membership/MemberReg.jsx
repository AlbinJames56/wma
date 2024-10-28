import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import "./MemberReg.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { MDBInput } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function MemberReg() {
  const navigate=useNavigate()
  const [thank, setThank] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    lname: "",
    address1: "",
    address2: "",
    suburb: "",
    state: "",
    postCode: "",
    country: "",
    phNo: "",
    email: "",
    gender: "Male",
    age: "",
    bloodGroup: "",
    keralaContactfname: "",
    keralaContactlname: "",
    keralaContactphNo: "",
    spouceFname: "",
    spouceMname: "",
    spouceLname: "",
    spoucePhNo: "",
    spouceEmail: "",
    familyDetails: "",
    contactMethod: "Email",
    membershipType: "Associate",
    membershipFeePaid: "No",
  });
  const handleChange = () => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    event.preventDefault();  
    setLoading(true);  

     
    setTimeout(() => {
      setLoading(false);
      setThank(true);  
      navigate('/');  
    }, 1000);  
  };
  return (
    <div className="membership_page pt-5">
      <div className={!thank ? "membership_container  p-3 mt-4" : ""}>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {!thank && (
        <div className="membership_form "> 

            <h1>Membership Form</h1>
            <form onSubmit={handleSubmit}>
              <span className="mandatory">* indicates mandatory fields</span>

              {/* Applicant Information */}
              <h5>
                Applicant Information <span className="mandatory">*</span>
              </h5>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <MDBInput
                    value={formData.fname}
                    onChange={handleChange}
                    name="fname"
                    label="First Name"
                    id="form1"
                    type="text"
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <MDBInput
                    value={formData.mname}
                    name="mname"
                    id="form1"
                    type="text"
                    onChange={handleChange}
                    label="Middle Name"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <MDBInput
                    value={formData.lname}
                    onChange={handleChange}
                    name="lname"
                    label="Last Name"
                    id="form1"
                    type="text"
                    required
                  />
                </div>
              </div>

              {/* Address */}
              <h5>
                Address <span className="mandatory">*</span>
              </h5>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <MDBInput
                    value={formData.address1}
                    name="address1"
                    onChange={handleChange}
                    label="Street Address"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <MDBInput
                    value={formData.address2}
                    name="address2"
                    onChange={handleChange}
                    label="Street Address 2"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <MDBInput
                    value={formData.suburb}
                    name="suburb"
                    onChange={handleChange}
                    label="Suburb"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <MDBInput
                    value={formData.state}
                    name="state"
                    onChange={handleChange}
                    label="State"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <MDBInput
                    value={formData.postCode}
                    name="postCode"
                    onChange={handleChange}
                    label="Post Code"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <MDBInput
                    value={formData.country}
                    name="country"
                    onChange={handleChange}
                    label="Country"
                    required
                  />
                </div>
              </div>

              {/* Phone Number */}
              <h5>
                Phone Number <span className="mandatory">*</span>
              </h5>
              <div className="mb-3">
                <MDBInput
                  value={formData.phNo}
                  name="phNo"
                  onChange={handleChange}
                  label="Phone Number"
                  required
                />
              </div>

              {/* Email */}
              <h5>
                Email <span className="mandatory">*</span>
              </h5>
              <div className="mb-3">
                <MDBInput
                  value={formData.email}
                  name="email"
                  onChange={handleChange}
                  label="Email"
                  type="email"
                  required
                />
              </div>

              {/* Gender */}
              <h5>
                Gender <span className="mandatory">*</span>
              </h5>
              <div className="mb-3 d-flex gap-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="Male"
                    name="gender"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Male</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="Female"
                    name="gender"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Female</label>
                </div>
              </div>

              {/* Age */}
              <h5>
                Age <span className="mandatory">*</span>
              </h5>
              <div className="mb-3">
                <MDBInput
                  value={formData.age}
                  name="age"
                  onChange={handleChange}
                  label="Age"
                  required
                />
              </div>

              {/* Blood Group */}
              <h5>
                Blood Group<span className="mandatory"> *</span>
              </h5>
              <div className="mb-3">
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>

              {/* Emergency Contact */}
              <h5>
                Emergency Contact Details in Kerala / India{" "}
                <span className="mandatory">*</span>
              </h5>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <MDBInput
                    name="keralaContactfname"
                    onChange={handleChange}
                    label="First Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <MDBInput
                    name="keralaContactlname"
                    onChange={handleChange}
                    label="Last Name"
                    required
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <MDBInput
                    name="keralaContactphNo"
                    onChange={handleChange}
                    label="10 digit phone number excluding country code"
                    required
                  />
                </div>
              </div>

              {/* Spouse Details */}
              <h5>Name of Spouse</h5>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <MDBInput
                    name="spouceFname"
                    onChange={handleChange}
                    label="First Name"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <MDBInput
                    name="spouceMname"
                    onChange={handleChange}
                    label="Middle Name"
                  />
                </div>
                <div className="col-md-4">
                  <MDBInput
                    name="spouceLname"
                    onChange={handleChange}
                    label="Last Name"
                  />
                </div>
                <div className="col-md-6 mt-3">
                  <MDBInput
                    name="spoucePhNo"
                    onChange={handleChange}
                    label="Spouse Phone Number"
                  />
                </div>
                <div className="col-md-6 mt-3">
                  <MDBInput
                    name="spouceEmail"
                    onChange={handleChange}
                    type="email"
                    label="Spouse Email"
                  />
                </div>
              </div>

              {/* Other family member details */}
              <h5 className="mt-3">
                Details of other family members in your household and kids under
                13 years
              </h5>
              <span className="text-muted" style={{ fontSize: "small" }}>
                Please enter Full Name, Gender and Age
              </span>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows={5}
                  name="familyDetails"
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Preferred Method of contact */}
              <h5  >
                Preferred Method of contact{" "}
                <span className="text-danger">*</span>
              </h5>
              <div className="mb-3 ms-1 d-flex row gap-3">
                <div className="form-check col-md-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="contactMethod"
                    checked={formData.contactMethod === "Email"}
                    onChange={handleChange}
                    value="Email"
                  />
                  <label className="form-check-label">Email</label>
                </div>
                <div className="form-check  col-md-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="contactMethod"
                    checked={formData.contactMethod === "Text"}
                    onChange={handleChange}
                    value="Text"
                  />
                  <label className="form-check-label">Text Message</label>
                </div>
                <div className="form-check col-md-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="contactMethod"
                    checked={formData.contactMethod === "Whatsapp"}
                    onChange={handleChange}
                    value="Whatsapp"
                  />
                  <label className="form-check-label">Whatsapp</label>
                </div>
                <div className="form-check col-md-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="contactMethod"
                    checked={formData.contactMethod === "Facebook"}
                    onChange={handleChange}
                    value="Facebook"
                  />
                  <label className="form-check-label">Facebook</label>
                </div>
              </div>

              {/* Membership Type */}
              <h5  >
                Type of membership<span className="text-danger"> *</span>
              </h5>
              <div className="mb-3 d-flex">
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="membershipType"
                    checked={formData.membershipType === "Full"}
                    onChange={handleChange}
                    value="Full"
                  />
                  <label className="form-check-label">Full membership</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="membershipType"
                    checked={formData.membershipType === "Associate"}
                    onChange={handleChange}
                    value="Associate"
                  />
                  <label className="form-check-label">
                    Associate membership
                  </label>
                </div>
              </div>

              {/* Membership Fee */}
              <h5 className="  mb-2">
                Membership fee paid?<span className="text-danger"> *</span>
              </h5>
              <span className="text-muted">
                BSB: 063871 A/C No: 1034 5666 A/C Name: World Malayalee
                Association Inc.
              </span>
              <div className="mb-3 d-flex">
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="membershipFeePaid"
                    checked={formData.membershipFeePaid === "Yes"}
                    onChange={handleChange}
                    value="Yes"
                  />
                  <label className="form-check-label">Yes</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="membershipFeePaid"
                    checked={formData.membershipFeePaid === "No"}
                    onChange={handleChange}
                    value="No"
                  />
                  <label className="form-check-label">No</label>
                </div>
              </div>

              {/* Agreement */}
              <div className="mb-3">
                <p className="text-muted">
                By ticking this box I agree that I have read, understood and
                  abide the rules of Geelong Malayalee Association (GMA). I also
                  agree to be a member of Geelong Malayalee Association (GMA)
                  and my details can be entered in the membership register. I am
                  aware that these details can be used to send membership fee
                  notices and other communications including information about
                  meeting and events organized or supported by Geelong Malayalee
                  Association (GMA). Geelong Malayalee Association (GMA) and
                  it's office bearers respects your privacy seriously and are
                  aware that it is an offence to make improper use of
                  information about a person obtained from the Register of
                  Members as per Section 58 of the Associations Incorporation
                  Reform act 2012.
                </p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    required
                  />
                  <label className="form-check-label">
                    I have read, understood, and accepted the rules of
                    membership.
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    required
                  />
                  <label className="form-check-label">
                    I confirm that all the above information is correct and true
                    to the best of my knowledge.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button onClick={() => handleSubmit()} className="btn btn-dark w-100">Submit</button>
              <div className="text-danger">{error}</div>
            </form>
            {thank && (
              <div className="bg-white rounded p-4">
                <h1 className="text-center text-dark">
                  Thank you for registering!
                </h1>
                <p className="text-center">
                  We have received your application and will be in contact with
                  you shortly.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/")}
                >
                  Go Home
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default MemberReg;
