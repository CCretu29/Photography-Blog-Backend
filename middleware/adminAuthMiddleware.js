const jwt = require('jsonwebtoken');
const Admin = require('../Modules/user');

const adminAuthMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findOne({ _id: decoded.id, isAdmin: true });

    if (!admin) {
      throw new Error();
    }

    req.admin = admin;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate as admin.' });
  }
};

module.exports = adminAuthMiddleware;
