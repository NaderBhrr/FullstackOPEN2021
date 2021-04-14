import axios from 'axios';
const baseUrl = `http://localhost:3001/persons`;

const getPersons = (cb) =>
  axios
    .get(baseUrl)
    .then((response) => response.data)
    .then((data) => cb(data));

const addPerson = (newPerson, cb) =>
  axios
    .post(baseUrl, newPerson)
    .then((response) => response.data)
    .then((data) => cb(data));

const phonebookRecerd = {
  getPersons,
  addPerson,
};

export default phonebookRecerd;