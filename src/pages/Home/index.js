import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'animate.css';
import './home.css';

import cloud from '../../assets/images/clouds.png';

import Background from "../../components/Background";

const homePage = () => {
    return (
        <>
            <Background/>
            <div className="clouds" style={{backgroundImage: `url(${cloud})` }}></div>
            <div className="text"> Hi! I am Khanh Tran, an enthusiastic full-stack web developer.</div>
        </>
    )
}

export default homePage;