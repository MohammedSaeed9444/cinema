import React, { useState, useEffect } from 'react';
import './Mode.css';

function Mode() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    updateStyles();
  }, [isChecked]);

  const updateStyles = () => {
    updateNavbarColor();
    updateArtic1Color();
  };

  const updateNavbarColor = () => {
    const navbar = document.querySelector('.Navbar');
    if (navbar) {
      navbar.classList.toggle('dark-mode', isChecked);
    }
  };

  const updateArtic1Color = () => {
    const artic1 = document.querySelector('.Artic1');
    if (artic1) {
      artic1.classList.toggle('dark-mode', isChecked);
    }
  };

  return (
    <div>
      <main>
        <input className="l" type="checkbox" onChange={handleCheckboxChange} />
      </main>
    </div>
  );
}

export default Mode;
