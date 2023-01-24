import "./style.css";
import toDoFactory from "./toDoFactory";
import newToDoPrompt  from "./prompt/prompt";

const newButton = document.querySelector("#newButton");
const container = document.querySelector("#container");

newButton.addEventListener(("click"), () => {
	const prompt = newToDoPrompt();
	container.append(prompt);
});