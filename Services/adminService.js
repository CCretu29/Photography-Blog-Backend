const Admin = require('../Modules/user');

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

  async deleteAdmin(id) {
    try {
      const deletedAdmin = await Admin.findByIdAndDelete(id);
      if (!deletedAdmin) {
        throw new Error('Admin not found');
      }
      return deletedAdmin;
    } catch (error) {
      throw new Error(`Error deleting admin: ${error.message}`);
    }
  }
}

module.exports = new AdminService();
