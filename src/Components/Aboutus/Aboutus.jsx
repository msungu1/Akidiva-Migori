import React from "react";
import "./Aboutus.css";
import hosi36 from './../../assets/hosi36.jpg';


function Aboutus() {
  return (
    <div className="aboutus">
      <div className="navbar">
        <ul>
          <h1>About Us</h1>
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

      <div className="containers">
        <div className="container item1 ">
          <h2>ABOUT HOSPITAL</h2>
          <span className="paragraph">
            St. Akidiva Memorial Hospital is a leading Level 4 healthcare
            facility located in Migori, Namba Junction. Committed to offer
            comprehensive services where innovation and teaching are intergral
            to care.
          </span>

          <div className="mission">
            <h2>Mission</h2>
            <p>
              Committed to offer comprehensive services where innovation and
              teaching are intergral to care.
            </p>
          </div>

          <div className="vision">
            <h2>Vision</h2>
            <p>
              To be the regional destination provider of innovative and complex
              care.
            </p>
          </div>
        </div>
        <div className="container item2">
          <div className="image">
            <img src={hosi36} alt="" />
          </div>
          <div className="services">
          <h3>Our Services</h3>
    <ul>
      <li>Outpatient & Inpatient Care</li>
      <li>Maternity & Child Care</li>
      <li>Surgical Procedures</li>
      <li>Laboratory Diagnostics</li>
      <li>Pharmacy Services</li>
    </ul>
  </div>
          </div>
        </div>
        <div className="container item3"></div>
      </div>
    
  );
}

export default Aboutus;
