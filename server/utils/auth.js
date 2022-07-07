// Declare and import jason web token to use
const jwt = require('jsonwebtoken');
// Set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';
// Define middleware and sign token and export
module.exports = {
  // Function for authenticated routes
  authMiddleware: function ({ req }) {
    // Allows token to be sent via req.body, req.query or req.headers
    let token = req.body.token || req.query.token || req.headers.authorization;
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
    if (!token) {
      // Return request
      return req;
    }
    // Verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }
    // Return request
    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
};