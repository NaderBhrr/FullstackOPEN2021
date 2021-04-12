import React from 'react';
import './CountryInfo.css';

const CountryInfo = ({ country }) => {
  const { capital, population, languages, flag } = country[0];
  return (
    <div>
      <h2>{country[0].name}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <h3>Spoken Languags:</h3>
      <ul>
        {languages.map((language) => (
          <li>{language.name}</li>
        ))}
      </ul>
      <img src={flag} alt='' srcset='' />
    </div>
  );
};

export default CountryInfo;
