import { useState } from 'react';
import duly from '../../../../api/duly.json';

export default function ({ region }) {
  const dulas = [
    {
      id: 1,
      name: 'Berková Lenka, Mgr.',
      regionIds: ['cz-pr', 'cz-st'],
    },
    {
      id: 2,
      name: 'Broncová Kateřina',
      regionIds: ['cz-pr', 'cz-pa', 'cz-kr'],
    },
    {
      id: 3,
      name: 'Hájková Kateřina',
      regionIds: ['cz-pr', 'cz-st'],
    },
    {
      id: 4,
      name: 'Hrabincová Irena, PhDr.',
      regionIds: ['cz-li', 'cz-kr'],
    },
    {
      id: 5,
      name: 'Lamošová Veronika, Ing.',
      regionIds: ['cz-pr', 'cz-st'],
    },
    {
      id: 6,
      name: 'Mašková Pavla, Ing.',
      regionIds: ['cz-jc'],
    },
    {
      id: 7,
      name: 'Nerodilová Petra, Ing.',
      regionIds: ['cz-pr', 'cz-st'],
    },
    {
      id: 8,
      name: 'Remundová Ivona, Bc.',
      regionIds: ['cz-pr'],
    },
    {
      id: 9,
      name: 'Sokolová Zuzana, DiS.',
      regionIds: ['cz-pr', 'cz-st', 'cz-vy'],
    },
    {
      id: 10,
      name: 'Zámečníková Hana, Mgr.',
      regionIds: ['cz-ol'],
    },
  ];

  const currentDulas =
    region === '' ? dulas : dulas.filter((d) => d.regionIds.includes(region));

  return (
    <>
      <ul>
        {currentDulas.map((cd, index) => (
          <li key={index}>{cd.name}</li>
        ))}
      </ul>
    </>
  );
}
