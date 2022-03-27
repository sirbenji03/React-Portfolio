import React from 'react';
import mern from "../mern.jpeg";
import nosql from "../nosql.jpeg";
import react from "../react.jpeg";
import portfolio from "../portfolio.jpeg";

import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import {faSearchPlus} from "@fortawesome/free-solid-svg-icons"

function Portfolio() {
    const openPopupboxMern = () => {
        const content= ( 
            <>
                <img className="portfolio-image-popupbox" src= {mern} alt="mern clone project" />
                <p>lorem ipsum dolor sit amet, consecteturlorel, 
                    sed do eiusmod tempor incididunt utlate externa. 
                    Ut enim ad minim veniam,  
                </p>
                    <b>GitHub:</b> 
                    <a className="hyper-link" onClick={() =>window.open('https://github.com/sirbenji03/budget_tracker.git')}>
                    https://github.com/sirbenji03/budget_tracker.git
                    </a>
            </>
        )
        PopupboxManager.open({content})
     }

     const popupboxConfigMern ={

     }

     const openPopupboxNosql = () => {
        const content= ( 
            <>
                <img className="portfolio-image-popupbox" src= {nosql} alt="nosql clone project" />
                <p>lorem ipsum dolor sit amet, consecteturlorel, 
                    sed do eiusmod tempor incididunt utlate externa. 
                    Ut enim ad minim veniam,  
                </p>
                    <b>GitHub:</b> 
                    <a className="hyper-link" onClick={() =>window.open('https://github.com/sirbenji03/Employee_Tracker.git')}>
                    https://github.com/sirbenji03/Employee_Tracker.git
                    </a>
            </>
        )
        PopupboxManager.open({content})
     }

     const popupboxConfigNosql ={

     }

     const openPopupboxPortfolio = () => {
        const content= ( 
            <>
                <img className="portfolio-image-popupbox" src= {portfolio} alt="portfolio clone project" />
                <p>lorem ipsum dolor sit amet, consecteturlorel, 
                    sed do eiusmod tempor incididunt utlate externa. 
                    Ut enim ad minim veniam,  
                </p>
                    <b>GitHub:</b> 
                    <a className="hyper-link" onClick={() =>window.open('https://github.com/sirbenji03/React-Portfolio.git')}>
                    https://github.com/sirbenji03/React-Portfolio.git
                    </a>
            </>
        )
        PopupboxManager.open({content})
     }

     const popupboxConfigPortfolio ={

     }

     const openPopupboxReact = () => {
        const content= ( 
            <>
                <img className="portfolio-image-popupbox" src= {react} alt="portfolio clone project" />
                <p>lorem ipsum dolor sit amet, consecteturlorel, 
                    sed do eiusmod tempor incididunt utlate externa. 
                    Ut enim ad minim veniam,  
                </p>
                    <b>GitHub:</b> 
                    <a className="hyper-link" onClick={() =>window.open('https://github.com/sirbenji03/E-coomerce-Backend.git')}>
                    https://github.com/sirbenji03/E-coomerce-Backend.git
                    </a>
            </>
        )
        PopupboxManager.open({content})
     }

     const popupboxConfigReact ={

     }

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper column justify-content-center">

                    <div className="portfolio-image-box" onClick= { openPopupboxMern}>
                            <img className="portfolio-image" src={mern} alt="mern clone project" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    
                    <div className="portfolio-image-box" onClick= { openPopupboxNosql}>
                        <img className="portfolio-image" src={nosql} alt="np clone project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>    
                    
                
                    <div className="portfolio-image-box" onClick= { openPopupboxReact}>
                        <img className="portfolio-image" src={react} alt="react clone project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>    
                    
                    
                    <div className="portfolio-image-box" onClick= { openPopupboxPortfolio}>
                        <img className="portfolio-image" src={portfolio} alt="sql clone project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>        
                
             </div>
             <PopupboxContainer {...popupboxConfigMern} />
             <PopupboxContainer {...popupboxConfigNosql} />
             <PopupboxContainer {...popupboxConfigReact} />
             <PopupboxContainer {...popupboxConfigPortfolio} />
        </div>
    );
}

export default Portfolio
