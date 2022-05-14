import React from 'react'
import IconHeader from "../header/IconHeader";
import WallpaperImage from "../wallpaperImage/WallpaperImage";
import BridgesGallery from '../bridgesGallery/BridgesGallery';
function BridgesPage() {
    const desktopStyle = "bridges-icon"
    const mobileStyle = "bridges-icon-mobile"
    const game = "GAME: DEATH STRANDING"
    const time = "TIME PLAYED: 90 HOURS"
    const studio = "STUDIO: KOJIMA PRODUCTIONS"
    const release = "RELEASE: NOVEMBER 8TH, 2019"
    const platform = "PLATFORM: PS4 PRO"
  return (
    <div>
        <WallpaperImage background="https://blankandbeyond.s3.amazonaws.com/photos/season1/bridges/bridgesBackground.jpg" game={game} time={time} studio={studio} release={release} platform={platform}/>
        <IconHeader icon="https://blankandbeyond.s3.amazonaws.com/logos/Bridges.svg" desktopStyle={desktopStyle} mobileStyle={mobileStyle}/>     
        <BridgesGallery/>
    </div>
  )
}

export default BridgesPage;