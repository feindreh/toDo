import "./style.css";
import toDoFactory from "./toDoFactory";
import newToDoPrompt  from "./prompt/prompt";


const container = document.querySelector("#container");
container.append(newToDoPrompt());

const newButton = document.querySelector("#newButton");
const closeButton = document.querySelector("#closeButton");


newButton.addEventListener(("click"), () => {
	// show prompt
	const prompt = document.querySelector("#newPrompt");
	prompt.style.visibility = "visible";
});

closeButton.addEventListener(("click"), () => {
	// show prompt
	const prompt = document.querySelector("#newPrompt");
	prompt.style.visibility = "hidden";
});