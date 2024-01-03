import "./CustomerCare.css";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";

import React from "react";

function CustomerCare() {
  return (
    <div>
      <Navbar />
      <div className="space1"></div>
      <div className="customer-text"> Customer Care / Helpline Numbers</div>
      <Search />
    </div>
  );
}

export default CustomerCare;
