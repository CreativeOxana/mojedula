// import React, { useEffect, useState } from 'react';
// import Modal from '../Modal';
// import './style.css';

// export default function DulaList({ region }) {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedDula, setSelectedDula] = useState(null);
//   const [dulas, setDulas] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch('/assets/api/duly.json');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setDulas(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // const handleDulaClick = (dula) => {
//   //   if (selectedDula && selectedDula.id === dula.id) {
//   //     setShowModal(false);
//   //     setSelectedDula(null);
//   //   } else {
//   //     setSelectedDula(dula);
//   //     setShowModal(true);
//   //   }
//   // };

//   const handleDulaClick = (dula) => {
//     setSelectedDula(selectedDula && selectedDula.id === dula.id ? null : dula);
//     setShowModal(!showModal);
//   };

//   const currentDulas =
//     region === ''
//       ? dulas
//       : dulas.filter((dula) => dula.regionIds.includes(region));

//   if (loading) return <p>Načítání...</p>;
//   if (error) return <p>Chyba při načítání: {error}</p>;

//   return (
//     <>
//       <ul className="container dula box">
//         {currentDulas.map((dula) => (
//           <li key={dula.id} onClick={() => handleDulaClick(dula)}>
//             {dula.name}, {dula.accreditation}, jazyky:{' '}
//             {dula.language.join(', ')}
//           </li>
//         ))}
//       </ul>
//       {showModal && selectedDula && (
//         <Modal dula={selectedDula} onClose={() => setShowModal(false)} />
//       )}
//     </>
//   );
// }

import React, { useEffect, useState, useRef } from 'react';
import Modal from '../Modal';
import './style.css';

export default function DulaList({ region }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedDula, setSelectedDula] = useState(null);
  const [dulas, setDulas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const modalRef = useRef(); // Reference pro modální okno

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Zkontrolujeme, zda kliknutí proběhlo mimo modální okno
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

  if (loading) return <p>Načítání...</p>;
  if (error) return <p>Chyba při načítání: {error}</p>;

  return (
    <>
      <ul className="container dula box">
        {currentDulas.map((dula) => (
          <li key={dula.id} onClick={() => handleDulaClick(dula)}>
            {dula.name}, {dula.accreditation}, jazyky:{' '}
            {dula.language.join(', ')}
          </li>
        ))}
      </ul>
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
