import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import './contact.css' 
function Contact() {
  const [input, setInput] = useState({ name: '', phone: '', email: '', message: '' })
    const handleChange=()=>{
        
    }
    const handleSubmit=()=>{

    }
  return (
    <div className='contact '>
      <div className="row container ">
        <h3 className='text-center text-info'>Contact Us</h3>
        <div className="col-lg-2"></div>
        <div className="col-lg-4 mt-5 p-5">
           <div className="row d-flex justify-content-center rounded-9   " style={{backgroundColor:"lightblue"}}>
            <div className="col-6  p-5">
              <a href="tel://+0000000000"></a>
                <FaPhoneAlt style={{color:"green",fontSize:"50px"}}/>
            </div>
            <div className="col-6 p-5">
              <a href="tel://+0000000000"></a>
                <MdEmail style={{color:"blue",fontSize:"50px"}}/>
            </div>
            <div className="col-6 p-5">
              <a href="tel://+0000000000"></a>
                <FaInstagramSquare style={{color:"red",fontSize:"50px"}}/>
            </div>
            <div className="col-6 p-5">
              <a href="tel://+0000000000"></a>
                <FaFacebookSquare style={{color:"darkblue",fontSize:"50px"}}/>
            </div>
           </div>
        </div>
        <div className="col-lg-6 p-5">
        <div className=" ">
          <form className="contact_form" onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input type="text" placeholder="Name" value={input.name}
              name="name"
              onChange={handleChange} />
            <label>Phone No</label>
            <input type="tel" placeholder="Phone number" value={input.phone}
              name="phone"
              onChange={handleChange} />
            <label>Email</label>
            <input type="email" placeholder="johndoe@gmail.com" value={input.email}
              name="email"
              onChange={handleChange} />
            <label>Your message (optional)</label>
            <textarea placeholder="Type here.." value={input.message}
              name="message"
              onChange={handleChange} />
            <button className="contact_button">Send</button>
            <div className="status" style={{ color: 'green', textAlign: 'center' }}>{status}</div>
          </form>
        </div>
        </div>
      </div>
      
       
       
    </div>
  );
}

export default Contact;
