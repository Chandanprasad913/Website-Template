import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const LoginPage = () => {
  return (
    <div className="login-container">
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
        <div className="register-top-right">
          <a><Link to="/register">Register</Link></a>
        </div>
        <div className="form-box">
          <h2>Sign in</h2>
          <p>Enter your credentials to continue</p>
          <input type="email" placeholder="name@example.com" />
          <div className="password-box">
            <input type="password" placeholder="Password" />
            <span className="eye-icon">👁️</span>
          </div>
          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button className="signin-btn">Sign in</button>
          <div className="divider">
            <span>DON'T HAVE AN ACCOUNT?</span>
          </div>
          <Link to="/register"><button className="register-btn">Register</button></Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
