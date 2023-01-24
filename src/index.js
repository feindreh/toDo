import "./style.css";
import createPrompt  from "./prompt/createPrompt";
import {getValues,resetValues,hidePrompt,showPrompt} from "./prompt/promptFunctions";
import toDoFactory from "./toDoFactory";


const container = document.querySelector("#container");
container.append(createPrompt());

const newButton = document.querySelector("#newButton");
const closeButton = document.querySelector("#closeButton");
const prompt = document.querySelector("#newPrompt");


newButton.addEventListener(("click"), () => {
	// show prompt
	showPrompt(prompt);
});

closeButton.addEventListener(("click"), () => {
	// hide prompt
	hidePrompt(prompt);
	// get inputs
	Projects.push(toDoFactory(getValues(prompt)));
	console.log(Projects);
	// reset inputs
	resetValues(prompt);
});

const Projects = [];

