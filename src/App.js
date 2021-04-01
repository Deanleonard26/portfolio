import AboutUs from './pages/AboutUs';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
// import Drone from './pages/Drone'
// Router
import {Switch, Route, useLocation} from 'react-router-dom';
// Animation
import {AnimatePresence} from 'framer-motion'
import TempEra from './components/TempEra';
import CodeCafe from './components/CodeCafe';

function App() {
  
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
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

      <Route path='/work/cafe'>
        <CodeCafe />
      </Route>
      
      <Route path='/work' exact>
        <OurWork />
      </Route>

      {/* <Route path='/drone' exact>
        <Drone />
      </Route> */}

      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
