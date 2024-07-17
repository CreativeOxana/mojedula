import React, { useState } from 'react';

export const Dropdown = ({ dropdownContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="dropdown">
      <a href="/about/association" onClick={handleDropdownClick}></a>
      {isOpen && <ul className="dropdown-menu">{dropdownContent}</ul>}
    </li>
  );
};
