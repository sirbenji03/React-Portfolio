import React from 'react'
import logo from "../logo.jpeg";
import {Link} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#"><img className="logo" src= {logo} alt="logo..." /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style= {{color: 'white'}}/>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <Link smooth={true} to= "home"className="nav-link" href="#">Home <span className="sr-only"></span></Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to= "about" className="nav-link" href="#">about me</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to= "services" className="nav-link" href="#">services</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to= "experience" className="nav-link" href="#">experience</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to= "portfolio" className="nav-link" href="#">portfolio</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to= "contact" className="nav-link" href="#">contacts</Link>
          </li>
  
        </ul>
       
      </div>
    </div>
  </nav>
  )
}

export default navbar
