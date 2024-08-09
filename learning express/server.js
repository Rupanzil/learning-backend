const express = require('express')
const app = express()
console.log(app)
const PORT = 3000

// simple route
app.get('/', (req, res) => {
  res.send('Hello from the server')
  console.log('success')
})

// create another route for login page
app.get('/new-user', (req, res) => {
  res.send('New user login page')
  console.log('login page accessed')
})

// listening on port
app.listen(PORT, () => {
  console.log('Listening on port 3000')
})
