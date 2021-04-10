import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '2367492' },
  ]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');

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
    console.log(event.target.value);
    console.log(event.target.value === '');
    setNewName(event.target.value);
  };

  const handleNewPhoneNumber = (event) => {
    console.log(event.target.value);
    setNewPhoneNumber(event.target.value);
  };

  return (
    <div>
      {/* <div>{(() => console.log(persons))()}</div> */}
      <h2>Phonebook</h2>
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
