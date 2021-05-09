import express from 'express';
// import cors from 'cors';
import { config } from 'dotenv';
import cli from './utlis/cli.js';
import connectDB from './db.js';
import * as api from './api.js';
import corss from './middlewares/corss.js';
import errorHandler from './middlewares/errorHandler.js';
import logger from './middlewares/logger.js';

// Making the environment variables accessible
config();
// Start connection to database
connectDB();

const app = express();
app.use(express.json());
app.use(corss);
app.use(express.static('build'));
app.use(logger());

app.post('/api/persons', api.createPerson);
app.get('/api/persons', api.getPersons);
app.get('/api/persons/:id', api.getPerson);
app.put('/api/persons/:id', api.updatePerson);
app.delete('/api/persons/:id', api.deletePerson);
app.get('/info', api.showInfo);

app.use(errorHandler);

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`Server started successfully on port: http://localhost:${PORT}`);
});

process.on('unhandledRejection', (error, _promise) => {
  console.log(`Rejection Error: \n ${error.message}`);

  // Close the server & Exit process
  server.close(() => process.exit(1));
});
