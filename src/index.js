const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

//Middleware example 
// app.use((req, res, next) => {
//     res.status(503).send("The site is under maintainence. Please try later")
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`);
})

// const jwt = require('jsonwebtoken')

// const myFunction = async () =>{
//     const token = jwt.sign({ _id: "abc123" }, "thisismysecret", { expiresIn: '0 seconds'})
//     console.log(token);

//     const data = jwt.verify(token, "thisismysecret")
//     console.log(data);
// }
// myFunction()