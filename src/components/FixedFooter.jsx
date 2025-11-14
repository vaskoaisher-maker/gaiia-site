import React from 'react';
import './FixedFooter.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'; 

const FixedFooter = ({ isLight = false }) => {
    // Стиль для зміни кольору на світлих фонах
    const iconStyle = {
        color: isLight ? '#444' : '#fff',
    };
    
    return (
        <div className="fixed-social-footer">
            <div className="fixed-social-icons">
                <a href="#f" target="_blank" style={iconStyle}><FaFacebookF /></a>
                <a href="#i" target="_blank" style={iconStyle}><FaInstagram /></a>
                <a href="#t" target="_blank" style={iconStyle}><FaTwitter /></a>
                <a href="#y" target="_blank" style={iconStyle}><FaYoutube /></a>
            </div>
        </div>
    );
};

export default FixedFooter;