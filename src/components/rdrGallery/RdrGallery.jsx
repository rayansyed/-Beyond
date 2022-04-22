import React from 'react'
import Image from '../image/Image'
import Footer from '../footer/Footer'
import "../homeGallery/homeGallery.css"

function RdrGallery() {
  return (
    <div className='container k-container'>
        <div className='flex-banner heading p-left p-right text-content'>Taking place during the end of the 19th century, <strong><span><img src="https://blankandbeyond.s3.amazonaws.com/logos/Bullet.svg" width='40rem'></img></span>&Beyond</strong> explores the fall of the Wild West [1899 -1907] in Western and Southern America and covers the video game, Red Dead Redemption II developed by Rockstar Games. Gangs and Outlaws are nearing their end as America moves towards progressing the country by establishing law and order.</div>
        <div className='flex-item p-left p-right p-bottom credits text-content'>PHOTOGRAPHS by RAYAN SYED</div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_bloodymorgan.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_landscape.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_hunter.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_doublebarrel.jpg" imageWidth='100%'></Image></div>
        <div className='flex-item'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_nightclimb.jpg" imageWidth='100%'></Image></div>
        <div className='flex-item'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_twinmount.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_shopwindow.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_nighthorseride.jpg" imageWidth='100%'></Image></div>
        <div className='flex-item'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_reading.jpg" imageWidth='100%'></Image></div>
        <div className='flex-item'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_newsboy.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_sheep.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_dutchgun.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_begger.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_holmes.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_sadie.jpg" imageWidth='100%'></Image></div>
        <div className='flex-item'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_shopowner.jpg" imageWidth='100%'></Image></div>
        <div className='flex-item'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_micah.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_overlook.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_herder.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/17.jpg" imageWidth='100%'></Image></div>
        <div className='flex-item'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_knifesharp.jpg" imageWidth='100%'></Image></div>
        <div className='flex-item'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_odriscoll.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_camp.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_headshot.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_coward.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/rdr_poker.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/rdr/20.jpg" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Footer/></div>
    </div>
  )
}

export default RdrGallery;