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

  const event = [
    {
      event_date: '4.4.2025',
      event_description: 'Událost je pro duly, které se chtějí dále rozvíjet.',
      event_link: 'https://www.web.cz/akce',
      event_place: 'Vodičkova 1, Praha 1',
      event_time: '11:11',
      event_title: 'Workshop pro duly',
    },
    {
      event_date: '5.5.2025',
      event_description: 'Pravidelné setkávání určené se sdílení zkušeností',
      event_link: 'https://www.web.cz/akce',
      event_place: 'Alešova 5, Praha 5',
      event_time: '8:00',
      event_title: 'Setkání pro duly',
    },
  ];

  const eventContainer = document.getElementById('eventContainer');

  event.forEach((event) => {
    const eventElement = document.createElement('div');
    eventElement.innerHTML = `
        <h3>${event.event_title}</h3>
        <p>${event.event_description}</p>
        <p><strong>Čas:</strong> ${event.event_time}, <strong>Místo:</strong> ${event.event_place}</p>
        <p><a href="${event.event_link}">Více informací</a></p>
    `;
    eventContainer.appendChild(eventElement);
  });

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        'https://script.google.com/macros/s/AKfycbxaYcBsDpJdC65F6JDRiloqmEPKF7BHmll0X_KuQk-6fBubKVkLS6mGXI5DPRwT4vC5/exec',
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
                <em>
                  {event.event_description || 'Popis události není dostupný'}
                </em>
              </span>
              <br />
              <span>
                {`Datum: ${formatDate(event.event_date)}; Čas: ${
                  event.event_time || 'Čas není dostupný'
                }`}
              </span>
              <br />
              <span>
                Místo: {event.event_place || 'Místo události není dostupné'}
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
