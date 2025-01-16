// Importing the User model for database operations
const User = require('../Modules/user');

// Importing bcryptjs for password comparison
const bcrypt = require('bcryptjs');

// Defining the UserService class to handle business logic for user operations
class UserService {
  // Method to create a new user
  async createUser(userData) {
    try {
      // Creating a new user instance with the provided data
      const user = new User(userData);
      // Saving the user to the database and returning the saved user
      return await user.save();
    } catch (error) {
      // Throwing an error if user creation fails
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  // Method to authenticate a user during login
  async loginUser(email, password) {
    try {
      // Finding a user by their email
      const user = await User.findOne({ email });
      // Checking if the user exists and if the password is correct
      if (!user || !(await user.correctPassword(password))) {
        throw new Error('Invalid email or password');
      }
      // Returning the authenticated user
      return user;
    } catch (error) {
      // Throwing an error if login fails
      throw new Error(`Login error: ${error.message}`);
    }
  }

  // Method to update a user's details
  async updateUser(id, updateData) {
    try {
      // Finding and updating the user by their ID, returning the updated user
      const user = await User.findOneAndUpdate({ id: id }, updateData, { new: true });
      if (!user) {
        throw new Error('User not found'); // Throwing an error if the user is not found
      }
      return user; // Returning the updated user
    } catch (error) {
      // Throwing an error if the update fails
      throw new Error(`Error updating user: ${error.message}`);
    }
  }

  // Method to delete a user by their ID
  async deleteUser(id) {
    try {
      // Finding and deleting the user by their ID
      const user = await User.findOneAndDelete({ id: id });
      if (!user) {
        throw new Error('User not found'); // Throwing an error if the user is not found
      }
      return user; // Returning the deleted user
    } catch (error) {
      // Throwing an error if the deletion fails
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }

  // Method to fetch a user by their ID
  async getUserById(id) {
    try {
      // Finding the user by their ID
      const user = await User.findOne({ id: id });
      if (!user) {
        throw new Error('User not found'); // Throwing an error if the user is not found
      }
      return user; // Returning the found user
    } catch (error) {
      // Throwing an error if the fetch operation fails
      throw new Error(`Error fetching user: ${error.message}`);
    }
  }

  // Method to fetch all users
  async getAllUsers() {
    try {
      // Fetching and returning all users from the database
      return await User.find();
    } catch (error) {
      // Throwing an error if the fetch operation fails
      throw new Error(`Error fetching users: ${error.message}`);
    }
  }
}

// Exporting an instance of the UserService class for use in other parts of the application
module.exports = new UserService();
