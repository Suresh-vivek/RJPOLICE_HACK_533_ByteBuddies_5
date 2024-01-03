import React from "react";
import "./Resources.css";
import Navbar from "../components/Navbar";
import Cyber from "../src/assets/cyber.png";
import Educational from "../src/assets/Educational.png";
import Additional from "../src/assets/Additional.png";
import Customer from "../src/assets/Customer.png";
import { Link } from "react-router-dom";
function Resources() {
  return (
    <div className="outer- resources">
      <Navbar />

      <div className="cyber-bg">
        <img src={Cyber} alt="cyber" className="cyber" />
      </div>

      <div className="rbackground"></div>

      <div className="rcard-outer">
        <div className="rcards">
          <div className="rcard-image">
            <img src={Educational} alt="educational" className="rimage" />
          </div>

          <div className="rtitle">Educational Resources</div>
          <span className="rpara">
            Empower yourself with essential knowledge through our comprehensive
            cybersecurity education hub.
          </span>

          <div className="rbutton">
            <span className="rbtext">Explore</span>
          </div>
        </div>

        <div className="rcards">
          <div className="rcard-image">
            <img src={Additional} alt="additional" className="rimage" />
          </div>

          <div className="rtitle">Additional Resources</div>
          <span className="rpara">
            Enhance your online safety toolbox with our curated collection of
            essential resources.
          </span>

          <div className="rbutton" id="contacts">
            <span className="rbtext">Explore</span>
          </div>
        </div>

        <div className="rcards">
          <div className="rcard-image">
            <img src={Customer} alt="customer" className="rimage" />
          </div>

          <div className="rtitle">Customer Care Contacts</div>
          <span className="rpara">
            Connect confidently with verified national customer care contacts
            for reliable support.
          </span>

          <Link to="customer-care">
            <div className="rbutton" id="contacts">
              <span className="rbtext">Explore</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Resources;
