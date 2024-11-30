import { useState } from 'react';
import ConsultantList from './components/ConsultantList';
import ConsultantFilter from './components/ConsultantFilter';
import './App.css';

const App = () => {
  const [consultants, setConsultants] = useState([
    {
      id: 1,
      name: "Matti Meikäläinen",
      education: "Diplomi-insinööri, Tietotekniikka",
      graduationYear: 2015,
      certifications: ["AWS Certified Solutions Architect", "Scrum Master"],
      technologies: ["React", "Node.js", "AWS", "Docker"],
      experienceYears: 8
    },
    {
      id: 2,
      name: "Anni Konsultti",
      education: "Insinööri, Ohjelmistotekniikka",
      graduationYear: 2018,
      certifications: ["Azure Developer Associate", "Kubernetes Certified Administrator"],
      technologies: ["Java", "Spring Boot", "Kubernetes", "Azure"],
      experienceYears: 8
    },
    {
      id: 3, 
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
    setConsultants((prevConsultants) =>
      prevConsultants.map((consultant) =>
        consultant.id === updatedConsultant.id ? updatedConsultant : consultant
      )
    );
    setEditingConsultant(null); // tila on taas null
  };

  const handleCancel = () => {
    setEditingConsultant(null);
  };

  // filter
  const [selectedEducation, setSelectedEducation] = useState("");

  const handleFilterChange = (education) => {
    setSelectedEducation(education);
  };

  const filteredConsultants = consultants.filter((consultant) => {
    return selectedEducation === "" || consultant.education === selectedEducation;
  });


  return (
    <div className="App">
      <h1>Konsulttilista</h1>
      <ConsultantFilter
        educationOptions={[...new Set(consultants.map((c) => c.education))]}
        onFilterChange={handleFilterChange}
      />
      <ConsultantList
        consultants={filteredConsultants}
        // consultants={consultants}
        editingConsultant={editingConsultant}
        onEdit={handleEdit}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default App;
