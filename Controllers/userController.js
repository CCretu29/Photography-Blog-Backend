const userService = require('../Services/userService');
const jwt = require('jsonwebtoken');

class UserController {
  async createUser(req, res) {
    try {
      const newUser = await userService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userService.loginUser(email, password);
      const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ user, token });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const updatedUser = await userService.updateUser(id, req.body);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const deletedUser = await userService.deleteUser(id);
      res.status(200).json({ message: 'User deleted successfully', deletedUser });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await userService.getUserById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new UserController();
