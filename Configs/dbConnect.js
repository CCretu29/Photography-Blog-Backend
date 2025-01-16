// Importing the mongoose library for MongoDB interaction
const mongoose = require('mongoose');

// Loading environment variables from the .env file
require('dotenv').config();

// Function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Retrieving the MongoDB URI from environment variables
    const mongoURI = process.env.MONGODB_URI;
    
    // Throw an error if the MongoDB URI is not defined
    if (!mongoURI) {
      throw new Error('MONGODB_URI is not defined in the .env file');
    }

    // Attempting to connect to MongoDB using the mongoose library
    await mongoose.connect(mongoURI);
    console.log('Connected successfully'); // Log success message on successful connection
  } catch (error) {
    // Log any error that occurs during connection
    console.error('Error at connection:', error.message);
    process.exit(1); // Exit the process with failure code if connection fails
  }
};

// Exporting the connectDB function for use in other parts of the application
module.exports = connectDB;
