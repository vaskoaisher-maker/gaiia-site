import React from 'react';
import { motion } from 'framer-motion'; 
import './HeroSection.css'; 
// !!! ПЕРЕВІРТЕ ШЛЯХ І НАЗВУ ВАШОГО ЗОБРАЖЕННЯ !!!
import FirstBackground from '../assets/images/gaia-bg-1.jpg'; 
// !!! ПЕРЕВІРТЕ ШЛЯХ І НАЗВУ ВАШОГО ЗОБРАЖЕННЯ !!!


// --- Налаштування анімації Framer Motion ---
const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.8, 
            ease: "easeOut" 
        } 
    },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { 
            staggerChildren: 0.2, 
            delayChildren: 0.5, 
        } 
    },
};
// --- Кінець налаштування анімації ---


const HeroSection = ({ SocialIconsComponent }) => { 
  return (
    <section id="hero-1" className="hero-section">
      
      {/* Фон (ЗМІНА: тепер використовуємо whileInView для перезапуску) */}
      <motion.img 
        className="hero-background-image" 
        src={FirstBackground} 
        alt="Background 1" 
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }} // СПРАЦЬОВУЄ ЩОРАЗУ
        viewport={{ amount: 0.8 }} // Видно на 80%
        transition={{ duration: 1.5 }}
      />

      {/* Основний контент (центрований) */}
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // СПРАЦЬОВУЄ ЩОРАЗУ
        viewport={{ amount: 0.8 }}
      >
        
        {/* Лого + Foundation */}
        <motion.div className="hero-logo-container">
            <motion.span className='main-text' variants={itemVariants}>GAIIA</motion.span>
            
            {/* ВЕРТИКАЛЬНА ЛІНІЯ (окремий анімований елемент) */}
            <motion.div 
                className="vertical-divider"
                initial={{ height: 0 }}
                whileInView={{ height: 50 }} // СПРАЦЬОВУЄ ЩОРАЗУ
                viewport={{ amount: 0.8 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            ></motion.div>
            
            {/* Текст Foundation */}
            <motion.div className='logo-text-right'>
                <motion.span className='foundation' variants={itemVariants}>FOUNDATION</motion.span>
                <motion.span className='tagline' variants={itemVariants}>CREATING THE WORLD WE WANT TO LIVE IN</motion.span>
            </motion.div>
        </motion.div>
      </motion.div>

      {/* Футер з іконками */}
      <motion.div 
        className="hero-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} // СПРАЦЬОВУЄ ЩОРАЗУ
        viewport={{ amount: 0.8 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
          {/* Пустий div зліва для вирівнювання */}
          <div></div> 
          
          {/* Соціальні мережі */}
          {SocialIconsComponent && <SocialIconsComponent />}
      </motion.div>

    </section>
  );
};

export default HeroSection;