import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Імпортуємо всі секції головної сторінки
import HeroSection from './HeroSection'; 
import EcoismSection from './EcoismSection'; 
import MissionSection from './MissionSection'; 
import AISegmentSection from './AISegmentSection'; 
import IntellectualSection from './IntellectualSection'; 
import FooterSection from './FooterSection'; 

// Реєструємо плагін GSAP
gsap.registerPlugin(ScrollTrigger);

// Цей компонент приймає функцію `setIsFooterLight` з App.jsx
const MainPage = ({ setIsFooterLight }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Вся ваша логіка анімацій з App.jsx
    const sections = gsap.utils.toArray(containerRef.current.children).slice(0, 5); 
    
    // --- Scroll Snapping ---
    const snapTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top", 
      end: "bottom bottom", 
      snap: {
        snapTo: sections, 
        duration: 0.5,
        delay: 0.1,
        ease: "power1.inOut",
      },
    });

    // --- Логіка зміни кольору іконок (для світлої секції MissionSection) ---
    // Ми викликаємо функцію, яку отримали з App.jsx
    const colorTrigger = ScrollTrigger.create({
        trigger: "#mission-section", 
        start: "top center", 
        end: "bottom center", 
        onToggle: self => setIsFooterLight(self.isActive), // Використовуємо prop
    });
    
    // --- АНІМАЦІЇ ФОНІВ (ВАУ-ЕФЕКТИ) ---
    gsap.to("#ecoism-section .hero-background-image", {
        scale: 1.1, y: -50,
        scrollTrigger: { trigger: "#ecoism-section", start: "top bottom", end: "bottom top", scrub: true },
    });
    gsap.to("#mission-section .hero-background-image", {
        scale: 1.05, rotation: 1, filter: "brightness(90%) contrast(110%) blur(2px)",
        scrollTrigger: { trigger: "#mission-section", start: "top bottom", end: "bottom top", scrub: true },
    });
    gsap.to("#ai-section .hero-background-image", {
        scale: 1.1, skewX: 0.5, filter: "brightness(60%) saturate(150%) hue-rotate(5deg)",
        scrollTrigger: { trigger: "#ai-section", start: "top bottom", end: "bottom top", scrub: true },
    });
    gsap.to("#intellectual-section .hero-background-image", {
        scale: 1.3,
        scrollTrigger: { trigger: "#intellectual-section", start: "top bottom", end: "bottom top", scrub: 1.5 },
    });


    // Очищення ScrollTrigger при розмонтуванні компонента
    return () => {
        snapTrigger.kill();
        colorTrigger.kill();
        ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [setIsFooterLight]); // Додаємо залежність

  return (
    <>
      {/* Контейнер для прокрутки */}
      <main ref={containerRef} className="scroll-container">
        <HeroSection /> 
        <EcoismSection />
        <MissionSection /> 
        <AISegmentSection />
        <IntellectualSection />
      </main>
      
      {/* Секція Футера (без Scroll Snapping) */}
      <FooterSection /> 
    </>
  );
}

export default MainPage;