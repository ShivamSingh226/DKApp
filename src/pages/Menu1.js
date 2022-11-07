import React from "react";
import { ProdList } from "../Helpers/ProdList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu1.css";
import{Link} from "react-router-dom"
import {Button} from "../components/Button/Button"


function Menu1() {
  return (
    <div className="menu">
      <div className="menuTitle">
        <Link to="/lists">
        <Button onClick={()=>{
          console.log("You clicked on Me!")
        }}
        type="button"
        buttonStyle="btn--primary--outline"
        buttonSize="btn--large">Check out our Products</Button>
        </Link>
        </div>
        
      <div className="menuList">
        {ProdList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              
            />
          );
        })}
      </div>
     
    </div>
  );
}

export default Menu1;
