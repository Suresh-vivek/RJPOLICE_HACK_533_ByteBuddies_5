import React, { useState } from "react";

const SocialMediaChecker = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);
  const [error, setError] = useState(null);

  const getSocialMediaProfiles = async () => {
    try {
      // Use the proxy server endpoint to avoid CORS issues
      const proxyUrl = `http://localhost:3001/api/proxy?url=${encodeURIComponent(
        inputUrl
      )}`;
      const response = await fetch(proxyUrl);
      const data = await response.json();

      // Extract social media links from the data
      const links = Array.isArray(data) ? data : [];
      setSocialMediaLinks(links.length > 0 ? links : []);
      setError(null);
    } catch (error) {
      setSocialMediaLinks([]);
      setError(`Error retrieving social media profiles: ${error.message}`);
    }
  };

  return (
    <div>
      <label>
        Enter Website URL:
        <input
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
        />
      </label>
      <button onClick={getSocialMediaProfiles}>Check Social Media</button>

      {socialMediaLinks.length > 0 ? (
        <div>
          <p>Social media profiles for {inputUrl}:</p>
          <ul>
            {socialMediaLinks.map((link, index) => (
              <li key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>{error || "No social media profiles found."}</p>
      )}
    </div>
  );
};

export default SocialMediaChecker;
