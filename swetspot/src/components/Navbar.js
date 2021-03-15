import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'



function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)


    const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)   
        } else {
            setButton(true)
        }
    }
    window.addEventListener('resize', showButton)
    return(
        <>
        <nav className="navbar">
            <div className= "navbar-container">
                {/*
                Start of Navabar code
                */}
            <Link to = "/" className = "navbar-logo"><img src = "/images/swetspot.jpg" style = {{height: 100, width: 100}}></img></Link> 

            {/*
            Hamburger menu
            */}
            <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          
                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                
              <li className = "nav-item"> <Link to = "/" className = 'nav-links' onClick = {closeMobileMenu} >
                    Home
                </Link> </li>
               <li className = "nav-item"> <Link to = "/" className = 'nav-links'>
                    Blog
                </Link> </li>
                <li className = "nav-item"> <Link to = "/" className = 'nav-links'>
                    About Us
                </Link> </li>
                <li className = "nav-item"> <Link to = "/" className = 'nav-links'>
                    Contact Us
                </Link> </li>
                <li className = "nav-item"> <Link to = "/" className = 'nav-links'>
                    Services
                </Link> </li>
                <li className = "nav-item"> <Link to = "/" className = 'nav-links'>
                    CRM
                </Link> </li>
                <li className = "nav-item"> <Link to = "/" className = 'nav-links'>
                    Lending Software
                </Link> </li>
                <li className = "nav-item"><Link to = "/" className = 'nav-links'>Partners</Link></li>
                </ul>
                
            </div>
        </nav>
        </>
    )
}

export default Navbar