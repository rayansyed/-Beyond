
import IconHeader from "../header/IconHeader";
import Wallpaper from "../wallpaper/Wallpaper";
import "./kingdomPage.css"
import KingdomGallery from "../kingdomGallery/KingdomGallery";
import Background from "../../videos/valhalla_cover.mp4"
import kingdomIcon from '../../logos/Kingdom.svg'

function KingdomPage() {
  const game = "GAME: ASSASSIN’S CREED VALHALLA"
  const time = "TIME PLAYED: 90 HOURS"
  const studio = "STUDIO: UBISOFT MONTREAL"
  const release = "RELEASE: NOVEMEBER 12 2020"
  const platform = "PLATFORM: XBOX SERIES X"
  const desktopStyle = "kh-icon"
  const mobileStyle = "kh-icon-mobile"

  return (
    <div className="Kingdom">
      <Wallpaper background={Background} game={game} time={time} studio={studio} release={release} platform={platform}/>
      <IconHeader icon={kingdomIcon} desktopStyle={desktopStyle} mobileStyle={mobileStyle}/>
      <KingdomGallery/> 
    </div>
  );
}

export default KingdomPage;
