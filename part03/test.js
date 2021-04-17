const john = { name: 'john dew', number: '987-987-9876' };
const props = ['name', 'number'];
const checkNewContact = ({ properties, newContact }) => {
  const [name, number] = properties;
  console.log(typeof name);
  console.log(number);
};

checkNewContact({ props, john });
