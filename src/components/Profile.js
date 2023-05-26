import React from 'react'
import "./Profile.css"
import { Link } from 'react-router-dom'

const Profile = () => {


  

  return (
    <div className='profile'>
      <div className="profileBox">
        <h1>Profile</h1>
        <div className="profileDetail">
            <img src="./images/user-profile.avif" alt="" />
            <h3>Ankur Sharma</h3>  
        </div>
        <Link to ="/login">
          <button>Log Out</button>
        </Link>
      </div>
    </div>
  )
}

export default Profile