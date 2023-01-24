import "./style.css";
import toDoFactory from "./toDoFactory";
import createPrompt  from "./prompt/createPrompt";
import {getValues,resetValues} from "./prompt/promptValues";


const container = document.querySelector("#container");
container.append(createPrompt());

const newButton = document.querySelector("#newButton");
const closeButton = document.querySelector("#closeButton");
const prompt = document.querySelector("#newPrompt");


newButton.addEventListener(("click"), () => {
	// show prompt
	prompt.style.visibility = "visible";
});

closeButton.addEventListener(("click"), () => {
	// hide prompt
	prompt.style.visibility = "hidden";
	// get inputs
	getValues(prompt);
	// reset inputs
	resetValues(prompt);
});