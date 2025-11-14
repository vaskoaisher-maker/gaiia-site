import React from 'react';
import './FooterSection.css'; 
import { FaLeaf, FaBalanceScale, FaTree, FaCloud } from 'react-icons/fa'; 


const FooterSection = () => {
  return (
    <div className="footer-section">
        
        {/* ВЕРХНІ БЛОКИ (на світлому фоні) */}
        <div className="footer-content-grid">
            
            {/* БЛОК 1: SUSTAINABILITY */}
            <div className="footer-block">
                <div className="block-header">
                    <FaLeaf className="block-icon" />
                    <div className="block-title-wrapper">
                        <span className="block-subtitle">REDIFINING</span>
                        <h3 className="block-title">SUSTAINABILITY</h3>
                    </div>
                </div>
                <p className="block-description">
                    As an organization, GAIIA is committed to catalyzing global 
                    inspiration and unity in the pursuit of a sustainable future for our 
                    planet. We are a non-profit entity dedicated to crafting impactful 
                    projects that address ecological, economic, and societal 
                    challenges.
                </p>
                <p className="block-secondary-text block-description">
                    At the heart of our mission lies the aspiration to nurture a 
                    community of "planeterans" who share values grounded in 
                    sustainability and profound respect for the Earth.
                </p>
            </div>
            
            {/* БЛОК 2: HOMEOSTASIS */}
            <div className="footer-block">
                <div className="block-header">
                    <FaBalanceScale className="block-icon" />
                    <div className="block-title-wrapper">
                        <span className="block-subtitle">REDEFINING</span>
                        <h3 className="block-title">HOMEOSTASIS</h3>
                    </div>
                </div>
                <p className="block-description">
                    The delicate balance of homeostasis allows our ecosystem to regulate its 
                    temperature. However, humans have carelessly cut down three trillion trees 
                    due to our unrelenting pursuit of financial gains. This has essentially robbed 
                    our planet of half its vital respiratory system, similar to dismantling half of 
                    the lungs that support our existence. Consequently, we have grossly 
                    interfered with our planet's homeostasis. Our planet's breathing system 
                    supports our lives by allowing us to breathe and sustain life.
                </p>
            </div>
            
        </div>
        
        
        {/* НИЖНІ БЛОКИ (на сірому фоні) */}
        <div className="lower-blocks-container">
            <div className="footer-content-grid">
                
                {/* БЛОК 3: THREE TRILLION TREES */}
                <div className="footer-block">
                    <div className="block-header">
                        <FaTree className="block-icon" />
                        <div className="block-title-wrapper">
                            <span className="block-subtitle">RECONSTRUCTING</span>
                            <h3 className="block-title">THREE TRILLION TREES</h3>
                        </div>
                    </div>
                    {/* Вирівняння тексту: ми будемо використовувати загальний клас block-description */}
                    <p className="block-description">
                        Despite 52 years since the Kyoto Protocol and 28 additional years of 
                        COP, we have not yet achieved the expected results in addressing 
                        pressing environmental challenges like climate change, biodiversity 
                        loss, and pollution. Our planet lacks appreciation. At the GAIIA 
                        Foundation, we are committed to ensuring a sustainable future for all 
                        by tackling these challenges through innovation, advocacy, and 
                        collaboration.
                    </p>
                </div>
                
                {/* БЛОК 4: CARBON CREDIT */}
                <div className="footer-block">
                    <div className="block-header">
                        <FaCloud className="block-icon" />
                        <div className="block-title-wrapper">
                            <span className="block-subtitle">RECONSTRUCTING</span>
                            <h3 className="block-title">CARBON CREDIT</h3>
                        </div>
                    </div>
                    {/* Вирівняння тексту: ми будемо використовувати загальний клас block-description */}
                    <p className="block-description">
                        To create a sustainable future, we need a financial system that 
                        supports an integrated environmental economy. This means 
                        balancing economic growth and ecological sustainability. Despite the 
                        preventative measures taken by the COP, they are not effective as 
                        long as the drilling machine continues to operate. Therefore, 
                        prioritising tree-planting efforts could be a better solution. Our 
                        proposal is to make tree planting the currency itself and our goal is 
                        to plant three trillion trees.
                    </p>
                </div>
                
            </div>
            
            {/* ФУТЕР КОПІРАЙТ */}
            <div className="footer-bottom">
                <span>© 2024 GAIIA FOUNDATION</span>
                {/* ВИДАЛЕНО ІКОНКИ СОЦМЕРЕЖ */}
            </div>
        </div>

    </div>
  );
};

export default FooterSection;