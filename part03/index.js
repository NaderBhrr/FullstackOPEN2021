import express from 'express';
import cat from './cat.js';
import echo from './echo.js';

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.get('/api/persons', (_req, res) => {
  cat('./db.json').then((persons) => res.json(persons));
});

const respondNoContact = (message) =>
  `<header>
    <h3>${message}</h3>
  </header>`;

app.get('/api/persons/:id', (req, res) => {
  const { id } = req.params;
  cat('./db.json').then((persons) => {
    const person = persons.find((person) => person.id === Number(id));

    person
      ? res.json(person)
      : res.status(422).end(respondNoContact('No Contact Found'));
  });
});

app.get('/info', (_req, res) => {
  cat('./db.json').then((persons) => {
    const info = `Phonebook has information for ${persons.length} people`;
    const date = new Date();

    res.end(`${info}\n${date}`);
  });
});

app.delete('/api/persons/:id', (req, res) => {
  const { id: idToDelete } = req.params;
  cat('./db.json').then((persons) => {
    persons.every((person) => person.id !== Number(idToDelete))
      ? res.status(204).end()
      : (console.log('contact is available to delete'),
        (persons = persons.filter(
          (person) => person.id !== Number(idToDelete)
        )),
        echo('./db.json', JSON.stringify(persons)).then(() =>
          res.status(204).end()
        ));
  });
});

const generateID = (threshold) =>
  Math.floor(Math.random() * threshold) + threshold;

app.post('/api/persons', (req, res) => {
  // console.log('name' in person && 'number' in person);
  cat('./db.json').then((persons) => {
    const person = { ...req.body, id: generateID(persons.length) };
    persons = persons.concat(person);
  });
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server started successfully on port: http://localhost:${PORT}`);
});
