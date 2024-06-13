import './style.css';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <>
      <div className="about-text">
        <h1>Kdo je dula</h1>
        <img src="img/pexels2.jpg" alt="" width="300px" />
        <div className="text">
          <p>
            Dula poskytuje ženě a její rodině podporu během těhotenství, porodu
            i šestinedělí. Doprovází­ je na jejich individuální cestě a pomáhá
            jim naplnit jejich představy o tomto životním období. Dula podporuje
            ženy v jejich rozhodnutích, v jejich vlastní sebejistotě a
            sebedůvěře. Dula vrací kompetence do rukou žen.
          </p>
          <p>
            Při porodu dula pomáhá vytvořit takovou atmosféru, kdy se žena
            cí­tí­ bezpečně, může se uvolnit a plně se soustředit na sebe a
            porod samotný. Díky kontinuální péči zná rodičku i její­ přání­ a
            představy týkají­cí­ se porodu, a může jí­ proto poskytnout citlivý
            a individuální druh podpory. Snaží­ se ženě pomoci projí­t porodní­
            zkušeností­ tak, aby její­ zážitek byl co možná nejlepší­ bez ohledu
            na to, jak se konkrétní porodní příběh odvíjí. Dula posiluje
            sebedůvěru ženy a pomáhá jí­ lépe zvládnout to, co porod v daný
            moment přináší. Svou plnou přítomností dula snižuje strach a napětí,
            pomáhá ženě zvládnout bolest i nečekané informace nebo události a
            utvrzuje ji v jejích schopnostech­.{' '}
          </p>
          <p>
            Dula chápe a respektuje fyziologii porodu i emocionální­ potřeby
            rodí­cí­ ženy. Uznává porod jako jeden z klí­čových okamžiků životě
            ženy. Uvědomuje si, že způsob, jakým žena, partner a dí­tě porod
            prožijí­, je pro ně velmi zásadní­ a důležité v mnoha rovinách.{' '}
          </p>
          <p>
            Podporuje ženu i partnera tak, aby byl porod v jejich rukou a
            kompetencích. Dává prostor jejich vztahu, jejich jedinečné
            zkušenosti a prožitku. Dula ženě, partnerovi nebo oběma dodává dle
            situace a potřeby nejen odvahu, ale také možnosti a informace, čas a
            prostor.
          </p>
          <p>
            Dula neposkytuje zdravotnické služby. Doplňuje práci lékařů a
            porodní­ch asistentek, avšak nezasahuje do jejich kompetencí­. Je
            připravena ženu doprovázet jak při porodu v nemocnici, tak v
            porodní­m domě nebo při porodu v domácnosti za pří­tomnosti porodní­
            asistentky.
          </p>
        </div>
        <h1>DULA podle Českých dul</h1>
        <p>
          V našem zapsaném spolku České duly chápeme dulu jako profesionála v
          oblasti pomáhají­cí­ profese, jehož hlavní­ kompetencí­ je pomáhat a
          provázet ženu na její­ individuální­ cestě k vlastní­mu porodu v
          takové mí­ře, na kterou je žena sama připravena a kterou si sama
          zvolí. Dula by měla být s klientkou v dobrém kontaktu a provázet ji
          celým předporodní­m, porodní­m a poporodní­m procesem v mí­ře
          stanovené vzájemným kontraktem. Česká dula nikdy nezasahuje do
          oblastí­, které nejsou v její­ kompetenci. Má však kontakty na
          odborní­ky z oblastí­ pomáhají­cí­ch profesí­, kteří­ mohou ženu
          podpořit či jí pomoci v pří­padě, že potřeby klientky již do
          kompetencí­ duly nespadají.{' '}
        </p>
        <p>
          Důležitou kompetencí­ České duly je umět pečovat sama o sebe a svoje
          znalosti použí­vat k tomu, aby se dobře rozví­jela jako profesionál v
          oblasti pomáhají­cí­ profese.
        </p>
        <p>
          Česká dula má rámcové znalosti z oboru psychologie, medicí­ny,
          legislativy, kojení­ a péče o dí­tě. Při vzdělávání­ Českých dul je
          důraz kladen na dobrou znalost hranic profese a také sebezkušenostní­
          práci. České duly jsou vázány etickým kodexem, procházejí­ pravidelnou
          supervizí­ a následným vzdělávání­m.
        </p>
        <p>
          Náš spolek eviduje duly s různým stupněm akreditace. Certifikované
          České duly (duly, které splnily veškeré podmí­nky pro zí­skání­
          osvědčení­ – certifikaci), duly absolventky (které absolvovaly celou
          prezenční­ část kurzu, ale prozatí­m nesplňují­ některé z podmí­nek
          pro udělení­ certifikátu), duly ve výcviku (duly, které jsou v
          současné době účastnicemi kurzu), nejvyšší­m stupněm akreditace jsou
          pak duly konzultantky, které pracují­ s dulami ve výcviku.
        </p>
        <h2>Jaké služby dula nabí­zí­?</h2>
        <ul>
          <li>
            psychickou a emocionální­ podporu ženy v průběhu těhotenství­,
            porodu a šestinedělí­
          </li>
          <li>
            nezaujaté předávání možností a aktuálních informací, spolupráci na
            pří­pravě porodní­ho plánu
          </li>
          <li>naslouchaní, nesouzení</li>
          <li>nepřetržitý doprovod během porodu a podporu v tomto čase</li>
          <li>
            možnosti nefarmakologické úlevy od bolesti (polohování, teplo,
            provázení slovem, práce s dechem, popřípadě práce s masážemi,
            aromaterapií, rebozem, porodní napářkou atd…)
          </li>
          <li>zapojení partnera dle potřeb a přání rodiny</li>
          <li>vytváření prostoru pro komunikaci mezi rodičkou a personálem</li>
          <li>podporu pro partnera a rodinu v celém pečujícím období</li>
          <li>zkušenosti a podporu při zahájení­ kojení­</li>
          <li>
            podporu nové rodině v šestinedělí­, předávání­ zkušeností­ s péčí­ o
            dí­tě
          </li>
          <li>kontakty na další odborníky a služby</li>
          <li>
            některé České duly jsou taktéž vzdělané v některých dalších oborech,
            jako je laktační poradenství, zpracovávání placenty, masáži
            těhotných nebo miminek a jiné
          </li>
        </ul>
        <h3>Co je pro nás důležité?</h3>
        <ul>
          <li>
            České duly usilují­ o stálé zvyšování­ kvality vzdělávání­ a práce
            dul v ČR, o dodržování­ etických i profesní­ch standardů, o
            zlepšování­ informovanosti laické i odborné veřejnosti.
          </li>
          <li>
            České duly podporují­ takové změny v systému českého porodnictví­,
            které vycházejí­ z potřeb žen a novorozenců. České duly usilují­ o
            profesionalizaci profese duly.
          </li>
          <li>Organizace České duly pomáhá ženám nají­t kvalifikovanou dulu</li>
          <li>
            Pořádá základní­ i postgraduální­ kurzy pro duly, spolupracuje s
            odbornými a dobrovolnými organizacemi podobného zaměření­,
            spolupracuje se zahraniční­mi organizacemi s obdobnými cí­li,
            vytváří­ a publikuje materiály, které přibližují­ laické i odborné
            veřejnosti práci dul.
          </li>
          <li>
            Spolek České duly poskytuje profesní zázemí svým členkám. Organizuje
            pravidelné supervize a vytváří bezpečné prostředí pro vzájemnou
            podporu a sdílení.
          </li>
          <li>
            Spolek podporuje studentky a duly tak, aby mohly svou práci
            vykonávat profesionálně, nezaujatě a s láskou.
          </li>
        </ul>
        <h3>Jak kontaktovat dulu?</h3>
        <p>
          Na našich stránkách naleznete{' '}
          <Link to="/find_doula" className="link">
            mapu Českých dul
          </Link>
          , kde si můžete vybrat služby duly podle místa, kde ji sháníte.
        </p>
        <h3>Chcete se sama stát dulou?</h3>
        <p>
          Veškeré důležité informace o našem výcviku pro vyškolení
          profesionálních dul najdete v sekci vzdělávání. Samozřejmě nás můžete
          oslovit na kontaktním emailu{' '}
          <a href="mailto: vzdelavani@mojedula.cz">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </p>
      </div>
    </>
  );
};
