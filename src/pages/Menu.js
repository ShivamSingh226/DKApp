import React from 'react'

import BasicTable from '../components/BasicTable'
import fm from "../assets/FM.jpg"
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="product">
    <div className="productImage" style={{backgroundImage: `url(${fm})`}}></div>
      
      <div className="containerprime">
        <h1>"Let food be thy medicine and medicine be thy food"</h1>
       
       
        </div> 
        <div className="table">
          {<BasicTable/>}
        </div>
    
    
    </div>
    
  )
}

export default Menu
