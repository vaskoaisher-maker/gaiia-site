import React from 'react';
import { motion } from 'framer-motion'; 
import { Link } from 'react-scroll'; 
import './MissionSection.css'; 
import ThirdBackground from '../assets/images/gaia-bg-3.jpg'; 
// Імпортуємо дані
import contentData from '../data/content.json';

const containerVariants = {
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const MissionSection = () => {
  // Використовуємо дані з JSON
  const logoLetters = contentData.mission.letters || ["G", "Λ", "I", "I", "Λ"];
  const subtitle = contentData.mission.subtitle;
  const description = contentData.mission.description;
    
  return (
    <section id="mission-section" className="hero-section">
      <motion.img 
        className="hero-background-image" 
        src={ThirdBackground} 
        alt="Background 3" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div 
        className="mission-content-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
      >
        <div className="mission-left">
             <motion.h1 className='mission-main-title' variants={textVariants}>
                {logoLetters.map((letter, index) => (
                   <motion.span 
                       key={index} 
                       style={{ display: "inline-block" }}
                       className={ (index === 0) ? '' : 'semi-transparent-letter'}
                   >
                       {letter === " " ? "\u00A0" : letter}
                   </motion.span>
               ))}
             </motion.h1>
             
             <motion.p className='mission-subtitle' variants={textVariants}>
                 {subtitle}
             </motion.p>
             
             <motion.div 
                className="mission-button-wrapper"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <Link to="hero-1" smooth={true} duration={1000} className="mission-button">
                    GAIIA'S MISSION
                </Link>
            </motion.div>
        </div>
        
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