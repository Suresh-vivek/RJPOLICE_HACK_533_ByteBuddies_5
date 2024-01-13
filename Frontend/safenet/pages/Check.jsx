import "./Check.css";

import React, { useState } from "react";
import CheckIllus from "../src/assets/check_illus.png";
import xmljs from "xml-js";
import LoadingAnimation from "../components/LoadingAnimation";

function Check() {
  const [url, setUrl] = useState("");
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const extractValue = (object, property) => {
    return object && object[property] && object[property]._text;
  };

  const formatDate = (timestamp) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(timestamp).toLocaleDateString(undefined, options);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Make API request
    try {
      const apiKey = "at_tdBIw3lFoxsQnM3X0KicIuFyIcCmd";
      const apiUrl = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${apiKey}&domainName=${url}`;

      const response = await fetch(apiUrl);
      const data = await response.text();

      // Parse XML to JavaScript object using xml-js
      const result = xmljs.xml2js(data, { compact: true });

      const extractedData = {
        name: extractValue(result.WhoisRecord.registrant, "name") || "",
        organization:
          extractValue(result.WhoisRecord.registrant, "organization") || "",
        country: extractValue(result.WhoisRecord.registrant, "country") || "",
        telephone:
          extractValue(result.WhoisRecord.registrant, "telephone") || "",
        email: extractValue(result.WhoisRecord.registrant, "email") || "",
        createdDate:
          formatDate(extractValue(result.WhoisRecord, "createdDate")) || "",
        expiresDate:
          formatDate(extractValue(result.WhoisRecord, "expiresDate")) || "",
      };
      // Set the extracted data in state
      setApiResponse(extractedData);
    } catch (error) {
      console.error("Error fetching data from API:", error);
      setApiResponse(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="check-outer" id="check">
      {/* Check Illustration */}
      <div className="check-illus">
        <img src={CheckIllus} alt="check-illus" className="" />
      </div>

      <div className="check-content">
        <div className="check-text">
          <div className="check-heading">
            Wondering about the credibility of a website?
          </div>
          <div className="check-para">
            Suppose you saw an ad for an e-commerce website on social media, and
            you're interested in making a purchase but unsure if it's genuine.
            Fear not! Utilize our Check tool to ensure the authenticity of any
            URL. Simply input the website address, and we'll provide you with a
            comprehensive analysis. Trust your online experience with
            confidence!
          </div>

          <div className="check-form">
            <form className="check-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  autoComplete="off"
                  name="name"
                  required
                  className="iname"
                  placeholder="Enter URL"
                  id="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>

              <button type="submit" className="check-btn">
                Check
              </button>
            </form>
          </div>

          {loading ? (
            <div className="loading-animation">
              {" "}
              <LoadingAnimation />
            </div>
          ) : (
            apiResponse && (
              <div>
                <div>
                  <div className="domain"> Domain Information</div>

                  <div className="extracted-data">
                    <div className="data-outer">
                      <span className="data"> Name</span>{" "}
                      <span className="value">{apiResponse.name} </span>
                    </div>

                    <div className="data-outer">
                      <span className="data">Organization</span>{" "}
                      <span className="value">{apiResponse.organization} </span>
                    </div>

                    <div className="data-outer">
                      <span className="data">Country</span>{" "}
                      <span className="value">{apiResponse.country} </span>
                    </div>

                    <div className="data-outer">
                      <span className="data">Phone</span>{" "}
                      <span className="value">{apiResponse.telephone}</span>
                    </div>

                    <div className="data-outer">
                      <span className="data">Created Date:</span>{" "}
                      <span className="value">{apiResponse.createdDate}</span>
                    </div>

                    <div className="data-outer">
                      <span className="data">Expires Date:</span>{" "}
                      <span className="value">{apiResponse.expiresDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Check;
