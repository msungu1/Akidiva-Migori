import React from "react";
import "./Aboutus.css";
import hosi36 from './../../assets/hosi36.jpg';
import hosi21 from './../../assets/hosi21.jpg';
import hosi20 from './../../assets/hosi20.jpg';
import hosi16 from './../../assets/hosi16.jpg';
import hosi29 from './../../assets/hosi29.jpg';
import hosi37 from './../../assets/hosi37.jpg';
import hosi30 from './../../assets/hosi30.jpg';
import hosi13 from './../../assets/hosi13.jpg';
import hosi26 from './../../assets/hosi26.jpg';
import hosi18 from './../../assets/hosi18.jpg';
import hosi34 from './../../assets/hosi30.jpg';
import private1 from './../../assets/private1.jpg';
import lab3 from './../../assets/lab3.jpg';
import hosi17 from './../../assets/hosi17.jpg';
import lab2 from './../../assets/lab2.jpg';
import hosi19 from './../../assets/hosi19.jpg';








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
        <div className="container item3">
          <h2>Our Team</h2>
          <div className="team">
            <div className="grids itemone">
              <div className="imagess">
              <img src={hosi29} alt="" />

              </div>
            </div>
            <div className="grids itemtwo">
              <div className="imagess">
                <img src={hosi20} alt="" />
              </div>
            </div>

            <div className="grids itemthree">
              <div className="imagess">
              <img src={hosi16} alt="" />

              </div>
            </div>

            <div className="grids itemfour">
              <div className="imagess">
              <img src={hosi21} alt="" />
 
              </div>
            </div>

            <div className="grids itemfive">
              <div className="imagess">
              <img src={hosi37} alt="" />

              </div>
            </div>

            <div className="grids itemsix">
              <div className="imagess">
              <img src={hosi30} alt="" />

              </div>
            </div>

          </div>
        </div>

        <div className="facilities">
          <h2>OUR FACILITIES AND SERVICES</h2>
          <div className="facility">
            <div className="facilityimg">
              <h3>Outpatients</h3>
 <img src={hosi13} alt="" />
            </div>

            <div className="facilityimg">
              <h3></h3>
 <img src={hosi26} alt="" />
            </div>

            <div className="facilityimg">
              <h3></h3>
 <img src={hosi18} alt="" />
            </div>

            <div className="facilityimg">
              <h3></h3>
 <img src={hosi34} alt="" />
            </div>

            <div className="facilityimg">
              <h3></h3>
 <img src={private1} alt="" />
            </div>

            <div className="facilityimg">
              <h3></h3>
 <img src={lab3} alt="" />
            </div>

            <div className="facilityimg">
              <h3></h3>
 <img src={hosi17} alt="" />
            </div>

            <div className="facilityimg">
              <h3></h3>
 <img src={lab2} alt="" />
            </div>

            <div className="facilityimg">
              <h3></h3>
 <img src={hosi19} alt="" />
            </div>

            <div className="facilityimg">
              <h3></h3>
 <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Aboutus;
