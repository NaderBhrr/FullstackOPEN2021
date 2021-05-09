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
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .then(cb);

const deletePerson = (personId, cb) =>
  axios
    .delete(`${baseUrl}/${personId}`)
    .then((response) => response.data)
    .then(cb);

const phonebookCRUD = {
  getPersons,
  addPerson,
  deletePerson,
  updatePerson,
};

export default phonebookCRUD;
