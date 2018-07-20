const express = require('express')
const app = express()
const socketio = require('socket.io')

const http = require('http')

const server = http.Server(app)
const io = socketio(server)




app.use('/' , express.static(__dirname + '/public_static'))

io.on('connection' , (socket) => {
    console.log('socket connected ' + socket.id)

    // socket.on('SEND' , (data) => {
        // console.log(`ping from ${socket.id} ${JSON.stringify(data)}`)
        socket.on('SEND', (data) => {

            socket.broadcast.emit('RECV', data)
            // io.emit('RECV', data)

        })
    // })

})
//listen to server not app
server.listen(5454 , () => {
    console.log('server started at: http://localhost:5454')
})