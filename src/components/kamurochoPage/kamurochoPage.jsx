import IconHeader from "../header/IconHeader";
import WallpaperImage from "../wallpaperImage/WallpaperImage";
import "./kamurochoPage.css"
function KamurochoPage() {
    const desktopStyle = "kam-icon"
    const mobileStyle = "kam-icon-mobile"
    const game = "GAME: GHOST OF TSUSHIMA"
    const time = "TIME PLAYED: 68 HOURS"
    const studio = "STUDIO: SUCKER PUNCH PRODUCTIONS"
    const release = "RELEASE: JULY 17TH 2020"
    const platform = "PLATFORM: PLAYSTATION 4 PRO"
    return(
        <div>
            <WallpaperImage background="https://blankandbeyond.s3.amazonaws.com/photos/season1/kamurocho/kam_background.png" game={game} time={time} studio={studio} release={release} platform={platform}/>
            <IconHeader icon="https://blankandbeyond.s3.amazonaws.com/logos/kamurouchu.svg" desktopStyle={desktopStyle} mobileStyle={mobileStyle}/>
          
        </div>
    );
}

export default KamurochoPage;