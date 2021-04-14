import React, { useEffect, useState } from 'react';
import SearchPhonebook from './SearchPhonebook/SearchPhonebook';
import ContactList from './ContactsList/ContactList';
import AddContactForm from './AddContactForm/AddContactForm';
import phonebookRecerd from '../server/server';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [searchContact, setSearchContact] = useState({});

  useEffect(() => {
    phonebookRecerd.getPersons((data) => setPersons(data));
  }, []);

  const handleSearchPhonebook = (event) => {
    if (event.key === 'Enter') {
      const searchValue = event.target.value;
      setSearchContact({
        searchValue,
        searchResult: persons.find(
          (person) => person.name.toLowerCase() === searchValue.toLowerCase()
        ),
      });
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

    phonebookRecerd.addPerson(
      {
        name: newName,
        number: newPhoneNumber,
      },
      (data) => setPersons(persons.concat(data))
    );

    setNewName('');
    setNewPhoneNumber('');
  };

  const handleNewContact = (event) => {
    setNewName(event.target.value);
  };

  const handleNewPhoneNumber = (event) => {
    setNewPhoneNumber(event.target.value);
  };

  const handleDeleteContact = (id, person) => {
    if (window.confirm(`Are you sure to detele the ${person}?`))
      phonebookRecerd.deletePerson(id, () => {
        phonebookRecerd.getPersons((data) => setPersons(data));
      });

    return;
  };

  return (
    <div className='App'>
      <h2>Phonebook</h2>
      <SearchPhonebook
        handleSearch={handleSearchPhonebook}
        searchContact={searchContact}
      />
      <AddContactForm
        handleSubmit={handleSubmit}
        newName={newName}
        handleNewContact={handleNewContact}
        newPhoneNumber={newPhoneNumber}
        handleNewPhoneNumber={handleNewPhoneNumber}
      />
      <ContactList persons={persons} deleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
