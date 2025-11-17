import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WhatWeDo.css';

// Імпортуємо зображення
import WhatWeDoHero from '../assets/images/what-we-do-hero.jpg';
import GaiiaIncentiveImg from '../assets/images/gaiia-incentive.jpg';
import TrillionTreesImg from '../assets/images/3-trillion-trees.jpg';

// ФОТО ДЛЯ МОДАЛУ 1 (MOVEMENT)
import move1 from '../assets/images/movement-1.jpg'; 
import move2 from '../assets/images/movement-2.jpg'; 
import move3 from '../assets/images/movement-3.jpg'; 
import move4 from '../assets/images/movement-4.jpg'; 
import move5 from '../assets/images/movement-5.jpg'; 

// ФОТО ДЛЯ МОДАЛУ 2 (Дерева)
import tree1 from '../assets/images/tree-1.jpg'; 
import tree2 from '../assets/images/tree-2.jpg'; 
import tree3 from '../assets/images/tree-3.jpg'; 
import tree4 from '../assets/images/tree-4.jpg'; 
import tree5 from '../assets/images/tree-5.jpg'; 
import tree6 from '../assets/images/tree-6.jpg'; 


// === ДАНІ МОДАЛ 1 (MOVEMENT) ===
// Тут заголовка зверху НЕМАЄ (headerTitle видалено)
const modal1Data = {
  titleSmall: 'GAIIA',
  titleBig: 'MOVEMENT',
  items: [
    { img: move1, title: 'GAIIA RIGHTS', desc: 'Describe what you offer here.' },
    { img: move2, title: 'GOLDEN HEART', desc: 'Describe what you offer here.' },
    { img: move3, title: 'COMMUNICATION', desc: 'Describe what you offer here.' },
    { img: move4, title: 'GAIIA IDENTITY', desc: 'Describe what you offer here.' },
    { img: move5, title: 'GAIIA COIN', desc: 'Describe what you offer here.' },
  ]
};

// === ДАНІ МОДАЛ 2 (TREES) ===
const modal2Data = {
  headerTitle: 'GAIIA Incentive System', // <--- ДОДАНО ЗАГОЛОВОК (як ти просив)
  titleSmall: 'GAIIA', 
  titleBig: 'MOVEMENT', 
  items: [
    { img: tree1, title: 'Haworthiopsis', desc: 'Characteristics of this tree.' },
    { img: tree2, title: 'Attenuata', desc: 'Characteristics of this tree.' },
    { img: tree3, title: 'Palm Tree', desc: 'Characteristics of this tree.' },
    { img: tree4, title: 'Oak Tree', desc: 'Characteristics of this tree.' },
    { img: tree5, title: 'Pine Tree', desc: 'Characteristics of this tree.' },
    { img: tree6, title: 'Apple Tree', desc: 'Characteristics of this tree.' },
  ]
};


const WhatWeDo = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null); 

  const currentModalData = activeModal === 1 ? modal1Data : (activeModal === 2 ? modal2Data : null);

  const openLightbox = (index) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  
  const nextImage = () => {
    if (!currentModalData) return;
    setSelectedImageIndex((prev) => (prev + 1) % currentModalData.items.length);
  };
  const prevImage = () => {
    if (!currentModalData) return;
    setSelectedImageIndex((prev) => (prev - 1 + currentModalData.items.length) % currentModalData.items.length);
  };

  return (
    <div className="what-we-do-page-container">
      <div className="what-we-do-hero" style={{ backgroundImage: `url(${WhatWeDoHero})` }}>
        <div className="hero-content">
          <h1>WHAT WE DO</h1>
          <p>We believe in the interconnectedness of all life on Earth and our responsibility to nurture it and use AI to foster a more caring and sustainable future.</p>
        </div>
      </div>

      <div className="what-we-do-cards-section">
        <div className="what-we-do-card" onClick={() => setActiveModal(1)}>
          <h2>GAIIA Incentive System</h2>
          <div className="card-image-wrapper">
            <img src={GaiiaIncentiveImg} alt="GAIIA Incentive System" />
          </div>
            {/* <button className="card-button">Learn more</button> */} {/* <-- ТЕПЕР ВІН ЗАКОМЕНТОВАНИЙ */}

        </div>

        <div className="what-we-do-card" onClick={() => setActiveModal(2)}>
          <h2>3 Trillion Trees</h2>
          <div className="card-image-wrapper">
            <img src={TrillionTreesImg} alt="3 Trillion Trees" />
          </div>
          {/* <button className="card-button">Learn more</button> */} {/* <-- ТЕПЕР ВІН ТЕЖ ЗАКОМЕНТОВАНИЙ */}
        </div>
      </div>

      {/* === МОДАЛЬНЕ ВІКНО === */}
      <AnimatePresence>
        {activeModal && currentModalData && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => { if(e.target === e.currentTarget) setActiveModal(null) }}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="modal-close-btn" onClick={() => setActiveModal(null)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* ВІДОБРАЖАЄМО ЗАГОЛОВОК ТІЛЬКИ ЯКЩО ВІН Є (Тобто в 2-й модалці) */}
              {currentModalData.headerTitle && (
                <h2 className="modal-top-title">{currentModalData.headerTitle}</h2>
              )}

              <div className="modal-body is-full-height">
                <div className="modal-left-text">
                  <span>{currentModalData.titleSmall}</span>
                  <h1>{currentModalData.titleBig}</h1>
                </div>

                <div className="modal-right-grid">
                  <div className="grid-divider"></div>
                  <div className="grid-items-container">
                    {currentModalData.items.map((item, index) => (
                      <div className="modal-grid-item" key={index}>
                        <div className="grid-item-image" onClick={() => openLightbox(index)}>
                          <img src={item.img} alt={item.title} />
                        </div>
                        <div className="grid-item-text">
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ГАЛЕРЕЯ */}
      <AnimatePresence>
        {selectedImageIndex !== null && currentModalData && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => { if(e.target === e.currentTarget) closeLightbox() }}
          >
            <div className="lightbox-close-btn" onClick={closeLightbox}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="lightbox-nav-btn prev" onClick={prevImage}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="lightbox-nav-btn next" onClick={nextImage}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="lightbox-image-container">
              <img src={currentModalData.items[selectedImageIndex].img} alt="Enlarged view" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default WhatWeDo;