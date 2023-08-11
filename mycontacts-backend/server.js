console.log("I am in an express project")

const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnection');
const dotenv = require("dotenv").config(); // npm install dotenv
// const path = require('path');



connectDB();
const app = express()



const port = process.env.PORT || 3000;


app.use(express.json());



app.use("/api/contacts", require("./routes/contactRoutes"));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })
