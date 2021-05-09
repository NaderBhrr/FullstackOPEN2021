import mongoose from 'mongoose';
import { MONGODB_URI } from './config.js';

const connectDB = async () => {
  await mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then((_result) => {
      console.log(
        ` Connection to database: << SUCCESSFUL >> \n
    The database address: ${mongoose.connection.host}
    `
      );
    })
    .catch((error) => {
      console.error(`Database Error: \n ${error.message}`);
      setTimeout(() => {
        console.log('connecting again');
      }, 2000);
    });
};

export default connectDB;
