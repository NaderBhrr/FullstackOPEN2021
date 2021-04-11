import React from 'react';

const ContactList = ({ persons }) => (
  <div>
    <h2>Contact Information:</h2>
    <ul>
      {persons.map((person, index) => (
        <li key={index}>
          {person.name} <div>&nbsp;{person.number}</div>{' '}
        </li>
      ))}
    </ul>
  </div>
);

export default ContactList;
