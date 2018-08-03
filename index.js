'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config');
// const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

const {dogs, cats} = require('./db/queue');

const app = express();

// MIDDLEWARE //

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

// ENDPOINTS //

// CATS //
app.get('/api/cat', (req, res) => {
  res.json(cats.peek());
  res.status(200);
});

app.delete('/api/cat', (req, res) => {
  cats.dequeue();
  res.send(cats.peek());
  res.status(204);
});


// DOGS //
app.get('/api/dog', (req, res) => {
  res.json(dogs.peek());
  res.status(200);
});

app.delete('/api/dog', (req, res) => {
  dogs.dequeue();
  res.send(dogs.peek());
  res.status(204);
});

// Custom 404 Not Found route handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error Handler
app.use((err, req, res, next) => {
  if (err.status) {
    const errBody = Object.assign({}, err, { message: err.message });
    res.status(err.status).json(errBody);
  } else {
    res.status(500).json({ message: err.message });
  }
});

function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  // dbConnect();
  runServer();
}

module.exports = { app };
