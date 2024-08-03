import React, { useState, useEffect } from 'react';
import DulaList from '../DulaList/DulaList';

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [duly, setDuly] = useState([]);

  const openModal = () => {
    if (duly.length > 0) {
      setIsModalOpen(true);
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

  return (
    <>
      <button onClick={openModal}>Více informací o dule</button>

      {isModalOpen && duly.length > 0 && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Medailonek duly</h2>
            {duly.map((dula) => {
              return (
                <DulaList
                  key={dula.id}
                  image={dula.picture}
                  medallion={dula.medallion}
                />
              );
            })}
            <button onClick={closeModal}>Zavřít</button>
          </div>
        </div>
      )}
    </>
  );
}
