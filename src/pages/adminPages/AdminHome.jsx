import React from 'react' 
import AdminViewReg from './AdminViewReg'
import AdminEditCommittee from './AdminEditCommittee' 
import AdminGallery from './AdminGallery'
import AdminEventPage from './AdminEventPage'

function AdminHome({adminPage}) {  
  return (
    <div className='pt-3'>
      
      {
        adminPage===0 && <AdminEventPage/>
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