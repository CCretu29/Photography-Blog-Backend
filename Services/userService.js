const User = require('../Modules/user');
const bcrypt = require('bcryptjs');

class UserService {
  async createUser(userData) {
    try {
      const user = new User(userData);
      return await user.save();
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  async loginUser(email, password) {
    try {
      const user = await User.findOne({ email });
      if (!user || !(await user.correctPassword(password))) {
        throw new Error('Invalid email or password');
      }
      return user;
    } catch (error) {
      throw new Error(`Login error: ${error.message}`);
    }
  }

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

  async getAllUsers() {
    try {
      return await User.find();
    } catch (error) {
      throw new Error(`Error fetching users: ${error.message}`);
    }
  }
}

module.exports = new UserService();
