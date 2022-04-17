import React from 'react';
import "./homeGallery.css"
import Image from '../image/Image';
import Video from '../video/Video';
import Footer from '../footer/Footer';

function HomeGallery() {
    const desc1 = "👺 JIN SAKAI\n🎮 GHOST OF TSUSHIMA"
    const desc2="🧔‍♂‍ EIVOR\n🎮 ASSASSIN'S CREED VALHALLA"
    const desc3="👨 YAGAMI 桐生 一馬\n🎮 JUDEMENT"
    const desc4="👺 JIN SAKAI\n🎮 GHOST OF TSUSHIMA"
    const desc5 = "🤖 TAKEMURA\n🎮 CYBERPUNK 77"
    
    return (
        <div className="container">
            <div className="flex-banner"><Video videoPath="https://blankandbeyond.s3.amazonaws.com/videos/season1/tsushima/redvsyellow_comp.mp4" desc={desc1} icon="https://blankandbeyond.s3.amazonaws.com/logos/tsushima.svg" imageWidth="100%"/></div>
            <div className="flex-item"><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/home/valhalla.jpeg" desc={desc2} icon="https://blankandbeyond.s3.amazonaws.com/logos/Kingdom.svg" imageWidth="100%"/></div>
            <div className="flex-item"><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/home/yakuza1.jpg" desc={desc3} icon="https://blankandbeyond.s3.amazonaws.com/logos/kamurouchu.svg" imageWidth="100%"/></div>
            <div className='flex-margin'></div>
            <div className="flex-center"><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/home/tsushima.jpeg" desc={desc4} icon="https://blankandbeyond.s3.amazonaws.com/logos/tsushima.svg" imageWidth="100%"/></div>
            <div className='flex-mragin'></div> 
            <div className="flex-banner"><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/home/cyberpunk.png" desc={desc5} icon="https://blankandbeyond.s3.amazonaws.com/logos/77.svg"imageWidth="100%"/></div> 
            <div className='flex-banner'><Footer/></div>
        </div>
        );
}

export default HomeGallery;
