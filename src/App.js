import Navbar from "./components/navbar/Navbar"
import Byline from "./components/byline/Byline"
import Header from "./components/header/Header"
import HomeGallery from "./components/homeGallery/HomeGallery"
import Footer from "./components/footer/Footer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from "./components/homePage/HomePage";
import KingdomPage from "./components/kingdomPage/KingdomPage";
import TsushimaPage from "./components/tsushimaPage/TsushimaPage";
import "./App.css"

function App() 
{
  return (
    <Router>
      <div className="App">
      <Byline/>
      <Navbar/>
        <Switch>
          <Route exact path="/">
              <HomePage/>
          </Route>
          <Route exact path="/kingdom">
              <KingdomPage/>
          </Route>
          <Route exact path="/tsushima">
              <TsushimaPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
