const User = require('../Modules/user');

class UserService {
  // Create a new user
  async createUser(userData) {
    try {
      const user = new User(userData);
      return await user.save();
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  // Update a user
  async updateUser(id, updateData) {
    try {
      const user = await User.findOneAndUpdate({ id: id }, updateData, { new: true });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  }

  // Delete a user
  async deleteUser(id) {
    try {
      const user = await User.findOneAndDelete({ id: id });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }

  // Get a user by ID
  async getUserById(id) {
    try {
      const user = await User.findOne({ id: id });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      throw new Error(`Error fetching user: ${error.message}`);
    }
  }

  // Get all users
  async getAllUsers() {
    try {
      return await User.find();
    } catch (error) {
      throw new Error(`Error fetching users: ${error.message}`);
    }
  }
}

module.exports = new UserService();
