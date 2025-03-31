// import './style.css';

// export const Events = () => {
//   return (
//     <>
//       <div className="container events">
//         <p>
//           <strong>České duly z.s.</strong> pořádají postgraduální kurzy,
//           semináře a workshopy.
//           <br />
//           <br />
//           Dále probíhají osobní i online schůzky s našimi dulami, týkající se
//           buď témat práce duly, informace pro rodičky, nebo také informační
//           schůzky ohledně našeho výcviku.
//           <br />
//           <br />
//           Také zveřejňujeme události, kde naše duly můžete potkat, jako
//           například předporodní přípravy, ženské kruhy, podpůrné skupiny a další
//           sezonní akce, stejně jako festivaly a další větší události, věnující
//           se našim tématům.
//         </p>

//         <h3>
//           <strong>Seznam událostí, na které se můžete těšit: </strong>
//         </h3>
//         <ul className="event-dates">
//           <li>
//             <strong>24.8.2024, 18:00 </strong>- Setkání s dulami online
//           </li>
//           <li>
//             <strong>26.8.2024, 18:00 </strong>- Předporodní příprava
//           </li>
//           <li>
//             <strong>28.8.2024, 20:00</strong> - Ženský kruh
//           </li>
//           <li>
//             <strong>1.9.2024, 17:00</strong> - Podpůrná skupina
//           </li>
//         </ul>
//         <div className="image">
//           <img
//             src="img/pages/women-together.jpg"
//             alt="women-together"
//             width="500px"
//           />
//         </div>
//         <p>
//           Bližší informace o jednotlivých událostech získáte na{' '}
//           <a href="mailto: info@mojedula.cz" target="_blank">
//             emailu
//             <i className="fa-solid fa-envelope"></i>
//           </a>
//         </p>
//       </div>
//     </>
//   );
// };

import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

export const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          'https://script.google.com/macros/s/AKfycbzlCHeAusP5xQ7hM5rPiURhmp3bf3lz4jv8p7LbNc8gdE7Q8HHElQP1KzHc08tfxmz1/exec',
        );
        setEvents(response.json);
      } catch (error) {
        console.error('Error fetching events:', error);
        setError('Chyba při načítání událostí.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Načítání událostí...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="container events">
        <p>
          <strong>České duly z.s.</strong> pořádají postgraduální kurzy,
          semináře a workshopy.
          <br />
          <br />
          Dále probíhají osobní i online schůzky s našimi dulami, týkající se
          buď témat práce duly, informace pro rodičky, nebo také informační
          schůzky ohledně našeho výcviku.
          <br />
          <br />
          Také zveřejňujeme události, kde naše duly můžete potkat, jako
          například předporodní přípravy, ženské kruhy, podpůrné skupiny a další
          sezonní akce, stejně jako festivaly a další větší události, věnující
          se našim tématům.
        </p>

        <h3>
          <strong>Seznam událostí, na které se můžete těšit: </strong>
        </h3>
        <ul className="event-dates">
          {events.length > 0 ? (
            events.map((event, index) => (
              <li key={index}>
                <strong>
                  {event.event_date}, {event.event_time}{' '}
                </strong>{' '}
                - {event.event_title}
                <br />
                <span>{event.event_description}</span>
                <br />
                <span>Kontaktní informace: {event.contact_info}</span>
                <br />
                <a
                  href={event.event_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Odkaz na událost
                </a>
              </li>
            ))
          ) : (
            <li>Žádné události k zobrazení.</li>
          )}
        </ul>
        <div className="image">
          <img
            src="img/pages/women-together.jpg"
            alt="women-together"
            width="500px"
          />
        </div>
        <p>
          Bližší informace o jednotlivých událostech získáte na{' '}
          <a href="mailto: info@mojedula.cz" target="_blank">
            emailu
            <i className="fa-solid fa-envelope"></i>
          </a>
        </p>
      </div>
    </>
  );
};
