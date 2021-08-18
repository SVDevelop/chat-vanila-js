import {setTemplate, joinInit} from './index.js'

export function cojInput () {
    setTemplate('coj')

    const createBtn = document.querySelector('button[data-action="create"]')
    const joinBtn = document.querySelector('button[data-action="join"]')

    createBtn.addEventListener('click', createInit)
    joinBtn.addEventListener('click', joinInit)

    joinInit()  //production remove
}
