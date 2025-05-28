import React from "react";
import "./ManagedAccounts.css";
import { Link } from "react-router-dom";
import Pro from '../../img/Pro.png';

const benefits = [
  {
    title: "We Follow Your Strategy & Requirements",
    desc: "Your goals first, with expert execution.",
  },
  {
    title: "Manual Link Selection & Verification",
    desc: "Every link is handpicked for maximum ranking impact.",
  },
  {
    title: "Full Order Management",
    desc: "No more tracking or follow-ups - we ensure smooth execution.",
  },
  {
    title: "Custom Outreach for Unique Backlink Needs",
    desc: "If the perfect site isn’t in our marketplace, we’ll find it for you.",
  },
  {
    title: "Dedicated Account Manager",
    desc: "A professional single point of contact dedicated to your growth.",
  },
  {
    title: "Scale Without the Headaches",
    desc: "Get as many backlinks as you need, without extra workload.",
  },
  {
    title: "No Team Required",
    desc: "Eliminate the hassle of hiring, training, and managing in-house SEO teams.",
  },
  {
    title: "100% Free Service – Only Pay for Links",
    desc: "No subscriptions, no hidden fees. (Min. $5k/mo budget required)",
  },
];

const steps = [
  {
    title: "Onboarding & Strategy Setup",
    description:
      "We define your strategy and requirements with you to create a tailored plan.",
    number: 1,
  },
  {
    title: "Manual Link Selection & Verification",
    description:
      "We manually verify websites to match your needs, ensuring real traffic and metrics.",
    number: 2,
  },
  {
    title: "Content Creation & Link Placement",
    description:
      "If needed, we handle content writing and place the orders for you.",
    number: 3,
  },
  {
    title: "Order Management & Link Verification",
    description:
      "We monitor every placement, ensuring your links go live as expected.",
    number: 4,
  },
  {
    title: "Guaranteed Link Placement & Replacements",
    description:
      "If a link gets rejected, we secure a high-quality replacement while meeting deadlines.",
    number: 5,
  },
  {
    title: "Live Order Tracking in Your Dashboard",
    description:
      "Monitor all placements, reports, and progress in real-time – 24/7, fully transparent.",
    number: 6,
  },
];

