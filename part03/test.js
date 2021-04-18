const john = { name: 'john dew', number: '987-987-9876' };
const props = ['name', 'number', 'age'];
const checkNewContact = (requiredProps, newContact, contacts) => {
  return (
    requiredProps.every((prop) => prop in newContact) &&
    contacts.every(
      (contact) => contact.name.toLowerCase() !== newContact.name.toLowerCase()
    )
  );
};

console.log(checkNewContact(['name', 'number', 'age'], john));
