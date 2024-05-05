require('dotenv').config();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const TokenModel = require('../models/TokenModel');
const AuthModel = require('../models/AuthModel');
exports.encryptpassword = async (password) => {
  let salt = bcryptjs.genSaltSync(15);
  return bcryptjs.hashSync(password, salt);
};

exports.compairpassword = async (password, haspassword) => {
  return bcryptjs.compareSync(password, haspassword);
};
// process.env.TOKEN_KEY;
exports.tokens = async (id) => {
  return new Promise(function (resolve, reject) {
    TokenModel.create({
      user: id,
      token: jwt.sign({ id }, process.env.TOKEN_KEY),
    })
      .then((result) => {
        resolve(result.token);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.Loggeduserhelper = async (req, res, next) => {
  // const authorization = req.headers['authorization'];

  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Authentication token is missing' });
  }
  try {
    // Verify the token using the correct secret key
    const decoded = jwt.verify(
      token.replace('Bearer ', ''),
      process.env.TOKEN_KEY
    ); // Remove 'Bearer ' prefix
    // Attach the user details to the request object
    req.user = decoded;
    // Call the next middleware function
    next();
  } catch (error) {
    console.error('Token verification error:', error.message);
    return res.status(401).json({ message: 'Invalid token provided' });
  }
};
exports.verifytoken = async (usertoken) => {
  return jwt.verify(usertoken, process.env.TOKEN_KEY, { complete: true });
};
