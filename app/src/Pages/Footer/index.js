import React from 'react';
import './footer.css';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-title">
          <h1>Joshi Kumar</h1>
        </div>
        <div style={{ width: '40%' }}>
          <div className="contact-info">
            <div>
              <p className="contact-text">+91 8919198110</p>
              <p className="contact-text">contact@jncompany.in</p>
            </div>
            <div className="address">
              <p>987, Vasanth Nagar Main Rd, Dharma Reddy Colony Phase II,<br />
                Vasanth Nagar, Kukatpally, Hyderabad, Telangana 500085, India
              </p>
            </div>
          </div>
          <div className="social-icons">
            <a href="https://www.instagram.com/jn_company.in/"><FaInstagram/></a>
            <a href="https://www.linkedin.com/in/joshi-kumar-n-6286751b6/"><FaLinkedin/></a>
            <a href="https://www.facebook.com/people/JN-Company/61560308280502/"><FaFacebook/></a>
          </div>
          <div className="stay-connected">
            <h1>Stay Connected with Our Latest Updates</h1>
          </div>
          <div className="email-section" style={{width:'100%'}}>
            <h3>Enter Email Here*</h3>
            <div className='mail' style={{gap:30}}>
              <input className="email-input" type="email" placeholder="" />
              <button className="subscribe-btn" type="button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
