import React, { useEffect, useState, useRef } from 'react';
import Modal from '../Modal';
import './style.css';

export default function DulaList({ region }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedDula, setSelectedDula] = useState(null);
  const [dulas, setDulas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, []);

  const handleDulaClick = (dula) => {
    if (selectedDula && selectedDula.id === dula.id) {
      setShowModal(false);
      setSelectedDula(null);
    } else {
      setSelectedDula(dula);
      setShowModal(true);
    }
  };

  const currentDulas =
    region === ''
      ? dulas
      : dulas.filter((dula) => dula.regionIds.includes(region));

  if (loading) return <p className="loading">Načítání...</p>;
  if (error) return <p className="error">Chyba při načítání: {error}</p>;

  return (
    <>
      <div className="dula-list-container">
        {currentDulas.map((dula) => (
          <div
            key={dula.id}
            className="dula-card"
            onClick={() => handleDulaClick(dula)}
          >
            <div className="dula-card-header">
              <h3 className="dula-name">{dula.name}</h3>
              <span className="dula-accreditation">{dula.accreditation}</span>
            </div>
            <div className="dula-card-body">
              <div className="dula-info-item">
                <svg
                  className="dula-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
                </svg>
                <span>{dula.language.join(', ')}</span>
              </div>

              <div className="dula-info-item">
                <svg
                  className="dula-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>{dula.precise_location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal && selectedDula && (
        <Modal
          ref={modalRef}
          dula={selectedDula}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
