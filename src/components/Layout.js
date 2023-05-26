import React from 'react'
import "./Layout.css"

const Layout = ({title, img}) => {
  const base_url = "https://image.tmdb.org/t/p/original"
  return (
    <div className='layout'>
      <div className="square">
        <div className="box">
          <img src={`${base_url}${img}`} alt="logo" />
          <div className="details">
            <div className="heads">
              <h2>{title}</h2>
              <button>Check Out</button>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quos incidunt dicta accusamus exercitationem dolorum. Fugiat sit quis, fugit corporis consequuntur praesentium dolorum illo neque reprehenderit ullam itaque amet ad?</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Layout