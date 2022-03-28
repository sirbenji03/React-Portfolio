import React from 'react';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
init("wVCC8UDVZqRf3bq1m");



const Contacts = () => {

  const serviceID = "service_ID";
  const userID = "wVCC8UDVZqRf3bq1m";
  const templateID = "template_ID";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm( serviceID, userID, e.target, templateID)
      .then((result) => {
          console.log(userID);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>Please fill out the contact details and i will get back to you soon.</p>
      </div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/*name input*/}
              <input 
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              />
              {/*phone input*/}
              <input 
              type="text"
              className="form-control"
              placeholder="Phone Number"
              name="phone"
              />
              {/*email input*/}
              <input 
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              />
              {/*message input*/}
              <input 
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
              />
            </div>
            <div className="col-md-6 col-xs-12">
              {/*description input*/}
              <textarea
                type="text"
                className="form-control"
                placeholder="Description for your message"
                name="Description"
              ></textarea> 
              <button className="btn-main-offer contact-btn" type="submit">contact me</button>
            </div>
          </div>
        </form>
       </div>
    </div>
  )
}

export default Contacts
