export function setTemplate (pagelabel) {
    const template = document.querySelector(`template[data-page="${pagelabel}"]`)
    const segment = document.importNode(template.content, true)
    app.innerHTML = ''
    app.append(segment)
}
