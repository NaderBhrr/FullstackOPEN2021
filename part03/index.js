import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import cli from './utlis/cli.js';
import connectDB from './db.js';
import Person from './models/Person.js';
import errorHandler from './middlewares/errorHandler.js';
// Making the environment variables accessible
config();
// Start connection to database
connectDB();

morgan.token('body', (req, res) => {
  return req.method === 'POST' ? JSON.stringify(req.body) : null;
});
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('build'));
app.use(
  morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'),
      '-',
      tokens['response-time'](req, res),
      'ms',
      tokens.body(req, res),
    ].join(' ');
  })
);

app.get('/api/persons', (_req, res, next) => {
  Person.find({})
    .then((persons) => {
      res.json(persons);
    })
    .catch((error) => next(error));
});

const respondNoContact = (message) =>
  `<header>
    <h3>${message}</h3>
  </header>`;
// respondNoContact('No Contact Found')
const addNewContact = (newPersonInfo) => {
  const person = new Person(newPersonInfo);

  return person.save();
};

app.post('/api/persons', (req, res) => {
  Person.find({}).then((persons) => {
    const person = { ...req.body };

    'name' in person &&
    'number' in person &&
    !persons.some(
      (contact) => contact.name.toLowerCase() === person.name.toLowerCase()
    )
      ? addNewContact(person).then(() =>
          res
            .status(201)
            .json({ message: 'Phonebook updated with new contact' })
        )
      : res
          .status(403)
          .json({ error: 'New contact information must be unique' });
  });
});

app.get('/api/persons/:id', (req, res, next) => {
  const { id } = req.params;

  Person.findById(id)
    .then((person) => {
      person ? res.json(person) : res.status(404).end();
    })
    .catch((error) => next(error));
});

app.put('/api/persons/:id', (req, res, next) => {
  const { id: idToUpdate } = req.params.id;
  const { number } = req.body;
  const updatedPerson = { number };

  Person.findByIdAndUpdate(idToUpdate, updatedPerson, { new: true })
    .then((result) => res.json(result))
    .catch((error) => next(error));
});

app.delete('/api/persons/:id', (req, res, next) => {
  const { id: idToDelete } = req.params;

  Person.findByIdAndRemove(idToDelete)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => next(error));
});

app.get('/info', (_req, res) => {
  Person.find({}).then((persons) => {
    const info = `Phonebook currently has information for << ${persons.length} >> people.`;
    const date = new Date();

    res.end(`${info} \n\nRequest Date: ${date}`);
  });
});

app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started successfully on port: http://localhost:${PORT}`);
});
