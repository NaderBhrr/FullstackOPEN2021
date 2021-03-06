import React, { useEffect, useState } from 'react';
import SearchPhonebook from './SearchPhonebook/SearchPhonebook';
import ContactList from './ContactsList/ContactList';
import AddContactForm from './AddContactForm/AddContactForm';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [foundContact, setFoundContact] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/persons`)
      .then((response) => response.data)
      .then((data) => setPersons(data));
  }, []);

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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Error handling conditions
    if (/[^\w\s]/g.test(newName)) {
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

    setPersons(persons.concat({ name: newName, number: newPhoneNumber }));

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
    <div className='App'>
      <h2>Phonebook</h2>
      <SearchPhonebook
        handleSearch={handleSearchPhonebook}
        foundContact={foundContact}
      />
      <AddContactForm
        handleSubmit={handleSubmit}
        newName={newName}
        handleNewContact={handleNewContact}
        newPhoneNumber={newPhoneNumber}
        handleNewPhoneNumber={handleNewPhoneNumber}
      />
      <ContactList persons={persons} />
    </div>
  );
};

export default App;
