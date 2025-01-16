// Importing the Express library to create a router
const express = require('express');

// Creating an Express Router instance
const router = express.Router();

// Importing the userController for handling user-related logic
const userController = require('../Controllers/userController');

// Importing the middleware for user authentication
const userAuthMiddleware = require('../middleware/userAuthMiddleware');

// Public routes (accessible without authentication)

// Route for user registration
// Calls the `createUser` method in the userController
router.post('/register', userController.createUser);

// Route for user login
// Calls the `loginUser` method in the userController
router.post('/login', userController.loginUser);

// Route to get a list of all users (no authentication required)
// Calls the `getAllUsers` method in the userController
router.get('/', userController.getAllUsers);

// Protected routes (require authentication via the middleware)

// Route to update a user by ID
// Uses `userAuthMiddleware` to authenticate and `updateUser` method in the userController
router.put('/:id', userAuthMiddleware, userController.updateUser);

// Route to delete a user by ID
// Uses `userAuthMiddleware` to authenticate and `deleteUser` method in the userController
router.delete('/:id', userAuthMiddleware, userController.deleteUser);

// Route to get a specific user by ID
// Uses `userAuthMiddleware` to authenticate and `getUserById` method in the userController
router.get('/:id', userAuthMiddleware, userController.getUserById);

// Exporting the router to be used in other parts of the application
module.exports = router;
