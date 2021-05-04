import { writeFile } from 'fs/promises';
import path from 'path';

const echo = (fileName, data, cb) => {
  const filepath = path.join(process.cwd(), fileName);

  try {
    writeFile(filepath, data).then(cb);
  } catch (error) {
    console.error('ERROR: \n', error);
  }
};

export default echo;

// cat('./db.json').then((persons) => {
//   persons.
//   every((person) => person.id !== Number(idToDelete))
//     ? res.status(204).end()
//     : (console.log('contact is available to delete'),
//       (persons = persons.filter(
//         (person) => person.id !== Number(idToDelete)
//       )),
//       echo('./db.json', JSON.stringify(persons), () =>
//         res.status(204).end()
//       ));
// });
