import React from "react";
import "./ConsultantFilter.css";

const ConsultantFilter = ({ 
  educationOptions, 
  certificationOptions, 
  technologyOptions,
  selectedCertifications,
  selectedTechnologies,
  onEducationFilterChange, 
  onCertificationFilterChange,
  onTechnologyFilterChange
}) => {
  const handleCertificationChange = (certification) => {
    onCertificationFilterChange(certification);
  };
  const handleTechnologyChange = (technology) => {
    onTechnologyFilterChange(technology);
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
        <h3>Suodata sertifikaattien perusteella:</h3>
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

      <fieldset className="technology-filter">
        <h3>Suodata teknologioiden perusteella:</h3>
        {technologyOptions.map((option) => (
          <div key={option}>
            <label>
              <input
                type="checkbox"
                value={option}
                checked={selectedTechnologies.includes(option)}
                onChange={() => handleTechnologyChange(option)}
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