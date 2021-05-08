import Person from './models/Person.js';

export const getPersons = async (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  await Person.find({})
    .then((persons) => {
      res.json(persons);
    })
    .catch((error) => next(error));
};

export const getPerson = async (req, res, next) => {
  const { id } = req.params;

  await Person.findById(id)
    .then((person) => {
      person ? res.json(person) : res.status(404).end();
    })
    .catch((error) => next(error));
};

export const updatePerson = async (req, res, next) => {
  const { id: idToUpdate } = req.params.id;
  const { number } = req.body;
  const updatedPerson = { number };

  await Person.findByIdAndUpdate(idToUpdate, updatedPerson, { new: true })
    .then((result) => res.json(result))
    .catch((error) => next(error));
};

export const deletePerson = async (req, res, next) => {
  const { id: idToDelete } = req.params;

  await Person.findByIdAndRemove(idToDelete)
    .then((result) => {
      res.status(200).send('Contact successfully deleted');
    })
    .catch((error) => next(error));
};

export const showInfo = async (req, res, next) => {
  await Person.find({})
    .then((persons) => {
      const info = `Phonebook currently has information for << ${persons.length} >> people.`;
      const date = new Date();

      res.end(`${info} \n\nRequest Date: ${date}`);
    })
    .catch((error) => next(error));
};
