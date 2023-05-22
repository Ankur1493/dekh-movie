import React from 'react'
import "./login.css"
const Login = () => {
  return (
    <div className = "login">
      <div className="img">
        <img src="../images/background-video.gif" alt="background" />
        <div className="overlay"></div>
      </div>
      <div className="logButton">
        <button>
          sign in with google
          <img src="../images/google-logo.png" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Login