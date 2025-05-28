import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import {
  FaCrown,
  FaMagic,
  FaPaypal,
  FaEye,
  FaUsers,
  FaExpandArrowsAlt,
  FaRobot,
  FaUserTie,
  FaListUl,
} from "react-icons/fa";

// Correctly defined features for FeatureGrid
const features = [
  { icon: <FaCrown />, title: "Authority", description: "Work with the best domains." },
  { icon: <FaMagic />, title: "Automation", description: "Scale without stress." },
  { icon: <FaUsers />, title: "Expertise", description: "Guided by real SEO pros." },
  { icon: <FaRobot />, title: "AI Tools", description: "Smarter, faster campaigns." },
  { icon: <FaUserTie />, title: "Management", description: "Full-service options available." },
  { icon: <FaListUl />, title: "Variety", description: "130,000+ pre-vetted websites." },
  { icon: <FaPaypal />, title: "Multiple Payment Options", description: "Pay with Stripe, PayPal, Bank Transfer" },
  { icon: <FaEye />, title: "Link Tracking", description: "Verify that your links are live." },
  { icon: <FaExpandArrowsAlt />, title: "Multi-User Access", description: "Invite your team or clients." },
];

const testimonials = [
  {
    rating: 5,
    text: "“LinkUp has been a game-changer for our business. The seamless integration with our strategies and the professionalism of their team make LinkUp an indispensable partner. Highly recommend LinkUp to any agency looking to elevate their SEO game!”",
    author: "Tony Tom, Skynet Media LTD",
  },
  {
    rating: 5,
    text: "“If you’re spending big on links, LinkUp’s managed service is what you need! They helped me beat my affiliate competitors while I focused on the important stuff. 100% recommend!! Special shoutout to Nick!”",
    author: "Tony Tom, Skynet Media LTD",
  },
  {
    rating: 5,
    text: "“You guys are amazing!!! Thank you! I appreciate extra help on my project. Monika went above and beyond for me, I was overwhelmed but she assisted and we both executed. Again they are best and truly professional. The backlinks are 100% legit. Do it you won’t regret it!”",
    author: "Satisfied Client",
  },
];

