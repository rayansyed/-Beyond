import IconHeader from "../header/IconHeader";
import Wallpaper from "../wallpaper/Wallpaper";
import RdrGallery from "../rdrGallery/RdrGallery";
function RdrPage() {
    const desktopStyle = "rdr-icon"
    const mobileStyle = "rdr-icon-mobile"
    const game = "GAME: RED DEAD REDEMPTION II"
    const time = "TIME PLAYED: 90 HOURS"
    const studio = "STUDIO: ROCKSTAR GAMES"
    const release = "RELEASE: OCTOBER 24TH 2018"
    const platform = "PLATFORM: PC"
    return(
        <div>
            <Wallpaper background="https://blankandbeyond.s3.amazonaws.com/videos/season1/rdr/RDR2_cover.mp4" game={game} time={time} studio={studio} release={release} platform={platform}/>
            <IconHeader icon="https://blankandbeyond.s3.amazonaws.com/logos/Bullet.svg" desktopStyle={desktopStyle} mobileStyle={mobileStyle}/>     
            <RdrGallery/>   
        </div>
    );
}

export default RdrPage;