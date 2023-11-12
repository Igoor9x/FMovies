import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    const [scroll, setScroll] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setScroll(scrolled)
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
   }, []);

  return (
    <header className={`containerHeader ${scroll ? 'scrolled' : ''}`}>
        <div className='header'>
            <Link to='/'><h1>FMovies</h1></Link>
            <nav className='navgation'>
            <Link to='/'><li>Início</li></Link>
            <Link to='searchMovie'><li>Filmes</li></Link>
            <Link to='searchTV'><li>Tv</li></Link>
            </nav>
        </div>
      
    </header>
  )
}

export default Header 
