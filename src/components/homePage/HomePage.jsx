import Navbar from "../navbar/Navbar"
import Header from "../header/Header"
import HomeGallery from "../homeGallery/HomeGallery"
import Footer from "../footer/Footer";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";


function HomePage() {
  return (
    <div className="Home">
      <Header/>
      <HomeGallery/>
      <Footer/>
    </div>
  );
}

export default HomePage;
