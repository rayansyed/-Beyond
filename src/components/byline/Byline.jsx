import React from 'react';
import MobileNavbar from '../mobileNavbar/MobileNavbar';
import "./byline.css"
function Byline() {
  
  function changeBylineColor() {
    switch(window.location.pathname){
      case '/':
        return 'blackText'
      default:
        return 'whiteText';
    }
}
  return (
  <div className='by'>
      <h1 className={'by-title '+changeBylineColor()}>&Beyond is an experimental series in legitmitzing the field of video game photography.</h1>
      {/* <h1 className={'by-dropdown '+changeBylineColor()}>&</h1> */}
      <MobileNavbar theme={changeBylineColor()}/>
  </div>
    );
}

export default Byline;
