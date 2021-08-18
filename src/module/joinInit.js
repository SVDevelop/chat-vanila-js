import {setTemplate, socket, chatInit, getChats} from './index.js'

const chatRoomTemplate = document.querySelector('[data-segment="chat-room"]')

export function joinInit () {
    setTemplate('join')

    socket.on('join', joinHandler)
    socket.on('chats', listUpdate)

    function joinHandler () {
        chatInit()

        socket.off('join', chatInit)
        socket.off('chats', listUpdate)
    }

    const titleInput = document.querySelector('[data-input="title"]')
    const passwordInput = document.querySelector('[data-input="password"]')
    const joinBtn = document.querySelector('[data-action="join"]')
    const chatList = document.querySelector('[data-list="chats"]')

    titleInput.addEventListener('click', ()=> {})
    passwordInput.addEventListener('click', ()=> {})
    joinBtn.addEventListener('click', ()=> {
        const title = titleInput.value
        const password = passwordInput.value
        
        socket.emit('join', title, password);
    })

    listUpdate()

    function listUpdate () {
        chatList.innerHTML = ''

        for (const chat of getChats()) {
            const chatRoom = document.importNode(chatRoomTemplate.content, true)

            const lockSpan = chatRoom.querySelector('[data-flag="lock"]')
            const counter = chatRoom.querySelector('[data-flag="counter"]')
            const title = chatRoom.querySelector('[data-flag="title"]')
            
            counter.textContent = `(${chat.counter})` 
            title.textContent = chat.title

            if (chat.locked) {
                lockSpan.classList.remove("lock-none")
                lockSpan.classList.add("lock")
            }

            const liElement = chatRoom.querySelector('li')

            liElement.addEventListener('click', () => titleInput.value = chat.title)

            chatList.append(chatRoom)
        }
    }

    // socket.emit('join') //production remove
}