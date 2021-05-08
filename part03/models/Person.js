import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const { Schema, model } = mongoose;

const personSchema = new Schema({
  name: {
    type: String,
    unique: true,
    minlength: 3,
  },
  number: { type: String, minlength: 8 },
});
personSchema.plugin(uniqueValidator);

const Person = model('person', personSchema);

export default Person;
