// Importing the user service to handle business logic related to users
const userService = require('../Services/userService');

// Importing the jsonwebtoken library for token creation
const jwt = require('jsonwebtoken');

// Defining the UserController class to manage user-related operations
class UserController {
  
  // Method to create a new user
  async createUser(req, res) {
    try {
      // Creating a new user with data from the request body
      const newUser = await userService.createUser(req.body);
      // Sending a success response with the created user data
      res.status(201).json(newUser);
    } catch (error) {
      // Sending a bad request response in case of an error
      res.status(400).json({ message: error.message });
    }
  }

  // Method to log in a user
  async loginUser(req, res) {
    try {
      // Extracting email and password from the request body
      const { email, password } = req.body;
      // Validating user credentials
      const user = await userService.loginUser(email, password);
      // Creating a JWT token with user ID and admin status
      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET, // Secret key from environment variables
        { expiresIn: '1h' } // Token expiration time
      );
      // Sending a success response with the user data and token
      res.status(200).json({ user, token });
    } catch (error) {
      // Sending an unauthorized response in case of an error
      res.status(401).json({ message: error.message });
    }
  }

  // Method to update user information
  async updateUser(req, res) {
    try {
      // Extracting the user ID from request parameters
      const { id } = req.params;
      // Updating user data with the provided ID and request body
      const updatedUser = await userService.updateUser(id, req.body);
      // Sending a success response with the updated user data
      res.status(200).json(updatedUser);
    } catch (error) {
      // Sending a not found response if the user ID does not exist
      res.status(404).json({ message: error.message });
    }
  }

  // Method to delete a user
  async deleteUser(req, res) {
    try {
      // Extracting the user ID from request parameters
      const { id } = req.params;
      // Deleting the user with the provided ID
      const deletedUser = await userService.deleteUser(id);
      // Sending a success response with a confirmation message and deleted user data
      res.status(200).json({ message: 'User deleted successfully', deletedUser });
    } catch (error) {
      // Sending a not found response if the user ID does not exist
      res.status(404).json({ message: error.message });
    }
  }

  // Method to retrieve a user by ID
  async getUserById(req, res) {
    try {
      // Extracting the user ID from request parameters
      const { id } = req.params;
      // Fetching the user with the provided ID
      const user = await userService.getUserById(id);
      // Sending a success response with the user data
      res.status(200).json(user);
    } catch (error) {
      // Sending a not found response if the user ID does not exist
      res.status(404).json({ message: error.message });
    }
  }

  // Method to retrieve all users
  async getAllUsers(req, res) {
    try {
      // Fetching all users
      const users = await userService.getAllUsers();
      // Sending a success response with the list of users
      res.status(200).json(users);
    } catch (error) {
      // Sending an internal server error response in case of an error
      res.status(500).json({ message: error.message });
    }
  }
}

// Exporting an instance of the UserController class for use in routes
module.exports = new UserController();
