import React from 'react';
import { motion } from 'framer-motion'; 
import './EcoismSection.css'; 
// !!! ПЕРЕВІРТЕ ШЛЯХ І НАЗВУ ВАШОГО ДРУГОГО ЗОБРАЖЕННЯ !!!
import SecondBackground from '../assets/images/gaia-bg-2.jpg'; 
// !!! ПЕРЕВІРТЕ ШЛЯХ І НАЗВУ ВАШОГО ДРУГОГО ЗОБРАЖЕННЯ !!!


// --- Налаштування анімації Framer Motion ---
const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};
// --- Кінець налаштування анімації ---


const EcoismSection = () => {
    
  const mainTitle = "G.Λ.I.I.Λ"; 
  const subtitle = "A meaning in every letter.";
    
  return (
    <section id="ecoism-section" className="hero-section">
      
      {/* Фон для другої секції */}
      <motion.img 
        className="hero-background-image" 
        src={SecondBackground} 
        alt="Background 2" 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Основний контент (центрований) */}
      <div className="hero-content">
        
        {/* Текст, як на скріні: G.Λ.I.I.Λ. */}
        <h1 className='main-title-video'>
           {/* Анімуємо кожну літеру */}
           {mainTitle.split("").map((letter, index) => (
                <motion.span 
                    key={index}
                    variants={childVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.8 }} // ВИДАЛЕНО once: true
                    style={{ display: "inline-block", marginRight: "0.05em" }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </h1>
        
        {/* Підзаголовок */}
        <motion.p 
            className='main-subtitle-video'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8 }} // ВИДАЛЕНО once: true
            transition={{ delay: 0.5, duration: 0.8 }}
        >
            {subtitle}
        </motion.p>
        
      </div>

    </section>
  );
};

export default EcoismSection;