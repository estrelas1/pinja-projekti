import React from "react";
import "./ConsultantFilter.css";

const ConsultantFilter = ({ educationOptions, onFilterChange }) => {
  return (
    <div className="consultant-filter">
      <label htmlFor="education-select">Suodata koulutuksen perusteella:</label>
      <select
        id="education-select"
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="">Kaikki koulutukset</option>
        {educationOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ConsultantFilter;