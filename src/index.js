import "./style.css";
import toDoFactory from "./toDoFactory";
import newToDoPrompt  from "./prompt/prompt";

const newButton = document.querySelector("#newButton");
newButton.addEventListener(("click"), () => {
	const event = newToDoPrompt();
	console.log(event);
});