const ManagedAccounts = () => {
  return (
    <>
    <br />
    <br />
      <section className="managed-section">
        <div className="managed-content">
          <div className="text-content">
            <h1>
              Fully Managed Link Building –
              <br />
              <span className="highlight">Scale With Ease!</span>
            </h1>
            <p>
              Let us handle your link-building while you focus on business.
              <br />
              No more team management, manual vetting, or time-consuming
              outreach – we take care of everything for you.
            </p>
            <div className="button-group">
              <Link to="/contact"><button className="primary-btn">
                Let Us Build Your Backlinks →
              </button></Link>
              <Link to="/register"><button className="secondary-btn">To the Platform</button></Link>
            </div>
          </div>

   <div className="profile-container">
  {/* Stats section */}
  <div className="stats-section">
    <div className="stat-card domain-authority">
      <div className="gauge"></div>
      <p>56 / 100</p>
      <span>Domain authority</span>
    </div>
    <div className="stat-card domain-rating">
      <div className="gauge"></div>
      <p>91 / 100</p>
      <span>Domain rating</span>
    </div>
  </div>

  {/* Image section */}
  <img src={Pro} alt="Agent" className="profile-image" />
</div>


        </div>
      </section>

      <section className="benefits-section">
        <h2>Why choose a managed link building service?</h2>
        <p className="benefits-subtitle">
          Manually selecting links, tracking orders, and managing a full team
          takes time and resources. With our managed link building service, we
          take care of everything – following your strategy and requirements
          while adding manual verification on top to ensure you get the most
          juice!
        </p>
        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div key={index} className="benefit-item">
              <span className="checkmark">✔</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <section className="cta-section">
          <p className="cta-text">
            More rankings, less work. Let us build your backlinks while you
            scale.
          </p>
          <Link to="/contact"><button className="cta-button">
            Talk to an Expert <span className="arrow">→</span>
          </button></Link>
        </section>
      </section>

      <section className="managed-accounts-section">
        <h2>How do managed accounts work?</h2>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <div className="step-number">{step.number}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="benefits-container">
        <h1 className="benefits-title">
          Who Benefits from a Managed Link-Building Account?
        </h1>
        <div className="benefits-cards">
          <div className="card dark-card">
            <div className="icon">&#128100;</div>
            <h2>SEO Professionals & Consultants</h2>
            <p>
              Save time on manual site selection, outreach, and tracking - let
              our experts handle the heavy lifting.
            </p>
          </div>
          <div className="card light-card">
            <div className="icon">&#128188;</div>
            <h2>Businesses & Brands</h2>
            <p>
              Get high-quality backlinks without building an in-house team. We
              handle everything so you can focus on growth.
            </p>
          </div>
        </div>
      </div>
      <div className="benefits-cards">
        <div className="card light-card">
          <div className="icon">&#128227;</div> {/* Megaphone icon */}
          <h2>Marketing Agencies</h2>
          <p>
            Scale link-building without hiring extra staff or managing
            freelancers. Offer white-label services effortlessly.
          </p>
        </div>
        <div className="card dark-card">
          <div className="icon">&#127760;</div> {/* Globe icon */}
          <h2>Corporations & Enterprises</h2>
          <p>
            Scale high-volume link-building campaigns seamlessly, with full
            tracking and account management.
          </p>
        </div>
      </div>

      <div className="final-benefit-container">
        <div className="card dark-card full-width">
          <div className="icon">$</div>
          <h2>Affiliates & Niche Website Owners</h2>
          <p>
            Whether you’re in iGaming, Crypto, Finance, or any industry, we
            secure powerful backlinks without the manual work - perfect for
            medium to large budgets looking to scale fast.
          </p>
        </div>
        <div className="cta-button-container">
        <Link to="/register"> <button className="cta-button">Get your Managed Account Now →</button></Link>
        </div>
      </div>
      <br />
      <br />

      <div className="comparison-container">
        <h1>
          Managed Link Building vs DIY.
          <br />
          Which One Is for You?
        </h1>
        <p className="subtitle">
          Whether you prefer full control or a hands-off approach, see how a
          Managed Account compares to DIY link-building.
        </p>

        <div className="comparison-cards">
          <div className="comparison-card managed">
            <h2>Managed Link Building</h2>
            <hr />
            <div className="feature">
              <span className="icon">➕</span>
              <div>
                <strong>Time Efficiency</strong>
                <p>
                  No need to hire, train, or manage a team – every step is
                  handled.
                </p>
              </div>
            </div>
            <div className="feature">
              <span className="icon">➕</span>
              <div>
                <strong>No Overhead Costs</strong>
                <p>
                  No need for extra staff, outreach tools, or additional
                  management.
                </p>
              </div>
            </div>
            <div className="feature">
              <span className="icon">➕</span>
              <div>
                <strong>Manually Verified Links</strong>
                <p>
                  Each placement is checked for real traffic, authority, and SEO
                  impact.
                </p>
              </div>
            </div>
            <div className="feature">
              <span className="icon">➕</span>
              <div>
                <strong>Custom Outreach</strong>
                <p>
                  Not limited to pre-existing lists - new sites are sourced when
                  needed.
                </p>
              </div>
            </div>
            <div className="feature">
              <span className="icon">➕</span>
              <div>
                <strong>Scalable & Flexible</strong>
                <p>
                  Adapts to any strategy, from small campaigns to large-scale
                  link-building.
                </p>
              </div>
            </div>
            <div className="feature">
              <span className="icon">➕</span>
              <div>
                <strong>Seamless Management & Tracking</strong>
                <p>
                  Everything from outreach to placement and reporting is fully
                  streamlined.
                </p>
              </div>
            </div>
          </div>

          <div className="comparison-card diy">
            <h2>DIY Link Building</h2>
            <hr />
            <div className="feature">
              <span className="icon">➖</span>
              <div>
                <strong>Time-Consuming</strong>
                <p>
                  Requires hiring, training, and managing a team or spending
                  hours on outreach and tracking.
                </p>
              </div>
            </div>
            <div className="feature">
              <span className="icon">➖</span>
              <div>
                <strong>Higher Overhead Costs</strong>
                <p>
                  Subscription fees, outreach tools, and in-house staff costs
                  add up.
                </p>
              </div>
            </div>
            <div className="feature">
              <span className="icon">➖</span>
              <div>
                <strong>No Verification Safeguards</strong>
                <p>
                  Ensuring real traffic, authority, and link quality must be
                  done manually.
                </p>
              </div>
            </div>
            <div className="feature">
              <span className="icon">➖</span>
              <div>
                <strong>Limited Outreach Scope</strong>
                <p>
                  Relies on existing contacts or manual prospecting for new
                  websites.
                </p>
              </div>
            </div>
            <div className="feature">
              <span className="icon">➖</span>
              <div>
                <strong>Scaling Requires More Resources</strong>
                <p>
                  Growing link-building efforts means additional staff, tools,
                  and budget.
                </p>
              </div>
            </div>
            <div className="feature">
              <span className="icon">➖</span>
              <div>
                <strong>Complex Tracking & Management</strong>
                <p>
                  Multiple tools and manual processes are needed to track and
                  organize placements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-container">
        <h1>
          Why Struggle with Link Building?
          <br />
          Let Us Handle It for You!
        </h1>
        <p className="cta-subtext">
          Let our Managed Service handle your link building while you focus on
          growing your business. Get started today!
        </p>
        <div className="cta-buttons">
          <Link to="/contact"><button className="cta-button primary">Talk to an Expert →</button></Link>
          <Link to="/register"><button className="cta-button secondary">
            Explore our Platform Instead →
          </button></Link>
        </div>
      </div>
    </>
  );
};

export default ManagedAccounts;
