import './style.css';

export const Events = () => {
  return (
    <>
      <div className="events-container">
        <p>
          <strong>České duly z.s.</strong> pořádají postgraduální kurzy,
          semináře a workshopy.
        </p>
        <p>
          Dále probíhají osobní i online schůzky s našimi dulami, týkající se
          buď témat práce duly, informace pro rodičky, nebo také informační
          schůzky ohledně našeho výcviku.{' '}
        </p>
        <p>
          Také zveřejňujeme události, kde naše duly můžete potkat, jako
          například předporodní přípravy, ženské kruhy, podpůrné skupiny a další
          sezonní akce, stejně jako festivaly a další větší události, věnující
          se našim tématům.
        </p>
        <p>
          <strong>Události v nejbližší době: </strong>
        </p>
        <ul>
          <li>13.6.2024, 18:00 - Setkání s dulami online</li>
          <li>16.6.2024, 18:00 - Předporodní příprava</li>
          <li>20.6.2024, 20:00 - Ženský kruh</li>
          <li>25.6.2024, 17:00 - Podpůrná skupina</li>
        </ul>
        <p>
          Bližší informace o jednotlivých událostech získáte na{' '}
          <a href="mailto: info@mojedula.cz">emailu </a>
          <i class="fa-solid fa-envelope"></i>
        </p>
      </div>
    </>
  );
};
