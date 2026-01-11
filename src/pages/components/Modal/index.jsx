import React from 'react';
import { forwardRef } from 'react';
import './modal.css';
import { regionNames } from '../../../utils/regionNames';

const Modal = forwardRef(({ dula, onClose }, ref) => {
  return (
    <div className="modal-overlay">
      <div className="modal" ref={ref}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>Medailonek vybrané duly</h2>
        <div>
          <h3>{dula.name}</h3>
          <img src={dula.picture} alt={dula.name} />
          <p>
            <b>Akreditace:</b> {dula.accreditation}
          </p>
          <p>
            <b>Jazyky: </b> {dula.language.join(', ')}
          </p>
          <p>
            <b>Region působnosti: </b>{' '}
            {dula.regionIds && dula.regionIds.length > 0
              ? dula.regionIds
                  .map((regionId) => regionNames[regionId] || regionId)
                  .join(', ')
              : 'Region není uveden'}
          </p>
          <p>
            <b>Webové stránky: </b>
            {dula.website}
          </p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: dula.medallion }}></div>
        <button onClick={onClose}>Zavřít</button>
      </div>
    </div>
  );
});

Modal.displayName = 'Modal';

export default Modal;
