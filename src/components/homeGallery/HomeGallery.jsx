import React from 'react';
import "./homeGallery.css"
import Image from '../image/Image';
import Video from '../video/Video';
import Footer from '../footer/Footer';

function HomeGallery() {
    const desc1 = "šŗ JIN SAKAI\nš® GHOST OF TSUSHIMA"
    const desc2="š§āāā EIVOR\nš® ASSASSIN'S CREED VALHALLA"
    const desc3="š MANTAI INTERNET CAFE\nš® JUDEMENT"
    const desc4="šŗ JIN SAKAI\nš® GHOST OF TSUSHIMA"
    const desc5 = "š¤ HIDEYOSHI OSHIMA\nš® CYBERPUNK 77"
    const desc6 = "š¤  ARTHUR MORGAN\nš® RED DEAD REDEMPTION II"
    return (
        <div className="container">
            <div className="flex-banner"><Video videoPath="https://blankandbeyond.s3.amazonaws.com/videos/season1/tsushima/redvsyellow_comp.mp4" desc={desc1} icon="https://blankandbeyond.s3.amazonaws.com/logos/tsushima.svg" imageWidth="100%"/></div>
            <div className="flex-banner"><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/kingdom/kingdom31.jfif" desc={desc2} icon="https://blankandbeyond.s3.amazonaws.com/logos/Kingdom.svg" imageWidth="100%"/></div>
            <div className="flex-banner"><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/kamurocho/dither_it_Mantai-Internet-Caf%C3%A9-(Theater-Square)__3.gif" desc={desc3} icon="https://blankandbeyond.s3.amazonaws.com/logos/kamurouchu.svg" imageWidth="100%"/></div>
            <div className="flex-banner"><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/77/cp_kojima.jpg" desc={desc5} icon="https://blankandbeyond.s3.amazonaws.com/logos/77.svg"imageWidth="100%"/></div> 
            <div className="flex-banner"><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_nighthorseride.jpg" desc={desc6} icon="https://blankandbeyond.s3.amazonaws.com/logos/Bullet.svg"imageWidth="100%"/></div> 

            <div className='flex-banner'><Footer/></div>
        </div>
        );
}

export default HomeGallery;
