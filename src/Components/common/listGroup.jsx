import React from 'react';

const listGroup = ({ selectedItem, items, onItemSelect }) => {

  return (
    <ul className="list-group">
      {items.map(g => <li key={g._id} className={selectedItem === g.name ? "list-group-item active" : "list-group-item"} onClick={() => onItemSelect(g.name)} >{g.name}</li>)}
    </ul>
  );
}

export default listGroup;