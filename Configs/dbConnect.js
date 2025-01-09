const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    
    if (!mongoURI) {
      throw new Error('MONGODB_URI is not defined .env');
    }

    await mongoose.connect(mongoURI);
    console.log('Connected successfully');
  } catch (error) {
    console.error('Error at connection:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
