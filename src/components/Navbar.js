import React from 'react'
import Logo from '../assests/pizzaLogo.png';
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

function navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo} alt="logo"></img>
        </div>
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default navbar
