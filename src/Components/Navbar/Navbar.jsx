import React from 'react';
import './Navbar.css';
import Search from './Search/Search';
import Mode from './Mode/Mode';
import Navlist from './Navlist/Navlist';
import AvatarMenu from './AvatarMenu';

function Navbar() {
  return (
    <div className='Navbar'>
      <div className='logo'>
        <img src='\src\images\logo.png' alt='Logo'></img>
      </div>
      <Navlist />
      <div className='icons'>
        <Search />
        <div className='mode'>
          <Mode />
        </div>
        <AvatarMenu />
      </div>
    </div>
  );
}

export default Navbar;
