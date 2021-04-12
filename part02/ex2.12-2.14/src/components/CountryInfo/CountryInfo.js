import React from 'react';
import './CountryInfo.css';

const CountryInfo = ({ country }) => {
  const { name, capital, population, languages, flag, alpha3Code } =
    country instanceof Array ? country[0] : country;
  return (
    <div>
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <h3>Spoken Languags:</h3>
      <ul>
        {languages.map((language) => (
          <li key={language.iso639_1}>{language.name}</li>
        ))}
      </ul>
      <img src={flag} alt={alpha3Code} />
    </div>
  );
};

export default CountryInfo;
