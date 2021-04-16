import express from 'express';
import cat from './cat.js';

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api/persons', (_req, res) => {
  cat('./db.json').then((notes) => res.json(notes));
});

app.listen(PORT, () => {
  console.log(`Server started successfully on port: http://localhost:${PORT}`);
});
