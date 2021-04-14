import React from 'react';

const ContactList = ({ persons, deleteContact }) => (
  <div>
    <h2>Contact Information:</h2>
    <ul>
      {persons.map((person, index) => (
        <li key={index}>
          {person.name} <div>&nbsp;{person.number}</div>{' '}
          <button onClick={deleteContact}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default ContactList;
