const mongoose = require('mongoose');

const authenticatedTokenSchema = mongoose.Schema({
  hash: { type: String, unique: true, required: true },
});

const AuthenticatedTokenModel = mongoose.model(
  'AuthenticatedToken',
  authenticatedTokenSchema
);

module.exports = AuthenticatedTokenModel;
