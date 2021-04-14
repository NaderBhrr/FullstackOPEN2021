import React, { useState } from 'react';

const SearchPhonebook = ({ handleSearch, searchContact }) => {
  const [searchInput, setSearchInput] = useState('');

  const searchMessage = {
    0: '',
    1: `The contact you searched is found:\n ${4}`,
    2: 'Contact not found',
  };
  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };
  return (
    <div>
      <h4>Search Phonebook:</h4>
      <input
        type='search'
        name='search'
        placeholder='Search a contact number'
        onKeyDown={handleSearch}
        onChange={handleSearchInput}
      />
      <span>
        {/* {!searchInput && searchMessage[0]} */}
        {searchContact.searchResult && searchInput
          ? `The contact you searched is found:\n ${searchContact.searchResult.name}`
          : !searchContact.searchResult
          ? searchMessage[2]
          : searchMessage[0]}
      </span>
    </div>
  );
};

export default SearchPhonebook;
