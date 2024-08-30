require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const MONGO_URI = process.env.MONGO_URI;


app.get('/', (req, res) => {
    console.log('Visited Home Page');
    res.send('Welcome to the home Page');
});

// Mongo connect and URL connect
mongoose.connect(MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connected to db and Listening on PORT: ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);  
    });  
