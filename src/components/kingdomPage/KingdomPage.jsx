import Navbar from "../navbar/Navbar"
import Byline from "../byline/Byline"
import HomeGallery from "../homeGallery/HomeGallery"
import Footer from "../footer/Footer";
import KingdomHeader from "../header/KingdomHeader";
import Wallpaper from "../wallpaper/Wallpaper";
import "./kingdomPage.css"
import KingdomGallery from "../kingdomGallery/KingdomGallery";
import MarqueeText from "../marqueeText/MarqueeText"

function KingdomPage() {
  return (
    <div className="Kingdom">
      <Wallpaper/>
      <KingdomHeader/>
      <KingdomGallery/>
      <Footer/>
      
    </div>
  );
}

export default KingdomPage;
