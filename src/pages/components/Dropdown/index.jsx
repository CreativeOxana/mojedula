import React, { useState } from 'react';

export const Dropdown = ({ dropdownContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-toggle"
      ></button>
      {isOpen && <ul className="dropdown-menu">{dropdownContent}</ul>}
    </div>
  );
};
