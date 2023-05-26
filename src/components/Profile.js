import React from 'react'
import "./Profile.css"
const Profile = () => {


  

  return (
    <div className='profile'>
      <div className="profileBox">
        <h1>Profile</h1>
        <div className="profileDetail">
            <img src="./images/user-profile.avif" alt="" />
            <h3>Ankur Sharma</h3>  
        </div>
        <button>Log Out</button>
      </div>
    </div>
  )
}

export default Profile