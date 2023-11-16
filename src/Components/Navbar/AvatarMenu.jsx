import React, { useState } from 'react';
import './AvatarMenu.css'; // Create a CSS file for AvatarMenu styles

function AvatarMenu() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className='avatar-menu'>
      <div className='avatar-container' onClick={toggleMenu}>
        <img className='avatar' src='src\images\avatar.png' alt='Avatar'></img>
      </div>

      {menuVisible && (
        <div className='menu'>
          <p onClick={() => console.log('Logout')}>Logout</p>
          <p onClick={() => console.log('Account Settings')}>Account Settings</p>
        </div>
      )}
    </div>
  );
}

export default AvatarMenu;
