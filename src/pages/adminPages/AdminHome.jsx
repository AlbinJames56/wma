import React from 'react'
import AdminEvents from './AdminEvents'
import AdminViewReg from './AdminViewReg'
import AdminEditCommittee from './AdminEditCommittee' 
import AdminGallery from './AdminGallery'

function AdminHome({adminPage}) {  
  return (
    <div className='pt-3'>
      <h2 className='text-dark mt-5 pt-5 fw-bolder' style={{fontFamily:"sans-serif"}}>Admin DashBoard</h2>
      {
        adminPage===0 && <AdminEvents/>
      }
      {
        adminPage===1 && <AdminViewReg/>
      }
      {
        adminPage===2 && <AdminEditCommittee/>
      }
      {
        adminPage===3 && <AdminGallery/>
      }
    </div>
  )
}

export default AdminHome