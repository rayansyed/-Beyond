import CyberpunkGallery from "../cyberpunkGallery/CyberpunkGallery";
import IconHeader from "../header/IconHeader";
import Wallpaper from "../wallpaper/Wallpaper";
import "./cyberpunkPage.css"
function CyberpunkPage() {
    const desktopStyle = "sev-icon"
    const mobileStyle = "sev-icon-mobile"
    const game = "GAME: CYBERPUNK 2077"
    const time = "TIME PLAYED: 68 HOURS"
    const studio = "STUDIO: CD PROJEKT RED"
    const release = "RELEASE: DECEMBER 10TH 2020"
    const platform = "PLATFORM: PC"
    return(
        <div>
            <Wallpaper background="https://blankandbeyond.s3.amazonaws.com/videos/season1/seventyseven/Cyberpunk+2077+(C)+2020+by+CD+Projekt+RED+2021-01-06+17-39-19_Trim+(1).mp4" game={game} time={time} studio={studio} release={release} platform={platform}/>
            <IconHeader icon="https://blankandbeyond.s3.amazonaws.com/logos/77.svg" desktopStyle={desktopStyle} mobileStyle={mobileStyle}/>
            <CyberpunkGallery/>
        </div>
    );
}

export default CyberpunkPage;