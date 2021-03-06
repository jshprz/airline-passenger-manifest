require('dotenv').config()
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

connection.connect((err) => {
  if (err) throw new Error('error database connection: ' + err.stack)
})

module.exports = connection
