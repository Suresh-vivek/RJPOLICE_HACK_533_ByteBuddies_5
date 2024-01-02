import "./About.css";

import React from "react";
import Awareness from "../src/assets/awareness.png";
import Community from "../src/assets/comunity.png";
import Resource from "../src/assets/resources.png";
import Feed from "../src/assets/feedback.png";
import Exten from "../src/assets/extension.png";
import AboutCard from "../components/AboutCard";
import ExtensionIllus from "../src/assets/extension_illus.png";
import PrimaryButton from "../components/PrimaryButton";

function About() {
  return (
    <div className="outer-about" id="about">
      <div className="about-heading">Our Mission</div>
      <div className="about-para">
        <span className="aboutpara">
          At <span id="safe">SafeNet</span>, we strive to create a safer online
          environment by leveraging cutting-edge technology to detect and combat
          fraud websites, fake advertisements, and deceptive customer care
          numbers.
        </span>
      </div>

      <div className="about-cards">
        <AboutCard
          image={Awareness}
          heading="Awareness"
          text="Uncover the secrets of identifying fake websites and scams. Arm yourself with knowledge to make informed decisions online."
        />

        <AboutCard
          image={Resource}
          heading="Resources"
          text="Access our regularly updated fraud website list and verified state and national customer care contacts for the latest information and authentic support channels."
        />

        <AboutCard
          image={Feed}
          heading="Feedback"
          text="Share your experiences, report scams, and contribute to building a stronger defense against cyber threats."
        />
        <AboutCard
          image={Exten}
          heading="Extension"
          text="Learn about our innovative browser extension designed to scan websites and validate customer care numbers in real-time."
        />

        <AboutCard
          image={Community}
          heading="Community"
          text="Discover real stories within our community, sharing experiences, reporting scams, and collectively building a stronger defense against cyber threats."
        />
      </div>

      <div className="extension">
        <div className="ext-text">
          <div className="ext-heading">
            Ways to Secure Yourself from Online Frauds
          </div>
          <div className="ext-para">
            Explore the power of <span id="safe">SafeNet</span>, our innovative
            browser extension designed to enhance your online security. SafeNet
            employs advanced technology, scanning website domains and SSL
            certificates, cross-referencing them with real and fake databases.
            If not found in either, it further scrutinizes the page content
            using NLP algorithms to detect anomalies and promptly reports
            potential threats to the user. Take control of your online safety
            effortlessly with SafeNet.
          </div>

          <div className="ext-button">
            <PrimaryButton text="Get Extension" />
          </div>
        </div>

        <img src={ExtensionIllus} alt="extension-illus" className="ext-image" />
      </div>
    </div>
  );
}

export default About;
