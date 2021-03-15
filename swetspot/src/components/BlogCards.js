import React from 'react'
import {Link} from 'react-router-dom'
import './BlogCards.css'
import Carousel from './MyCarousel'
function BlogCards() {
    return (
        <div className = "wrapper">
            <img src = "/images/backgroundimage.jpg" alt ="background-image"
            style={{position: 'absolute', 
            
            width: "99%",
            height: 600,
            justifyContent: 'center', 
            alignItems: 'center', zIndex: -1}}></img>
          <h1 >Tech Cherry</h1>
          <div className = "wrapper-list">
             <Link to = "/" className = "text-link"> <h4 className = "text">All Posts</h4> </Link>
              <Link to = "/" className = "text-link"><h4 className = "text">CRM, CLOUD</h4> </Link>
             <Link to = "/" className = "text-link"> <h4 className = "text">Employee Retention</h4></Link>
             <Carousel></Carousel>
          </div>
        </div>
    )
}

export default BlogCards
