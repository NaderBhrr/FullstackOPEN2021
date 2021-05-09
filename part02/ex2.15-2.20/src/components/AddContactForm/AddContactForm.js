import React from 'react';

import './AddContactForm.css';

const AddContactForm = ({ ...props }) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <fieldset>
          <legend>Add New Contact</legend>
          <div>
            <input
              id='new-contact'
              type='text'
              value={props.newName}
              onChange={props.handleNewPerson}
              required
              placeholder='e.g. Tom Cruise'
              aria-required={true}
              autoFocus
              // pattern='^([\D]{2,30}\s+)+([a-zA-Z]{2,30})$'
            />
            <label htmlFor='new-contact'>Name:</label>
          </div>
          <div>
            <input
              id='new-contact-number'
              type='tel'
              value={props.newPhoneNumber}
              onChange={props.handleNewPhoneNumber}
              required
              placeholder={`Enter Contact's Phone Number ...`}
              autoComplete='off'
            />
            <label htmlFor='new-contact-number'>Phone Number:</label>
          </div>
          <div>
            <button type='submit'>Add</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AddContactForm;
