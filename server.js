const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');

const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/freelance-page',
  { useNewUrlParser: true }
);

const db = mongoose.connection;

const server = express();
const PORT = 4000;

const schema = require('./schema');

server.use(cors());
server.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to Mongoose');
});

server.listen(PORT, () => console.log('Server listening on Port', PORT));
