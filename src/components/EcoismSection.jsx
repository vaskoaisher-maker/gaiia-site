import React from 'react';
import { motion } from 'framer-motion'; 
import './EcoismSection.css'; 
import SecondBackground from '../assets/images/gaia-bg-2.jpg'; 
// Імпортуємо дані
import contentData from '../data/content.json';

const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
};

const EcoismSection = () => {
  // Використовуємо дані з файлу
  const mainTitle = contentData.ecoism.title; 
  const subtitle = contentData.ecoism.subtitle;
    
  return (
    <section id="ecoism-section" className="hero-section">
      <motion.img 
        className="hero-background-image" 
        src={SecondBackground} 
        alt="Background 2" 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="hero-content">
        <h1 className='main-title-video'>
           {mainTitle.split("").map((letter, index) => (
                <motion.span 
                    key={index}
                    variants={childVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.8 }}
                    style={{ display: "inline-block", marginRight: "0.05em" }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </h1>
        
        <motion.p 
            className='main-subtitle-video'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8 }}
            transition={{ delay: 0.5, duration: 0.8 }}
        >
            {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default EcoismSection;