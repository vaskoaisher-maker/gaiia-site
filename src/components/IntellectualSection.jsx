import React from 'react';
import { motion } from 'framer-motion'; 
import { Link } from 'react-scroll'; 
import './IntellectualSection.css'; 
// !!! ПЕРЕВІРТЕ ШЛЯХ І НАЗВУ ВАШОГО П'ЯТОГО ЗОБРАЖЕННЯ !!!
import FifthBackground from '../assets/images/gaia-bg-5.jpg'; 
// !!! ПЕРЕВІРТЕ ШЛЯХ І НАЗВУ ВАШОГО П'ЯТОГО ЗОБРАЖЕННЯ !!!


// --- Налаштування анімації Framer Motion ---
const containerVariants = {
    visible: { 
        transition: { 
            staggerChildren: 0.1,
            delayChildren: 0.2,
        } 
    },
};

const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.6, 
            ease: "easeOut" 
        } 
    },
};
// --- Кінець налаштування анімації ---


const IntellectualSection = () => {
    
  const logoLetters = ["G", "Λ", "I", "I", "Λ"]; 
  const subtitle = "A meaning in every letter.";
  const description = "in GAIIA stands for \"Intellectual Anthropos,\" representing the ultimate goal of all GAIIA projects where humans evolve into the ultimate identity of individuals. It aims to unite humanity as one nation and establish GAIIA as our homeland.";
    
  return (
    <section id="intellectual-section" className="hero-section">
      
      {/* Фон для п'ятої секції (зелений, органічний) */}
      <motion.img 
        className="hero-background-image" 
        src={FifthBackground} 
        alt="Background 5" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Основний контент (Grid-дизайн) */}
      <motion.div 
        className="mission-content-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }} // ВИДАЛЕНО once: true
      >
        
        {/* ЛІВА ЧАСТИНА (G.Λ.I.I.Λ. + Subtitle + Button) */}
        <div className="mission-left">
             <motion.h1 className='mission-main-title' variants={textVariants} style={{ letterSpacing: '20px' }}>
                 {/* Вибіркова прозорість: I та Λ (2, 3, 4) білі, G, Λ, I (0, 1, 2) прозоріші */}
                 {logoLetters.map((letter, index) => (
                    <motion.span 
                        key={index} 
                        style={{ display: "inline-block" }}
                        // I та Λ (індекси 3 та 4) білі, решта прозоріші
                        className={ (index >= 3) ? '' : 'semi-transparent-letter'} 
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
             </motion.h1>
             
             <motion.p className='mission-subtitle' variants={textVariants}>
                 {subtitle}
             </motion.p>
             
             {/* Кнопка під логотипом */}
             <motion.div 
                className="mission-button-wrapper"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }} // ВИДАЛЕНО once: true
                transition={{ delay: 1, duration: 0.5 }}
            >
                 {/* Прокрутка до першої секції (hero-1) */}
                <Link to="hero-1" smooth={true} duration={1000} className="mission-button">
                    GAIIA'S MISSION
                </Link>
            </motion.div>
        </div>
        
        {/* ПРАВА ЧАСТИНА (Опис) */}
        <div className="mission-right">
            <motion.p className="mission-description" variants={textVariants}>
                {description}
            </motion.p>
        </div>
        
      </motion.div>
      
    </section>
  );
};

export default IntellectualSection;