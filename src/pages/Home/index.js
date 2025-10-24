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
            <div className="text"> Hi, I’m Khanh Tran — a web developer and designer who loves bringing ideas to life through clean, functional, and visually engaging digital experiences. With a background in computer technology and over eight years in the medical devices and endoscopy industry, I’ve developed a strong eye for detail and a problem-solving mindset that I now apply to every project I work on.

After completing the UC Berkeley Coding Bootcamp, I dove deep into front-end and back-end development, learning to build responsive, user-friendly websites that blend creativity and technology. I’m passionate about crafting designs that not only look good but also make people’s online experiences smoother and more enjoyable.

Outside of work, I’m an outdoor enthusiast who loves boating, fishing, and traveling — always looking for the next adventure or a bit of inspiration from nature..</div>
        </>
    )
}

export default homePage;
