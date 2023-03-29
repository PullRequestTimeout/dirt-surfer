// import React, { useState } from "react";
import "./Header.css"
import logo from "../../assets/dirtsurfer-logo.svg"
import SettingsButton from "../SettingsButton/SettingsButton"
// import settingsIcon from "../../assets/settings-icon.svg"

const Header = ({ onChange }) => {
    return (
        <header className="header">
            <a href="/">
                <img src={logo} alt="Dirt Surfer logo" />
            </a>
            <select onChange={onChange}>
                <option value="Rossland">Rossland</option>
                <option value="Trail">Trail</option>
                <option value="Castlegar">Castlegar</option>
            </select>
            <SettingsButton />
        </header>
    )
}


export default Header;