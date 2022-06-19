const express = require('express')
const app = express()
const HOST_NAME = 'localhost'
const PORT = 8080

app.use(express.static('public'))

app.listen(PORT, ()=>{
    console.log("Listening on port " + PORT)
})