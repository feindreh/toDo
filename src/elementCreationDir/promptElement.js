import {divID,divClass} from "./creation.js";
import {createCloseButton} from "./ButtonCreation";

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


export function createToDoPrompt(){
	//return the prompt as node


	//create elements
	
	const promptContainer = divID("toDoPrompt");

	const title = createInputBlock("title");
	const description = createInputBlock("description");
	const dueDate = createInputBlock("dueDate");
	const proxTime = createInputBlock("proxTime");

	const closeButton = createCloseButton("toDoButton");

	//append elements to container

	promptContainer.append(title,description,dueDate,proxTime,closeButton);
	
	
	return promptContainer;
}
export function createProjectPrompt(parentNode){
	//return the prompt as node


	//create elements

	const promptContainer = divID("projectPrompt");

	const title = createInputBlock("title");
	const description = createInputBlock("description");
	const dueDate = createInputBlock("dueDate");
	const proxTime = createInputBlock("proxTime");

	const closeButton = createCloseButton(parentNode);

	//append elements to container
	promptContainer.append(title,description,dueDate,proxTime,closeButton);
	//return the container
	return promptContainer;
}