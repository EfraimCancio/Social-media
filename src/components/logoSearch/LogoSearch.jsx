import React from 'react';
import './LogoSearch.css';
import { MagnifyingGlass } from 'phosphor-react';
import Logo from '../../img/logo.png'

const LogoSearch = () => {
  return (
    <div className="logoSearch">
        <img src={Logo} alt="Logo do site" />
        <div className="search">
          <input type="text" placeholder="#Explore"/>
          <div className="s-icon">
            <MagnifyingGlass size={28}/>
          </div>
        </div>
    </div>
  )
}

export default LogoSearch;