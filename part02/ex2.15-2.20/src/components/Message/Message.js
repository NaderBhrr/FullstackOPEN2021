import React from 'react';
import './Message.css';

const Message = ({ action, error }) => {
  if (action === null) return null;
  const messages = {
    CRUD: {
      addPerson: 'New contact is added to the phonebook',
      changeNumber: 'The contact phone number updated',
      deletePerson: 'Contact successfully deleted from the phonebook.',
    },
    errors: {
      deletePerson: 'The contact is already removed from the phonebook',
      minNameLength: 'Person name must be 3 characters at least',
    },
    search: {
      found: 'The contact you search is available in the Phonebook',
    },
  };

  const messageStyle =
    action === 'add'
      ? 'add general'
      : action === 'update'
      ? 'update general'
      : action === 'delete' || 'validate'
      ? 'delete general'
      : null;

  return (
    <div className={messageStyle}>
      <span className='.error general'>
        {error === 'deleteError'
          ? messages.errors.deletePerson
          : error === 'minLengthError'
          ? messages.errors.minNameLength
          : null}
      </span>
      {error
        ? null
        : action === 'add'
        ? messages.CRUD.addPerson
        : action === 'update'
        ? messages.CRUD.changeNumber
        : action === 'delete'
        ? messages.CRUD.deletePerson
        : action === 'search'
        ? messages.search.found
        : null}
    </div>
  );
};

export default Message;
