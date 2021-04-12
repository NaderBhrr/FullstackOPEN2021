import React from 'react';
import CountryInfo from '../CountryInfo/CountryInfo';
import SearchListDisplay from '../SearchListDisplay/SearchListDisplay';

const SearchMessage = ({ data }) => (
  <div>
    {data.length > 10 ? (
      'Too many matches, Please make your search more specific'
    ) : data.length < 10 && data.length !== 1 ? (
      <SearchListDisplay result={data} />
    ) : data.length === 1 ? (
      <CountryInfo country={data} />
    ) : null}
  </div>
);

export default SearchMessage;
