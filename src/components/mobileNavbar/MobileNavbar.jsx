import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { navIconInfo } from '../../navdata';
import Navitem from '../navitem/Navitem';
import "./mobileNavbar.css"

const MobileNavbar=({theme}) => {

    //two variable to check if we should show menu, and d function to change the value of our showMenu variable
    //set useState false so menu is disabled when page loads
  const [showMenu, setShowMenu] = useState(false)
 
  //conditional rendering the menu
  let menu
  let menuMask
  let navtheme
    if(theme=='whiteText'){
        console.log('white')
        navtheme="dark"

    }else{
        console.log('black')
        navtheme="light"
    }

 
  if(showMenu) {
      menu = 
      <div className={'mobile-nav-menu-'+navtheme}>
          <a href='/'><h1 className={"mobile-nav-title-"+navtheme}>&Beyond</h1></a>
          <span className='x-icon'>
            <FontAwesomeIcon
                icon={faTimesCircle}
                size='lg'
                onClick={() => setShowMenu(false)}
            />
          </span>

            {navIconInfo.map((item) =>( 
                
                <div className={'mobile-nav-icon-'+navtheme}>
                    <Navitem key={item.id} img={item.img} link={item.link} height={item.height} />
                    <p className={'mobile-nav-desc-'+navtheme}>{item.desc}</p>
                </div>
            ))}
          <p className={'mobile-nav-desc-'+navtheme}>&Beyond © 2021 by SHUJAAT AND RAYAN SYED</p>
       </div>

      menuMask = 
      <div 
        className='mobile-menu-mask'
        onClick={() => setShowMenu(false)}
      >
      </div>
  }
  
  return (
      <nav>
          <span className={'mobile-nav-icon-'+navtheme}>
            <FontAwesomeIcon
                icon={faBars}
                size='lg'
                onClick={() => setShowMenu(!showMenu)}
            />
          </span>
          {menuMask}
          {menu}
      </nav>
    );
}

export default MobileNavbar;

