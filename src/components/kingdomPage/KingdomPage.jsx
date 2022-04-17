
import IconHeader from "../header/IconHeader";
import Wallpaper from "../wallpaper/Wallpaper";
import "./kingdomPage.css"
import KingdomGallery from "../kingdomGallery/KingdomGallery";

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
      <Wallpaper background="https://blankandbeyond.s3.amazonaws.com/videos/season1/kingdom/valhalla_cover.mp4" game={game} time={time} studio={studio} release={release} platform={platform}/>
      <IconHeader icon="https://blankandbeyond.s3.amazonaws.com/logos/Kingdom.svg" desktopStyle={desktopStyle} mobileStyle={mobileStyle}/>
      <KingdomGallery/> 
    </div>
  );
}

export default KingdomPage;
