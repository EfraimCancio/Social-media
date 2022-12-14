import React from 'react';

// Page Components
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Auth from './pages/Auth/Auth';

// Styles
import './App.css';

function App() {


  return (
    <div className="App">
      <div className="blur" style={{top: '-18%', right: '0' }}></div>
      <div className="blur" style={{top: '36%', left: '-8rem' }}></div>
      <Home/>
      {/* <Profile /> */}
      {/* <Auth/> */}
    </div>
  )
}

export default App
