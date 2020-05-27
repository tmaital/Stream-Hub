import React from "react";
import "./loading.css"
import streamhub_logo from "../streamhub_logo.png"

function Loading(){
    return(
        <div className="loading-overlay">
            <img src={streamhub_logo} alt="Logo"/>
            <div className="loader-container">
                <div className="loader">Loading...</div>
            </div>
        </div>
   )
}

export default Loading