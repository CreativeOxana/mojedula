import { Link } from 'react-router-dom';
import Form from '../components/Form/index.jsx';
import './style.css';

export const Contacts = () => {
  return (
    <div className="container">
      <div className="contact">
        <h1>Kde nás najdete? </h1>
        <p>
          Na adrese:<strong> Badeniho 290/1, Praha 6, 160 00</strong>
        </p>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.4254439855504!2d14.402681294756313!3d50.097043239337275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94df6a700001%3A0x7530a92d540647b!2sBadeniho%20290%2F1%2C%20160%2000%20Praha%206-Letn%C3%A1!5e0!3m2!1scs!2scz!4v1718312627448!5m2!1scs!2scz "
            width="500"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <a href="mailto: info@mojedula.cz" target="_blank">
          <i className="fa-solid fa-envelope fa-lg"></i>
        </a>
        <p>
          <a href="mailto: info@mojedula.cz" target="_blank">
            info@mojedula.cz
          </a>
          ,
          <a href="mailto: vzdelavani@mojedula.cz" target="_blank">
            vzdelavani@mojedula.cz
          </a>
        </p>
        <a
          href="https://www.facebook.com/groups/271474671034538/"
          target="_blank"
        >
          <i className="fa-solid fa-comments fa-lg"></i>
        </a>
        <p>
          <a
            href="https://www.facebook.com/groups/271474671034538/"
            target="_blank"
          >
            Moje dula – podpora a sdílení s Českými dulami{' '}
          </a>
        </p>
        <Link to={'/find_doula'}>
          <i class="fa-solid fa-map-location-dot fa-lg"></i>
        </Link>
        <p>
          <Link to={'/find_doula'}>
            Kontakt na konkrétní dulu naleznete na mapě, dle působnosti
          </Link>
        </p>
      </div>
      <hr />
      <Form />
    </div>
  );
};
