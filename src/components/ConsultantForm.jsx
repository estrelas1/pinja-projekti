import React, { useState } from 'react';
import './ConsultantForm.css';

const ConsultantForm = ({ consultant, onSave, onCancel }) => {
  const [formState, setFormState] = useState(consultant);

  const handleChange = (field, value) => { // Päivittää lomakkeen tilaa, kun käyttäjä muuttaa jotakin kenttää. (kentän nimi field ja uusi arvo value tallennetaan formState-tilaan)
    setFormState({
      ...formState, // varmistaa, että muut kentät säilyvät ennallaan, kun vain yksi kenttä päivitetään
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // estää sivun uudelleenlatauksen kun tallennetaan
    onSave(formState);
  };

  return (
    <form className="consultant-form" onSubmit={handleSubmit}>
      <label>
        Nimi:
        <input
          type="text"
          value={formState.name} // näyttää nykyisen arvon
          onChange={(e) => handleChange('name', e.target.value)}
        />
      </label>
      <label>
        Koulutus:
        <input
          type="text"
          value={formState.education}
          onChange={(e) => handleChange('education', e.target.value)}
        />
      </label>
      <label>
        Valmistumisvuosi:
        <input
          type="number"
          value={formState.graduationYear}
          onChange={(e) => handleChange('graduationYear', parseInt(e.target.value, 10))}
        />
      </label>
      <label>
        Sertifikaatit (pilkuilla erotettuna):
        <input
          type="text"
          value={formState.certifications.join(', ')}
          onChange={(e) =>
            handleChange(
              'certifications',
              e.target.value.split(',').map((cert) => cert.trim())
            )
          }
        />
      </label>
      <label>
        Teknologiat (pilkuilla erotettuna):
        <input
          type="text"
          value={formState.technologies.join(', ')}
          onChange={(e) =>
            handleChange(
              'technologies',
              e.target.value.split(',').map((tech) => tech.trim())
            )
          }
        />
      </label>
      <label>
        Kokemusvuodet:
        <input
          type="number"
          value={formState.experienceYears}
          onChange={(e) => handleChange('experienceYears', parseInt(e.target.value, 10))}
        />
      </label>
      <button type="submit">Tallenna</button>
      <button type="button" onClick={onCancel}>Peruuta</button>
    </form>
  );
};

export default ConsultantForm;