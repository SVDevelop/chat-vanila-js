const Enter = 'Enter'

const {format} = new Intl.DateTimeFormat('ru-RU', {
    hour12: false,
    hour: "numeric",
    minute: 'numeric',
    seconds: 'numeric'
})


export {Enter, format}