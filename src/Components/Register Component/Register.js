import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const RegisterPage = () => {
  return (
    <div className="register-container">
      <div className="left-panel">
        <img src="/images/logo.png" alt="LinkUp Logo" className="logo" />
        <div className="features-grid">
          <div className="feature-box">
            <h4>100,000+ Link Placement Options</h4>
            <p>Guest posts, home-page and inner-page links.</p>
          </div>
          <div className="feature-box">
            <h4>Full SEO Metrics Included</h4>
            <p>DA, DR, traffic, referring domains and keywords.</p>
          </div>
          <div className="feature-box">
            <h4>Multiple Payment Options</h4>
            <p>Stripe, PayPal, Bank Transfer, Wise, Crypto and more.</p>
          </div>
          <div className="feature-box">
            <h4>Link Tracking</h4>
            <p>Automated tracking of all your backlinks.</p>
          </div>
          <div className="feature-box">
            <h4>Competitor Analysis</h4>
            <p>Close your link gap and stay ahead of the competition.</p>
          </div>
          <div className="feature-box">
            <h4>Multiple Accounts</h4>
            <p>Manage separate accounts for different projects.</p>
          </div>
        </div>
        <p className="tagline">The link building platform for serious marketers.</p>
        <div className="partners-logos">
          <img src="/images/BIG.png" alt="ahrefs" />
          <img src="/images/Moz.png" alt="moz" />
          <img src="/images/sem.png" alt="semrush" />
          <img src="/images/stripe.png" alt="stripe" />
          <img src="/images/paypal.png" alt="paypal" />
          <img src="/images/wise.png" alt="wise" />
          <img src="/images/skrill.png" alt="skrill" />
        </div>
      </div>

      <div className="right-panel">
        <a className="top-link"><Link to="/login">Sign in</Link></a>
        <h2>Create an account</h2>
        <p className="form-subtitle">Enter your details below to create your account</p>
        <form className="register-form">
          <div className="name-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="name@company.com" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Register</button>
          <p className="terms-text">
            By clicking <strong>Register</strong>, you agree to our 
            <a href="/terms"> Terms of Service</a> and 
            <a href="/privacy"> Privacy Policy</a>.
          </p>
        </form>
        <div className="divider">ALREADY HAVE AN ACCOUNT?</div>
        <a className="secondary-button"><Link to="/login">
          <span>👤</span> Sign in</Link>
        </a>
      </div>
    </div>
  );
};

export default RegisterPage;
