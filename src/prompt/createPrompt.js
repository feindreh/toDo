import {divID} from "../functions/creation.js";


export default function createPrompt(){
	//return the prompt as node


	//create elements
	
	function createInput(name){
		let newInput = document.createElement("input");
		newInput.setAttribute("class","textField");
		newInput.setAttribute("id",`${name}`);
		return newInput;
	}

	const promptContainer = divID("newPrompt");

	const title = createInput("title");
	const description = createInput("description");
	const dueDate = createInput("dueDate");
	const proxTime = createInput("proxTime");

	//append elements to container

	promptContainer.append(title,description,dueDate,proxTime);
	
	//return the container
	return promptContainer;
}