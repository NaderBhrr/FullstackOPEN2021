import axios from 'axios';
const baseUrl = `/api/persons`;

const addPerson = (newPerson, cb) =>
  axios
    .post(baseUrl, newPerson)
    .then((response) => response.data)
    .then(cb);

const getPersons = (cb) =>
  axios
    .get(baseUrl)
    .then((response) => response.data)
    .then(cb);

const updatePerson = (updatedPerson, cb) =>
  axios
    .put(`${baseUrl}/${updatedPerson._id}`, updatedPerson)
    .then((response) => response.data)
    .then(cb);

const deletePerson = (personId, cb, cbError) =>
  axios
    .delete(`${baseUrl}/${personId}`)
    .then((response) => response.data)
    .then(cb)
    .catch(cbError);

const phonebookCRUD = {
  getPersons,
  addPerson,
  deletePerson,
  updatePerson,
};

export default phonebookCRUD;
