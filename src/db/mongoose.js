const mongoose = require('mongoose')

const connectionURL = "mongodb+srv://anuj:anuj123@cluster0.ywmk8l9.mongodb.net/task-manager-api?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(connectionURL)
