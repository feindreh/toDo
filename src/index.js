import "./style.css";
import toDoFactory from "./toDoFactory";
import newToDoPrompt  from "./prompt/prompt";


const container = document.querySelector("#container");
const newButton = document.querySelector("#newButton");

container.append(newToDoPrompt());

newButton.addEventListener(("click"), () => {
	// show prompt
	const prompt = document.querySelector("#newPrompt");
	prompt.style.visibility = "visible";
});