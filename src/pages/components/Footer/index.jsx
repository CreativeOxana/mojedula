import './style.css';

export const Footer = () => {
  return (
    <>
      <footer>
        <a href="https://www.facebook.com/ceske.duly/?locale=cs_CZ">
          <i className="fa-brands fa-facebook fa-xl"></i>
        </a>
        <a href="https://www.facebook.com/ceske.duly/?locale=cs_CZ">
          <p>České duly</p>{' '}
        </a>
        <a href="https://www.instagram.com/ceske.duly/">
          <i className="fa-brands fa-instagram fa-xl"></i>
        </a>
        <a href="https://www.instagram.com/ceske.duly/">
          <p>ceske.duly</p>
        </a>
        <i class="fa-solid fa-envelope fa-xl"></i>
        <p>
          <a href="mailto: info@mojedula.cz">info@mojedula.cz</a>
        </p>

        <div className="footer-container">© 2024</div>
      </footer>
    </>
  );
};
