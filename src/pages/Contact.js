import React from 'react';
import ContactSection from '../components/ContactSection';
import Map from '../components/Map';
import Footer from '../components/FooterI'
import BannerImage from "../assets/connect.jpg"
import "../styles/Contact.css"
export default function Contact() {
  return (
    <div className="contact" style={{ backgroundImage: `url(${BannerImage})` }}>
      <ContactSection />
      <Map />
      <Footer/>
    </div>
  );
}