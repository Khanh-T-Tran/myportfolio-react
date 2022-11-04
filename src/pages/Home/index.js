import React from "react";
import Image from 'react-bootstrap/Image';
import "bootstrap/dist/css/bootstrap.css";
import 'animate.css';
import './home.css';

import Hoody from "../../assets/images/hoody.png"

const homePage = () => {
    return (
        <>
            <div className="imageDiv">
                <Image className="animate" src={Hoody} fluid />              
                <Image className="animate" src={Hoody} fluid />              
                <Image className="animate" src={Hoody} fluid />              
            </div>
        </>
    )
}

export default homePage;