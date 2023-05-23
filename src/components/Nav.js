import React from 'react';
import "./Nav.css";

const Nav = () => {
  return (
    
    <div className = "nav">
        <div className="left">
            <img src="../images/logo.png" alt="" />
        </div>
        <div className="mid">
            <ul>
                <li>Home</li>
                <li>Popular</li>
                <li>Latest</li>
                <li>Genres</li>
            </ul>
        </div>
        <div className="right">
            <img src="../images/user-profile.avif" alt="" />
        </div>
    </div>

  )
}

export default Nav