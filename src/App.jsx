import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Імпортуємо загальні компоненти (вони будуть на всіх сторінках)
import Header from './components/Header';
import FixedFooter from './components/FixedFooter';

// Імпортуємо наші сторінки
import MainPage from './components/MainPage'; // Наша нова головна сторінка
import WhoWeAre from './components/WhoWeAre'; // Ваша сторінка "Про нас"
import WhatWeDo from './components/WhatWeDo'; // <--- 1. ДОДАНО НОВУ СТОРІНКУ

function App() {
  // Стан 'isLight' тепер живе тут, у App.jsx
  const [isFooterLight, setIsFooterLight] = useState(false);

  // Отримуємо поточний шлях (URL), щоб скинути колір футера
  const location = useLocation();

  useEffect(() => {
    // Якщо ми переходимо НЕ на головну сторінку,
    // скидаємо колір іконок на дефолтний (темний фон)
    if (location.pathname !== '/') {
      setIsFooterLight(false);
    }

    // Також прокручуємо сторінку догори при переході
    window.scrollTo(0, 0);

  }, [location.pathname]); // Ефект спрацьовує при зміні URL

  return (
    <>
      {/* Header буде на ВСІХ сторінках */}
      <Header />

      {/* Тут React Router буде "малювати" потрібну сторінку */}
      <Routes>

        {/* МАРШРУТ 1: Головна сторінка */}
        <Route
          path="/"
          element={<MainPage setIsFooterLight={setIsFooterLight} />}
        />

        {/* МАРШРУТ 2: Сторінка "Про нас" */}
        <Route
          path="/who-we-are"
          element={<WhoWeAre />}
        />

        {/* МАРШРУТ 3: Сторінка "Що ми робимо" <--- 2. ДОДАНО МАРШРУТ */}
        <Route
          path="/what-we-do"
          element={<WhatWeDo />}
        />

      </Routes>

      {/* FixedFooter буде на ВСІХ сторінках */}
      {/* Ми передаємо йому стан, щоб він знав, коли міняти колір */}
      <FixedFooter isLight={isFooterLight} />
    </>
  )
}

export default App;