import React from 'react';
import Select from 'react-select';

const CategorySelector = ({ options, value, onChange }) => {
  return (
    <Select isClearable options={options} value={value} onChange={onChange} />
  );
};

export default CategorySelector;
