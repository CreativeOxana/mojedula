import React, { useState } from 'react';
import Modal from '../Modal';
import './style.css';

export default function ({ region }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedDula, setSelectedDula] = useState(null);

  const handleToggleModal = (dula) => {
    console.log('Selected Dula:', dula);
    setSelectedDula(dula);
    setShowModal(!showModal);
  };

  const handleDulaClick = (dula) => {
    setSelectedDula(dula);
    setShowModal();
  };

  const dulas = [
    {
      id: 1,
      name: 'Berková Lenka, Mgr.',
      regionIds: ['cz-pr', 'cz-st'],
      accretitaion: 'dula absolventka',
      language: ['český, francouzský'],
    },
    {
      id: 2,
      name: 'Broncová Kateřina',
      regionIds: ['cz-pr', 'cz-pa', 'cz-kr'],
      accretitaion: 'certifikovaná dula',
      language: ['český'],
    },
    {
      id: 3,
      name: 'Dubová Zuzana, Mgr.',
      regionIds: ['cz-pr', 'cz-st'],
      accretitaion: 'certifikovaná dula, konzultantka',
      language: ['český, anglický'],
    },
    {
      id: 4,
      name: 'Dvořáková Jana, Mgr.',
      regionIds: ['cz-pr', 'cz-st', 'cz-vy'],
      accretitaion: 'dula absolventka',
      language: ['český'],
    },
    {
      id: 5,
      name: 'Hájková Kateřina',
      regionIds: ['cz-pr', 'cz-st'],
      accretitaion: 'dula absolventka',
      language: ['český, anglický'],
    },
    {
      id: 6,
      name: 'Hrabincová Irena, PhDr.',
      regionIds: ['cz-li', 'cz-kr'],
      accretitaion: 'certifikovaná dula, konzultantka',
      language: ['český'],
    },
    {
      id: 7,
      name: 'Hricová Dagmar',
      regionIds: ['cz-mo'],
      accretitaion: 'certifikovaná dula, konzultantka',
      language: ['český'],
    },
    {
      id: 8,
      name: 'Lamošová Veronika, Ing.',
      regionIds: ['cz-pr', 'cz-st'],
      accretitaion: 'certifikovaná dula',
      language: ['český'],
    },
    {
      id: 9,
      name: 'Martina Hanzlíková Müllerová, Ing.',
      regionIds: ['cz-pl'],
      accretitaion: 'dula studentka',
      language: ['český'],
    },
    {
      id: 10,
      name: 'Mašková Pavla, Ing.',
      regionIds: ['cz-jc'],
      accretitaion: 'dula studentka',
      language: ['český'],
    },
    {
      id: 11,
      name: 'Musilová Anna, MVDr., Ph.D.',
      regionIds: ['cz-vy'],
      accretitaion: 'certifikovaná dula',
      language: ['český'],
    },
    {
      id: 12,
      name: 'Němečková Radka',
      regionIds: ['cz-us'],
      accretitaion: 'dula absolventka',
      language: ['český'],
    },
    {
      id: 13,
      name: 'Nerodilová Petra, Ing.',
      regionIds: ['cz-pr', 'cz-st'],
      accretitaion: 'dula absolventka',
      language: ['český, anglický, španělský'],
    },
    {
      id: 14,
      name: 'Shcherbyna Kseniya',
      regionIds: ['cz-jm'],
      accretitaion: 'certifikovaná dula',
      language: ['český, anglický, ruský'],
    },
    {
      id: 15,
      name: 'Remundová Ivona, Bc.',
      regionIds: ['cz-pr'],
      accretitaion: 'certifikovaná dula',
      language: ['český'],
    },
    {
      id: 16,
      name: 'Sokolová Zuzana, DiS.',
      regionIds: ['cz-pr', 'cz-st', 'cz-vy'],
      accretitaion: 'certifikovaná dula',
      language: ['český, anglický'],
    },
    {
      id: 17,
      name: 'Vlčková Markéta, Mgr.',
      regionIds: ['cz-zl'],
      accretitaion: 'certifikovaná dula, konzultantka',
      language: ['český'],
    },
    {
      id: 18,
      name: 'Zámečníková Hana, Mgr.',
      regionIds: ['cz-ol'],
      accretitaion: 'certifikovaná dula',
      language: ['český'],
    },
  ];

  const currentDulas =
    region === ''
      ? dulas
      : dulas.filter((dula) => dula.regionIds.includes(region));

  return (
    <>
      <ul className="container dula box">
        {showModal && selectedDula && (
          <>
            <Modal dula={selectedDula} onClose={() => setShowModal(false)} />
          </>
        )}
        {/* {!showModal && (
          <div>
            <h2>Seznam dul</h2>
            <ul>
              {dulas.length > 0 ? (
                dulas.map((dula) => (
                  <li key={dula.id} onClick={() => handleDulaClick(dula)}>
                    {dula.name}
                  </li>
                ))
              ) : (
                <p>Žádné údaje o dulách k zobrazení.</p>
              )}
            </ul>
          </div>
        )} */}

        {currentDulas.map((cd, id) => (
          <>
            <li
              key={cd.id}
              onClick={() => handleDulaClick + handleToggleModal(cd)}
            >
              {cd.name}, {cd.accretitaion}, jazyky: {cd.language.join(', ')}
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
