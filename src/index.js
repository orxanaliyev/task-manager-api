const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter) // Users
app.use(taskRouter) // Tasks

app.listen(port, () => {
    console.log(`Server is up on localhost:${port}`)
})