import React from 'react'
import Typed from 'react-typed'

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
          <canvas></canvas>
        <h1>web development and website promotions</h1>  
        <Typed
        className="typed-text"
        strings={['Web Design', 'Web Development', 'Instagram Ads SMM', 'Google Ads', 'Facebook', 'Twitter',]}
        typeSpeed = {40}
        backSpeed = {60}
        loop
        />
        <a href="#" className="btn-main-offer"></a>
      </div>      
    </div>
  )
}

export default Header
