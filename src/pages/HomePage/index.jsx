import '../HomePage/style.css';
import './style.css';
import { useEffect, useRef } from 'react';
import Logo from '/img/logo.png';

export const HomePage = () => {
  const navbarRef = useRef(null);
  const searchIconRef = useRef(null);

  useEffect(() => {
    searchIconRef.current.addEventListener('click', () => {
      navbarRef.current.classList.toggle('openSearch');
      navbarRef.current.classList.remove('openNav');
      if (navbarRef.current.classList.contains('openSearch')) {
        return searchIconRef.current.classList.replace(
          'uil-search',
          'uil-times',
        );
      }
      searchIconRef.current.classList.replace('uil-times', 'uil-search');
    });

    const navOpenBtn = document.querySelector('.navOpenBtn');
    const navCloseBtn = document.querySelector('.navCloseBtn');

    navOpenBtn.addEventListener('click', () => {
      navbarRef.current.classList.toggle('openNav');
      navbarRef.current.classList.remove('openSearch');
      searchIconRef.current.classList.replace('uil-times', 'uil-search');
    });

    navCloseBtn.addEventListener('click', () => {
      navbarRef.current.classList.remove('openNav');
    });
  }, []);

  return (
    <>
      <nav className="navbar" ref={navbarRef}>
        <i className="uil uil-bars navOpenBtn"></i>
        <div className="logo">
          <img src={Logo} alt="logo" width="110px" />
        </div>
        <ul className="nav-links">
          <i className="uil uil-bars navCloseBtn"></i>
          <li>
            <a href="pages/About/index.jsx">O nás</a>
          </li>
          <li className="education">
            <a href="pages/Education/index.jsx">Vzdělávání</a>
          </li>
          <li className="events">
            <a href="pages/Events/index.jsx">Události</a>
          </li>
          <li className="find_doula">
            <a href="pages/Find_doula/index.jsx">Najdi dulu</a>
          </li>
          <li className="contacts">
            <a href="pages/Contacts/index.jsx">Kontakty</a>
          </li>
        </ul>
        <i
          className="uil uil-search search-icon"
          ref={searchIconRef}
          id="searchIcon"
        ></i>
        <div className="search-box">
          <i className="uil uil-search search-icon"></i>
          <input type="text" placeholder="Hledám..." />
        </div>
      </nav>
      <main>
        <div className="card-container">
          <section>
            <div className="card">
              <img src="../img/bonding.jpg" alt="" width="150px" />
              <div className="card-text">
                {' '}
                Vítejte na stránkách zapsaného spolku České duly. Náš spolek
                působí od roku 2009 na poli podpory těhotných žen a
                šestinedělek. Spolek taktéž pořádá výcviky pro budoucí
                profesionální duly.
              </div>
            </div>
          </section>
          <div className="card">
            <img src="../img/DSC_0037.jpg" alt="" width="150px" />
            <div className="card-text">
              Na stránkách pro sebe můžete najít průvodkyni pro období
              očekávání, pro doprovod k porodu, pro konzultaci s kojením nebo
              pro podporu v šestinedělí. Naše duly vám můžou být nablízku i
              během potratu. Vyhledejte tu pravou dulu pro vás pomocí naší
              interaktivní mapy.{' '}
            </div>
            <div className="card-link"></div>
          </div>
          <div className="card">
            <img src="../img/pexels2.jpg" alt="" width="150px" />
            <div className="card-text">
              Pokud máte zájem stát se profesionální dulou a vyhledáváte vhodný
              kurz probíhající v Praze, přečtěte si, jak probíhá náš výcvik.{' '}
            </div>
            <div className="card-link"></div>
          </div>
        </div>
      </main>
    </>
  );
};
