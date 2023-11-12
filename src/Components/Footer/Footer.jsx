import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='footerContainer'>
       <div  className='footer'>
          <Link to='/'><span>FMovies</span></Link>
       </div>
    </div>
  )
}

export default Footer
