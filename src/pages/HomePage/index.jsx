// import { CollapseBox } from '../components/CollapseBox';
import { Link } from 'react-router-dom';
import './style.css';

export const HomePage = () => {
  return (
    <div className="app-container">
      <main>
        <div className="app-card">
          <div className="card-container">
            <div className="card card-vycvik scale-element">
              <img src="../img/pages/ceske-duly.jpg" alt="" width="200px" />
              <div className="card-text">
                {' '}
                Vítejte na stránkách zapsaného spolku České duly. Náš spolek
                působí od roku 2009 na poli podpory těhotných žen a
                šestinedělek. Spolek taktéž pořádá výcviky pro budoucí
                profesionální duly.
              </div>
              <button className="card-button">
                {' '}
                <Link to="/about">Zjisti více o spolku</Link>
              </button>
            </div>
            <div className="card scale-element">
              <img src="../img/pages/bonding.jpg" alt="" width="200px" />
              <div className="card-text">
                Na stránkách pro sebe můžete najít průvodkyni pro období
                očekávání, pro doprovod k porodu, pro konzultaci s kojením nebo
                pro podporu v šestinedělí. Naše duly vám můžou být nablízku i
                během potratu. Vyhledejte tu pravou dulu pro vás pomocí naší
                interaktivní mapy.{' '}
              </div>
              <button className="card-button">
                {' '}
                <Link to="/find_doula">Najdi dulu pro sebe</Link>
              </button>
            </div>
            <div className="card scale-element">
              <img src="../img/pages/pregnant-belly.jpg" alt="" width="200px" />
              <div className="card-text">
                Pokud máte zájem stát se profesionální dulou a vyhledáváte
                vhodný kurz probíhající v Praze, přečtěte si, jak probíhá náš
                výcvik.{' '}
              </div>
              <button className="card-button">
                {' '}
                <Link to="/education">Zjisti více o výcviku</Link>
              </button>
            </div>
          </div>
          <div className="text-container scale-element">
            <h1>Kdo je dula</h1>
            <p className="text">
              Poskytuje emocionální podporu během těhotenství, porodu a v
              průběhu šestinedělí ženě a její rodině. Drží ženy v sebejistotě a
              důvěře ve vlastní tělo. Podporuje ženy v jejich rozhodnutích.
              Vrací kompetence do rukou žen. To je DULA, jak říká překlad z
              řečtiny, služebnice. Dula rodiče doprovází­ na jejich cestě a
              pomáhá jim naplnit jejich představy o porodu. Pomáhá vytvořit
              takovou atmosféru při porodu, kdy se žena cí­tí­ bezpečně, může se
              uvolnit a plně se soustředit na sebe a porod samotný. Zná rodičku
              i její­ přání­ a představy týkají­cí­ se porodu a může jí­ proto
              poskytnout specifický druh podpory. Snaží­ se ženě pomoci projí­t
              porodní­ zkušeností­ tak, aby její­ zážitek byl co možná
              nejlepší­. A to zejména v pří­padě, že žena v průběhu porodu
              prožije něco, co neplánovala nebo si nepřála proží­t. Dula
              posiluje sebedůvěru ženy a pomáhá jí­ lépe zvládnout zákroky,
              které jsou nepří­jemné, snižuje svou pří­tomností­ strach a
              napětí, pomáhá jí zvládnout bolest a utvrzuje v její schopnosti­.
              Dula chápe a respektuje fyziologii porodu i emocionální­ potřeby
              rodí­cí­ ženy. Uznává porod jako jeden z klí­čových okamžiků
              životě ženy. Uvědomuje si, že způsob, jakým žena a dí­tě porod
              prožijí­, je pro oba velmi zásadní­ a důležitý v mnoha rovinách.
              Také podporuje roli otce u porodu. Dula neposkytuje zdravotnické
              služby. Doplňuje práci lékařů a porodní­ch asistentek, avšak
              nezasahuje do jejich kompetencí­. Je připravena ženu doprovázet
              jak při porodu v nemocnici, tak v porodní­m domě nebo při porodu v
              domácnosti (vždy za pří­tomnosti porodní­ asistentky).
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
