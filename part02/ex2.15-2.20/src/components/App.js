import React, { useEffect, useState } from 'react';
import SearchPhonebook from './SearchPhonebook/SearchPhonebook';
import ContactList from './ContactsList/ContactList';
import AddContactForm from './AddContactForm/AddContactForm';
import Message from './Message/Message';
import phonebookCRUD from '../server/server';
import './App.css';

const { getPersons, addPerson, updatePerson, deletePerson } = phonebookCRUD;

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [searchContact, setSearchContact] = useState({});
  const [actionMessage, setActionMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getPersons((data) => setPersons(data));
  }, [actionMessage, errorMessage]);

  /* 
    - The problem with this regex is that is does not allow names with . e.g. thomas Jr.
  */
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
      persons.some(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      if (persons.some((person) => person.number === newPhoneNumber)) {
        console.log('already true');
        alert(`${newName} already exists in the phonebook`);
        setNewName('');
        setNewPhoneNumber('');
        return;
      }
      const updatedPerson = {
        ...persons.find(
          (person) => person.name.toLowerCase() === newName.toLowerCase()
        ),
        number: newPhoneNumber,
      };
      if (
        window.confirm(
          ` " ${updatedPerson.name} " is already added to the phonebook, do you want to update old number with a new number?`
        )
      ) {
        updatePerson(updatedPerson, (data) => {
          setPersons(
            persons.map((person) => (person._id === data._id ? data : person))
          );
        }).catch((error) => console.log(error));

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
      !persons.some(
        (person) =>
          person.name.toLowerCase() === newName.toLowerCase() &&
          person.number === newPhoneNumber
      )
    ) {
    }
    addPerson(
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
    ).catch((error) => {
      setErrorMessage('minLengthError');
      setActionMessage('validate');

      setTimeout(() => {
        setActionMessage(null);
        setErrorMessage(null);
      }, 3500);
    });
  };

  const handleNewPerson = (event) => {
    setNewName(event.target.value);
  };

  const handleNewPhoneNumber = (event) => {
    setNewPhoneNumber(event.target.value);
  };

  const handleDeletePerson = (id, person) => {
    if (window.confirm(`Are you sure to delete ${person}?`))
      deletePerson(id, () => {
        getPersons((data) => setPersons(data));
      }).catch((error) => {
        setErrorMessage(`deleteError`);
        setPersons(persons.filter((person) => person.id !== id));
        console.error(error.message);

        setTimeout(() => {
          setActionMessage(null);
        }, 5000);
      });

    setActionMessage('delete');
    setTimeout(() => {
      setActionMessage(null);
    }, 3000);

    return;
  };

  return (
    <div className='App'>
      <h2>Phonebook</h2>
      <Message action={actionMessage} error={errorMessage} />
      <SearchPhonebook
        handleSearch={handleSearchPhonebook}
        searchContact={searchContact}
      />
      <AddContactForm
        handleSubmit={handleSubmit}
        newName={newName}
        handleNewPerson={handleNewPerson}
        newPhoneNumber={newPhoneNumber}
        handleNewPhoneNumber={handleNewPhoneNumber}
      />
      <ContactList persons={persons} deleteContact={handleDeletePerson} />
    </div>
  );
};

export default App;
