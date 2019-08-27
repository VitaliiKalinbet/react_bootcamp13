import React from 'react';

const TechList = ({ items }) => (
    <ul>
      {items.map(item => (
        <li key={item.id}>
            <span>
                {item.name}
            </span>
        </li>
      ))}
    </ul>
  );

export default TechList;