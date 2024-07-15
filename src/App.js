import Allnews from './components/Allnews.js';
import NavbarComponent from './components/NavbarComponent.js';
import {  Routes, Route } from 'react-router-dom';
import SportsNews from './components/SportsNews.js';
import NationalNews from './components/NationalNews.js';
import WorldNews from './components/WorldNews.js';
import Entertainment from './components/Entertainment.js';
import BusinessNews from './components/BusinessNews.js';
import PoliticsNews from './components/PoliticsNews.js';
import TechnologyNews from './components/Technology.js';
import Science from './components/Science.js';
import StartupNews from './components/StartupNews.js';
import Miscellaneous from './components/Miscellaneous.js';
import Automobile from './components/Automobile.js';

function App() {
 

  return (
    <>
     <NavbarComponent/>
    <Routes>
    <Route path='/' element={<Allnews/>}/>
    <Route path='/sports' element={<SportsNews/>}/>
    <Route path='/national' element={<NationalNews/>}/>
    <Route path='/world' element={<WorldNews/>}/>
    <Route path='/entertainment' element={<Entertainment/>}/>
    <Route path='/business' element={<BusinessNews/>}/>
    <Route path='/politics' element={<PoliticsNews/>}/>
    <Route path='/technology' element={<TechnologyNews/>}/>
    <Route path='/science' element={<Science/>}/>
    <Route path='/startup' element={<StartupNews/>}/>
    <Route path='/miscellaneous' element={<Miscellaneous/>}/>
    <Route path='/automobile' element={<Automobile/>}/>
    </Routes>
    
   
    
  
   
    </>
        
      
  );
}

export default App;
