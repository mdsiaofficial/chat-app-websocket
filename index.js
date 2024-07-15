const express = require('express')
const http = require('http')
const path = require('path')
const app = express()
const server = http.createServer(app)

app.use(express.static('./public'))

app.get('/', (req, res) => {
  return res.sendFile("./public/index.html")
})
server.listen(9000, () => console.log(`Server Started at PORT: 9000 http://localhost:9000`));



