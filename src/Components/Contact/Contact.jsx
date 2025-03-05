import React from "react";
import "./Contact.css";
import location from '../../assets/location.jpg';

function Contact() {
  return (
    <div className="contact-form">
      {/*=================== Navbar Section ==============================*/}
      <div className="navbar">
        <ul>
          <h1>Contact Us</h1>
          <li>Contact</li>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <div className="icon1">
            <label htmlFor="search-input" className="search-label">
              <i className="fa fa-search"></i>
            </label>
            <input type="text" id="search-input" placeholder="Search..." />
          </div>
        </ul>
      </div>

      {/* ================= Contact Left Section ===================== */}
      <div className="contact-left">
        {/* Form Container */}
        <div className="form-container1">
          <h2>Contact</h2>

          {/* Input Fields */}
          <div className="inputs">
            <input type="text" id="second-name" placeholder="Enter your first name" className="input-field" />
          </div>

          <div className="inputs">
            <input type="text" id="second-name" placeholder="Enter your second name" />
          </div>

          <div className="inputs">
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">Submit</button>
        </div>

        {/* Additional Information */}
        <div className="icon2">
          <i className="fas fa-user-circle"></i>
          <h2>Visit Our Location</h2>
          <div className="location">
            <img src={location} alt="" />
            <span>
              St. Akidiva Memorial Hospital <br />
              P.O. Box 57, Migori, Kenya
            </span>
          </div>
          <br />
          <br />
          <h3>Find Directions</h3>
          <br />

          {/* Button to Open Google Maps in New Tab */}
          <button
            onClick={() => window.open("https://maps.app.goo.gl/vBKQmfjFHdiZMu6i6")}
          >
            View Map
          </button>
          <br />
          <h3>FAQs</h3>
          <p>
            Lorem, ipsum dolor sit amet <br />
            consectetur adipisicing elit. <br />
            Rerum, facilis laudantium? <br />
            Reiciendis consequuntur quo facilis?
          </p>
        </div>
      </div>

      {/* ================= Contact Right Section ===================== */}
      <div className="contact-right">
        <div className="image1">
        </div>
        <div className="services">
          <div className="grid item1">
            <h3>You Can Find Us On</h3>
            <div className="icon-images">
              <div className="image">
                <i className="fa-brands fa-twitter fa-2x"></i>
                <span>St.Akidiva Hospital</span>
              </div>
              <div className="image">
                <i className="fa-brands fa-facebook fa-2x"></i>
                <span>St.Akidiva Hospital</span>
              </div>
              <div className="image">
                <i className="fa-brands fa-tiktok fa-2x"></i>
                <span>St.Akidiva Hospital</span>
              </div>
              <div className="image">
                <i className="fa-brands fa-instagram fa-2x"></i>
                <span>St.Akidiva Hospital</span>
              </div>
            </div>
          </div>

          <div className="grid">
            <h3>You Can Reach Us On</h3>
            <div className="icon-images">
              <div className="image">
                <i className="fa-solid fa-phone fa-2x"></i>
                <span>0713800378</span>
              </div>
              <div className="image" href="mailto: akidivarobert@gmail.com">
                <i className="fa-solid fa-envelope fa-2x"></i>
                <span>akidivarobert@gmsil.com</span>
              </div>
              <div className="image">
                <i className="fa-solid fa-location-dot fa-2x"></i>
                <span>
                  St. Akidiva Memorial Hospital <br />
                  P.O. Box 57, Migori, Kenya
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
