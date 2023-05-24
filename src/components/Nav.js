import React from 'react';
import "./Nav.css";
import {Link}  from 'react-router-dom';


const Nav = () => {
  return (
    
    <div className = "nav">
        <div className="left">
            <Link to = "/">
                <img src="../images/logo.png" alt="" />
            </Link>
        </div>
        <div className="mid">
            <ul>
                <li><Link to = "/" className='link'>Home </Link></li>
                <li><Link to = "popular" className='link'>Popular </Link></li>
                <li><Link to = "latest"className='link'>Latest </Link></li>
                <li><Link to = "genres"className='link'>Genres </Link></li>
            </ul>
        </div>
        <div className="right">
            <img src="../images/user-profile.avif" alt="" />
        </div>
    </div>

  )
}

export default Nav