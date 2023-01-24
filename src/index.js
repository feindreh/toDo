import "./style.css";
import toDoFactory from "./toDoFactory";
import openNewToDoPrompt  from "./prompt";

const newButton = document.querySelector("#newButton");
newButton.addEventListener(("click"), () => {
	const event = openNewToDoPrompt();
	console.log(event);
});