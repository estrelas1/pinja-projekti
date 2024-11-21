import { useState } from 'react';
import ConsultantList from './components/ConsultantList';
import './App.css';

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

  const [editingConsultant, setEditingConsultant] = useState(null); // editingConsultant on tila, joka kertoo, mikä konsultti on tällä hetkellä muokattavana. Sen arvo on joko null (ei muokkausta käynnissä) tai muokattavan konsultin tiedot

  const handleEdit = (consultant) => { // laittaa editingConsultant-tilaan valitun konsultin
    setEditingConsultant(consultant);
  };

  const handleSave = (updatedConsultant) => { // päivittää uudet tiedot
    setConsultants(
      consultants.map((consultant) =>
        consultant.name === updatedConsultant.name ? updatedConsultant : consultant
      )
    );
    setEditingConsultant(null); // tila on taas null
  };

  const handleCancel = () => {
    setEditingConsultant(null);
  };

  return (
    <div className="App">
      <h1>Konsulttilista</h1>
      <ConsultantList
        consultants={consultants}
        editingConsultant={editingConsultant}
        onEdit={handleEdit}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default App;
