import mongoose from 'mongoose';

const [, , password, name, number] = process.argv;
const url = `mongodb+srv://part3:${password}@cluster0.wyuzn.mongodb.net/phonebook?retryWrites=true&w=majority`;
console.log(name, number);

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model('person', personSchema);

if (!name && !number && process.argv.length === 3) {
  Person.find({}).then((result) => {
    result.forEach((person) => {
      console.log(`${person.name}: ${person.number}`);
    });

    mongoose.connection.close();
  });
} else {
  const newPerson = new Person({
    name,
    number,
  });

  newPerson.save().then((result) => {
    console.log(`Succesfully added ${name} and ${number} to phonebook`);
    console.log(result);

    mongoose.connection.close();
  });
}
