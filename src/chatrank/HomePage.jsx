import React from 'react';
import './HomePage.css';

export const HomePage = () => {
  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container navbar-container">
          <div className="navbar-logo">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8acb139-7102-413a-af1d-342fda0bdb85" 
              alt="MFour Logo" 
              className="logo"
            />
          </div>
          <div className="navbar-links">
            <a href="#platform" className="nav-link">Platform</a>
            <a href="#resources" className="nav-link">Resources</a>
            <a href="#enterprise" className="nav-link">Enterprise</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#sales" className="nav-link">Talk to Sales</a>
            <a href="#login" className="nav-link">Login</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Market Research Moving Fourward</h1>
            <p className="hero-description">
              Save time, eliminate consultants, & propel business insights with MFour Studio — where we unify survey, app, web, and location data — so you can understand consumer journeys as they happen.
            </p>
            <button className="cta-button">Get started for free</button>
          </div>
          <div className="hero-image">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf4b0af9-2ff8-4e8f-85ec-4576435c6264" 
              alt="Market Research Illustration" 
              className="hero-illustration"
            />
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="client-logos-section">
        <div className="container">
          <div className="logo-grid">
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23256117-b01b-4776-92a4-05ceb1d5d415" alt="Client Logos" className="client-logos-image" />
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="feature-cards-section">
        <div className="container">
          <h2 className="section-title">Cutting-edge data software at startup prices</h2>
          <p className="section-description">
            Until now, it's been impossible for small & mid-market businesses to access real consumer data
          </p>
          
          <div className="feature-cards-grid">
            <div className="feature-card blue-card">
              <h3 className="feature-card-title">Omnichannel Consumer Behaviors</h3>
              <p className="feature-card-description">
                Validated consumer app traffic, web traffic, & location traffic all in the same platform.
              </p>
            </div>
            
            <div className="feature-card black-card">
              <h3 className="feature-card-title">AI Survey Builder Tool</h3>
              <p className="feature-card-description">
                Build surveys instantly. Create surveys based on your consumer's behaviors.
              </p>
            </div>
            
            <div className="feature-card light-card">
              <h3 className="feature-card-title">The Best Consumer Panel</h3>
              <p className="feature-card-description">
                Tap into the feedback of the highest-rated mobile panel in the country.
              </p>
              <div className="panel-image">
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d597aedb-7f00-4d88-b702-bd8b8ec7b5eb" 
                  alt="Consumer Panel" 
                />
              </div>
            </div>
            
            <div className="feature-card blue-card">
              <h3 className="feature-card-title">Data Analysis Products</h3>
              <p className="feature-card-description">
                Effortlessly analyze your data to achieve the desired results on your terms.
              </p>
            </div>
          </div>
          
          <a href="#trial" className="free-trial-link">Start a free trial →</a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Loved by industry leaders</h2>
          
          <div className="testimonials-container">
            <button className="testimonial-nav-button prev">
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/995eabb8-acaf-488f-91c1-f86a44d9083f" 
                alt="Previous" 
              />
            </button>
            
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbe1f060-2889-461b-80fc-fe833d0f5d5b" 
                    alt="Five Stars" 
                    className="rating-stars"
                  />
                </div>
                <p className="testimonial-quote">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."
                </p>
                <div className="testimonial-author">
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cb80a5c-648a-46bb-a9b5-0c69f4e25e1b" 
                    alt="Julian Stranger" 
                    className="author-avatar"
                  />
                  <div className="author-info">
                    <h4 className="author-name">Julian Stranger</h4>
                    <p className="author-role">Research Analyst</p>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14b551bc-d9bd-494f-82e2-c97f0c6d8df9" 
                    alt="Five Stars" 
                    className="rating-stars"
                  />
                </div>
                <p className="testimonial-quote">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."
                </p>
                <div className="testimonial-author">
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4f221d7-e647-4ac7-b474-d1814badf727" 
                    alt="Ray Barbee" 
                    className="author-avatar"
                  />
                  <div className="author-info">
                    <h4 className="author-name">Ray Barbee</h4>
                    <p className="author-role">VP Market Research</p>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="testimonial-nav-button next">
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/995eabb8-acaf-488f-91c1-f86a44d9083f" 
                alt="Next" 
                className="flipped"
              />
            </button>
          </div>
          
          <div className="testimonial-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Level up against your competition</h2>
          <p className="section-description">
            From startups to Fortune 100 corporations, Studio is the go-to choice for professionals across the business spectrum.
          </p>
          
          <div className="categories-grid">
            <button className="category-button">Marketing/Advertising</button>
            <button className="category-button">Customer Experience</button>
            <button className="category-button">Public Relations</button>
            <button className="category-button">Product Development</button>
            <button className="category-button">Small Business</button>
            <button className="category-button">Global Analytics</button>
            <button className="category-button">Financial</button>
            <button className="category-button">Alternative Data</button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section">
        <div className="container">
          <div className="statistics-content">
            <h2 className="statistics-title">2.5 Billion</h2>
            <h3 className="statistics-subtitle">app, web & location events updated daily</h3>
            <p className="statistics-description">
              Continuous consumer discovery. Your consumers are always active, your research should be too.
            </p>
            <a href="#demo" className="demo-link">Book a demo →</a>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="feature-highlights-section">
        <div className="container">
          <div className="highlights-grid">
            <div className="highlight-card">
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2fc31329-9da2-45a5-8d76-3d5111755944" 
                alt="Top Apps" 
                className="highlight-image"
              />
              <h3 className="highlight-title">Top apps</h3>
              <p className="highlight-description">
                Effortlessly filter by specific customer demographics and discover top-ranked apps based on frequency usage.
              </p>
              <button className="highlight-cta">Try for free</button>
            </div>
            
            <div className="highlight-card">
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7717d892-c5c3-4d61-8536-c22cc080ce78" 
                alt="Top Websites" 
                className="highlight-image"
              />
              <h3 className="highlight-title">Top Websites</h3>
              <p className="highlight-description">
                See website traffic and built-in KPIs that track live changes in the data.
              </p>
              <button className="highlight-cta">Try for free</button>
            </div>
            
            <div className="highlight-card">
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48299e9e-f6a4-400f-9d4b-225886b512e1" 
                alt="Top Venues" 
                className="highlight-image"
              />
              <h3 className="highlight-title">Top Venues</h3>
              <p className="highlight-description">
                See where your customers spend time offline - With validated location data only on Studio.
              </p>
              <button className="highlight-cta">Try for free</button>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="closing-cta-section">
        <div className="container">
          <h2 className="closing-title">Understand the consumer journey</h2>
          <p className="closing-description">
            Save time, eliminate consultants, & propel business insights with MFour Studio — where we unify survey, app, web, and location data — so you can understand consumer journeys as they happen.
          </p>
          <button className="cta-button">Get started for free</button>
          <div className="closing-image">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a8f0efe-e7ff-4635-b751-67de3413131c" 
              alt="Consumer Journey Illustration" 
              className="journey-illustration"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-company">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8acb139-7102-413a-af1d-342fda0bdb85" 
              alt="MFour Logo" 
              className="footer-logo"
            />
            <p className="footer-contact">solutions@mfour.com</p>
            <p className="footer-contact">714 754 1234</p>
            <div className="social-icons">
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4db880f-5b1c-499e-9101-5efa3e3c86a0" 
                alt="Social Media Icons" 
                className="social-icons-image"
              />
            </div>
          </div>
          
          <div className="footer-links-container">
            <div className="footer-links-column">
              <h4 className="footer-column-title">Platform</h4>
              <ul className="footer-links">
                <li><a href="#explore">Explore Studio</a></li>
                <li><a href="#why">Why MFour</a></li>
                <li><a href="#tools">Research Tools</a></li>
                <li><a href="#products">Data Products</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4 className="footer-column-title">Solutions</h4>
              <ul className="footer-links">
                <li><a href="#usecase">Use Case</a></li>
                <li><a href="#gallery">Insights Gallery</a></li>
              </ul>
              
              <h4 className="footer-column-title enterprise-title">Enterprise</h4>
              <ul className="footer-links">
                <li><a href="#enterprise">Enterprise</a></li>
                <li><a href="#tracker">Omnitraffic Tracker</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4 className="footer-column-title">Resources</h4>
              <ul className="footer-links">
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#blogs">Blogs</a></li>
                <li><a href="#reports">Reports</a></li>
                <li><a href="#findings">Top Findings</a></li>
                <li><a href="#guides">Guides</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4 className="footer-column-title">Legal</h4>
              <ul className="footer-links">
                <li><a href="#subscribe">Subscribe</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#do-not-sell">Do Not Sell My Info</a></li>
                <li><a href="#terms">Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-copyright">
          <p>© 2023 MFour Mobile Research. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
