import React from 'react';
import "./iconHeader.css"
const IconHeader=({icon, desktopStyle, mobileStyle}) => {
    return (
        <div className='ih'>
            <div className="ih-leftside">
                <p id="navDesc"></p>
                <div id='ih-iconWrapper'>
                    <img id={desktopStyle} src={icon}></img>
                </div>
            </div>
            <div className="ih-rightside">
                <a href='/'><h1 className='ih-beyond'>&Beyond</h1></a>
            </div>
            <div className='ih-mobile'>
                <img id={mobileStyle}  src={icon}></img>
                <a href='/'><h1 className='ih-beyond-mobile'>&Beyond</h1></a>
            </div>
        </div>
    );
}

export default IconHeader;
