import React from 'react'
import Video from '../video/Video'
import Image from '../image/Image'
import Footer from '../footer/Footer'
import "../homeGallery/homeGallery.css"


function TsushimaGallery() {
  return (
    <div className='container k-container'>
        <div className='flex-banner heading p-left p-right text-content'>Reminiscent of Japanese woodblock paintings, <strong>Tsushima&Beyond</strong> explores the Kamakura period [1192 -1333] of Japan and covers the video game, Ghosts of Tsushima developed by Sucker Punch. An ancient time of the Shogunate samurai, a duty to the code of honour, and unparalleled brutality, witness the moving beauty on display on the island of Tsushima.</div>
        <div className='flex-item p-left p-right p-bottom credits text-content'>PHOTOGRAPHS and VIDEOS by SHUJAAT SYED</div>
        <div className="flex-banner"><Video videoPath="https://blankandbeyond.s3.amazonaws.com/videos/season1/tsushima/got_cover.mp4"/></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/tsushima/got_grassfield.jpg" imageWidth='100%'></Image></div>
        <div className='flex-item'><Video videoPath="https://blankandbeyond.s3.amazonaws.com/videos/season1/tsushima/foxshrine.mov"></Video></div>
        <div className='flex-item quote'>CHASE THE ORANGE FOX <br/>FOR PROSPERITY AND HOPE <br/> THE KAMI WATCHES</div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/tsushima/got_nighthorse.jpg" imageWidth='100%'></Image></div>
        <div className="flex-banner"><Video videoPath="https://blankandbeyond.s3.amazonaws.com/videos/season1/tsushima/flute_fix.mp4" /></div>
        <div className='flex-item quote'>EMPTY BLUE SKIES<br/>MANY FLOCK OF BIRDS IN VIEW<br/>I WILL FOLLOW THEM</div>
        <div className='flex-item'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/tsushima/got_treeswing.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/tsushima/got_ricebarrel.jpg" imageWidth='100%'></Image></div>
        <div className='flex-item'><Video videoPath="https://blankandbeyond.s3.amazonaws.com/videos/season1/tsushima/cart.mov"></Video></div>
        <div className='flex-item'><Video videoPath="https://blankandbeyond.s3.amazonaws.com/videos/season1/tsushima/window_woman.mov"></Video></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/tsushima/got_grassfog.jpg" imageWidth='100%'></Image></div>
        <div className='flex-item'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/tsushima/tsushima.jpeg" imageWidth='100%'></Image></div>
        <div className='flex-item quote'>SWORD HIDDEN YET DRAWN<br/>DEFEND AND PROTECT OTHER<br/>SAT COST OF HONOR</div>
        <div className="flex-banner"><Video videoPath="https://blankandbeyond.s3.amazonaws.com/videos/season1/tsushima/redvsyellow_comp.mp4"/></div>
        <div className='flex-item'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/tsushima/got_slashnight.jpg" imageWidth='100%'></Image></div>
        <div className='flex-item'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/tsushima/got_fire.jpg" imageWidth='100%'></Image></div>
        <div className="flex-banner"><Video videoPath="https://blankandbeyond.s3.amazonaws.com/videos/season1/tsushima/flagdance.mp4"/></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/tsushima/got_wheatfield.jpg" imageWidth='100%'></Image></div>
        <div className="flex-banner"><Video videoPath="https://blankandbeyond.s3.amazonaws.com/videos/season1/tsushima/plank_path.mp4"/></div>
        <div className="flex-banner"><Video videoPath="https://blankandbeyond.s3.amazonaws.com/videos/season1/tsushima/hidden_field.mp4"/></div>
        <div className='flex-margin'></div>
        <div className='flex-center'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/tsushima/got_sleepinghorse.jpg" imageWidth='100%'></Image></div>
        <div className='flex-margin'></div>
        <div className='flex-banner'><Footer/></div>
    </div>
  )
}

export default TsushimaGallery