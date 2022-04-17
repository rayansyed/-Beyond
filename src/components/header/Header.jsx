import React, {useRef} from 'react';
import "./header.css"
function Header() {

    return (
        <div className='h'>
            <div className="h-leftside">
                <p className='blackText' id="navDesc"></p>
            </div>
            <div className="h-rightside">
                <a href='/'><h1 className='h-beyond'>&Beyond</h1></a>
            </div>
        </div>
    );
}

export default Header;
