require('dotenv').config();
const mongoose = require('mongoose')

const connectionURL = process.env.CONNECTION_STRING;

mongoose.connect(connectionURL)
