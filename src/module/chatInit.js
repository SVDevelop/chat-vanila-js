import {
	setTemplate,
	socket,
	getMessages,
	ENTER_KEY,
	format,
} from "./index.js";

const messageTemplate = document.querySelector(
	'template[data-segment="chat-message"]'
);

export function chatInit() {
	setTemplate("chat");

	const content = document.querySelector('[data-input="content"]');
	const send = document.querySelector('[data-action="send"]');

	content.addEventListener("keyup", (e) => {
		if (e.key === ENTER_KEY && content.value.trim()) {
			content.value.trim() && socket.emit("message", content.value);
			content.value = "";
		}
	});

	send.addEventListener("click", (e) => {
		content.value.trim() && socket.emit("message", content.value);
		content.value = "";
	});

	const messagesDiv = document.querySelector('[data-segment="messages"]');

	for (const message of getMessages()) {
		addMessage(message);
		messagesDiv.scrollTop += `${messagesDiv.clientHeight}`;
	}

	socket.on("message:add", addMessage);
	socket.on("message:like", (id, counter) => {
		const messageDiv = document.querySelector(`div[data-id="${id}"]`);
		if (messageDiv) {
			const likeDiv = messageDiv.querySelector('div[data-flag="like"]');
			if (counter) {
				likeDiv.textContent = counter;
				likeDiv.classList.remove("chat-rating-empty");
			} else {
				likeDiv.textContent = "";
				likeDiv.classList.add("chat-raiting-empty");
			}
		}
	});

	socket.on("message:dislike", (id, counter) => {
		const messageDiv = document.querySelector(`div[data-id="${id}"]`);
		if (messageDiv) {
			const dislikeDiv = messageDiv.querySelector(
				'div[data-flag="dislike"]'
			);
			if (counter) {
				dislikeDiv.textContent = counter;
				dislikeDiv.classList.remove("chat-rating-empty");
			} else {
				dislikeDiv.textContent = "";
				dislikeDiv.classList.add("chat-raiting-empty");
			}
		}
	});

	function addMessage(message) {
		const messageElement = document.importNode(
			messageTemplate.content,
			true
		);

		const nameDiv = messageElement.querySelector('div[data-flag="name"]');
		const dateDiv = messageElement.querySelector('div[data-flag="date"]');
		const contentDiv = messageElement.querySelector(
			'div[data-flag="content"]'
		);
		const likeDiv = messageElement.querySelector('div[data-flag="like"]');
		const dislikeDiv = messageElement.querySelector(
			'div[data-flag="dislike"]'
		);
		const messageIdDiv = messageElement.querySelector("div[data-id]");

		nameDiv.textContent = message.name;
		dateDiv.textContent = format(message.date);
		contentDiv.textContent = message.content;

		if (message.likes) {
			likeDiv.textContent = message.likes;
			likeDiv.classList.remove("chat-rating-empty");
		} else {
			likeDiv.textContent = "";
			likeDiv.classList.add("chat-rating-empty");
		}

		if (message.dislikes) {
			dislikeDiv.textContent = message.dislikes;
			dislikeDiv.classList.remove("chat-rating-empty");
		} else {
			dislikeDiv.textContent = "";
			dislikeDiv.classList.add("chat-rating-empty");
		}

		likeDiv.addEventListener("click", (e) => {
			socket.emit("message:like", message.id);
		});

		dislikeDiv.addEventListener("click", (e) => {
			socket.emit("message:dislike", message.id);
		});

		messageIdDiv.dataset.id = message.id;
		messagesDiv.append(messageElement);
		messagesDiv.scrollTop += messagesDiv.clientHeight;
	}
}
