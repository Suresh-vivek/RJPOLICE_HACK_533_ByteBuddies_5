// Stories.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Stories.css";
import About from "./About";
import FraudCard from "../components/FraudCard";

function Stories() {
  const [selectedSection, setSelectedSection] = useState("articles");

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const [fraudsData, setFraudsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from your backend or use some library like axios
      const response = await fetch(
        "http://localhost:3001/api/timesofindia_online_frauds"
      );
      const data = await response.json();
      setFraudsData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="choose-story">
        <span
          className={`section ${selectedSection === "articles" && "selected"}`}
          id="articles"
          onClick={() => handleSectionClick("articles")}
        >
          Online Articles
        </span>
        <span
          className={`section ${selectedSection === "stories" && "selected"}`}
          id="stories"
          onClick={() => handleSectionClick("stories")}
        >
          User's Stories
        </span>
      </div>

      {selectedSection === "articles" && (
        <div className="fraud-cards-container">
          {fraudsData.map((fraud, index) => (
            <FraudCard key={index} {...fraud} />
          ))}
        </div>
      )}

      {selectedSection === "stories" && (
        <FraudCard
          imageLink=
            "https://static.toiimg.com/thumb/imgsize-123456,msid-105725745,width-300,resizemode-4/105725745.jpg"
          
          headline="Over Rs 22 crore duped in 5,785 Cyber crimes in Bhopal this year"
          summary="Bhopal cyber-crime branch received 5,800 cyber-crime complaints this year, with criminals siphoning over Rs 22.62 crore from residents. Miscreants may"
          link="https://timesofindia.indiatimes.com/city/bhopal/over-rs-22-crore-duped-in-5785-cyber-crimes-in-bhopal-this-year/articleshow/106224603.cms"
        />
      )}
    </div>
  );
}

export default Stories;
