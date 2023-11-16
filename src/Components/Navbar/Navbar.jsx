import React from 'react'
import './Navbar.css'
import Search from './Search/Search'
import Mode from './Mode/Mode'
import Navlist from './Navlist/Navlist'


function Navbar() {
  return (
    <div className='Navbar'>
      <div className='logo'>
        <img src='\src\images\logo.png'></img>
      </div>
      <Navlist />
      <div className='icons'>
        <Search />
        <div className='mode'>
          <Mode />
        </div>
        <div className='avatar-container'>
          <img className='avatar' src='src\images\avatar.png'></img>
        </div>
      </div>
    </div>
  )
}

export default Navbar