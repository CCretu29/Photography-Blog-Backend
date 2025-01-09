const jwt = require('jsonwebtoken');
const Admin = require('../Modules/admin');


const adminAuthMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findOne({ _id: decoded.id });

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
