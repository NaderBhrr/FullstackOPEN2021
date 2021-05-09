import React from 'react';
import './ContactList.css';
const ContactList = ({ persons, deleteContact }) => (
  <div className='contact-list'>
    <h3>Contact Information:</h3>
    <ul>
      {persons.map((person, index) => (
        <li key={index}>
          {person.name} <div>&nbsp;{person.number}</div>{' '}
          <button onClick={() => deleteContact(person._id, person.name)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default ContactList;
