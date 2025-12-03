import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Імпортуємо компоненти
import Header from './components/Header';
import FixedFooter from './components/FixedFooter';
import MainPage from './components/MainPage';
import WhoWeAre from './components/WhoWeAre';
import WhatWeDo from './components/WhatWeDo';
import AdminPage from './components/AdminPage'; // <-- НОВИЙ ІМПОРТ

function App() {
  const [isFooterLight, setIsFooterLight] = useState(false);
  const location = useLocation();

  // Перевірка: чи ми зараз в адмінці?
  const isAdminRoute = location.pathname === '/admin-panel';

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsFooterLight(false);
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* Ховаємо Header, якщо ми в адмінці */}
      {!isAdminRoute && <Header />}

      <Routes>
        <Route
          path="/"
          element={<MainPage setIsFooterLight={setIsFooterLight} />}
        />
        <Route
          path="/who-we-are"
          element={<WhoWeAre />}
        />
        <Route
          path="/what-we-do"
          element={<WhatWeDo />}
        />
        
        {/* <-- НОВИЙ МАРШРУТ */}
        <Route
          path="/admin-panel"
          element={<AdminPage />}
        />

      </Routes>

      {/* Ховаємо Footer, якщо ми в адмінці */}
      {!isAdminRoute && <FixedFooter isLight={isFooterLight} />}
    </>
  )
}

export default App;