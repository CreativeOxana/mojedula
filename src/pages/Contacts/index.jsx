import Form from '../components/Form/index.jsx';
import './style.css';

export const Contacts = () => {
  return (
    <div className="contact">
      <h1>České duly z.s. </h1>
      <p>
        <strong>Kde nás najdete? </strong> Badeniho 1, Praha 6, 160 00
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.4254400640607!2d14.404977276935456!3d50.09704331274636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94df6a700001%3A0x7530a92d540647b!2sBadeniho%20290%2F1%2C%20160%2000%20Praha%206-Letn%C3%A1!5e0!3m2!1scs!2scz!4v1717938138099!5m2!1scs!2scz"
        width="450"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <i class="fa-solid fa-envelope"></i>
      <p>
        <a href="mailto: info@mojedula.cz">info@mojedula.cz</a>,
        <a href="mailto: vzdelavani@mojedula.cz">vzdelavani@mojedula.cz</a>
      </p>
      <a href="https://www.facebook.com/ceske.duly/?locale=cs_CZ">
        <i className="fa-brands fa-facebook"></i>
      </a>
      <a href="https://www.facebook.com/ceske.duly/?locale=cs_CZ">
        <p>České duly</p>
      </a>
      <a href="https://www.instagram.com/ceske.duly/">
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a href="https://www.instagram.com/ceske.duly/">
        <p>ceske.duly</p>
      </a>
      <i class="fa-solid fa-comments">
        {' '}
        <i className="fa-brands fa-facebook"></i>
      </i>
      <p>
        <a href="https://www.facebook.com/groups/271474671034538/">
          Moje dula – podpora a sdílení s Českými dulami{' '}
        </a>
      </p>
      <Form />
      Kontakt na konkrétní České duly najdete zde zařazené do regionů, ve
      kterých působí. (odkaz na mapu)
    </div>
  );
};
