import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [foundContact, setFoundContact] = useState('');

  const handleSearchPhonebook = (event) => {
    if (event.key === 'Enter') {
      const searchValue = event.target.value;
      setFoundContact(
        persons.find(
          (person) => person.name.toLowerCase() === searchValue.toLowerCase()
        )
      );
    }

    return;
  };

  const AddNewContact = (event) => {
    event.preventDefault();
    console.log('new Contact: ', newName);

    // Error handling conditions
    if (/\W|\d/g.test(newName)) {
      alert(`${newName} is not a valid entry please try again`);
      setNewName('');
      setNewPhoneNumber('');

      return;
    }
    if (!/\d/g.test(newPhoneNumber)) {
      alert(`${newPhoneNumber} is not a valid entry please try again`);
      setNewName('');
      setNewPhoneNumber('');

      return;
    }
    if (
      !persons.every(
        (person) => person.name.toLowerCase() !== newName.toLowerCase()
      )
    ) {
      alert(`${newName} already exists in the phonebook`);
      setNewName('');
      setNewPhoneNumber('');

      return;
    }

    setPersons(persons.concat({ name: newName, phoneNumber: newPhoneNumber }));

    setNewName('');
    setNewPhoneNumber('');
  };

  const handleNewContact = (event) => {
    setNewName(event.target.value);
  };

  const handleNewPhoneNumber = (event) => {
    setNewPhoneNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <h4>Search Phonebook:</h4>
        <input
          type='search'
          name='search'
          plsceholder='Search a contact number'
          onKeyDown={handleSearchPhonebook}
        />
        <span>
          {foundContact
            ? `The contact you searched is found:\n ${foundContact.name}`
            : `No result found`}
        </span>
      </div>

      <form onSubmit={AddNewContact}>
        <div>
          name:{' '}
          <input type='text' value={newName} onChange={handleNewContact} />
        </div>
        <div>
          Contact Number:
          <input
            type='text'
            value={newPhoneNumber}
            onChange={handleNewPhoneNumber}
          />
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
      <h2>Contact Information:</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            {person.name} <div>&nbsp;{person.phoneNumber}</div>{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
