let chats = [] 
let messages = []

export const socket = io('//localhost:3000')

export const getChats = () => chats
export const getMessages = () => messages

socket.once('error', alert.bind(window))
socket.on('chats', (xs) => (chats = xs))
socket.on('messages', (xs) => (messages = xs))
