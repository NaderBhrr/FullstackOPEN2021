import mongoose from 'mongoose';

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then((_result) => {
      console.log(`Connection to database: Successful, \n
    The database address: ${mongoose.connection.host}
    `);
    })
    .catch((error) => {
      console.error(`Database Error: \n ${error.message}`);
    });
};

export default connectDB;
