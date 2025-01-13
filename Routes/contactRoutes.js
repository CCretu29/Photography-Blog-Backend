const express = require('express');
const router = express.Router();
const contactController = require('../Controllers/contactController');
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');

router.post('/submit', contactController.submitContact);
router.get('/all', adminAuthMiddleware, contactController.getAllContacts);

module.exports = router;
