import React from 'react';
import CountryInfo from '../CountryInfo/CountryInfo';

const SearchMessage = ({ data }) => (
  <div>
    {data.length > 10 ? (
      'Too many matches, Please make your search more specific'
    ) : data.length < 10 && data.length !== 1 ? (
      <ul>
        {data.map((country) => (
          <li key={country.alpha2Code}>{country.name}</li>
        ))}
      </ul>
    ) : data.length === 1 ? (
      <CountryInfo country={data} />
    ) : null}
  </div>
);

export default SearchMessage;
