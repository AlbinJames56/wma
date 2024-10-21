import React, { useState } from "react"; 
import "./contact.css";
function Contact() {
  const [input, setInput] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <div className="contact mt-5  pt-3">
      <h1 className="text-center text-info pt-4">Get in Touch</h1>
      <div className=" container d-flex justify-content-center ">
        
        <div className=" p-5 w-75">
          <div className=" ">
            <form className="contact_form" onSubmit={handleSubmit}>
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Name"
                value={input.name}
                name="name"
                onChange={handleChange}
              />
              <label>Phone No</label>
              <input
                type="tel"
                placeholder="Phone number"
                value={input.phone}
                name="phone"
                onChange={handleChange}
              />
              <label>Email</label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                value={input.email}
                name="email"
                onChange={handleChange}
              />
              <label>Your message (optional)</label>
              <textarea
                placeholder="Type here.."
                value={input.message}
                name="message"
                onChange={handleChange}
              />
              <button className="contact_button">Send</button>
              <div
                className="status"
                style={{ color: "green", textAlign: "center" }}
              >
                {status}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
