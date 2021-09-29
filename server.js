'use strict'

const express = require('express')
const fs = requiere ('fs')

const app = express()
const port = 3000

app.get('/app.html', (req, res) => {
  fs.readFile('app.html',(err, data) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', data.length);
    res.write(data);

  })
    
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
