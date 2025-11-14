import React from 'react';
// import { Link } from 'react-scroll'; // Цей імпорт більше не потрібен, якщо немає скрол-посилань

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/" className="logo-text">
            GAIIA
        </a>
      </div>
      
      <nav className="nav">
        <a href="/who-we-are" className="nav-link">
            WHO WE ARE
        </a>
        
        {/* === ЗМІНЕНО: ТЕПЕР ВЕДЕ НА НОВУ СТОРІНКУ === */}
        <a href="/what-we-do" className="nav-link">
            WHAT WE DO
        </a>
      </nav>
    </header>
  );
};

export default Header;