import Map from '../components/Map/Map';
import DulaList from '../components/DulaList/DulaList';
import { useState } from 'react';

export const Find_doula = () => {
  const [regionId, setRegionId] = useState('');

  function handleDataFromChild(data) {
    setRegionId(data);
  }

  return (
    <>
      <div>
        <h2>Duly z vybraného kraje</h2>
        <Map sendDataToParent={handleDataFromChild} />
        <DulaList region={regionId} />
      </div>
    </>
  );
};
