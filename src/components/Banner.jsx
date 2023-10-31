 import React, { useState } from 'react';
import './Banner.css';
import img from './WhatsApp Image 2023-10-31 at 4.10.36 PM.jpeg'

const Banner = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const handleMouseEnter = () => {
        setShowTooltip(true);
    };
    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    
    return (
        <>
            <div className="banner">
                <div className="navbar">
                    <div>
                        <h1 className='logo'>EsaLink</h1>
                        <p className='logo-txt'>DATA INTEGRATION</p>
                    </div>
                    <div className='nav-div'>
                        <button className='btn1'>Facturation Electronique 2024</button>
                        <div className="links">
                            <div className="tooltip-container">
                                <h4 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="" className='tooltip-text'>Expertise</h4>
                                {showTooltip && (
                                    <div className="tooltip-dialog">
                                        <h7>NOTRE EXPERTISE Optimisez vos échanges de données B2B au profit de votre productivité en adéquation avec vos exigences sectorielles</h7>
                                    </div>
                                )}
                            </div>
                            <div className="tooltip-container">
                                <h4 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="" className='tooltip-text' className='link12'>Solution</h4>
                                {showTooltip && (
                                    <div className="tooltip-dialog">
                                        <h7>NOTRE EXPERTISE Optimisez vos échanges de données B2B au profit de votre productivité en adéquation avec vos exigences sectorielles</h7>
                                    </div>
                                )}
                            </div>

                            <h4 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="" className='tooltip-text' className='link12'>Services</h4>
                            <h4 to="" className='link12'>Blog</h4>
                            
                        </div>
                        <button className='nav-btn2'>Obtenir une demo</button>
                        <select className='nav-select'>
                            <option value="">FR</option>
                            <option value="option1">FR</option>
                            <option value="option2">EN</option>
                            <option value="option3">TR</option>
                        </select>
                    </div>
                </div>

                <div className='iso'>
                    <img className='img-iso' src={img} />
                </div>

                <div className='midle-banner-txt'>
                    <h1 className='h1-banner-middle'>La dématérialisation <br></br>
                        au service de votre business</h1>
                    <h3 className='h3-banner-middle'>Esalink vous accompagne dans la digitalisation de vos flux B2B</h3>
                    <div className='midle-banner-btn'>
                        <button className='btn90'>Trourver votre solution EDI</button>
                        <button className='btn90'>PAsser a la factuarisation elect</button>
                    </div>
                </div>

                <div className='comp'>
                    <h1 className='comph1'>cleo</h1>
                    <h1 className='comph1'>genrix</h1>
                    <h1 className='comph1'>IBM</h1>
                    <h1 className='comph1'>HUBTIMIZE</h1>
                </div>
            </div>
        </>
    );
};

export default Banner;