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
        <Map sendDataToParent={handleDataFromChild} />
        <DulaList region={regionId} />
      </div>
    </>
  );
};
