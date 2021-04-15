import React, { useEffect, useState } from 'react';
import SearchPhonebook from './SearchPhonebook/SearchPhonebook';
import ContactList from './ContactsList/ContactList';
import AddContactForm from './AddContactForm/AddContactForm';
import Message from './Message/Message';
import phonebookRecerd from '../server/server';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [searchContact, setSearchContact] = useState({});
  const [actionMessage, setActionMessage] = useState(null);

  useEffect(() => {
    phonebookRecerd.getPersons((data) => setPersons(data));
  }, []);

  if (/[^\w\s]/g.test(newName)) {
    alert(`${newName} is not a valid entry please try again`);
    setNewName('');
    setNewPhoneNumber('');
  }

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
      alert(`${newPhoneNumber} is not a valid entry. Please try again`);
      setNewName('');
      setNewPhoneNumber('');

      return;
    }
    if (
      !persons.every(
        (person) => person.name.toLowerCase() !== newName.toLowerCase()
      )
    ) {
      if (!persons.every((person) => person.number !== newPhoneNumber)) {
        console.log('already true');
        alert(`${newName} already exists in the phonebook`);
        setNewName('');
        setNewPhoneNumber('');
        return;
      }
      const updatedContact = {
        ...persons.find((person) => person.name === newName),
        number: newPhoneNumber,
      };
      if (
        window.confirm(
          `${updatedContact.name} is already added to the phonebook, do you want to update old number with a new number?`
        )
      ) {
        phonebookRecerd.updatePerson(updatedContact, (data) =>
          setPersons(
            persons.map((person) => (person.id === data.id ? data : person))
          )
        );

        setNewName('');
        setNewPhoneNumber('');
        setActionMessage('update');

        setTimeout(() => {
          setActionMessage(null);
        }, 5000);
        return;
      } else {
        setNewName('');
        setNewPhoneNumber('');
      }
    }

    if (
      !persons.every(
        (person) =>
          person.name.toLowerCase() !== newName.toLowerCase() &&
          person.number === newPhoneNumber
      )
    ) {
    }
    phonebookRecerd.addPerson(
      {
        name: newName,
        number: newPhoneNumber,
      },
      (data) => {
        setPersons(persons.concat(data));
        setNewName('');
        setNewPhoneNumber('');
        setActionMessage('add');
        setTimeout(() => {
          setActionMessage(null);
        }, 5000);
      }
    );
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
    setActionMessage('delete');
    setTimeout(() => {
      setActionMessage(null);
    }, 5000);

    return;
  };

  return (
    <div className='App'>
      <h2>Phonebook</h2>
      <Message action={actionMessage} />
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
