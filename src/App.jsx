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
      experienceYears: 6
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
    {
      id: 4,
      name: "Sami Sovelluskehittäjä",
      education: "Diplomi-insinööri, Ohjelmistotekniikka",
      graduationYear: 2014,
      certifications: ["AWS Certified Developer", "Scrum Master"],
      technologies: ["JavaScript", "React", "AWS", "Kubernetes"],
      experienceYears: 10
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

  // Filters
  // koulutus:
  const [selectedEducation, setSelectedEducation] = useState("");

  const handleEducationFilterChange = (education) => {
    setSelectedEducation(education);
  };

  // sertifikaatit:
  const [selectedCertifications, setSelectedCertifications] = useState([]); // taulukko

  const handleCertificationFilterChange = (certification) => {
    setSelectedCertifications((prevSelected) =>
      prevSelected.includes(certification)
        ? prevSelected.filter((cert) => cert !== certification) // poista, jos jo valittu
        : [...prevSelected, certification] // lisää, jos ei valittu
    );
  };

  // teknologiat:
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const handleTechnologyFilterChange = (technology) => {
    setSelectedTechnologies((prevSelected) =>
      prevSelected.includes(technology)
        ? prevSelected.filter((tech) => tech !== technology)
        : [...prevSelected, technology]
    );
  };

  // kokemus:
  const [minExperienceYears, setMinExperienceYears] = useState(0);
  
  const handleExperienceFilterChange = (years) => {
    setMinExperienceYears(years);
  };


  const filteredConsultants = consultants.filter((consultant) => {
    const matchesEducation = // koulutus
      selectedEducation === "" || consultant.education === selectedEducation;

    const matchesCertifications = // sertifikaatit
      selectedCertifications.length === 0 ||
      selectedCertifications.every((cert) =>
        consultant.certifications.includes(cert)
      );

    const matchesTechnologies = // teknologiat
      selectedTechnologies.length === 0 ||
      selectedTechnologies.every((tech) =>
        consultant.technologies.includes(tech)
      );

      const matchesExperience = // kokemus
      minExperienceYears === 0 || consultant.experienceYears >= minExperienceYears;

    return matchesEducation && matchesCertifications && matchesTechnologies && matchesExperience;
  });


  return (
    <div className="App">
      <h1>Osaamisenhallinnan ohjelmisto</h1>
      <div className="main-content">
        <ConsultantFilter
          educationOptions={[...new Set(consultants.map((c) => c.education))]}
          certificationOptions={[...new Set(consultants.flatMap((c) => c.certifications))]}
          technologyOptions={[...new Set(consultants.flatMap((c) => c.technologies))]}
          selectedCertifications={selectedCertifications}
          selectedTechnologies={selectedTechnologies}
          minExperienceYears={minExperienceYears}
          onEducationFilterChange={handleEducationFilterChange}
          onCertificationFilterChange={handleCertificationFilterChange}
          onTechnologyFilterChange={handleTechnologyFilterChange}
          onExperienceFilterChange={handleExperienceFilterChange}
        />
        <ConsultantList
          consultants={filteredConsultants}
          editingConsultant={editingConsultant}
          onEdit={handleEdit}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default App;
