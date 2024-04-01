import React from 'react'
import {NavBtn,NavBtnLink} from '../Navbar/NavbarElements'
import Ptext from "../../pages/Ptext"
import styled from 'styled-components'
import { FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,WebsiteRights,Lbtn } from './FooterElements'
const AnchorLink=styled.div`
.hyper__link {
    display: inline-block;
    font-size: 1.1rem;
    margin-top: 0.4rem;
    margin-bottom:0.4rem;
    text-decoration: none;
    color:#fff;
  }
  .hyper__link:hover{
    color:#01bf71;
    cursor:pointer;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;
const Footer = () => {
    const OpeninNewTab=url=>{
        window.open(url,'_blank','noopener,noreferrer');
      };
      const currentYear=new Date().getFullYear();
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
                        <FooterLinkTitle> Corporate Address</FooterLinkTitle>
                         <FooterLink> Deokant Singh</FooterLink>
                         
                         <Ptext>Diyakaran Enterprises LLP</Ptext>
                         <Ptext>No. 128, 1st Cross, Industrial Area</Ptext>
                         <Ptext>NS Palya, Bengaluru</Ptext>
                         <Ptext>Karnataka 560076</Ptext>
                         <Ptext>Contact:+919611158000,</Ptext>
                         <Ptext>+918049900460</Ptext>
                        
                        
                         <Ptext>Email: info@diyakaran.in</Ptext>
                         
                         
                         
                    </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Important Links</FooterLinkTitle>
                        <AnchorLink><a
            className="hyper__link"
            href="https://www.anthembio.com/"
            target="_blank"
            rel="noreferrer"
          >
            Anthem Biosciences
          </a></AnchorLink>
                        <AnchorLink><a
            className="hyper__link"
            href="https://www.linkedin.com/in/deo-kant-singh-a105751b/"
            target="_blank"
            rel="noreferrer"
          >Meet our CEO</a></AnchorLink>
                        <FooterLink to="/lists">Featured Products</FooterLink>
                        <AnchorLink><a className="hyper__link" href="https://goo.gl/maps/oh2AcsciLTHF1dLR6" target="_blank" rel="noreferrer">Our Location</a></AnchorLink>
                        <AnchorLink><a className="hyper__link" href="tel:+918049900460" target="_blank" rel="noreferrer">Contact:+918049900460</a></AnchorLink>
                        <AnchorLink><a
            className="hyper__link"
            href="mailto:info@diyakaran.in"
            target="_blank"
            rel="noreferrer"
          >Email:info@diyakaran.in</a></AnchorLink>
                        
                    </FooterLinkItems>
                    </FooterLinksWrapper>
               
            </FooterLinksContainer>
            <WebsiteRights>Diyakaran Enterprises LLP © {currentYear}, All rights reserved</WebsiteRights>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer