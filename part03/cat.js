import { readFile } from 'fs/promises';
import path from 'path';

/**
 * 
 * @param {*} fileName 
 * @returns Promise 
 * @example
 * cat('./db.json').then((persons) => {
  const person = persons.find((person) => person.id === Number(id));
  person
    ? res.json(person)
    : res.status(422).end(respondNoContact('No Contact Found'));
});


 */
const cat = async (fileName) => {
  const filepath = path.join(process.cwd(), fileName);

  try {
    const data = await readFile(filepath, 'utf-8');
    return JSON.parse(data.toString());
  } catch (error) {
    console.error('ERROR: \n', error);
  }
};

export default cat;
