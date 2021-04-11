import React from 'react';

const searchPhonebook = ({ handleSearch, foundContact }) => {
  return (
    <div>
      <h4>Search Phonebook:</h4>
      <input
        type='search'
        name='search'
        plsceholder='Search a contact number'
        onKeyDown={handleSearch}
      />
      <span>
        {foundContact
          ? `The contact you searched is found:\n ${foundContact.name}`
          : `No result found`}
      </span>
    </div>
  );
};

export default searchPhonebook;
