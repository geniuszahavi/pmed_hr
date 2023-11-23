import React from 'react';

const Menu = ({ isOpen, onClose, title, listItems }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-10 left-10  flex items-center justify-center  ">
      <div className="bg-white p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <ul>
          {listItems?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Menu;
