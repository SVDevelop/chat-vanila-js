import {setTemplate, socket, cojInit, Enter} from './index.js'

export function loginInit () {
    setTemplate('login')

    socket.once('signin', cojInit)

    const loginInput = document.querySelector('[data-input="login"]')

    loginInput.addEventListener('keyup', e => {
        if (e.key === Enter) {
            socket.emit('signin', loginInput.value)
        }
    })

    socket.emit('signin', String(Date.now())) //production remove
}