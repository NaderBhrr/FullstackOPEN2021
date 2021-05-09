import express from 'express';
import { join } from 'path';

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

const app = express();

console.log(process.cwd());
app.use(express.static(join(process.cwd(), 'hello.txt')));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log('Server sucessfully initiated on port ', port);
});
