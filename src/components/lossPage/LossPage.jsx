import React from 'react';
import IconHeader from '../header/IconHeader';
import LossGallery from '../lossGallery/LossGallery';
import WallpaperImage from "../wallpaperImage/WallpaperImage";

function LossPage() {
    const game = "GAME: THE LAST OF US PART II"
    const time = "TIME PLAYED: 90 HOURS"
    const studio = "STUDIO: NAUGHTY DOG"
    const release = "RELEASE: JUNE 19TH 2020"
    const platform = "PLATFORM: PLAYSTATION 4 PRO"
    const desktopStyle = "loss-icon"
    const mobileStyle = "loss-icon-mobile"

    return (
        <div>
            <WallpaperImage background="https://blankandbeyond.s3.amazonaws.com/photos/season1/loss/Safeimagekit-resized-imgpng.png" game={game} time={time} studio={studio} release={release} platform={platform}/>
            <IconHeader icon="https://blankandbeyond.s3.amazonaws.com/logos/LOSS.svg" desktopStyle={desktopStyle} mobileStyle={mobileStyle}/>
            <LossGallery/>
        </div>
    );
}

export default LossPage;