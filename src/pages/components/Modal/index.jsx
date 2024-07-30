import React, { useState } from 'react';
import DulaList from '../DulaList/DulaList';

const fetchData = async () => {
  const api = await fetch('http://localhost:3000/api/duly');
  console.log(api);
  const response = await api.json();
  console.log(response);
  const duly = response.data;
  console.log(duly);
};
fetchData();

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Více informací o dule</button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Medailonek duly</h2>
            <DulaList medallion={duly.medallion} />
            <button onClick={closeModal}>Zavřít</button>
          </div>
        </div>
      )}
    </>
  );
}
