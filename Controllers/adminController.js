const adminService = require('../services/adminService');
const jwt = require('jsonwebtoken');

class AdminController {
  async createAdmin(req, res) {
    try {
      const newAdmin = await adminService.createAdmin(req.body);
      res.status(201).json({ message: 'Admin created successfully', admin: newAdmin });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async loginAdmin(req, res) {
    try {
      const { username, password } = req.body;
      const admin = await adminService.getAdminByUsername(username);
      if (!admin || !(await admin.correctPassword(password))) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new AdminController();