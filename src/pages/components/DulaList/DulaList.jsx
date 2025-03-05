import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import './style.css';

export default function DulaList({ region }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedDula, setSelectedDula] = useState(null);
  const [dulas, setDulas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fecthData = async () => {
      setLoading(true);
      try {
        const response = await fetch('/assets/api/duly.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDulas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fecthData();
  }, []);

  const handleDulaClick = (dula) => {
    setSelectedDula(dula);
    setShowModal(true);
  };

  const currentDulas =
    region === ''
      ? dulas
      : dulas.filter((dula) => dula.regionIds.includes(region));

  if (loading) return <p>Načítání...</p>;
  if (error) return <p>Chyba při načítání: {error}</p>;

  return (
    <>
      <ul className="container dula box">
        {currentDulas.map((dula) => (
          <li key={dula.id} onClick={() => handleDulaClick(dula)}>
            {dula.name}, {dula.accretitaion}, jazyky: {dula.language.join(', ')}
          </li>
        ))}
      </ul>
      {showModal && selectedDula && (
        <>
          <Modal dula={selectedDula} onClose={() => setShowModal(false)} />
        </>
      )}
    </>
  );
}
