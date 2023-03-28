import React, { useState } from "react";
import "./Header.css"
import LocationSelector from "../location-selector/LocationSelector"
import logo from "../../assets/dirtsurfer-logo.svg"

const Header = () => {
    return (
        <header>
            <a href="/">
                <img src={logo} alt="Dirt Surfer logo" />
            </a>
            <LocationSelector />
        </header>
    )
}


export default Header;