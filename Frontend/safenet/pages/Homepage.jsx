import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "./Homepage.css";
import About from "./About";
import Feedback from "../components/Feedback";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Feedback />
    </div>
  );
}

export default Homepage;
