import React from 'react'
import './Footer.css'
import {Button} from './Button'
import {Link} from 'react-router-dom'
 function Footer(){
    
        return (
            <div className='footer-container'>
            <section className='footer-subscription'>
              <p className='footer-subscription-heading'>
              Copyright © 2021 swetSpot - All Rights Reserved.
              </p>
           
            </section>
            <div class='footer-links'>
              <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                  <h2>Home</h2>
                  <Link to='/sign-up' style ={{textDecoration: 'none', color: 'white'}}>Services</Link>
                  <Link to='/' style = {{textDecoration: 'none', color: 'white'}}>CRM</Link>
                  <Link to='/' style = {{textDecoration: 'none', color: 'white'}}>Lending Software</Link>
                  <Link to='/' style = {{textDecoration: 'none', color: 'white'}}>Partners</Link>
                  <Link to='/' style = {{textDecoration: 'none', color: 'white'}}>Contact Us</Link>
            </div>
        </div>
    </div>
 </div>
        )
    
}

export default Footer
