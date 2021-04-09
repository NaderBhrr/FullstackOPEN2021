import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);

  const [newName, setNewName] = useState('');

  const AddNewContact = (event) => {
    event.preventDefault();
    setPersons(persons.concat({ name: newName }));
    setNewName('');
  };

  const handleNewContact = (event) => {
    const inputValue = event.target.value;
    setNewName(inputValue);
  };

  return (
    <div>
      <div>{(() => console.log(persons, newName))()}</div>
      <h2>Phonebook</h2>
      <form onSubmit={AddNewContact}>
        <div>
          name:{' '}
          <input type='text' value={newName} onChange={handleNewContact} />
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
