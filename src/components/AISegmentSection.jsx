import React from 'react';
import { motion } from 'framer-motion'; 
import { Link } from 'react-scroll'; 
import './AISegmentSection.css'; 
// !!! ПЕРЕВІРТЕ ШЛЯХ І НАЗВУ ВАШОГО ЧЕТВЕРТОГО ЗОБРАЖЕННЯ !!!
import FourthBackground from '../assets/images/gaia-bg-4.jpg'; 
// !!! ПЕРЕВІРТЕ ШЛЯХ І НАЗВУ ВАШОГО ЧЕТВЕРТОГО ЗОБРАЖЕННЯ !!!


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


const AISegmentSection = () => {
    
  const logoLetters = ["G", "Λ", "I", "I", "Λ"]; 
  const subtitle = "A meaning in every letter.";
  const description = "in GAIIA represents our belief that \"Artificial Intelligence\" can profoundly impact human life positively when it maintains a regulated relationship between individuals. Envision a future where everyone has a personal AI-assistant equipped with comprehensive knowledge about them. Through this, individuals can receive tailored information and advice, enhancing both their quality of life creating the best communication philosophy based on the GAIIA social contract and regulated by the collective AI named\"GURU GAIIA\".";
    
  return (
    <section id="ai-section" className="hero-section">
      
      {/* Фон для четвертої секції (блакитний, цифровий) */}
      <motion.img 
        className="hero-background-image" 
        src={FourthBackground} 
        alt="Background 4" 
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
                 {/* Вибіркова прозорість: Λ та I (1 та 2) білі, G, I, Λ (0, 3, 4) прозоріші */}
                 {logoLetters.map((letter, index) => (
                    <motion.span 
                        key={index} 
                        style={{ display: "inline-block" }}
                        className={ (index === 1 || index === 2) ? '' : 'semi-transparent-letter'}
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

export default AISegmentSection;