const express = require("express");

// start app
const app = express();

// start express middleware
app.use(express.json())

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))