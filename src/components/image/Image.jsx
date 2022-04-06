import React from 'react';
import "./image.css"
const Image = ({image,imageWidth,desc,icon}) => {
  return (
    <div className='image-container'>
        <img loading="lazy"  width={imageWidth} className='image-source' src={image}></img>
        <div className='image-texts'>
            <pre className='image-desc'>{desc}</pre>
            <img loading="lazy" className='image-icon' height='100%' src={icon}></img> 
        </div>
    </div>
  );
}

export default Image;
