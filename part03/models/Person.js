import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const personSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  number: String,
});

const Person = model('person', personSchema);

export default Person;
