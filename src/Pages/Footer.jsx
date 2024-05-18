import React from 'react';
import'./Footer.css';
function Footer() {

    return(
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>If you have any questions, feel free to reach out.</p>
          <button className="contact-button">Contact Us</button>
        </div>
        <div className="footer-section">
          <h2>About Us</h2>
          <p>Learn more about our money manager app.</p>
          <button className="about-button">About Us</button>
        </div>
        <div className="footer-section">
          <h2>Products</h2>
          <ul>
            <li><a href="/products">View All Apps</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/pricing">Pricing</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Resources</h2>
          <ul>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </div>
      </div>
    </footer>
    
)
}
export default Footer