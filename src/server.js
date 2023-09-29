require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');

require('./config/modelConfig')
const userRouter = require('./routes/userRoutes')

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', userRouter)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Express server running at ${PORT}`)
})
