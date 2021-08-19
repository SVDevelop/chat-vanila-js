import {setTemplate, socket, chatInit} from './index.js'

export function createInit () {
    setTemplate('create')

    socket.on('create', createHandler)

    function createHandler () {
        chatInit()

        socket.off('create', chatInit)
    }

    const titleInput = document.querySelector('[data-input="title"]')
    const passwordInput = document.querySelector('[data-input="password"]')
    const createBtn = document.querySelector('[data-action="create"]')
    
    titleInput.addEventListener('click', ()=> {})
    passwordInput.addEventListener('click', ()=> {})
    createBtn.addEventListener('click', ()=> {
        const title = titleInput.value
        const password = passwordInput.value
        
        socket.emit('create', title, password);
    })

}