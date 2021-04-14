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

const deletePerson = (contactID) =>
  axios.delete(`${baseUrl}/${contactID}`).then((response) => response.data);

const phonebookRecerd = {
  getPersons,
  addPerson,
  deletePerson,
};

export default phonebookRecerd;
