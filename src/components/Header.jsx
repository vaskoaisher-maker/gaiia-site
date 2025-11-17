import React from 'react';
// <-- 1. Імпортуємо ваш новий логотип
import logo from '../assets/logos/gaiia-logo.svg'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/" className="logo-link"> {/* Змінили клас для кращої семантики */}
            {/* <-- 2. Замінюємо текст на зображення */}
            <img src={logo} alt="GAIIA Logo" className="logo-img" />
        </a>
      </div>
      
      <nav className="nav">
        <a href="/who-we-are" className="nav-link">
            WHO WE ARE
        </a>
        
              <a href="/what-we-do" className="nav-link">
            WHAT WE DO
        </a>
      </nav>
    </header>
  );
};

export default Header;