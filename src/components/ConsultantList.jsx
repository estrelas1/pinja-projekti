import React from 'react';
import ConsultantCard from './ConsultantCard';
import ConsultantForm from './ConsultantForm';
import './ConsultantList.css';

const ConsultantList = ({ consultants, editingConsultant, onEdit, onSave, onCancel }) => {
  return (
    <div className="consultant-list">
      {consultants.map((consultant) => ( // map luo jokaiselle konsultille oman div-elementin
        <div key={consultant.id}>
          {editingConsultant && editingConsultant.id === consultant.id ? ( // tarkistaa, onko editingConsultant määritelty (ei null) ja onko editingConsultant.id sama kuin nykyisen konsultin id. Jos molemmat ovat tosi, näytetään form.
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