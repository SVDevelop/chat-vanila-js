import {setTemplate, socket, chatInit, getChats} from './index.js'

export function createInit () {
    setTemplate('create')

    socket.on('create', createHandler)
    socket.on('chats', listUpdate)

    function createHandler () {
        chatInit()

        socket.off('create', chatInit)
        socket.off('chats', listUpdate)
    }

    const titleInput = document.querySelector('[data-input="title"]')
    const passwordInput = document.querySelector('[data-input="password"]')
    const createBtn = document.querySelector('[data-action="create"]')
    const chatList = document.querySelector('[data-list="chats"]')

    titleInput.addEventListener('click', ()=> {})
    passwordInput.addEventListener('click', ()=> {})
    createBtn.addEventListener('click', ()=> {
        const title = titleInput.value
        const password = passwordInput.value
        
        socket.emit('create', title, password);
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

            chatRoom
                .querySelector('li')
                .addEventListener('click', () => titleInput.value = chat.title)

            chatList.append(chatRoom)
        }
    }

    socket.emit('create') //production remove
}