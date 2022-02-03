import React from 'react';
import "./kingdomHeader.css"
import kingdomIcon from '../../logos/Kingdom.svg'
function KingdomHeader() {
    return (
        <div className='kh'>
            <div className="kh-leftside">
                <p id="navDesc"></p>
                <img id="kh-icon" src={kingdomIcon}></img>
            </div>
            <div className="kh-rightside">
                <a href='/'><h1 className='kh-beyond'>&Beyond</h1></a>
            </div>
            <div className='kh-mobile'>
                <img id="kh-icon-mobile"  src={kingdomIcon}></img>
                <a href='/'><h1 className='kh-beyond-mobile'>&Beyond</h1></a>
            </div>
        </div>
    );
}

export default KingdomHeader;
