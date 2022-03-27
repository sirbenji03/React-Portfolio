import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebookF, faGoogle} from "@fortawesome/free-brands-svg-icons"
import {faDesktop, faFileCode} from "@fortawesome/free-solid-svg-icons"

const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5"> my services</h1>   
          <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="box">
                  <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size='2x'/></div>
                    <h3>Web Design</h3>
                    <p>I approach each project with full focus and maintain good results.</p>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6">
                  <div className="box">
                  <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size='2x'/></div>
                    <h3>Web Development</h3>
                    <p>I maintain new technology in building my projects.</p>
                  </div>
                </div>  
                
                <div className="col-md-3 col-sm-6">
                  <div className="box">
                  <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} size='2x'/></div>
                    <h3>Facebook Ads</h3>
                    <p>Viewers can see my progress on facebook.</p>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6">
                  <div className="box">
                  <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} size='2x'/></div>
                    <h3>Google Ads</h3>
                    <p>google adds helps share my progress world wide .</p>
                  </div>
                </div>
              </div>
          </div>
      </div>
  )
}

export default Services
