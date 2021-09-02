const express = require("express");
const connectDB = require('./config/db')
require("dotenv").config();

// start app
const app = express();

// start express middleware
app.use(express.json());

// connect database
connectDB()

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
