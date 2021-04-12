import React from 'react';
import Button from '../Button/Button';
import CountryInfo from '../CountryInfo/CountryInfo';

const Country = ({
  country,
  buttonText,
  buttonAction,
  countryToBeDisplayed,
}) => (
  <>
    <li>
      {country.name} <Button text={buttonText} handleAction={buttonAction} />
      <div className='country-info'>
        {countryToBeDisplayed.name === country.name &&
          countryToBeDisplayed.show && <CountryInfo country={country} />}{' '}
      </div>
    </li>
  </>
);

export default Country;
