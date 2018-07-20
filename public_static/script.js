const socket = io()
setTimeout(() => {
    console.log(socket.id)
},2000)

window.onload = function() {
    // const pingBtn = document.getElementById('ping')
    // pingBtn.onclick = function() {
    //     socket.emit('abcd' ,{a:10 , b:20})
    // }

    const message = document.getElementById('message')
    const userBox = document.getElementById('user')
    const sendBtn = document.getElementById('send')
    const chatList = document.getElementById('chat')

    sendBtn.onclick = function () {
        socket.emit('SEND', {
            msg: message.value,
            sender: userBox.value
        })
    }

    socket.on('RECV', (data) => {
        let chat = document.createElement('li')
        chat.innerText = data.sender + ': ' + data.msg
        chatList.appendChild(chat)
    })
}