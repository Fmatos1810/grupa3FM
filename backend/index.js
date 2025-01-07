const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 3000;

const db = require("./db.js");
const booksRouter = require("./routes/books.js");

require("dotenv").config();
app.use(cors({origin:"*"}));
app.use(bodyParser.json());

// Routes //
app.use("/api/books", booksRouter)

app.listen(PORT, ()=> {
    console.log(`Server up on http://localhost:${PORT}`)
})