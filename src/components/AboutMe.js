import React from 'react';
import authur from '../me.JPG';

const AboutMe = () => {
  return (
    <div id="about" className= "container py-5">
      <div className= "row">
        <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
              <img className="profile-img" src={authur} alt="authur..."/>
            </div>
        </div>
        <div className="col-lg-6 col-xm-12">
            <h1 className= "about-heading">about me</h1>
            <p>
            My name is Benjamin Amakye. I graduated from MIT a month ago. 
            Now, I am looking for my first full-time job. 
            I have been working as a freelance web developer for the last three years and cooperated with several startups. 
            I cannot say with 100% confidence where I see myself in five years or what my big career goal is.
            The world is changing rapidly, and I do not have enough professional experience to be certain about such things. 
            However, I know that I can provide a fresh take and an extraordinary approach to every project. I am always open to challenges and constructive feedback. I am open-minded and learn new things quickly.
             I want to become a team player and dedicate all my skills and talents to develop high-quality and unique products.
            </p>
        </div>
     </div>
    </div>
  )
}

export default AboutMe
