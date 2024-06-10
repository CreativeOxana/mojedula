import { useState } from 'react';
import duly from '../../../../api/duly.json';

export default function ({ region }) {
  const dulas = [
    {
      id: 1,
      name: 'Berková Lenka, Mgr.',
      regionIds: ['cz-pr', 'cz-st'],
      accretitaion: 'dula absolventka',
      language: ['český', 'francouzský'],
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
      name: 'Hájková Kateřina',
      regionIds: ['cz-pr', 'cz-st'],
      accretitaion: 'dula absolventka',
      language: ['český', 'anglický'],
    },
    {
      id: 4,
      name: 'Hrabincová Irena, PhDr.',
      regionIds: ['cz-li', 'cz-kr'],
      accretitaion: 'certifikovaná dula, konzultantka',
      language: ['český'],
    },
    {
      id: 5,
      name: 'Lamošová Veronika, Ing.',
      regionIds: ['cz-pr', 'cz-st'],
      accretitaion: 'certifikovaná dula',
      language: ['český'],
    },
    {
      id: 6,
      name: 'Mašková Pavla, Ing.',
      regionIds: ['cz-jc'],
      accretitaion: 'dula studentka',
      language: ['český'],
    },
    {
      id: 7,
      name: 'Nerodilová Petra, Ing.',
      regionIds: ['cz-pr', 'cz-st'],
      accretitaion: 'dula absolventka',
      language: ['český', 'anglický', 'španělský'],
    },
    {
      id: 8,
      name: 'Remundová Ivona, Bc.',
      regionIds: ['cz-pr'],
      accretitaion: 'certifikovaná dula',
      language: ['český'],
    },
    {
      id: 9,
      name: 'Sokolová Zuzana, DiS.',
      regionIds: ['cz-pr', 'cz-st', 'cz-vy'],
      accretitaion: 'certifikovaná dula',
      language: ['český', 'anglický'],
    },
    {
      id: 10,
      name: 'Zámečníková Hana, Mgr.',
      regionIds: ['cz-ol'],
      accretitaion: 'certifikovaná dula',
      language: ['český'],
    },
  ];

  const currentDulas =
    region === '' ? dulas : dulas.filter((d) => d.regionIds.includes(region));

  return (
    <>
      <ul>
        {currentDulas.map((cd, index) => (
          <>
            <ul>
              <li key={index}>
                {cd.name}, {cd.accretitaion}, {cd.language}
              </li>
            </ul>
          </>
        ))}
      </ul>
    </>
  );
}
