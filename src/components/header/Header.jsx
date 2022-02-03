import React, {useRef} from 'react';
import "./header.css"
function Header() {
    function changeDescColor() {
        switch(window.location.pathname){
          case '/kingdom':
            return 'whiteText';
       
          default:
            return 'blackText';
        }
    }

    return (
        <div className='h'>
            <div className="h-leftside">
                <p className={changeDescColor()} id="navDesc"></p>
            </div>
            <div className="h-rightside">
                <a href='/'><h1 className='h-beyond'>&Beyond</h1></a>
            </div>
        </div>
    );
}

export default Header;
