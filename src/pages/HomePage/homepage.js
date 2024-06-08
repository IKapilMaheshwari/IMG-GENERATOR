import React from 'react';
import Navbar from '../common/navbar/navbar';
import './homepage.css';

const HomePage = (props) => {
    return (
        <div>
            <Navbar page="home" />
            <div className="homepage-main-container">
                <div className="welcome-content">
                    <h1>Image Generator App</h1>
                    <button onClick={() => window.location.href='/image-Generator'}>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
