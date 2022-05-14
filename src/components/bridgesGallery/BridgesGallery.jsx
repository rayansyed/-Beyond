import React from 'react'
import Footer from '../footer/Footer'
import Image from '../image/Image'

function BridgesGallery() {
  return (
    <div className='container k-container'>
        <div className='flex-banner heading p-left p-right text-content'><strong>Bridges&Beyond</strong> explores the world of Death Stranding, developed by Kojima Productions. The game is set in the apocalyptic United States and follows the journey of a porter named Sam Bridges.</div>
        <div className='flex-item p-left p-right p-bottom credits text-content'>PHOTOGRAPHS by SHUJAAT SYED</div>
        <div className='flex-banner'><Image image="https://blankandbeyond.s3.amazonaws.com/photos/season1/bridges/bridges_19.webp" imageWidth='100%'></Image></div>
        <div className='flex-banner'><Footer/></div>
    </div>
  )
}

export default BridgesGallery;