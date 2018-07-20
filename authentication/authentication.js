const redis = require('redis');
const redisClient = redis.createClient();
const crypto = require('crypto');
const bcrypt = require('bcrypt');

const AuthenticatedTokenModel = require('./models');

redisClient.on('error', function(err) {
  console.log('Error ' + err);
});

function authorization(req, res, next) {
  redisClient.get(req.headers.token, (err, res) => {
    if (err) {
      const cbErr = new Error('Redis Error occured.');
      cbErr.status = 500;
      return next(cbErr);
    } else {
      if (res) {
        return next();
      } else {
        const cbErr = new Error('You must be logged in to view this page.');
        cbErr.status = 401;
        return next(cbErr);
      }
    }
  });
}

function authenticate(password) {
  return new Promise((resolve, reject) =>
    AuthenticatedTokenModel.find({}, (err, hashes) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      if (hashes) {
        hashes.forEach(({ hash }) => {
          bcrypt.compare(password, hash, function(err, res) {
            if (err) {
              console.log(err);
              reject(err);
            }

            if (res) {
              const id = crypto.randomBytes(20).toString('hex');
              redisClient.set(id, 'authorized', 'EX', 10);
              resolve(id);
            } else {
              reject('Password does not match');
            }
          });
        });
      } else {
        console.log('Hash value not found');
      }
    })
  );
}

function addPasswordToTokens(password) {
  bcrypt.hash(password, 10, function(err, hash) {
    if (err) {
      console.log(err);
      throw err;
    }
    AuthenticatedTokenModel({ hash }).save((err, res) => {
      if (err) {
        console.log(err);
        throw err;
      }

      console.log(res);
    });
  });
}

module.exports = { addPasswordToTokens, authorization, authenticate };
