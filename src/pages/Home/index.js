import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'animate.css';
import './home.css';

import darksky from '../../assets/images/darksky-stars.png';
import spot from '../../assets/images/darkspots.png';
import cloud from '../../assets/images/clouds.png';

const homePage = () => {
    return (
        <>
            <div className="stars" style={{backgroundImage: `url(${darksky})` }}></div>
            <div className="twinkling" style={{backgroundImage: `url(${spot})` }}></div>
            <div className="clouds" style={{backgroundImage: `url(${cloud})` }}></div>
            <div className="text"> Hi! I am Khanh Tran, an enthusiastic full-stack web developer.</div>
        </>
    )
}

export default homePage;