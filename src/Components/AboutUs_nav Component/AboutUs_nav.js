import React from "react";
import "./AboutUs_nav.css";
import { Link } from "react-router-dom";
import { FaMagic, FaLink, FaArrowUp, FaLinkedin } from "react-icons/fa";
import Main from "../../img/Main.jpg";

const leaders = [
  {
    name: "Kalin Karakehayov",
    title: "Investor, Founder of SEO.Domains",
    image: "/images/cartoon.png", // Replace with your image path
    linkedin: "#",
  },
  {
    name: "Miroslav Pavlov",
    title: "Investor, Affiliate Marketer for 12 years",
    image: "/images/Profile 2.png", // Replace with your image path
    linkedin: "#",
  },
  {
    name: "Minko Vasilev",
    title: "Investor, Founder of Eurocoders",
    image: "/images/Profile 3.png", // Replace with your image path
    linkedin: "#",
  },
  {
    name: "Miroslav Pavlov",
    title: "Investor, Affiliate Marketer for 12 years",
    image: "/images/Profile 1.jpg", // Replace with your image path
    linkedin: "#",
  },
  {
    name: "Miroslav Pavlov",
    title: "Investor, Affiliate Marketer for 12 years",
    image: "/images/Profile 4.png", // Replace with your image path
    linkedin: "#",
  },
  {
    name: "Miroslav Pavlov",
    title: "Investor, Affiliate Marketer for 12 years",
    image: "/images/Profile 5.png", // Replace with your image path
    linkedin: "#",
  },
];

const AboutUs_nav = () => {
  return (
    <>
      <br />
      <br />
      <section className="team-section">
        <h1>Meet the Experts Behind LinkUp’s Success!</h1>
        <p className="description">
          Our team of SEO professionals, outreach specialists, and link-building
          experts is committed to helping businesses and agencies scale with the
          most advanced tools, strategies, and services in the industry.
        </p>
        <Link to="/contact">
          <button className="cta-button">
            Want to work with us? Let’s talk! →
          </button>
        </Link>
      </section>

      <div className="background-wrapper">
        <div className="dashboard-container">
          {/* The rest of your dashboard JSX goes here (same as before) */}
        </div>
      </div>
      <br />
      <br />
      <section className="mission-section">
        <div className="mission-content">
          <h1>
            Our Mission: <br />
            Simplifying & Scaling Link <br />
            Building for Everyone
          </h1>
          <p className="subtitle">
            At LinkUp, we believe in making high-quality link-building effortless
            for businesses, agencies, and SEO professionals. Our mission is to:
          </p>
          <ul className="mission-list">
            <li>
              <span className="arrow">→</span> Eliminate the complexity of link
              building – from outreach to placements.
            </li>
            <li>
              <span className="arrow">→</span> Provide the most advanced tools &
              services to maximize SEO performance.
            </li>
            <li>
              <span className="arrow">→</span> Offer fully managed & DIY
              solutions that fit every strategy.
            </li>
          </ul>
        </div>
        <div className="mission-image-wrapper">
          <img src={Main} alt="Mission visual" className="mission-image" />
        </div>
      </section>
      <br />
      <br />
      <section className="values-section">
        <div className="value-card">
          <FaMagic className="value-icon" />
          <h3>Innovation</h3>
          <p>
            We set the standard in link-building innovation, offering the most
            advanced tools, AI-driven insights, and real-time tracking to help
            users stay ahead of the competition.
          </p>
        </div>

        <div className="value-card border-left">
          <FaLink className="value-icon" />
          <h3>Integrity</h3>
          <p>
            We manually vet every link, verify metrics, and ensure clear
            reporting, so clients can trust that every placement delivers real,
            lasting SEO value.
          </p>
        </div>

        <div className="value-card border-left">
          <FaArrowUp className="value-icon" />
          <h3>Excellence</h3>
          <p>
            From high-authority placements to dedicated account support, we
            prioritize quality, responsiveness, and superior SEO outcomes.
          </p>
        </div>
      </section>

      <section className="leadership-section">
        <h2>Meet the Leaders Driving LinkUp’s Success</h2>
        <p>
          Our leadership team consists of industry pioneers and digital
          marketing veterans with a proven track record of building
          multi-million dollar businesses, scaling SEO strategies, and
          revolutionizing link-building. Their expertise ensures that LinkUp
          remains at the forefront of cutting-edge link-building solutions.
        </p>
      </section>

      <section className="leadership-profiles">
        {leaders.map((leader, index) => (
          <div className="profile-card" key={index}>
            <img src={leader.image} alt={leader.name} />
            <h3>{leader.name}</h3>
            <p>{leader.title}</p>
            <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>
        ))}
      </section>
      <br />
      <br />
      <section className="career-section">
        <div className="career-overlay">
          <h2>Grow Your Career with LinkUp</h2>
          <p>
            Join a dynamic team shaping the future of link building. Work with
            industry leaders, sharpen your skills, and be part of a fast-growing
            company at the forefront of SEO innovation.
          </p>
          <button className="career-button">No Active Openings</button>
        </div>
      </section>
      <br />
      <br />
      <section className="platform-section">
        <h2>Scale Faster. Rank Higher. Build Smarter.</h2>
        <p>
          Don’t waste time with outdated link-building methods. LinkUp’s
          industry-leading platform gives you instant access to 130,000+
          pre-vetted placements, AI-powered insights, and fully managed
          solutions – all designed to boost your rankings effortlessly.
        </p>
        <div className="platform-buttons">
          <Link to="/register">
            <button className="explore-button">Explore our Platform →</button>
          </Link>
        </div>
        <br />
        <div className="platform-buttons">
          <Link to="/contact">
            <button className="talk-button">Talk to Us →</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutUs_nav;
