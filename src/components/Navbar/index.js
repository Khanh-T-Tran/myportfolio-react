import React from "react";

const fancyHeader = (props) => {
    return (
        <>
            <h1> This is fancyHeader:
                <ul>
                    <li onClick={()=>{props.changePage("Home")}}>Home</li>
                    <li onClick={()=>{props.changePage("About")}}>About</li>
                    <li onClick={()=>{props.changePage("Skills")}}>Skills</li>
                    <li onClick={()=>{props.changePage("Portfolio")}}>Portfolio</li>
                    <li onClick={()=>{props.changePage("Contact")}}>Contact</li>
                </ul>
            </h1>

        </>
    )
}

export default fancyHeader;