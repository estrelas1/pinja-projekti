import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ConsultantCV from './ConsultantCV';
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

      <button className="consultant-card-button" onClick={() => onEdit(consultant)}>Muokkaa</button>
      
      <PDFDownloadLink // PDF-latauspainike
        document={<ConsultantCV consultant={consultant} />}
        fileName={`${consultant.name}_CV.pdf`}
      >
        {({ loading }) => (
          <button className="download-cv-button">
            {loading ? 'Luodaan CV:tä...' : 'Lataa CV'}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default ConsultantCard;