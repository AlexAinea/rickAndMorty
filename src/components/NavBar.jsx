import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from "react-router-dom";
import { Home, Episodes, Locations, Characters, EpiLogo, LocationsLogo, CharactersLogo, HomeLogo ,DownLogo} from './pages';
import './NavBar.css';

const NavBar = () => {
  const [buttonsVisible, setButtonsVisible] = useState(true);

  const toggleButtons = () => {
    setButtonsVisible(!buttonsVisible);
  };

  return (
    <nav>
      <Router>
        {buttonsVisible && (
          <>
            <div className='bg'>
              <NavLink to={"/"}><button className='hoverButton mx-28 rounded'> <img className='h-16' src={HomeLogo} alt="home" /> HOME</button></NavLink>
              <NavLink to={"/episodes"}><button className='hoverButton mx-28 rounded'><img className='h-16' src={EpiLogo} alt="Episode" />EPISODES</button></NavLink>
              <NavLink to={"/locations"}><button className='hoverButton mx-28 rounded'><img className='h-16' src={LocationsLogo} alt="Locations" />LOCATIONS</button></NavLink>
              <NavLink to={"/characters"}><button className='hoverButton mx-28 rounded'><img className='h-16' src={CharactersLogo} alt="Characters" />CHARACTERS</button></NavLink>
            </div>
          </>
        )}
        
        <button className='relative inset-x-1/2' onClick={toggleButtons}><img className='h-10' src={DownLogo} alt="home" /></button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </Router>
    </nav>
  )
}

export default NavBar;
