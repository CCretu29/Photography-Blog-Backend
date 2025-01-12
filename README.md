Photography Blog - Passion Project

Overview:

This project is a Photography Blog developed as a passion project for semester three. It's a web application that allows photographers to showcase their work and interact with their audience.

Features:

User registration and authentication
Picture upload and management
User roles (Admin and Regular User)
Picture purchasing system
RESTful API endpoints

Technology Stack:

Backend: Node.js with Express.js
Database: MongoDB with Mongoose ODM


Setup and Installation:

Clone the repository
Navigate to the project directory
Install dependencies: npm install
Create a .env file in the root directory and add the following environment variables: PORT=8080
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start the server: npm start

API Endpoints:

Users
POST /users/register - Register a new user
POST /users/login - User login
GET /users - Get all users
GET /users/:id - Get user by ID
PUT /users/:id - Update user
DELETE /users/:id - Delete user

Pictures
POST /pictures - Upload a picture (Admin only)
POST /pictures/many - Upload multiple pictures (Admin only)
GET /pictures - Get all pictures
GET /pictures/:id - Get picture by ID
DELETE /pictures/:id - Delete picture (Admin only)
GET /pictures/download/:id - Download picture (User only)
POST /pictures/buy/:id - Buy picture (User only)

Testing:

Use Postman or any API testing tool to test the endpoints. Make sure to include the necessary headers and body for each request.