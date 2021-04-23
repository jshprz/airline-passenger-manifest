const express = require('express')
const app = express()
const config = require('./config/index')
const api = require('./routes/api')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', api)

app.use((req, res) => {
  res.statusCode = 404
  res.end("Can't find the route for this.")
})

app.listen(config.port, config.host, () => {
  console.log('Application started!')
})

module.exports = app
