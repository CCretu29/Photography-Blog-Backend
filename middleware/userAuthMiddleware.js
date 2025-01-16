// Importing the jsonwebtoken library for handling JWTs
const jwt = require('jsonwebtoken');

// Importing the User model for database interaction
const User = require('../Modules/user');

// Middleware to authenticate users based on JWT
const userAuthMiddleware = async (req, res, next) => {
  try {
    // Extracting the token from the Authorization header and removing the 'Bearer ' prefix
    const token = req.header('Authorization').replace('Bearer ', '');
    
    // Verifying the token using the secret key from environment variables
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Searching for a user in the database with the ID from the decoded token
    const user = await User.findOne({ _id: decoded.id });

    // If no user is found, throw an error
    if (!user) {
      throw new Error();
    }

    // Attaching the token and user information to the request object
    req.token = token;
    req.user = user;
    
    // Proceeding to the next middleware or route handler
    next();
  } catch (error) {
    // Sending a 401 Unauthorized response if authentication fails
    res.status(401).send({ error: 'Please authenticate as a user.' });
  }
};

// Exporting the middleware function for use in routes
module.exports = userAuthMiddleware;
