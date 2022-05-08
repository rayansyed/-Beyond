import React from 'react';
import "./navitem.css"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Navitem = ({img, link, name, desc, width, height}) => {
    const [isShown, setIsShown] = useState(false);
    function handleMouseEnter(e){
        document.getElementById('navDesc').style.opacity="1"
        document.getElementById('navDesc').innerHTML = desc 
        document.getElementById('ih-iconWrapper').style.opacity="0"
        setIsShown(true)

    }

    function handleMouseLeave(e){
        document.getElementById('navDesc').style.opacity="0"
        document.getElementById('ih-iconWrapper').style.opacity="1"
        setIsShown(false)
    }



    function changeIconColor() {
        switch(window.location.pathname){
          case '/':
            return 'greyNavIcon'
       
          default:
            return 'whiteNavIcon';
        }
    }

    return (
            <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="navItem" href={link}><img id={desc} className={'navIcon ' + changeIconColor()}  src={img} width={width} height={height}/></a>
    )
}

export default Navitem;
