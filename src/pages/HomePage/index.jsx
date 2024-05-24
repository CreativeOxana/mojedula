import '../HomePage/style.css';
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
    <nav className="navbar" ref={navbarRef}>
      <i className="uil uil-bars navOpenBtn"></i>
      <div src={Logo} className="logo">
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
  );
};
