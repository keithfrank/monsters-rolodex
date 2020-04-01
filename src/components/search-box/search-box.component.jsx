import React from 'react';
import './search-box.styles.css';

//functional component (soesn't have access to stae or lifecycle)
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);
