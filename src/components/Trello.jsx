import React, { useState } from 'react';
import './Trello.css'
import img1 from './Screenshot (80).png'
import img2 from './Screenshot (79).png'
import img3 from './Screenshot (81).png'

export default function Trello() {
    const [currentImage, setCurrentImage] = useState(0);

    const handleSectionClick = (index) => {
        // Update the currentImage state to show the corresponding image
        setCurrentImage(index);
    }

    return (
        <>
            <div className="trello">
                <div className="top">
                    <h3>Trello 101</h3>
                    <h2>A productivity powerhouse</h2>
                    <div className="size">
                        <p>Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who's doing what and what needs to get done. Learn more in our <span> guide for getting started.</span></p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="tleft">
                        <div className={`one1 ${currentImage === 0 ? 'active' : ''}`} onClick={() => handleSectionClick(0)}>
                            <h3>Board</h3>
                            <p>Trello boards keep tasks organized and work moving forward. In a glance, see everything from "things to do" to "aww yeah, we did it!"</p>
                        </div>
                        <div className={`two2 ${currentImage === 1 ? 'active' : ''}`} onClick={() => handleSectionClick(1)}>
                            <h3>List</h3>
                            <p>Trello boards keep tasks organized and work moving forward. In a glance, see everything from "things to do" to "aww yeah, we did it!"</p>
                        </div>
                        <div className={`three3 ${currentImage === 2 ? 'active' : ''}`} onClick={() => handleSectionClick(2)}>
                            <h3>Cards</h3>
                            <p>Trello boards keep tasks organized and work moving forward. In a glance, see everything from "things to do" to "aww yeah, we did it!"</p>
                        </div>
                    </div>
                    <div className="tright">
                        <img
                            src={img1}
                            alt=""
                            style={{ display: currentImage === 0 ? 'block' : 'none' }}
                        />
                        <img
                            src={img2}
                            alt=""
                            style={{ display: currentImage === 1 ? 'block' : 'none' }}
                        />
                        <img
                            src={img3}
                            alt=""
                            style={{ display: currentImage === 2 ? 'block' : 'none' }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}