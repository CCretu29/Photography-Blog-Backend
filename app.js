const express = require('express');
const connectDB = require('./Configs/dbConnect');
const userRoutes = require('./Routes/userRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

connectDB();

app.use(express.json());
app.use('/users', userRoutes);


app.listen(port, () => {
  console.log(`App listening at ${port}`);
});
