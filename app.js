const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

// import router
const posts = require("./routes/posts");

// start app
const app = express();

// start express middleware
app.use(express.json());

// connect database
connectDB();

// use router
app.use("/posts", posts);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
