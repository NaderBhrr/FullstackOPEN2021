import axios from 'axios';
const baseUrl = `http://localhost:3001/persons`;

const getPersons = (cb) =>
  axios
    .get(baseUrl)
    .then((response) => response.data)
    .then(cb);

const addPerson = (newPerson, cb) =>
  axios
    .post(baseUrl, newPerson)
    .then((response) => response.data)
    .then(cb);

const deletePerson = (contactID, cb, cbError) =>
  axios
    .delete(`${baseUrl}/${contactID}`)
    .then((response) => response.data)
    .then(cb)
    .catch(cbError);

const updatePerson = (updatedPerson, cb) =>
  axios
    .put(`${baseUrl}/${updatedPerson.id}`, updatedPerson)
    .then((response) => response.data)
    .then(cb);

const phonebookRecerd = {
  getPersons,
  addPerson,
  deletePerson,
  updatePerson,
};

export default phonebookRecerd;
