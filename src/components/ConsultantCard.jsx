import React from 'react';
import './ConsultantCard.css';

const ConsultantCard = ({ consultant, onEdit }) => {
  return (
    <div className="consultant-card">
      <h2>{consultant.name}</h2>
      <p>
        <strong>Koulutus:</strong> {consultant.education} ({consultant.graduationYear})
      </p>
      <p>
        <strong>Sertifikaatit:</strong> {consultant.certifications.join(', ')}
      </p>
      <p>
        <strong>Teknologiat:</strong> {consultant.technologies.join(', ')}
      </p>
      <p>
        <strong>Kokemusvuodet:</strong> {consultant.experienceYears}
      </p>
      <button onClick={() => onEdit(consultant)}>Muokkaa</button>
    </div>
  );
};

export default ConsultantCard;