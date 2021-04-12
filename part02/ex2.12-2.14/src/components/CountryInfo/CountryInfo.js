import React from 'react';
import './CountryInfo.css';

const CountryInfo = ({ country }) => {
  const { name, capital, population, languages, flag } =
    country instanceof Array ? country[0] : country;
  return (
    <div>
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <h3>Spoken Languags:</h3>
      <ul>
        {languages.map((language) => (
          <li key={name}>{language.name}</li>
        ))}
      </ul>
      <img src={flag} alt={name} />
    </div>
  );
};

export default CountryInfo;
