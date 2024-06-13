import React, { useState } from 'react';
import './style.css';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [events, setEvents] = useState(false);
  const [education, setEducation] = useState(false);

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
        education: education === true ? 'checked' : 'not checked',
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          alert('Děkujeme vám za zprávu, v brzké době vás kontaktujeme.');
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
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="formcarry-block">
          <label htmlFor="name">Jméno </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Zadejte své celé jméno"
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
          ></textarea>
        </div>
        <div className="formcarry-block">
          <p>Přihlašuji se k odběru: </p>
          <label htmlFor="checkbox"> Události </label>
          <input
            type="checkbox"
            name="checkbox"
            checked={events}
            onChange={(e) => setEvents(e.target.checked)}
            id="events"
          />
          <label htmlFor="checkbox"> Výcviky </label>
          <input
            type="checkbox"
            name="checkbox"
            checked={education}
            onChange={(e) => setEducation(e.target.checked)}
            id="education"
          />
        </div>
        <div className="formcarry-block">
          <button type="submit"> Poslat </button>
        </div>
        <input
          type="hidden"
          name="_next"
          value="https://yourthank.you/page"
        ></input>
      </form>
    </div>
  );
}