const FeatureGrid = () => {
  return (
    <section className="feature-grid">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <div className="icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

const Banner = () => {
  return (
    <>
    <br/>
    <br/>
      <div className="marketplace-banner">
        <div className="text-section">
          <h1>The Link Building Marketplace for Serious Marketers.</h1>
          <p>
            Get high-authority backlinks from the most advanced link-building
            platform. Choose from 130,000+ pre-vetted placements or let our
            experts handle everything for you.
          </p>
          <Link to="/register"><button className="explore-button">
            Explore the Marketplace <span>&rarr;</span>
          </button></Link>
        </div>
        <div className="image-section">
          <img
            src="/images/Home.png"
            alt="Marketplace Screenshot"
            className="marketplace-image"
          />
        </div>
      </div>

      <div className="link-building-section">
        <h1 className="main-heading">
          The #1 Link Building Platform
          <span className="highlight"></span>
        </h1>
        <p className="sub-heading">
          Everything you need for link building in one powerful platform.
        </p>
        <div className="features-container">
          <div className="features-left">
            <div className="feature-item">✔ Industry-Leading Marketplace</div>
            <div className="feature-item">💬 Dedicated Customer Success Team</div>
            <div className="feature-item">📄 Easy Payments & One-Click Invoicing</div>
            <div className="feature-item">📈 Seamless Scaling for Any Business</div>
          </div>
          <div className="logo-container">
            <img src="/images/logo.png" alt="LinkUp Logo" className="LinkUp-logo" />
          </div>
          <div className="features-right">
            <div className="feature-item">✔ 120,000+ Pre-Vetted Websites</div>
            <div className="feature-item">🛠 Cutting-Edge SEO Tools</div>
            <div className="feature-item">🛒 Instant & Hassle-Free Ordering</div>
            <div className="feature-item">✍ Optimized Content & SEO Copywriting</div>
          </div>
        </div>
      </div>

      <section className="backlink-feature">
        <div className="left-content">
          <img src="/images/Seo.png" alt="SEO Metrics" className="metrics-img" />
        </div>
        <div className="right-content">
          <h1>
            Find, Buy & Track Backlinks
            <br />- All in One Place
          </h1>
          <p>Take full control with the most advanced link-building marketplace in the industry.</p>
          <ul className="feature-list">
            <li>✅ 130,000+ Pre-Vetted Backlinks - Search, Filter & Buy Instantly</li>
            <li>✅ Full SEO Metrics Included - DA, DR, AS, Traffic & More</li>
            <li>✅ Advanced Filtering - Find the Right Links</li>
            <li>✅ Seamless Order & Campaign Management</li>
            <li>✅ No Subscriptions, No Hidden Fees</li>
          </ul>
          <p>Find, vet, and buy backlinks in just a few clicks.</p>
          <Link to="/register"><button className="marketplace-btn">
            Explore the Marketplace <span>&rarr;</span>
          </button></Link>
          <div className="integrations">
            <p><strong>Integrated with:</strong></p>
            <div className="logos">
              <img src="/images/BIG.png" alt="ahrefs" />
              <img src="/images/Moz.png" alt="MOZ" />
              <img src="/images/sem.png" alt="SEMRush" />
            </div>
          </div>
        </div>
      </section>

      <section className="advanced-tools">
        <h1>
          The most advanced tools for
          <br />
          <span>SEO and link building!</span>
        </h1>
        <p>
          LinkUp is more than just a marketplace – it’s a full-service
          link-building platform packed with advanced tools.
        </p>
        <br />
          <FeatureGrid />
          <br/> 
        <a className="action-button"><Link to="/register">
          See All Tools In Action <span className="arrow">→</span>
        </Link></a>
      </section>

      <section className="managed-link-building">
        <div className="text-section">
          <h1>
            Fully Managed Link Building
            <br />
            <span className="highlight">- Scale Faster, Work Less</span>
          </h1>
          <p>
            Want high-quality backlinks without managing the process? We handle everything so you can focus on scaling your business – without the need for extra staff or time-consuming tasks.
          </p>
          <ul className="features">
            <li>✅ Strict Quality Control Based on Client Requirements</li>
            <li>✅ Manual Backlink Selection & SEO Metrics Verification</li>
            <li>✅ End-to-End Order & Placement Management</li>
            <li>✅ Dedicated Key Account Manager</li>
            <li>✅ Custom Outreach for Exclusive Opportunities</li>
          </ul>
          <p className="note">No effort, just results for free!</p>
          <Link to="/managed-accounts"><button className="cta-button">
            Learn More About Managed Link Building <span className="arrow">→</span>
          </button></Link>
        </div>
        <div className="image-section">
          <img src="/images/Sii.png" alt="Dashboard example" />
        </div>
      </section>

      <div className="testimonial-section">
        <h1 className="title">A Platform You Can Trust!</h1>
        <p className="subtitle">
          LinkUp is trusted by agencies, brands, and affiliates worldwide to deliver high-impact, fully transparent link-building solutions.
        </p>
        <div className="cards-container">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">
                {"★".repeat(t.rating)}
                <span className="rating-value">5.0</span>
              </div>
              <p className="testimonial-text">{t.text}</p>
              <p className="author">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
      <br/><br/>
      <div className="cta-section">
        <h1 className="cta-title">Your link building solution awaits!</h1>
        <p className="cta-subtitle">
          LinkUp gives you everything you need to scale your rankings efficiently – DIY or fully managed.
        </p>
        <div className="cta-buttons">
          <a className="cta-primary"><Link to="/register">
            Join Now & Start Building Links →
          </Link></a>
          <a className="cta-secondary"><Link to="/contact">
            Questions? Get in touch →
          </Link></a>
        </div>
      </div>
    </>
  );
};

export default Banner;
