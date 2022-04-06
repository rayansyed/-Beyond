import React from 'react'
import Video from '../video/Video'
import Image from '../image/Image'
import Footer from '../footer/Footer'
import "../homeGallery/homeGallery.css"

import tsushima1 from '../../videos/tsushima/got_cover.mp4'
import tsushima2 from '../../images/tsushima/got_grassfield.jpg'
import tsushima3 from '../../videos/tsushima/foxshrine.mov'
import tsushima4 from '../../images/tsushima/got_nighthorse.jpg'
import tsushima5 from '../../videos/tsushima/flute_fix.mp4'
import tsushima6 from '../../images/tsushima/got_treeswing.jpg'
import tsushima7 from '../../images/tsushima/got_ricebarrel.jpg'
import tsushima8 from '../../videos/tsushima/cart.mov'
import tsushima9 from '../../videos/tsushima/window_woman.mov'
import tsushima10 from '../../images/tsushima/got_grassfog.jpg'
import tsushima11 from '../../images/home/tsushima.jpeg'
import tsushima12 from '../../videos/redvsyellow_comp.mp4'
import tsushima13 from '../../images/tsushima/got_slashnight.jpg'
import tsushima14 from '../../images/tsushima/got_fire.jpg'
import tsushima15 from '../../videos/tsushima/flagdance.mp4'
import tsushima16 from '../../images/tsushima/got_wheatfield.jpg'
import tsushima17 from '../../videos/tsushima/plank_path.mp4'
import tsushima18 from '../../videos/tsushima/hidden_field.mp4'
import tsushima19 from '../../images/tsushima/got_sleepinghorse.jpg'

function TsushimaGallery() {
  return (
    <div className='container k-container'>
        <div className='flex-banner heading p-left p-right'>Reminiscent of Japanese woodblock paintings, <strong>Tsushima&Beyond</strong> explores the Kamakura period [1192 -1333] of Japan and covers the video game, Ghosts of Tsushima developed by Sucker Punch. An ancient time of the Shogunate samurai, a duty to the code of honour, and unparalleled brutality, witness the moving beauty on display on the island of Tsushima.</div>
        <div className='flex-item p-left p-right p-bottom credits'>PHOTOGRAPHS and VIDEOS by SHUJAAT SYED</div>
        <div className="flex-banner"><Video videoPath={tsushima1}/></div>
        <div className='flex-banner'><Image image={tsushima2} imageWidth='100%'></Image></div>
        <div className='flex-item'><Video videoPath={tsushima3}></Video></div>
        <div className='flex-item quote'>CHASE THE ORANGE FOX <br/>FOR PROSPERITY AND HOPE <br/> THE KAMI WATCHES</div>
        <div className='flex-banner'><Image image={tsushima4} imageWidth='100%'></Image></div>
        <div className="flex-banner"><Video videoPath={tsushima5} /></div>
        <div className='flex-item quote'>EMPTY BLUE SKIES<br/>MANY FLOCK OF BIRDS IN VIEW<br/>I WILL FOLLOW THEM</div>
        <div className='flex-item'><Image image={tsushima6} imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image={tsushima7} imageWidth='100%'></Image></div>
        <div className='flex-item'><Video videoPath={tsushima8}></Video></div>
        <div className='flex-item'><Video videoPath={tsushima9}></Video></div>
        <div className='flex-banner'><Image image={tsushima10} imageWidth='100%'></Image></div>
        <div className='flex-item'><Image image={tsushima11} imageWidth='100%'></Image></div>
        <div className='flex-item quote'>SWORD HIDDEN YET DRAWN<br/>DEFEND AND PROTECT OTHER<br/>SAT COST OF HONOR</div>
        <div className="flex-banner"><Video videoPath={tsushima12}/></div>
        <div className='flex-item'><Image image={tsushima13} imageWidth='100%'></Image></div>
        <div className='flex-item'><Image image={tsushima14} imageWidth='100%'></Image></div>
        <div className="flex-banner"><Video videoPath={tsushima15}/></div>
        <div className='flex-banner'><Image image={tsushima16} imageWidth='100%'></Image></div>
        <div className="flex-banner"><Video videoPath={tsushima17}/></div>
        <div className="flex-banner"><Video videoPath={tsushima18}/></div>
        <div className='flex-margin'></div>
        <div className='flex-center'><Image image={tsushima19} imageWidth='100%'></Image></div>
        <div className='flex-margin'></div>
        
        <div className='flex-banner'><Footer/></div>
    </div>
  )
}

export default TsushimaGallery