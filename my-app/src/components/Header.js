import React from 'react'
import '../index.css'

export default function Header() {
    return (
        <header className="header">
            <img src={require("../images/troll-face.png")} alt="meme face" className="header--img"></img>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--subtitle">React-Project</h4>
        </header>
    )
}