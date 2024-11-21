import React from 'react';
import ConsultantCard from './ConsultantCard';
import ConsultantForm from './ConsultantForm';
import './ConsultantList.css';

const ConsultantList = ({ consultants, editingConsultant, onEdit, onSave, onCancel }) => {
  return (
    <div className="consultant-list">
      {consultants.map((consultant) => ( // map luo jokaiselle konsultille oman div-elementin
        <div key={consultant.name}>
          {editingConsultant && editingConsultant.name === consultant.name ? ( // tarkistaa, onko editingConsultant määritelty (ei null) ja onko editingConsultant.name sama kuin nykyisen konsultin nimi. Jos molemmat ovat tosi, näytetään form.
            <ConsultantForm
              consultant={editingConsultant}
              onSave={onSave}
              onCancel={onCancel}
            />
          ) : ( // päättää näyttääkö kortin vai muokkaus-formin
            <ConsultantCard consultant={consultant} onEdit={onEdit} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ConsultantList;