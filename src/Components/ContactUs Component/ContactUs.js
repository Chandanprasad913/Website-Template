import React from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css';


const ContactUs = () => {
  return (
    <>
    <br />
    <br />
         <div className="contact-container">
      <div className="contact-left">
        <p className="managed-text">Ask for Managed Account here too!</p>
        <div className="arrow">↘</div>

        <Link to="/register"><button className="message-button">📩 Click to send Message</button></Link>
        <p className="or-text">or...</p>
        <a href="mailto:hello@LinkUp.com" className="email-link">
          hello@LinkUp.com
        </a>
        <p className="note-text">
          Publisher Requests sent to this email or via this messenger will be ignored!
        </p>
        <p className="publisher-note">
          If you’re a publisher looking to list your site,
          please use our <a href="#" className="submission-link">Publisher Submission Form</a> instead.
        </p>
      </div>

      <div className="contact-right">
        <h2>Let’s Connect –</h2>
        <h1>We’re Here to Help!</h1>
        <p className="support-text">
          Got a question, need assistance, or want to collaborate? Our team is ready to assist you.
        </p>
        <p className="support-text">
          Reach out via email or the form – we typically respond within 24 hours!
        </p>
        <div className="icon">🎧</div>
      </div>
    </div>
    <br />
    <br />
     <div className="hero-container">
      <h1 className="hero-title">Your link building solution awaits!</h1>
      <p className="hero-subtitle">
        LinkUp gives you everything you need to scale your rankings efficiently – DIY or fully managed.
      </p>
      <Link to="/register"><button className="hero-button">
        Join Now & Start Building Links <span className="arrow">→</span>
      </button></Link>
      <p className="hero-question">
        Questions? <a className="hero-link"><Link to="/contact">Get in touch</Link></a> <span className="arrow">→</span>
      </p>
    </div>
    </>
  );
};

export default ContactUs;