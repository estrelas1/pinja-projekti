import { useState } from 'react'

import './App.css'

const App = () => {
  const [consultants, setConsultants] = useState([
    {
      name: "Matti Meikäläinen",
      education: "Diplomi-insinööri, Tietotekniikka",
      graduationYear: 2015,
      certifications: ["AWS Certified Solutions Architect", "Scrum Master"],
      technologies: ["React", "Node.js", "AWS", "Docker"],
      experienceYears: 8
    },
    {
      name: "Anni Konsultti",
      education: "Insinööri, Ohjelmistotekniikka",
      graduationYear: 2018,
      certifications: ["Azure Developer Associate", "Kubernetes Certified Administrator"],
      technologies: ["Java", "Spring Boot", "Kubernetes", "Azure"],
      experienceYears: 8
    },
    {
      name: "Teemu Tuotekehittäjä",
      education: "Kandidaatti, Ohjelmistotekniikka",
      graduationYear: 2020,
      certifications: ["Oracle Java SE 11 Developer"],
      technologies: ["Java", "Angular", "MySQL"],
      experienceYears: 3
    },
  ]);

  return (
    <div className="App">
      <h1>Konsulttilista</h1>
      <div className="consultant-list">
        {consultants.map((consultant, index) => ( // map: consultants-taulukon jokainen jäsen (konsultti) käydään läpi, ja jokaisesta jäsenestä luodaan oma div-elementti. / lisätään jokaiselle kortille avain (attribute key={index}), joka auttaa Reactia seuraamaan, mitkä elementit muuttuvat, lisätään tai poistetaan.
          <div className="consultant-card" key={index}> 
            <h2>{consultant.name}</h2>
            <p><strong>Koulutus:</strong> {consultant.education} ({consultant.graduationYear})</p>
            <p><strong>Sertifikaatit:</strong> {consultant.certifications.join(", ")}</p>
            <p><strong>Teknologiat:</strong> {consultant.technologies.join(", ")}</p>
            <p><strong>Kokemusvuodet:</strong> {consultant.experienceYears}</p>
          </div> // join: Muuntaa taulukon yhdeksi merkkijonoksi, jossa sanat erotellaan pilkuilla.
        ))}
      </div>
    </div>
  );
};

export default App
