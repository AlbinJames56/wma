import React from 'react'
import { Link } from 'react-router-dom'
 
function Partners() {
  return (
    <div>
        <div>
            <h3 className='text-center text-info mt-5'>Our Partners</h3>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
            <div className='p-5'>
                <Link>
                <img width={300} src="https://content.jdmagicbox.com/comp/ernakulam/x4/0484px484.x484.190323200923.e1x4/catalogue/kerala-football-association-kaloor-ernakulam-associations-oyrahgf7hm.jpg" alt="" /> </Link>
            </div>
            <div className="p-5">
                <img width={300} src="https://www.cultura.org.au/wp-content/uploads/2022/02/logo-colour-2048x507.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Partners