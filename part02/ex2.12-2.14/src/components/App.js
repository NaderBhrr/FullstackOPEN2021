import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [foundCountries, setFoundCountries] = useState([]);
  const [searchingCountry, setSearchingCountry] = useState('');

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then((response) => response.data)
      .then((data) => setCountries(data));
  }, []);

  // Evant handlers
  const searchCountries = (event) => {
    if (event.target.nodeType === 1) {
      setFoundCountries(
        countries.filter((country) =>
          country.name.toLowerCase().includes(searchingCountry.toLowerCase())
        )
      );

      setSearchingCountry('');
    }
  };

  return (
    <div className='App'>
      <Searchbar
        onChange={(event) => setSearchingCountry(event.target.value)}
        value={searchingCountry}
      />
      <Button text='Search Countries' startSearch={searchCountries} />
    </div>
  );
};

export default App;
