import React from "react";
import Image from 'react-bootstrap/Image';
import "bootstrap/dist/css/bootstrap.css";
import 'animate.css';
import './home.css';
const homePage = () => {
    return (
        <>
            <div className="imageDiv">
                <Image className="animate" src="https://raw.githubusercontent.com/Khanh-T-Tran/myportfolio-react/main/src/assets/images/3hoodies-darktheme.png" fluid />              
            </div>
        </>
    )
}

export default homePage;