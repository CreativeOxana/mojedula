import React, { useState, useEffect } from 'react';
import DulaList from '../DulaList/DulaList';

export const DataFetchingComponent = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/duly.json/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Načítání...</div>;
  }

  if (error) {
    return <div>Chyba: {error.message}</div>;
  }
};

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
            <DulaList medallion={dulas.medallion} />
            <button onClick={closeModal}>Zavřít</button>
          </div>
        </div>
      )}
    </>
  );
}
