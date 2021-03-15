import React from 'react'
import { Button } from './Button'
import './Hero.css'
function Hero() {
    return (
        <div className = "hero-container">
            <img src = "/images/webimage.png"  style={{position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            width: "100%",
            height: 600,
            justifyContent: 'center', 
            alignItems: 'center', zIndex: -1}}></img>
            <h1>Proffesional Services</h1>
            <p>We put the cherry on top of tech</p>
            <div className = "hero-btns">
             <Button buttonStyle = "btn--primary">Get a Quote</Button>
             </div>
        </div>
    )
}

export default Hero
