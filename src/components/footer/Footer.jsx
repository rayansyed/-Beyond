import React from 'react';
import Beyond from '../../logos/Beyond.png'
import "./footer.css"

function Footer() {
  return (
  <div className='footer-container'>
      <img className='footer-logo' src={Beyond} width='100%'></img>
      <div className='footer-text'>
        <p>PRODUCT NAMES, LOGOS, AND BRANDS ARE PROPERTY OF THEIR RESPECTIVE OWNERS</p>
        <p>COMPANY AND PRODUCT USED IN THIS WEBSITE ARE FOR IDENTIFICATION PURPOSES ONLY</p>
        <p>USE OF COMPANY AND PRODUCT NAMES, LOGOS, AND BRANDS DOES NOT IMPLY ENDORSEMENT</p>
        <p>&BEYOND © 2021 by SHUJAAT AND RAYAN SYED</p>
      </div>
  </div>);
}

export default Footer;
