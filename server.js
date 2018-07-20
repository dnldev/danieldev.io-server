const express = require('express');
const server = express();

const graphqlHTTP = require('express-graphql');

const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost:27017/freelance-page',
  { useNewUrlParser: true }
);

const db = mongoose.connection;

const bodyParser = require('body-parser');
const cors = require('cors');

server.use(bodyParser.json());
server.use(cors());

const PORT = 4000;

const { queries, mutations } = require('./schema');

const { authenticate, authorization } = require('./authentication');

server.post('/auth', (req, res) => {
  authenticate(req.body.password)
    .then(id => {
      res.json({ token: id });
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(401);
    });
});

server.use(
  '/graphql/queries',
  graphqlHTTP({
    schema: queries,
    graphiql: true,
  })
);

server.use(
  '/graphql/mutations',
  authorization,
  graphqlHTTP({
    schema: mutations,
    graphiql: true,
  })
);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to Mongoose');
});

server.listen(PORT, () => console.log('Server listening on Port', PORT));
