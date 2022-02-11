import React from 'react';
import cyberpunklogo from '../../logos/77.svg'
import bridgesLogo from '../../logos/Bridges.svg'
import kamLogo from '../../logos/kamurouchu.svg'
import kingdomLogo from '../../logos/Kingdom.svg'
import lossLogo from '../../logos/LOSS.svg'
import bulletLogo from '../../logos/Bullet.svg'
import Navitem from '../navitem/Navitem'
import "./navbar.css"
import { navIconInfo } from '../../navdata';
import { useState, useRef } from 'react';



function Navbar() {
    const inputRef = useRef()
    const [isShown, setIsShown] = useState(false);

    function handleMouseEnter(e,text){
        console.log(e)
        setIsShown(true)
    }

    function handleMouseLeave(e){
        setIsShown(false)
    }

  return (
      <div className='navbar'>
        <div className='nav-wrapper'>
                {navIconInfo.map((item) =>(
                    <Navitem key={item.id} img={item.img} link={item.link} width={item.width} desc={item.desc}/>
                ))}
        </div>
      </div>

    );
}

export default Navbar;
