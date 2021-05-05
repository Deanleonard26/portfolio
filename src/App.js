import AboutUs from './pages/AboutUs';
import GlobalStyle from './components/GlobalStyle';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import Drone from './pages/Drone'
// Router
import {Switch, Route, useLocation} from 'react-router-dom';
// Animation
import {AnimatePresence} from 'framer-motion'
import TempEra from './components/TempEra';
import CodeCafe from './components/CodeCafe';
import AuthorsPage from './components/AuthorsPage';
// import Banner from './components/Banner';
import SafeTravelsPage from './components/SaftravelsPage'
import MailioPage from './components/MailioPage';
import MusicPlayer from './components/MusicPlayer';
import GamesPage from './components/GamesPage';
import WeatherPage from './components/WeatherPage'

function App() {
  
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
     <Switch location={location} key={location.pathname}>

     <Route path='/' exact>
        <AboutUs />
      </Route>
      
      <Route path='/contact'>
        <ContactUs />
      </Route>

      <Route path='/work/temp-era'>
        <TempEra />
      </Route>

      <Route path='/work/mailio'>
        <MailioPage />
      </Route>

      <Route path='/work/cafe'>
        <CodeCafe />
      </Route>

      <Route path='/work/music'>
        <MusicPlayer />
      </Route>

      <Route path='/work/authors'>
        <AuthorsPage />
      </Route>
      
      <Route path='/work/safe-travel'>
        <SafeTravelsPage />
      </Route>

      <Route path='/work/weather'>
        <WeatherPage />
      </Route>

      <Route path='/work/games'>
        <GamesPage />
      </Route>
      
      <Route path='/work' exact>
        <OurWork />
      </Route>

      <Route path='/drone' exact>
        <Drone />
      </Route>

      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
