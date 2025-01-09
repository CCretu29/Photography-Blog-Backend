const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/create', adminController.createAdmin);
router.post('/login', adminController.loginAdmin);

module.exports = router;
