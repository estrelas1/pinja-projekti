import React from "react";
import "./ConsultantFilter.css";

const ConsultantFilter = ({ educationOptions, certificationOptions, onEducationFilterChange, onCertificationFilterChange }) => {
  return (
    <div className="consultant-filter">
      <label htmlFor="education-select">Suodata koulutuksen perusteella:</label>
      <select
        id="education-select"
        onChange={(e) => onEducationFilterChange(e.target.value)}
      >
        <option value="">Kaikki koulutukset</option>
        {educationOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="certification-select">Suodata sertifikaattien perusteella:</label>
      <select
        id="certification-select"
        onChange={(e) => onCertificationFilterChange(e.target.value)}
      >
        <option value="">Kaikki sertifikaatit</option>
        {certificationOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ConsultantFilter;