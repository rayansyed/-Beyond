import IconHeader from "../header/IconHeader";
import KamurochoGallery from "../kamurochoGallery/KamurochoGallery";
import WallpaperImage from "../wallpaperImage/WallpaperImage";
import "./kamurochoPage.css"
function KamurochoPage() {
    const desktopStyle = "kam-icon"
    const mobileStyle = "kam-icon-mobile"
    const game = "GAME: YAKUZA 6 & JUDGEMENT"
    const time = "TIME PLAYED: 50 HOURS"
    const studio = "STUDIO: SEGA, RYA GA GOTOKU STUDIO"
    const release = "RELEASE: DECEMBER 8TH 2016 & DECEMBER 13TH 2018"
    const platform = "PLATFORM: PLAYSTATION 4 PRO"
    return(
        <div>
            <WallpaperImage background="https://blankandbeyond.s3.amazonaws.com/photos/season1/kamurocho/kam_background.png" game={game} time={time} studio={studio} release={release} platform={platform}/>
            <IconHeader icon="https://blankandbeyond.s3.amazonaws.com/logos/kamurouchu.svg" desktopStyle={desktopStyle} mobileStyle={mobileStyle}/>
            <KamurochoGallery/>
        </div>
    );
}

export default KamurochoPage;