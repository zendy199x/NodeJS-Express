const express = require("express");
const exphds = require("express-handlebars");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
require("dotenv").config();

// import router
const posts = require("./routes/posts");

// start app
const app = express();

// start Handlebars middleware
app.engine("handlebars", exphds());
app.set("view engine", "handlebars");

// start body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// start express middleware
app.use(express.json());

// connect database
connectDB();

// Some basic routers can include a separate file in the routes folder
app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about"));

// use router
app.use("/posts", posts);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
