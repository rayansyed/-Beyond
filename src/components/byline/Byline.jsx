import React from 'react';
import "./byline.css"
function Byline() {
  
  function changeBylineColor() {
    switch(window.location.pathname){
      case '/kingdom':
        return 'whiteText';
   
      default:
        return 'blackText';
    }
}
  return (
  <div className='by'>
      <h1 className={'by-title '+changeBylineColor()}>&Beyond is an experimental series in legitmitzing the field of video game photography.</h1>
      <h1 className={'by-dropdown '+changeBylineColor()}>&</h1>
  </div>
    );
}

export default Byline;
