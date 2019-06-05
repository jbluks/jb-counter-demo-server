const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || process.argv[2] || 8080

app.use(cors())

let counter = 0

app.get('/counter', (req,res) => {
  res.json({ counter })
})

app.put('/counter', (req, res) => {
  counter++
  res.json({ counter })
})

app.listen(PORT, () => console.log(`listening on ${PORT}`))