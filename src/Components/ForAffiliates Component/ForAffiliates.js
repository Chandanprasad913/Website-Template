import React from 'react';
import './ForAffiliates.css';
import { Link } from 'react-router-dom';
import Coin from '../../img/Gold_Coins_Pile_PNG_Clipart.png';
import Singup from '../../img/ipad.png';
import Create from '../../img/Dallc.png';
import Paid from '../../img/32605.jpg';
import Cal from '../../img/Cal.png';


const ForAffiliates = () => {
  return (
    <>
        <div className="affiliate-container">
      <h1 className="affiliate-title">
        Earn Lifetime Commissions with LinkUp’s <br /> Affiliate Program!
      </h1>
      <p className="affiliate-subtitle">
        Get 5% lifetime commissions on every deposit from your referrals. Track earnings,
        manage campaigns, and maximize profits – all from a simple, powerful dashboard. Start earning today!
      </p>
      <Link to="/register"><button className="affiliate-button">
        Join & Start Earning <span className="arrow">→</span>
      </button></Link>
    </div>
    

    <div className="background-wrapper">
      <div className="dashboard-container">
        {/* The rest of your dashboard JSX goes here (same as before) */}
      </div>
    </div>

        <section className="affiliate-section">
      <div className="affiliate-image">
        <img src={Coin} alt="Coins" />
      </div>
      <div className="affiliate-content">
        <h1>Why Join LinkUp’s Affiliate Program?</h1>
        <p>
          Join LinkUp’s high-paying affiliate program and enjoy lifetime
          commissions, full tracking, and unlimited earnings. Maximize your
          profits with ease!
        </p>
        <ul className="affiliate-features">
          <li>
            <span className="check-icon">✔️</span>
            <div>
              <strong>Lifetime Commissions</strong>
              <p>Earn 5% on every deposit from your referrals—for life.</p>
            </div>
          </li>
          <li>
            <span className="check-icon">✔️</span>
            <div>
              <strong>Advanced Tracking & Insights</strong>
              <p>Full campaign tracking with real-time data and insights.</p>
            </div>
          </li>
          <li>
            <span className="check-icon">✔️</span>
            <div>
              <strong>Unlimited Custom Links</strong>
              <p>
                Generate as many affiliate links as needed for different
                campaigns.
              </p>
            </div>
          </li>
          <li>
            <span className="check-icon">✔️</span>
            <div>
              <strong>Effortless Earnings Dashboard</strong>
              <p>
                Track, optimize, and withdraw commissions with ease.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <div className="join-share-container">
      <h1 className="title">
        Join, Share, and Earn - <span>Simple & Transparent</span>
      </h1>
      <p className="subtitle">
        Follow these three easy steps to become a LinkUp affiliate and start earning commissions on every referred order.
      </p>
    </div>
    
       <div className="steps-section">
      <div className="step">
        <img src={Singup} alt="Sign Up" className="step-image" />
        <h2>1. Sign Up & Get Approved</h2>
        <p>
          Register through the platform and submit your application for approval to access the Affiliate panel.
        </p>
      </div>

      <div className="step">
        <img src={Create} alt="Create Links" className="step-image" />
        <h2>2. Create Your Links</h2>
        <p>
          Generate custom affiliate links for different campaigns directly from your dashboard.
        </p>
      </div>

      <div className="step">
        <img src={Paid} alt="Get Paid" className="step-image" />
        <h2>3. Share & Get Paid</h2>
        <p>
          Share your links, drive traffic, and earn 5% lifetime commissions on every completed order.
        </p>
      </div>
    </div>

    <div className="calculator-container">
      <div className="calculator-text">
        <h1>Example Earnings Calculation</h1>
        <p>Here’s an example of how your earnings scale with referrals:</p>
        <div className="calculator-math">
          <p><strong>$2000</strong><br />Average Monthly Spend per User</p>
          <p className="math-symbol">×</p>
          <p><strong>5%</strong><br />Your Commission Rate</p>
          <p className="math-symbol">=</p>
          <p><strong>$100</strong><br />Monthly Earnings per Referred User</p>
          <p><strong>$2000</strong><br />Monthly Earnings with 20 Active Users</p>
        </div>
      </div>
      <div className="calculator-image">
        <img src={Cal} alt="Calculator Illustration" />
      </div>
    </div>

      <section className="passive-income-section">
      <h1>
        Earn Lifetime Commissions – <br />
        Start Growing Your Passive Income Today!
      </h1>
      <p className="subtext">
        Sign up now and earn 5% commissions for life on every referral’s spending.
        Get instant access to your affiliate dashboard, track earnings, and start generating links immediately.
      </p>
      <div className="button-group">
        <Link to="/register"><button className="earn-now-button">
          Start Earning Now →
        </button></Link>
        <a className="contact-link"><Link to="/contact">
          Have Questions? Contact Us →</Link>
        </a>
      </div>
    </section>
    
    </>
  );
};

export default ForAffiliates;