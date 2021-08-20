import { setTemplate, socket, cojInit, ENTER_KEY } from "./index.js";

export function loginInit() {
	setTemplate("login");

	socket.once("signin", cojInit);

	const loginInput = document.querySelector('[data-input="login"]');

	loginInput.addEventListener("keyup", (e) => {
		if (e.key === ENTER_KEY) {
			socket.emit("signin", loginInput.value);
		}
	});

	// socket.emit('signin', String(Date.now())) //production remove
}
