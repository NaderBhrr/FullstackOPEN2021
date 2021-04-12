import React, { useState } from 'react';
import Country from '../Country/Country';

const SearchListDisplay = ({ result }) => {
  const [countryToBeDisplayed, setCountryToBeDisplayed] = useState({
    name: '',
    show: false,
  });
  return (
    <ul>
      {result.map((country) => (
        <Country
          key={country.alpha2Code}
          country={country}
          buttonText={
            !countryToBeDisplayed.show ? 'Show Details' : 'Hide Details'
          }
          buttonAction={(_event) => {
            setCountryToBeDisplayed({
              name: country.name,
              show: !countryToBeDisplayed.show,
            });
          }}
          countryToBeDisplayed={countryToBeDisplayed}
        />
      ))}
    </ul>
  );
};

export default SearchListDisplay;
