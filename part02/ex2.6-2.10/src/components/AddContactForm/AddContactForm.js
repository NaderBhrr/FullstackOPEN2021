import React from 'react';

const AddContactForm = ({ ...props }) => (
  <form onSubmit={props.handleSumbit}>
    <div>
      <input
        type='text'
        value={props.newName}
        onChange={props.handleNewContact}
      />
    </div>
    <div>
      Contact Number:
      <input
        type='text'
        value={props.newPhoneNumber}
        onChange={props.handleNewPhoneNumber}
      />
    </div>
    <div>
      <button type='submit'>Add</button>
    </div>
  </form>
);

export default AddContactForm;
