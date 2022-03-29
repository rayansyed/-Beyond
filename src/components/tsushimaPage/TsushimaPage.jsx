import IconHeader from "../header/IconHeader";
import Wallpaper from "../wallpaper/Wallpaper";
import tsushimaIcon from "../../logos/Tsushi.svg";
import tsushimaWallpaper from "../../videos/got_cover.mp4";
import "./tsushimaPage.css"
function TsushimaPage() {
    const desktopStyle = "ts-icon"
    const mobileStyle = "ts-icon-mobile"
    return(
        <div>
            <Wallpaper background={tsushimaWallpaper}/>
            <IconHeader icon={tsushimaIcon} desktopStyle={desktopStyle} mobileStyle={mobileStyle}/>
        </div>
    );
}

export default TsushimaPage;