import React from 'react'

import { FaBars } from 'react-icons/fa';
import logo from "../../assets/DiyaKaran_Nobg.png"

import{
    Nav,
  NavbarContainer,
  NavLogo,MobileIcon,NavMenu,NavItem,NavLinks, NavBtn, NavBtnLink
} from './NavbarElements';
const Navbar = ({toggle}) => {
  const OpeninNewTab=url=>{
    window.open(url,'_blank','noopener,noreferrer');
  };
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/info'>
            diyakaran.in</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars></FaBars>
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='/'>Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products'>Our Products</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/about'>About Us</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/contact'>Contact Us</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink onClick={()=>OpeninNewTab('https://docs.google.com/forms/d/1hqD9xXnwthq--0Xto0YD1-BUbTMPAb6uV7XZiS83XAU/edit')}>Get in Touch</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </div>
  )
}

export default Navbar
