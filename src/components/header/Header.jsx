import React, {useRef} from 'react';
import "./header.css"
function Header() {

    return (
        <div className='h'>
            <div className="h-leftside">
                
                <p className='blackText' id="navDesc"></p>
            </div>
            <div className="h-rightside">
                <a href='/'><img className='b-wordmark' src="https://blankandbeyond.s3.amazonaws.com/logos/%26Beyond_wordmark.svg"/></a>
            </div>
        </div>
    );
}

export default Header;
