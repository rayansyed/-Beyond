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
                <a href='/'><img className='ih-beyond-wordmark' src="https://blankandbeyond.s3.amazonaws.com/logos/%26Beyond_wordmark.svg"/></a>
            </div>
            <div className='ih-mobile'>
                <img id={mobileStyle}  src={icon}></img>
                <a href='/'><img className='ih-beyond-wordmark' src="https://blankandbeyond.s3.amazonaws.com/logos/%26Beyond_wordmark.svg"/></a>
            </div>
        </div>
    );
}

export default IconHeader;
