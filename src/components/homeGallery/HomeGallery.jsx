import React from 'react';
import "./homeGallery.css"
import Image from '../image/Image';
import Video from '../video/Video';
import Footer from '../footer/Footer';
import { homeImages } from '../../homeImages';

import cyberpunkLogo from '../../logos/77.svg';
import kamurochuLogo from '../../logos/kamurouchu.svg';
import kingdomLogo from '../../logos/Kingdom.svg';
import tsushimaLogo from '../../logos/Tsushi.svg';
import video1 from '../../videos/redvsyellow_comp.mp4'
import image1 from '../../images/home/valhalla.jpeg'
import image2 from '../../images/home/yakuza1.jpeg'
import image3 from '../../images/home/tsushima.jpeg'
import image4 from '../../images/home/cyberpunk.png'



function HomeGallery() {
    const item1 = "https://www.dropbox.com/s/thd1311x9a2nk52/redvsyellow_comp.mp4?dl=0"
    const desc1 = "👺 JIN SAKAI\n🎮 GHOST OF TSUSHIMA"
    const desc2="🧔‍♂‍ EIVOR\n🎮 ASSASSIN'S CREED VALHALLA"
    const desc3="👨 YAGAMI 桐生 一馬\n🎮 JUDEMENT"
    const desc4="👺 JIN SAKAI\n🎮 GHOST OF TSUSHIMA"
    const desc5 = "🤖 TAKEMURA\n🎮 CYBERPUNK 77"
    
    return (
        <div className="container">
            <div className="flex-banner"><Video videoURL={video1} desc={desc1} icon={tsushimaLogo} imageWidth="100%"/></div>
            <div className="flex-item"><Image image={image1} desc={desc2} icon={kingdomLogo} imageWidth="100%"/></div>
            <div className="flex-item"><Image image={image2} desc={desc3} icon={kamurochuLogo} imageWidth="100%"/></div>
            <div className='flex-margin'></div>
            <div className="flex-center"><Image image={image3} desc={desc4} icon={tsushimaLogo} imageWidth="100%"/></div>
            <div className='flex-mragin'></div> 
            <div className="flex-banner"><Image image={image4} desc={desc5} icon={cyberpunkLogo} imageWidth="100%"/></div> 
            <div className='flex-banner'><Footer/></div>


            {/* {homeImages.map((item) =>(
                <div className={item.type}><Image image={item.img} desc={item.desc} icon={item.icon} iconWidth={item.iconWidth}/></div>
            ))} */}
        </div>
        );
}

export default HomeGallery;
