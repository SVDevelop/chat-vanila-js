import {loginInit} from './index.js'
// import {} from '../script.js'

const socket = io('//localhost:3000')
let chats = []

export function Init () {
    socket.on('error', alert.bind(window))
    socket.on('chats', (xs) => (chats = xs))

    loginInit()
}