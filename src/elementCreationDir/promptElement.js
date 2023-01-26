import {divID,divClass} from "./creation.js";
import {createCloseButton, createClosePromptButton} from "./ButtonCreation";

function createInput(name){
	let newInput = document.createElement("input");
	newInput.setAttribute("class","textField");
	newInput.setAttribute("id",`${name}`);
	return newInput;
}
function createLabel(name){
	let newLabel = document.createElement("label");
	newLabel.setAttribute("class", "textLabel");
	newLabel.innerText = `${name}`;
	return newLabel;
}
function createInputBlock(name){
	let input = createInput(name);
	let label = createLabel(name);
	let block = divClass("inputWrap");
	block.append(label,input);
	return block;
}
function createPromptLayout(){
	const LayoutContainer = divID("projectPrompt");

	const title = createInputBlock("title");
	const description = createInputBlock("description");
	const dueDate = createInputBlock("dueDate");
	const proxTime = createInputBlock("proxTime");

	const closePromptButton = createClosePromptButton();

	LayoutContainer.append(title,description,dueDate,proxTime,closePromptButton);

	return LayoutContainer; 
}
export function createInputPrompt(parentNode,type){


	const promptContainer = createPromptLayout();

	const closeButton = createCloseButton(parentNode,type);

	promptContainer.append(closeButton);

	return promptContainer;
}

export function createEditPrompt(){
	console.log("missing functionality");
}

export function makeBlackBox(){
	const blackBox = divID("blackBox");
	return blackBox;
}