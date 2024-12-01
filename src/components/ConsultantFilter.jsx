import React from "react";
import "./ConsultantFilter.css";

const ConsultantFilter = ({ 
  educationOptions, 
  certificationOptions, 
  selectedCertifications,
  onEducationFilterChange, 
  onCertificationFilterChange 
}) => {
  const handleCertificationChange = (certification) => {
    onCertificationFilterChange(certification);
  };

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

      <fieldset className="certification-filter">
        <legend>Suodata sertifikaattien perusteella:</legend>
        {certificationOptions.map((option) => (
          <div key={option}>
            <label>
              <input
                type="checkbox"
                value={option}
                checked={selectedCertifications.includes(option)}
                onChange={() => handleCertificationChange(option)}
              />
              {option}
            </label>
          </div>
        ))}
      </fieldset>
    </div>
  );
};

export default ConsultantFilter;