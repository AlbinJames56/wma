import React from 'react'
import { useNavigate } from "react-router-dom"; 
import './membershipForm.css'
function MembershipForm() {
    let navigate = useNavigate()

  const handleMembership = () => {
    navigate("/membership")
  }
  return (
    <div className="register_for_updates">
    <div className="update_text">
      <div className="update_items">
        <span className='text-light fw-bolder'>Become a Member!</span>
        <button onClick={handleMembership} className="register_button">
          <span className="circle">
            <span className="arrow"></span>
          </span>
          <span className="text">Join US</span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default MembershipForm