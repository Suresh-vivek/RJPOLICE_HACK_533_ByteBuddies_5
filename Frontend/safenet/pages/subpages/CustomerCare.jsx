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
      <div className="chead">National Cyber Crime Helpline Number : <span className="chead" id="cval">1930 , 155260
</span> </div>
      <Search />
    </div>
  );
}

export default CustomerCare;
