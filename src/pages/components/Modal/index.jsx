import React, { useState, useEffect } from 'react';
import DulaList from '../DulaList/DulaList';

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [duly, setDuly] = useState([]);
  const [selectedDula, setSelectedDula] = useState(null);

  const openModal = () => {
    if (selectedDula) {
      setIsModalOpen(true);
    } else {
      console.error('Žádná dula nebyla vybrána.');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch('http://localhost:4000/api/duly');
      const response = await api.json();
      console.log(response);
      const duly = response.data;
      console.log(duly[0].medallion);
      setDuly(duly);
    };

    fetchData();
  }, []);

  const handleDulaClick = (dula) => {
    setSelectedDula(dula);
    openModal();
  };

  return (
    <>
      <h2>Seznam dul</h2>
      <ul>
        {duly.length > 0 ? (
          duly.map((dula) => (
            <li key={dula.id} onClick={() => handleDulaClick(dula)}>
              {dula.name}
            </li>
          ))
        ) : (
          <p>Žádné údaje o dulách k zobrazení.</p>
        )}
      </ul>
      {isModalOpen && selectedDula && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Medailonek vybrané duly</h2>
            <div>
              {duly.length > 0 ? (
                <div key={selectedDula.id}>
                  <h3>{selectedDula.name}</h3>
                  <img src={selectedDula.picture} alt={selectedDula.name} />
                  <p>Akreditace: {selectedDula.accreditation}</p>
                  <p>Jazyky: {selectedDula.language.join(', ')}</p>
                  <p>
                    Konkrétní města a kraje: {selectedDula.precise_location}
                  </p>
                  <p>Webové stránky: {selectedDula.website}</p>
                  <p>Medalionek: {selectedDula.medallion}</p>
                </div>
              ) : (
                <p>Žádné údaje k zobrazení.</p>
              )}
            </div>
            <button onClick={closeModal}>Zavřít</button>
          </div>
        </div>
      )}
    </>
  );
}
