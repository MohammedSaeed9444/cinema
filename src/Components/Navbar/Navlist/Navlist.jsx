import React from 'react';
import './Navlist.css';

function Navlist() {
  return (
    <nav className="nav-list">
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Movies</a>
        </li>
        <li>
          <a href='#'>Series</a>
        </li>
        <li>
          <a href='#'>TV Show</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navlist;