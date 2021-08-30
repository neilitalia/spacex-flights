const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))

app.use('/api', AppRouter)

app.listen(PORT, () => console.log(`Server Running On Port:`, PORT))
