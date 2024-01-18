import "./Feedback.css";

import React, { useState } from "react";
import Typed from "react-typed";
import Name1 from "../src/assets/Name.png";
import Name2 from "../src/assets/name2.png";
import Email1 from "../src/assets/Email.png";
import Email2 from "../src/assets/email2.png";

function Feedback() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Step 1: Send data to Formspree for email sending
      const formSpreeResponse = await fetch("https://formspree.io/f/mqkrkpen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: event.target.name.value,
          email: event.target.email.value,
          maliciousInput: event.target.maliciousInput.value,
          message: event.target.message.value,
        }),
      });

      const formSpreeData = await formSpreeResponse.json();

      if (formSpreeData.success) {
        // Handle success, e.g., show a success message for Formspree
        console.log("Formspree email sent successfully!");
      } else {
        // Handle failure, e.g., show an error message for Formspree
        console.error("Formspree email sending failed:", formSpreeData.message);
      }

      // Step 2: Save data to MongoDB
      const mongoDBResponse = await fetch(
        "http://localhost:3001/submit-feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: event.target.name.value,
            email: event.target.email.value,
            maliciousInput: event.target.maliciousInput.value,
            message: event.target.message.value,
          }),
        }
      );

      const mongoDBData = await mongoDBResponse.json();

      if (mongoDBData.success) {
        // Handle success, e.g., show a success message for MongoDB
        console.log("Feedback data saved to MongoDB successfully!");
      } else {
        // Handle failure, e.g., show an error message for MongoDB
        console.error("MongoDB data saving failed:", mongoDBData.message);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  const [isNameFocused, setNameFocused] = useState(false);
  const [isEmailFocused, setEmailFocused] = useState(false);
  return (
    <div className="feed-outer" id="feedback">
      <div className="feed-left">
        <div className="heading1">Share Your</div>
        <div className="heading1" id="heading2">
          <Typed
            strings={["Feedback", "Experiences"]}
            typeSpeed={150}
            backSpeed={100}
            loop
          />
        </div>

        <div className="header-para">
          <span className="para-text">
            Your insights shape our defense against online threats. Whether
            you've encountered a scam, identified a potential threat, or have
            suggestions to strengthen our platform, we value your feedback.
            Together, let's build a safer online community.
          </span>
        </div>
      </div>

      <div className="feed-right">
        <div className="feed-form-outer">
          <div>
            <form
              className="Feed-form"
              action="https://formspree.io/f/mqkrkpen"
              method="POST"
            >
              <span className="field-name"> Name</span>

              <div className="input-group">
                <input
                  type="text"
                  autoComplete="off"
                  name="name"
                  required
                  className="iname"
                  onFocus={() => setNameFocused(true)}
                  onBlur={() => setNameFocused(false)}
                />

                <div className="icon">
                  <img src={isNameFocused ? Name1 : Name2} alt="Icon" />
                </div>
              </div>

              <div className="space"></div>

              <span className="field-name"> Email</span>

              <div className="input-group">
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  required
                  className="iemail"
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                />

                <div className="icon">
                  <img src={isEmailFocused ? Email2 : Email1} alt="Icon" />
                </div>
              </div>

              <div className="space"></div>

             

              <div className="space"></div>

              <span className="field-name"> Your Feedback</span>

              <div>
                <textarea
                  type="text"
                  placeholder="Please write your feedback"
                  autoComplete="off"
                  name="message"
                  className="input-ta"
                  required
                />
              </div>
              <div className="space"></div>

              <button type="submit" className="submit-button">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
