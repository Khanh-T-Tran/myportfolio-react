import React from "react";

const fancyHeader = (props) => {
    return (
        <>
        <div className="container">
        <nav> 
            <image href="" src="" alt="brand" className="brandLogo"> </image>

                <ul>
                    <li><a href="#home" onClick={()=>{props.changePage("Home")}}>Home</a></li>
                    <li><a href="#about" onClick={()=>{props.changePage("About")}}>About</a></li>
                    <li><a href="#skills" onClick={()=>{props.changePage("Skills")}}>Skills</a></li>
                    <li><a href="#portfolio" onClick={()=>{props.changePage("Portfolio")}}>Portfolio</a></li>
                    <li><a href="#contact" onClick={()=>{props.changePage("Contact")}}>Contact</a></li>
                </ul>
            </nav>

        </div>


        </>
    )
}

export default fancyHeader;