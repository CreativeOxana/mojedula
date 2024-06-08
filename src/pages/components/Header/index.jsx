import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '/img/logo.png';

export const Header = () => {
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
          <li className="about">
            <Link to="/about">O nás</Link>
          </li>
          <li className="education">
            <Link to="/education">Vzdělávání</Link>
          </li>
          <li className="events">
            <Link to="/events">Události</Link>
          </li>
          <li className="find_doula">
            <Link to="/find_doula">Najít dulu</Link>
          </li>
          <li className="contacts">
            <Link to="/contacts">Kontakty</Link>
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
    </>
  );
};
