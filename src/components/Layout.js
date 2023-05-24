import React from 'react'
import "./Layout.css"

const Layout = ({title, img}) => {
  return (
    <div className='layout'>
      <div className="square">
        <div className="box">
          <img src={`../images/${img}.jpg`} alt="" />
          <div className="details">
            <div className="heads">
              <h2>{title}</h2>
              <button>Check Out</button>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quos incidunt dicta accusamus exercitationem dolorum. Fugiat sit quis, fugit corporis consequuntur praesentium dolorum illo neque reprehenderit ullam itaque amet ad?</p>
          </div>
        </div>
        <div className="box">
          <img src={`../images/${img}.jpg`} alt="" />
          <div className="details">
            <div className="heads">
              <h2>{title}</h2>
              <button>Check Out</button>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quos incidunt dicta accusamus exercitationem dolorum. Fugiat sit quis, fugit corporis consequuntur praesentium dolorum illo neque reprehenderit ullam itaque amet ad?</p>
          </div>
        </div>
        <div className="box">
          <img src={`../images/${img}.jpg`} alt="" />
          <div className="details">
            <div className="heads">
              <h2>{title}</h2>
              <button>Check Out</button>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quos incidunt dicta accusamus exercitationem dolorum. Fugiat sit quis, fugit corporis consequuntur praesentium dolorum illo neque reprehenderit ullam itaque amet ad?</p>
          </div>
        </div>
        <div className="box">
          <img src={`../images/${img}.jpg`} alt="" />
          <div className="details">
            <div className="heads">
              <h2>{title}</h2>
              <button>Check Out</button>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quos incidunt dicta accusamus exercitationem dolorum. Fugiat sit quis, fugit corporis consequuntur praesentium dolorum illo neque reprehenderit ullam itaque amet ad?</p>
          </div>
        </div>
        <div className="box">
          <img src={`../images/${img}.jpg`} alt="" />
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