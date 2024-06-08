import '../HomePage/style.css';
import './style.css';
import { useEffect, useRef } from 'react';
import Logo from '/img/logo.png';
import { CollapseBox } from '../components/CollapseBox';

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
        <div className="container">
          <div className="card-container">
            <div className="card">
              <img src="../img/pexels1.jpg" alt="" width="200px" />
              <div className="card-text">
                {' '}
                Vítejte na stránkách zapsaného spolku České duly. Náš spolek
                působí od roku 2009 na poli podpory těhotných žen a
                šestinedělek. Spolek taktéž pořádá výcviky pro budoucí
                profesionální duly.
              </div>
            </div>
            <div className="card">
              <img src="../img/DSC_0037.jpg" alt="" width="200px" />
              <div className="card-text">
                Na stránkách pro sebe můžete najít průvodkyni pro období
                očekávání, pro doprovod k porodu, pro konzultaci s kojením nebo
                pro podporu v šestinedělí. Naše duly vám můžou být nablízku i
                během potratu. Vyhledejte tu pravou dulu pro vás pomocí naší
                interaktivní mapy.{' '}
              </div>
              <div className="card-link">odkaz na mapu</div>
            </div>
            <div className="card">
              <img src="../img/bonding.jpg" alt="" width="200px" />
              <div className="card-text">
                Pokud máte zájem stát se profesionální dulou a vyhledáváte
                vhodný kurz probíhající v Praze, přečtěte si, jak probíhá náš
                výcvik.{' '}
              </div>
              <div className="card-link">odkaz na výcvik</div>
            </div>
          </div>
          <div className="text-container">
            <CollapseBox title="Kdo je dula ">
              <p className="text">
                Poskytuje emocionální podporu během těhotenství, porodu a v
                průběhu šestinedělí ženě a její rodině. Drží ženy v sebejistotě
                a důvěře ve vlastní tělo. Podporuje ženy v jejich rozhodnutích.
                Vrací kompetence do rukou žen. To je DULA, jak říká překlad z
                řečtiny, služebnice. Dula rodiče doprovází­ na jejich cestě a
                pomáhá jim naplnit jejich představy o porodu. Pomáhá vytvořit
                takovou atmosféru při porodu, kdy se žena cí­tí­ bezpečně, může
                se uvolnit a plně se soustředit na sebe a porod samotný. Zná
                rodičku i její­ přání­ a představy týkají­cí­ se porodu a může
                jí­ proto poskytnout specifický druh podpory. Snaží­ se ženě
                pomoci projí­t porodní­ zkušeností­ tak, aby její­ zážitek byl
                co možná nejlepší­. A to zejména v pří­padě, že žena v průběhu
                porodu prožije něco, co neplánovala nebo si nepřála proží­t.
                Dula posiluje sebedůvěru ženy a pomáhá jí­ lépe zvládnout
                zákroky, které jsou nepří­jemné, snižuje svou pří­tomností­
                strach a napětí, pomáhá jí zvládnout bolest a utvrzuje v její
                schopnosti­. Dula chápe a respektuje fyziologii porodu i
                emocionální­ potřeby rodí­cí­ ženy. Uznává porod jako jeden z
                klí­čových okamžiků životě ženy. Uvědomuje si, že způsob, jakým
                žena a dí­tě porod prožijí­, je pro oba velmi zásadní­ a
                důležitý v mnoha rovinách. Také podporuje roli otce u porodu.
                Dula neposkytuje zdravotnické služby. Doplňuje práci lékařů a
                porodní­ch asistentek, avšak nezasahuje do jejich kompetencí­.
                Je připravena ženu doprovázet jak při porodu v nemocnici, tak v
                porodní­m domě nebo při porodu v domácnosti (vždy za
                pří­tomnosti porodní­ asistentky).
              </p>
            </CollapseBox>
          </div>
        </div>
      </main>
      <footer>
        <div className="container"></div>
      </footer>
    </>
  );
};
