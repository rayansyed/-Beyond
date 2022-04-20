import React from 'react'
import Image from '../image/Image'
import Footer from '../footer/Footer'
import "../homeGallery/homeGallery.css"
function KamurochoGallery(){
    return(
        <div className='container k-container'>
            <div className='flex-banner heading p-left p-right text-content'><strong>神室町&Beyond</strong> explores Japanese architecture, street-life, and cultural iconography in the fictional city of Kamurochu. The city, is the the cornerstone of the Yakuza franchise, and as it largely experiments with different characters, and locations— the neon-bathed streets of Kamurochu remain a constant. This collection explores the city in Yakuza 6 and Judgment, both developed by Ryu Ga Gotoku Studio.</div>
            <div className='flex-item p-left p-right p-bottom credits text-content'>PHOTOGRAPHS by SHUJAAT SYED</div>
            <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/kamurocho/window.gif" imageWidth='100%'></Image></div>
            <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/kamurocho/dither_it_Yagami-Detective-Agency__7.gif" imageWidth='100%'></Image></div>
            <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/kamurocho/dither_it_YAKUZA-6_-The-Song-of-Life_20181229015656-(1).gif" imageWidth='100%'></Image></div>
            <div className='flex-item'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/kamurocho/dither_it_Genda-Law-Office__1.gif" imageWidth='100%'></Image></div>
            <div className='flex-item quote'>RYUZO GENDA<br/>田龍造</div>
            <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/kamurocho/dither_it_Genda-Law-Office_.gif" imageWidth='100%'></Image></div>
            <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/kamurocho/dither_it_Genda-Law-Office__2.gif" imageWidth='100%'></Image></div>
            <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/kamurocho/dither_it_Tenkaichi-Street__6.gif" imageWidth='100%'></Image></div>
            <div className='flex-item'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/kamurocho/dither_it_Tenkaichi-Street__11.gif" imageWidth='100%'></Image></div>
            <div className='flex-item quote'>TENKAICHI STREET<br/>天下一品通り</div>
            <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/kamurocho/dither_it_Tenkaichi-Street__8.gif" imageWidth='100%'></Image></div>
            <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/kamurocho/dither_it_East-Taihei-Boulevard__6.gif" imageWidth='100%'></Image></div>
            <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/kamurocho/dither_it_East-Taihei-Boulevard__7.gif" imageWidth='100%'></Image></div>
            <div className='flex-item quote'>TAIHEI BOULEVARD EAST<br/>太平大通り東</div>
            <div className='flex-item'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/kamurocho/dither_it_East-Taihei-Boulevard_.gif" imageWidth='100%'></Image></div>
            <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/kamurocho/dither_it_YAKUZA-6_-The-Song-of-Life_20181228163057-(1).gif" imageWidth='100%'></Image></div>
            <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/kamurocho/dither_it_YAKUZA-6_-The-Song-of-Life_20181228233457.gif" imageWidth='100%'></Image></div>
            <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/kamurocho/dither_it_Game-Center-Charles__3.gif" imageWidth='100%'></Image></div>
            <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/kamurocho/dither_it_Mantai-Internet-Caf%C3%A9-(Theater-Square)__3.gif" imageWidth='100%'></Image></div>
            <div className='flex-banner'><Footer/></div>
        </div>
    )
}

export default KamurochoGallery;