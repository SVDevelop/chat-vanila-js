const ENTER_KEY = "Enter";

const { format } = new Intl.DateTimeFormat("ru-RU", {
	hour12: false,
	hour: "numeric",
	minute: "numeric",
	seconds: "numeric",
});

export { ENTER_KEY, format };
