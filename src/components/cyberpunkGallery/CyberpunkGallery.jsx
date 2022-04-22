import React from 'react'
import Image from '../image/Image'
import Footer from '../footer/Footer'
import "../homeGallery/homeGallery.css"

function CyberpunkGallery() {
  return (
    <div className='container k-container'>
        <div className='flex-banner heading p-left p-right text-content'>Taking place during the end of the 19th century, <strong>77&Beyond</strong> explores the fall of the Wild West [1899 -1907] in Western and Southern America and covers the video game, Red Dead Redemption II developed by Rockstar Games. Gangs and Outlaws are nearing their end as America moves towards progressing the country by establishing law and order.</div>
        <div className='flex-item p-left p-right p-bottom credits text-content'>PHOTOGRAPHS by SHUJAAT & RAYAN SYED</div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/77/cp_deskgirl.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/77/cp_sunset.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/77/cp_overlook.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/77/cp_claire.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/77/cp_takemuraelvator.jpg" imageWidth='100%'></Image></div>
        <div className='flex-item'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/77/cp_vendor.jpg" imageWidth='100%'></Image></div>
        <div className='flex-item'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/77/cp_purple.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/77/cp_latenight.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/77/cp_diner.jpg" imageWidth='100%'></Image></div>
        <div className='flex-item'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/77/cp_bluemoon.jpg" imageWidth='100%'></Image></div>
        <div className='flex-item'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/77/cp_jackie.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/77/cp_redstair.jpg" imageWidth='100%'></Image></div>
        <div className='flex-item'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/77/cp_afterlifeEnterance.jpg" imageWidth='100%'></Image></div>
        <div className='flex-item'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/77/cp_afterlifeBar.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/77/cp_porsche.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/77/cp_alley.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/77/cp_silverhand.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/77/cp_kojima.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/77/cp_mechanic.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/77/cp_claireday.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Footer/></div>


    </div>
  )
}

export default CyberpunkGallery;