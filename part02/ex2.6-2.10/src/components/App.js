import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const AddNewContact = (event) => {
    event.preventDefault();
    console.log('new Contact: ', newName);

    // Error handling conditions
    if (/\W|\d/g.test(newName)) {
      alert(`${newName} is not a valid entry please try again`);
      setNewName('');
      return;
    }
    if (
      !persons.every(
        (person) => person.name.toLowerCase() !== newName.toLowerCase()
      )
    ) {
      alert(`${newName} already exists in the phonebook`);
      setNewName('');
      return;
    }

    setPersons(persons.concat({ name: newName }));
    setNewName('');
  };

  const handleNewContact = (event) => {
    console.log(event.target.value);
    const inputValue = event.target.value;
    console.log(inputValue === '');
    setNewName(inputValue);
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
