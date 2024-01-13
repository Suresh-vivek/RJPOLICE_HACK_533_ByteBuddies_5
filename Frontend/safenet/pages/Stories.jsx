// Stories.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Stories.css";
import About from "./About";
import FraudCard from "../components/FraudCard";
import Search from "../components/Search";
import LoadingAnimation from "../components/LoadingAnimation";

function Stories() {
  const [selectedSection, setSelectedSection] = useState("articles");
  const [loading, setLoading] = useState(false);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const [fraudsData, setFraudsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // Fetch data from your backend or use some library like axios
      const response = await fetch(
        "http://localhost:3001/api/timesofindia_online_frauds"
      );
      const data = await response.json();
      setFraudsData(data);
      setLoading(false);
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


      {loading ?<div className="loader-animation"><LoadingAnimation/></div>:selectedSection === "articles" && (
        <div className="fraud-cards-container">
          {fraudsData.map((fraud, index) => (
            <FraudCard key={index} {...fraud} />
          ))}
        </div>
      )}
      

      {selectedSection === "stories" && <h1>Will be Implementing soon</h1>}
    </div>
  );
}

export default Stories;
