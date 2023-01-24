import "./style.css";
import {getValues,resetValues,hidePrompt,showPrompt} from "./prompt/promptFunctions";
import toDoFactory from "./toDoFactory";
import header from "./header";


const container = document.querySelector("#container");
container.append(header());

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

	// get inputs ==> make object ==> push it to Projects
	Projects.push(toDoFactory(getValues(prompt)));

	// reset inputs
	resetValues(prompt);
});

const Projects = [];

