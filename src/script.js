import {Init} from './module/index.js'

const app = document.querySelector('div#app')
//  const socket = io('//localhost:3000')
//  let chats = []

Init()

// function Init () {
//     socket.on('error', alert.bind(window))
//     socket.on('chats', (xs) => (chats = xs))

//     loginInit()
// }

// function loginInit () {
//     setTemplate('login')

//     socket.on('signin', cojInput)

//     const loginInput = document.querySelector('[data-input="login"]')

//     loginInput.addEventListener('keyup', e => {
//         if (e.key === 'Enter') {
//             socket.emit('signin', loginInput.value)
//         }
//     })

//     socket.emit('signin', String(Date.now())) //production remove
// }

// function cojInput () {
//     setTemplate('coj')

//     const createBtn = document.querySelector('button[data-action="create"]')
//     const joinBtn = document.querySelector('button[data-action="join"]')

//     createBtn.addEventListener('click', createInit)
//     joinBtn.addEventListener('click', joinInit)

//     joinInit()  //production remove
// }

// function createInit () {
//     setTemplate('create')
// }

// function joinInit () {
//     setTemplate('join')

//     socket.on('join', chatInit)
//     socket.on('chats', listUpdate)

//     const titleInput = document.querySelector('[data-input="title"]')
//     const passwordInput = document.querySelector('[data-input="password"]')
//     const joinBtn = document.querySelector('[data-action="join"]')
//     const chatList = document.querySelector('[data-list="chats"]')
//     const chatRoomTemplate = document.querySelector('[data-segment="chat-room"]')

//     titleInput.addEventListener('click', ()=> {})
//     passwordInput.addEventListener('click', ()=> {})
//     joinBtn.addEventListener('click', ()=> {
//         const title = titleInput.value
//         const password = passwordInput.value
        
//         socket.emit('join', title, password);
//     })

//     listUpdate()

//     function listUpdate () {
//         chatList.innerHTML = ''

//         for (const chat of chats) {
//             const chatRoom = document.importNode(chatRoomTemplate.content, true)

//             const lockSpan = chatRoom.querySelector('[data-flag="lock"]')
//             const counter = chatRoom.querySelector('[data-flag="counter"]')
//             const title = chatRoom.querySelector('[data-flag="title"]')
            
//             counter.textContent = `(${chat.counter})` 
//             title.textContent = chat.title

//             if (chat.locked) {
//                 lockSpan.classList.remove("lock-none")
//                 lockSpan.classList.add("lock")
//             }

//             const liElement = chatRoom.querySelector('li')

//             liElement.addEventListener('click', () => titleInput.value = chat.title)

//             chatList.append(chatRoom)
//         }
//     }
// }

// function chatInit () {
//     setTemplate('chat')
// }

// function setTemplate (pagelabel) {
//     const template = document.querySelector(`template[data-page="${pagelabel}"]`)
//     const segment = document.importNode(template.content, true)
//     app.innerHTML = ''
//     app.append(segment)
// }




