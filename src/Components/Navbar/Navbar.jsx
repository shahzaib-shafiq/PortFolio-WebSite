import React from 'react'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">SHAHZAIB'S Port-Folio</div>
        <Toggle/>
        <span></span>
      </div>
      <div className="n-right">
        <div className="n-list">

            <ul style={{listStyleType:'none'}}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>            
            </ul>
        </div>
        <button className="button n-button">Contact US</button>
      </div>
    </div>
  )
}

export default Navbar
