const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    
    if (!mongoURI) {
      throw new Error('MONGODB_URI nu este definit în fișierul .env');
    }

    await mongoose.connect(mongoURI);
    console.log('Conectat cu succes la MongoDB Atlas');
  } catch (error) {
    console.error('Eroare la conectarea cu MongoDB Atlas:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
