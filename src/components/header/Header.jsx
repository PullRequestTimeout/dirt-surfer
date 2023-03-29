import React, { useState } from "react";
import "./Header.css"
import logo from "../../assets/dirtsurfer-logo.svg"

const Header = ({ onChange }) => {
    return (
        <header>
            <a href="/">
                <img src={logo} alt="Dirt Surfer logo" />
            </a>
            <select onChange={onChange}>
                <option value="Rossland">Rossland</option>
                <option value="Trail">Trail</option>
                <option value="Castlegar">Castlegar</option>
            </select>
        </header>
    )
}


export default Header;