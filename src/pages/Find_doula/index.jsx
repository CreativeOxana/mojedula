export const Find_doula = () => {
  const fetchDuly = async () => {
    const response = await fetch(`localhost:4000/api/duly`);
    const json = await response.json();
    const duly = json.data;
  };
  fetchDuly();
  return (
    <>
      {response.map((item) => (
        <>
          <p key={item.id}>{item.jméno}</p>
          <p>{item.region}</p>
          <p>{item.akreditace}</p>
          <p>{item.jazyk}</p>
        </>
      ))}
    </>
  );
};
