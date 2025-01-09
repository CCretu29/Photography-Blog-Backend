const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

// POST /api/users
router.post('/', userController.createUser);

// PUT /api/users/:id
router.put('/:id', userController.updateUser);

// DELETE /api/users/:id
router.delete('/:id', userController.deleteUser);

// GET /api/users/:id
router.get('/:id', userController.getUserById);

// GET /api/users
router.get('/', userController.getAllUsers);

module.exports = router;
