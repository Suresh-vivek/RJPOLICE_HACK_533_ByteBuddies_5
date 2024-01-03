import React, { useState } from "react";
import data from "../Data/CustomerCare.json"; // Import your JSON data
import "./Search.css";

function Search() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedInstitution, setSelectedInstitution] = useState("");
  const [filteredHelplines, setFilteredHelplines] = useState([]);

  const categories = Object.keys(data);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedInstitution("");
  };

  const handleInstitutionChange = (institution) => {
    setSelectedInstitution(institution);
  };

  const handleSearch = () => {
    const result =
      selectedCategory && selectedInstitution
        ? data[selectedCategory].filter(
            (item) => item.institution === selectedInstitution
          )
        : data[selectedCategory];
    setFilteredHelplines(result.map((item) => item.helplines).flat());
  };

  const handleClear = () => {
    setSelectedCategory("");
    setSelectedInstitution("");
    setFilteredHelplines([]);
  };

  return (
    <div className="search-container">
      <div className="search">
        <label className="category">
          Select Category:
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="category-select"
          >
            <option value="">Select</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        {selectedCategory && (
          <label className="category">
            Select Institution:
            <select
              value={selectedInstitution}
              onChange={(e) => handleInstitutionChange(e.target.value)}
              className="category-select"
            >
              <option value="">Select</option>
              {data[selectedCategory].map((item) => (
                <option key={item.institution} value={item.institution}>
                  {item.institution}
                </option>
              ))}
            </select>
          </label>
        )}

        <button onClick={handleSearch} className="search-button">
          Search
        </button>
        <button onClick={handleClear} className="clear-button">
          Clear
        </button>
      </div>

      <div>
        {filteredHelplines.length > 0 && (
          <div>
            <span className="result">
              Helpline Number :{" "}
              <span className="helplines">{filteredHelplines.join(", ")}</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
