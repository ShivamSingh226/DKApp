import React from 'react'
import {NavBtn,NavBtnLink} from '../Navbar/NavbarElements'
import Ptext from "../../pages/Ptext"
import { FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,WebsiteRights,Lbtn } from './FooterElements'
const Footer = () => {
    const OpeninNewTab=url=>{
        window.open(url,'_blank','noopener,noreferrer');
      };
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> Diyakaran Enterprises LLP</FooterLinkTitle>
                        <p>Trusted and Authorized distributors for Anthem Biosciences, Bangalore.</p>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Help Section</FooterLinkTitle>
                        <FooterLink to="/">Home</FooterLink>
                        <FooterLink to="/products">Our Products</FooterLink>
                        <FooterLink to="/about">About Us</FooterLink>
                        <FooterLink to="/contact">Contact Us</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> Home Address</FooterLinkTitle>
                         <FooterLink> Deokant Singh</FooterLink>
                         
                         <Ptext>105, Block-D, Mantri Elegance, Bannerghatta Main Road, Stage-2, BTM Layout</Ptext>
                         <Ptext>Benguluru, Karnataka 560076</Ptext>
                         <Ptext>Contact:+919611158000</Ptext>
                        
                        
                         <Ptext>Email:diyakaranenterprises</Ptext>
                         <Ptext>@gmail.com</Ptext>
                         <NavBtn>
                            <NavBtnLink onClick={()=>OpeninNewTab('https://goo.gl/maps/UP6mVp9Rv2TzUBn27')}>Visit Us</NavBtnLink>
                         </NavBtn>
                         
                    </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Corporate Address</FooterLinkTitle>
                        <Ptext>Sonarisa's,2nd Floor, Above Swad Restaurant</Ptext>
                        <Ptext>In Front of Mantri Elegance Exit Gate</Ptext>
                        <Ptext>Stage-2, BTM Layout</Ptext>
                        <Ptext>Bengaluru, Karnataka 560076</Ptext>
                        <Ptext>+919611158000</Ptext>
                        <Ptext>info@diyakaran.in</Ptext>
                        <Lbtn>
                        <NavBtn>
                            <NavBtnLink onClick={()=>OpeninNewTab('https://goo.gl/maps/KjWd6qzhSxdTh14C7')}>Reach Us</NavBtnLink>
                         </NavBtn>
                         </Lbtn>
                    </FooterLinkItems>
                    </FooterLinksWrapper>
               
            </FooterLinksContainer>
            <WebsiteRights>Diyakaran Enterprises LLP © {new Date().getFullYear} 2022, All rights reserved</WebsiteRights>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer