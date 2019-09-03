import React from 'react';
import category from '../../utils/category';

/* eslint-disable-next-line */
const CategorySelector = ({ value, onChange }) => (
  <select value={value} onChange={onChange}>
    {Object.values(category).map(option => (
      <option key={option} value={option}>
        {option.toUpperCase()}
      </option>
    ))}
  </select>
);

export default CategorySelector;
