import './style.css';

export const Events = () => {
  return (
    <>
      <div className="container">
        <p>
          <strong>České duly z.s.</strong> pořádají postgraduální kurzy,
          semináře a workshopy.
          <br />
          <br />
          Dále probíhají osobní i online schůzky s našimi dulami, týkající se
          buď témat práce duly, informace pro rodičky, nebo také informační
          schůzky ohledně našeho výcviku.
          <br />
          <br />
          Také zveřejňujeme události, kde naše duly můžete potkat, jako
          například předporodní přípravy, ženské kruhy, podpůrné skupiny a další
          sezonní akce, stejně jako festivaly a další větší události, věnující
          se našim tématům.
        </p>

        <h3>
          <strong>Události, na které se můžete těšit: </strong>
        </h3>
        <ul className="event-dates">
          <li>24.6.2024, 18:00 - Setkání s dulami online</li>
          <li>26.6.2024, 18:00 - Předporodní příprava</li>
          <li>28.6.2024, 20:00 - Ženský kruh</li>
          <li>1.7.2024, 17:00 - Podpůrná skupina</li>
        </ul>
        <div className="image">
          <img
            src="img/pages/women-together.jpg"
            alt="women-together"
            width="500px"
          />
        </div>
        <p>
          Bližší informace o jednotlivých událostech získáte na{' '}
          <a href="mailto: info@mojedula.cz" target="_blank">
            emailu
          </a>
          <i className="fa-solid fa-envelope"></i>
        </p>
      </div>
    </>
  );
};
