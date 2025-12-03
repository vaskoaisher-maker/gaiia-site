import React from 'react';
import { motion } from 'framer-motion'; 
import './HeroSection.css'; 
import FirstBackground from '../assets/images/gaia-bg-1.jpg'; 
// Імпортуємо дані
import contentData from '../data/content.json';

// --- Налаштування анімації ---
const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.8, ease: "easeOut" } 
    },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.5 } 
    },
};

const HeroSection = ({ SocialIconsComponent }) => { 
  return (
    <section id="hero-1" className="hero-section">
      <motion.img 
        className="hero-background-image" 
        src={FirstBackground} 
        alt="Background 1" 
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.8 }}
        transition={{ duration: 1.5 }}
      />

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.8 }}
      >
        <motion.div className="hero-logo-container">
            {/* БЕРЕМО ДАНІ З JSON */}
            <motion.span className='main-text' variants={itemVariants}>
                {contentData.hero.mainText}
            </motion.span>
            
            <motion.div 
                className="vertical-divider"
                initial={{ height: 0 }}
                whileInView={{ height: 50 }}
                viewport={{ amount: 0.8 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            ></motion.div>
            
            <motion.div className='logo-text-right'>
                <motion.span className='foundation' variants={itemVariants}>
                    {contentData.hero.foundation}
                </motion.span>
                <motion.span className='tagline' variants={itemVariants}>
                    {contentData.hero.tagline}
                </motion.span>
            </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="hero-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.8 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
          <div></div> 
          {SocialIconsComponent && <SocialIconsComponent />}
      </motion.div>
    </section>
  );
};

export default HeroSection;