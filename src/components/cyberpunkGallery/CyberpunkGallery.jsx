import React from 'react'
import Image from '../image/Image'
import Footer from '../footer/Footer'
import "../homeGallery/homeGallery.css"

function CyberpunkGallery() {
  return (
    <div className='container k-container'>
        <div className='flex-banner heading p-left p-right text-content'><strong>77&Beyond</strong> explores Night City and covers the video game Cyberpunk 2077. Located near the Pacific Coast, Night City is a metropolis, filled with furturistic skyscrapers and neon lights, providing a beautiful atmosphere for its residents. Originally known as "The City of Dreams", it has seen its share of violence, and corruption over the years resulting in it being voted the "Worst Place to Live in America".</div>
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
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/77/photomode_29122020_160923.jpg" imageWidth='100%'></Image></div>
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