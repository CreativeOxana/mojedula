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

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        'https://script.google.com/macros/s/AKfycbzKytejwjFWhlETiR0q2cwBCk8g9QRVPzeSSDOeGeJZ56U3uTYcQ-OOa30YquRjz5-F/exec',
      );
      console.log('Fetched events data:', response.data);
      setEvents(response.data);
      localStorage.setItem('lastFetch', new Date().toISOString());
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Chyba při načítání událostí.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
    const intervalId = setInterval(() => {
      fetchEvents();
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <p>Načítání událostí...</p>;
  if (error) return <p>{error}</p>;

  const formatDate = (eventDate) => {
    const datePattern = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/;
    const match = eventDate.match(datePattern);

    if (match) {
      let [_, day, month, year] = match;
      day = day.padStart(2, '0');
      month = month.padStart(2, '0');
      return `${day}.${month}.${year}`;
    }
    return 'Datum není platné';
  };

  return (
    <div className="container events">
      <p>
        <strong>České duly z.s.</strong> pořádají postgraduální kurzy, semináře
        a workshopy.
        <br />
        <br />
        Dále probíhají osobní i online schůzky s našimi dulami, týkající se buď
        témat práce duly, informace pro rodičky, nebo také informační schůzky
        ohledně našeho výcviku.
        <br />
        <br />
        Také zveřejňujeme události, kde naše duly můžete potkat, jako například
        předporodní přípravy, ženské kruhy, podpůrné skupiny a další sezonní
        akce, stejně jako festivaly a další větší události, věnující se našim
        tématům.
      </p>

      <h3>
        <strong>Seznam událostí, na které se můžete těšit: </strong>
      </h3>
      <ul className="event-dates">
        {Array.isArray(events) && events.length > 0 ? (
          events.map((event, index) => (
            <li key={index}>
              <strong>
                {event.event_title || 'Název události není dostupný'}
              </strong>
              <br />
              <span>
                {event.event_description || 'Popis události není dostupný'}
              </span>
              <br />
              <span>
                {`Datum: ${formatDate(event.event_date)}; Čas: ${
                  event.event_time || 'Čas není dostupný'
                }`}
              </span>
              <br />
              <span>
                {event.contact_info || 'Kontaktní informace nejsou dostupné'}
              </span>
              <br />
              <a
                href={
                  event.event_link && event.event_link !== ''
                    ? event.event_link
                    : '#'
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {event.event_link
                  ? 'Odkaz na událost'
                  : 'Odkaz není k dispozici'}
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
        <a href="mailto:info@mojedula.cz" target="_blank">
          emailu<i className="fa-solid fa-envelope"></i>
        </a>
      </p>
    </div>
  );
};
