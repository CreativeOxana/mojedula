import './style.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="socials">
          <a
            href="https://www.facebook.com/ceske.duly/?locale=cs_CZ"
            target="_blank"
            aria-label="Sledujte nás na Facebooku"
          >
            <i className="fa-brands fa-facebook fa-xl" aria-hidden="true"></i>
          </a>

          <a
            href="https://www.instagram.com/ceske.duly/"
            target="_blank"
            aria-label="Sledujte nás na Instagramu"
          >
            <i className="fa-brands fa-instagram fa-xl" aria-hidden="true"></i>
          </a>

          <a
            href="mailto: info@mojedula.cz"
            target="_blank"
            aria-label="Napište nám e-mail"
          >
            <i className="fa-solid fa-envelope fa-xl" aria-hidden="true"></i>
          </a>
        </div>
        <div className="copyright">
          <i className="fa-regular fa-copyright"></i> {currentYear}
        </div>
      </footer>
    </>
  );
};
