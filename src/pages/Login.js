import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className = "login">
      <div className="img">
        <img src="../images/background-video.gif" alt="background" />
        <div className="overlay"></div>
      </div>
      <div className="logButton">
       <Link to = "/">
        <button>
          sign in with google
          <img src="../images/google-logo.png" alt="" />
        </button>
       </Link>
      </div>
    </div>
  )
}

export default Login