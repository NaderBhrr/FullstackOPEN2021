import React from 'react';
import Header from '../Header/Header';
import CountryWeather from '../CountryWeather/CountryWeather';
import './CountryInfo.css';

const CountryInfo = ({ country }) => {
  const { name, capital, population, languages, flag, alpha3Code } =
    country instanceof Array ? country[0] : country;
  return (
    <div>
      <Header text={name} />
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <h3>Spoken Languags:</h3>
      <ul>
        {languages.map((language) => (
          <li key={language.iso639_1}>{language.name}</li>
        ))}
      </ul>
      <img src={flag} alt={alpha3Code} />

      <CountryWeather city={capital} />
    </div>
  );
};

export default CountryInfo;
