import './style.css';

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="icons-container">
          <a href="https://www.facebook.com/ceske.duly/?locale=cs_CZ">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.facebook.com/ceske.duly/?locale=cs_CZ">
            <p>České duly</p>{' '}
          </a>
          <a href="https://www.instagram.com/ceske.duly/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.instagram.com/ceske.duly/">
            <p>ceske.duly</p>
          </a>
          <i class="fa-solid fa-envelope"></i>
          <p>
            <a href="mailto: info@mojedula.cz">info@mojedula.cz</a>
          </p>
        </div>
        <div className="footer-container">© 2024</div>
      </footer>
    </>
  );
};
