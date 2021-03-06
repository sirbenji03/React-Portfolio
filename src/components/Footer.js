import React from 'react';
import {
    FacebookShareButton, 
    FacebookIcon,
    TwitterShareButton, 
    TwitterIcon,
    RedditShareButton,
    RedditIcon, 
    LinkedinShareButton, 
    LinkedinIcon
} from 'react-share'

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="d-flex">
                        <p>city Columbus 118 N Hight street apt 3ef</p>
                    </div>
                    <div className="d-flex">
                        <a href="tel:929222207792">+1(929)2209983</a>
                    </div>
                    <div className="d-flex">
                        <p>jamimy@gmail.com</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-2 col-sm-6">
                    <div className="row">
                        <div className="col">
                           <a className="footer-nav">Home</a>
                           <br/>
                           <a className="footer-nav">About me</a>
                           <br/>
                           <a className="footer-nav">Services</a>
                        </div>
                        <div className="col">
                           <a className="footer-nav">Experience</a>
                           <br/>
                           <a className="footer-nav">Portfolio</a>
                           <br/>
                           <a className="footer-nav">Contacts</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-6 align items-center">
                    <div className="d-flex justify-content-center">
                        <FacebookShareButton>
                            <FacebookIcon className="mx-3" size={36}/>
                        </FacebookShareButton>
                        <TwitterShareButton>
                            <TwitterIcon className="mx-3" size={36}/>
                        </TwitterShareButton>
                        <RedditShareButton>
                            <RedditIcon className="mx-3" size={36}/>
                        </RedditShareButton>
                        <LinkedinShareButton>
                            <LinkedinIcon className="mx-3" size={36}/>
                        </LinkedinShareButton>
                    </div>
                    <p className="pt-3 text-center">
                        Copyright&copy;
                        {new Date().getFullYear()}&nbsp;BootCamp | All Rights Reseved
                    </p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
