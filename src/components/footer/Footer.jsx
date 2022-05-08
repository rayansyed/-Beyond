import React from 'react';
import "./footer.css"

function Footer() {
  return (
  <div className='footer-container'>
    <img className='footer-logo' src="https://blankandbeyond.s3.amazonaws.com/logos/%26Beyond.svg" width='100%'></img>
    <div className='grid-container'>
      <div className="grid-item">PRODUCT NAMES, LOGOS, AND BRANDS ARE PROPERTY OF THEIR RESPECTIVE OWNERS.</div>
      <div className="grid-item">COMPANY AND PRODUCT USED IN THIS WEBSITE ARE FOR IDENTIFICATION PURPOSES ONLY.</div>
      <div className="grid-item">USE OF COMPANY AND PRODUCT NAMES, LOGOS, AND BRANDS DOES NOT IMPLY ENDORSEMENT.</div>  
      <div className="grid-item">&BEYOND © 2021 BY SHUJAAT AND RAYAN SYED</div>
    </div>

  </div>);
}

export default Footer;
