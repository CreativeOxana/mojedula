import { useState } from 'react';
import arrow from '../../../../public/img/arrow.png';
import arrow_up from '../../../../public/img/arrow_up.png';
import './style.css';

export const CollapseBox = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const showTurn = !isOpen ? 'colapsablePart--hidden' : 'colapsablePart';

  return (
    <>
      <div className="title menu">
        <h1
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {title}
          {!isOpen ? (
            <img className="arrow" src={arrow} />
          ) : (
            <img className="arrow" src={arrow_up} />
          )}
        </h1>
        {isOpen && children}
      </div>
    </>
  );
};
