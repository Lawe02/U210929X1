'use strict'

const express = require('express')
const fs = requiere ('fs')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hellooooooo')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
