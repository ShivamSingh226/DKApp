import React from 'react'
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ContactInfoItem from './ContactInfoItem';
import Card from "./Card/Card"


const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  .Info{
    color:var(--deep-dark);
    font-size:18px;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

function ContactSection() {
  return (
    
    <ContactSectionStyle>
    <div className="container">
    <SectionTitle heading="contact" subheading="Connect With Us" />
    <div className="contactSection__wrapper">
    <div className="left">
        <div className='Info'>
            <ContactInfoItem icon={<MdLocalPhone />} text="+91 96111 58000" />
            <ContactInfoItem icon={<MdEmail />} text="info@diyakaran.in" />
            <ContactInfoItem text="Diyakaran Enterprises LLP, No 128, 1st Cross, Industrial Area, NS Palya, Bengaluru, Karnataka 560076" />
            </div>
          </div>
          <div className="right">
            <Card title='Corporate Address:' body='Diyakaran Enterprises LLP, No 128, 1st Cross, Industrial Area, NS Palya, Bengaluru, Karnataka 560076' btn='Reach Us' href="https://goo.gl/maps/KjWd6qzhSxdTh14C7"/>
            <Card title='Thank you for stopping by:' body="Please drop down your queries and questions for us. We will be happy to serve you!" btn='Write to Us' href="https://docs.google.com/forms/d/1hqD9xXnwthq--0Xto0YD1-BUbTMPAb6uV7XZiS83XAU/edit"/>
            
          </div>
          </div>
          
    
    </div>
    </ContactSectionStyle>
  )
}

export default ContactSection
