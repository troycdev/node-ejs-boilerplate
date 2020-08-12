// Imports

require('dotenv').config()
const chalk = require('chalk')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

// Express Setup

const port = process.env.PORT || 3000

app.use(express.static('public'))
app.set('view engine', 'ejs')
require('./routes/routes')(app)

// Mongoose Setup

mongoose.connect('mongodb://localhost:27017/dbname', { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(`${chalk.bold.red('DATABASE:')} ${err}`)
    } else {
        console.log(`${chalk.bold.green('DATABASE:')} Connected to database.`)
    }
})

// Start Express

app.listen(port, () => {
    console.log(`${chalk.bold.green('SERVER:')} Started on http://127.0.0.1:${port}/.`)
})