const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const userAuthMiddleware = require('../middleware/userAuthMiddleware');

// Public routes
router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/', userController.getAllUsers); 

// Protected routes
router.put('/:id', userAuthMiddleware, userController.updateUser);
router.delete('/:id', userAuthMiddleware, userController.deleteUser);
router.get('/:id', userAuthMiddleware, userController.getUserById);

module.exports = router;
