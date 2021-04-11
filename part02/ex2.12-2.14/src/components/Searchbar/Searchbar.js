import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return <input type='search' onChange={onChange} name='' value={value} />;
};

export default SearchBar;
