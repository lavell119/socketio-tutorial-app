const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: "*"}})

app.set('view engine', 'ejs')
app.get("/home", (req, res) => {
    res.render('home')
})

server.listen('3001', (req, res)=>{
    console.log('Server listening...')
})

io.on("connection" , (socket) => {
    console.log("User connected: " + socket.id)
})