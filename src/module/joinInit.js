import {setTemplate, socket, chats} from './index.js'

export function joinInit () {
    setTemplate('join')

    socket.on('join', chatInit)
    socket.on('chats', listUpdate)

    const titleInput = document.querySelector('[data-input="title"]')
    const passwordInput = document.querySelector('[data-input="password"]')
    const joinBtn = document.querySelector('[data-action="join"]')
    const chatList = document.querySelector('[data-list="chats"]')
    const chatRoomTemplate = document.querySelector('[data-segment="chat-room"]')

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

        for (const chat of chats) {
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
}