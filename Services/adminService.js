const Admin = require('../Modules/admin');


class AdminService {
  async createAdmin(adminData) {
    try {
      const admin = new Admin(adminData);
      return await admin.save();
    } catch (error) {
      throw new Error(`Error creating admin: ${error.message}`);
    }
  }

  async getAdminByUsername(username) {
    try {
      return await Admin.findOne({ username });
    } catch (error) {
      throw new Error(`Error fetching admin: ${error.message}`);
    }
  }
}

module.exports = new AdminService();
