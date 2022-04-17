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
            <Wallpaper background="https://blankandbeyond.s3.amazonaws.com/videos/season1/seventyseven/seventyseven_wallpaper.mp4" game={game} time={time} studio={studio} release={release} platform={platform}/>
            <IconHeader icon="https://blankandbeyond.s3.amazonaws.com/logos/77.svg" desktopStyle={desktopStyle} mobileStyle={mobileStyle}/>
          
        </div>
    );
}

export default CyberpunkPage;