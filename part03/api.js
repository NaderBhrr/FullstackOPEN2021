import Person from './models/Person.js';

const isPOSTRequestValid = (requestBody) =>
  'name' in requestBody && 'number' in requestBody;

const addNewContact = (newPersonInfo) => {
  const person = new Person(newPersonInfo);
  return person.save();
};

export const createPerson = async (req, res, next) => {
  const person = { ...req.body };

  if (!isPOSTRequestValid(person))
    res
      .status(400)
      .json({ error: 'missing required information on the request' });

  await addNewContact(person)
    .then((result) => {
      console.log(result);
      res.status(200).json({ message: 'Success data import to database' });
    })
    .catch((error) => next(error));
};

export const getPersons = async (req, res, next) => {
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
      res.status(200).json({ message: 'Contact successfully deleted', result });
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
