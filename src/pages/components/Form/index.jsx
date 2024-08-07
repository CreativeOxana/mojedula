import React, { useState } from 'react';
import './style.css';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [events, setEvents] = useState(false);

  const [error, setError] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    fetch('https://formcarry.com/s/Vhn4P9evIRG', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
        events: events === true ? 'checked' : 'not checked',
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          alert('Děkujeme Vám za zprávu. V brzké době Vás kontaktujeme.');
          setName('');
          setEmail('');
          setMessage('');
          setEvents(false);
        } else if (response.code === 422) {
          // Field validation failed
          setError(response.message);
        } else {
          // other error from formcarry
          setError(response.message);
        }
      })
      .catch((error) => {
        // request related error.
        setError(error.message ? error.message : error);
      });
  }

  return (
    <div className="form-container">
      <h3>Máte konkrétní dotaz? Napište nám </h3>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="formcarry-block">
          <label htmlFor="name">Jméno </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Zadejte své celé jméno"
            required
            autoComplete="on"
          />
        </div>

        <div className="formcarry-block">
          <label htmlFor="email">Email </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="john@doe.com"
            required
            autoComplete="on"
          />
        </div>

        <div className="formcarry-block">
          <label htmlFor="message">Vzkaz </label>
          <textarea
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            placeholder="Zadejte svou zprávu..."
            required
          ></textarea>
        </div>
        <div className="formcarry-block">
          <p>
            <strong>Přihlašuji se k odběru: </strong>
          </p>
          <div className="checkbox">
            <label htmlFor="events"> Události </label>
            <input
              type="checkbox"
              name="checkbox"
              checked={events}
              onChange={(e) => setEvents(e.target.checked)}
              id="events"
            />
          </div>
        </div>
        <div className="formcarry-block">
          <button type="submit"> Poslat </button>
        </div>
      </form>
    </div>
  );
}
