import React from 'react';

export default function Modal({ dula, onClose }) {
  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <h2>Medailonek vybrané duly</h2>
          <div>
            <h3>{dula.name}</h3>
            <img src={dula.picture} alt={dula.name} />
            <p>Akreditace: {dula.accreditation}</p>
            <p>Jazyky: {dula.language.join(', ')}</p>
            <p>Konkrétní města a kraje: {dula.precise_location}</p>
            <p>Webové stránky: {dula.website}</p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: dula.medallion }}></div>
          <button onClick={onClose}>Zavřít</button>
        </div>
      </div>
    </>
  );
}
