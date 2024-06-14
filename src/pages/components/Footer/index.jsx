import './style.css';

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="socials">
          <a
            href="https://www.facebook.com/ceske.duly/?locale=cs_CZ"
            target="_blank"
          >
            <i className="fa-brands fa-facebook fa-xl"></i>
          </a>

          <a href="https://www.instagram.com/ceske.duly/" target="_blank">
            <i className="fa-brands fa-instagram fa-xl"></i>
          </a>

          <a href="mailto: info@mojedula.cz" target="_blank">
            <i class="fa-solid fa-envelope fa-xl"></i>
          </a>
        </div>
        <div className="copyright">© 2024</div>
      </footer>
    </>
  );
};
