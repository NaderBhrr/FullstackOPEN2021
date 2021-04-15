import React from 'react';
import './Message.css';

const Message = ({ action }) => {
  if (action === null) return null;

  const messages = {
    addPerson: 'New contact is added to the phonebook',
    changeNumber: 'The contact phone number updated',
    deletePerson: 'Contact deleted from the phonebook successfully',
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
      {action === 'add'
        ? messages.addPerson
        : action === 'update'
        ? messages.changeNumber
        : action === 'delete'
        ? messages.deletePerson
        : null}
    </div>
  );
};

export default Message;
