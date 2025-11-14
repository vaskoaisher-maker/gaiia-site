import React from 'react';
import { motion } from 'framer-motion'; 
import { Link } from 'react-scroll'; 
import './MissionSection.css'; 
// !!! ПЕРЕВІРТЕ ШЛЯХ І НАЗВУ ВАШОГО ТРЕТЬОГО ЗОБРАЖЕННЯ !!!
import ThirdBackground from '../assets/images/gaia-bg-3.jpg'; 
// !!! ПЕРЕВІРТЕ ШЛЯХ І НАЗВУ ВАШОГО ТРЕТЬОГО ЗОБРАЖЕННЯ !!!


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


const MissionSection = () => {
    
  // G Λ I I Λ - БЕЗ КРАПОК, як на скріні
  const logoLetters = ["G", "Λ", "I", "I", "Λ"];
  const subtitle = "A meaning in every letter.";
  const description = "from \"Geo\" in GAIIA is symbolizing our relationship with the planet as a mother and a living organism is an intriguing perspective. It suggests a deep reverence for Earth, akin to the care and concern attributed to gods in Greek mythology. By emphasizing this connection, the aim is to rebuild our bond with the planet, fostering a sense of stewardship and responsibility towards its well-being. This notion aligns with broader movements advocating for environmental consciousness and sustainability, highlighting the importance of treating Earth with respect and nurturing it as we would a beloved deity.";
    
  return (
    <section id="mission-section" className="hero-section">
      
      {/* Фон для третьої секції */}
      <motion.img 
        className="hero-background-image" 
        src={ThirdBackground} 
        alt="Background 3" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Основний контент (Grid-дизайн: Ліворуч лого, праворуч опис) */}
      <motion.div 
        className="mission-content-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Спрацьовує ЩОРАЗУ, коли секція з'являється
        viewport={{ amount: 0.5 }} // Видалено once: true
      >
        
        {/* ЛІВА ЧАСТИНА (G.Λ.I.I.Λ. + Subtitle + Button) */}
        <div className="mission-left">
             <motion.h1 className='mission-main-title' variants={textVariants}>
                 {/* Вибіркова прозорість для логотипу: G та Λ білі, решта прозоріші */}
                 {logoLetters.map((letter, index) => (
                    <motion.span 
                        key={index} 
                        style={{ display: "inline-block" }}
                        className={ (index === 0 || index === 1) ? '' : 'semi-transparent-letter'} // G та Λ (0 та 1) білі
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
                viewport={{ amount: 0.5 }} // Видалено once: true
                transition={{ delay: 1, duration: 0.5 }}
            >
                 {/* Прокрутка до першої секції (hero-1) */}
                <Link to="hero-1" smooth={true} duration={1000} className="mission-button">
                    GAIA'S MISSION
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

export default MissionSection;