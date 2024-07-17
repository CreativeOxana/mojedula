import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Dropdown } from '../Dropdown';
import Logo from '/img/logo.png';

export const Header = () => {
  const dropdownContent = (
    <ul>
      <li>
        <Link to="/about/association">O spolku</Link>
      </li>
    </ul>
  );

  const handleNavClick = () => {
    navbarRef.current.classList.remove('openNav');
  };

  const navbarRef = useRef(null);
  // const searchIconRef = useRef(null);

  useEffect(() => {
    // searchIconRef.current.addEventListener('click', () => {
    //   navbarRef.current.classList.toggle('openSearch');
    //   navbarRef.current.classList.remove('openNav');
    //   if (navbarRef.current.classList.contains('openSearch')) {
    //     return searchIconRef.current.classList.replace(
    //       'uil-search',
    //       'uil-times',
    //     );
    //   }
    //   searchIconRef.current.classList.replace('uil-times', 'uil-search');
    // });

    const navOpenBtn = document.querySelector('.navOpenBtn');
    const navCloseBtn = document.querySelector('.navCloseBtn');

    navOpenBtn.addEventListener('click', () => {
      navbarRef.current.classList.toggle('openNav');
      // navbarRef.current.classList.remove('openSearch');
      // searchIconRef.current.classList.replace('uil-times', 'uil-search');
    });

    navCloseBtn.addEventListener('click', () => {
      navbarRef.current.classList.remove('openNav');
    });

    // const closeSearch = document.querySelector('.close-search');

    // closeSearch.addEventListener('click', () => {
    //   navbarRef.current.classList.toggle('openNav');
    //   navbarRef.current.classList.remove('openSearch');
    // });
  }, []);

  return (
    <>
      <nav className="header" ref={navbarRef}>
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="logo" width="110px" />
            </Link>
          </div>

          <i className="uil uil-bars navOpenBtn"></i>

          <div className="navbar">
            <ul className="nav">
              <i className="uil uil-bars navCloseBtn"></i>
              <li className="about" onClick={handleNavClick}>
                <Link to="/about">O nás</Link>
              </li>
              <li className="/about/association" onClick={handleNavClick}>
                <Dropdown dropdownContent={dropdownContent} />
              </li>
              <li className="education" onClick={handleNavClick}>
                <Link to="/education">Vzdělávání</Link>
              </li>
              <li className="events" onClick={handleNavClick}>
                <Link to="/events">Události</Link>
              </li>
              <li className="find_doula" onClick={handleNavClick}>
                <Link to="/find_doula">Najít dulu</Link>
              </li>
              <li className="contacts" onClick={handleNavClick}>
                <Link to="/contacts">Kontakty</Link>
              </li>
            </ul>

            {/* <div className="searchbar">
              <div className="searchbar-label" ref={searchIconRef}>
                <i className="uil uil-search search-icon" id="searchIcon"></i>
              </div>

              <div className="searchbar-control">
                <div className="search-box">
                  <i className="uil uil-search search-icon"> </i>
                  <input type="text" placeholder="Hledám..." />{' '}
                  <button className="close-search">&times;</button>
                </div>
              </div> 
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
};
