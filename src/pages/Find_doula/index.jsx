import Map from '../components/Map/Map';
import DulaList from '../components/DulaList/DulaList';
import { useState } from 'react';

export const Find_doula = () => {
  const [regionId, setRegionId] = useState('');

  function handleDataFromChild(data) {
    setRegionId(data);
  }
  // const fetchDuly = async () => {
  //   const response = await fetch(`localhost:4000/api/duly`);
  //   const json = await response.json();
  //   const duly = json.data;
  // };
  // fetchDuly();

  return (
    <>
      <div>
        <Map sendDataToParent={handleDataFromChild} />
        <DulaList region={regionId} />
      </div>
      {/* {response.map((item) => (
        <>
          <p key={item.id}>{item.jméno}</p>
          <p>{item.region}</p>
          <p>{item.akreditace}</p>
          <p>{item.jazyk}</p>
        </>
      ))} */}
    </>
  );
};
