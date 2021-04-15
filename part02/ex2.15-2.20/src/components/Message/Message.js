import React from 'react';
import './Message.css';

const Message = ({ action, error }) => {
  if (action === null) return null;

  const messages = {
    CRUD: {
      addPerson: 'New contact is added to the phonebook',
      changeNumber: 'The contact phone number updated',
      deletePerson:
        'Contact successfully deleted from the phonebook successfully',
    },
    errors: {
      deletePerson: 'The contact is already removed from the phonebook',
    },
  };

  const messageStyle =
    action === 'add'
      ? 'add general'
      : action === 'update'
      ? 'update general'
      : action === 'delete'
      ? 'delete general'
      : null;

  return (
    <div className={messageStyle}>
      <span className='.error general'>
        {error ? messages.errors.deletePerson : null}
      </span>
      {error
        ? null
        : action === 'add'
        ? messages.CRUD.addPerson
        : action === 'update'
        ? messages.CRUD.changeNumber
        : action === 'delete'
        ? messages.CRUD.deletePerson
        : null}
    </div>
  );
};

export default Message;
