import IconHeader from "../header/IconHeader";
import Wallpaper from "../wallpaper/Wallpaper";
import tsushimaIcon from "../../logos/Tsushi.svg";
import tsushimaWallpaper from '../../videos/tsushima/night.mp4';
import "./tsushimaPage.css"
import Marquee from "react-simple-marquee";
import TsushimaGallery from "../tsushimaGallery/TsushimaGallery";
function TsushimaPage() {
    const desktopStyle = "ts-icon"
    const mobileStyle = "ts-icon-mobile"
    const game = "GAME: GHOST OF TSUSHIMA"
    const time = "TIME PLAYED: 68 HOURS"
    const studio = "STUDIO: SUCKER PUNCH PRODUCTIONS"
    const release = "RELEASE: JULY 17TH 2020"
    const platform = "PLATFORM: PLAYSTATION 4 PRO"
    return(
        <div>
            <Wallpaper background={tsushimaWallpaper} game={game} time={time} studio={studio} release={release} platform={platform}/>
            <IconHeader icon={tsushimaIcon} desktopStyle={desktopStyle} mobileStyle={mobileStyle}/>
            <TsushimaGallery/>
        </div>
    );
}

export default TsushimaPage;