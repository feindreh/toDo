import {divID,divClass} from "../functions/creation.js";

// toDoFactory = (title,description,dueDate,proxTime,priority = "0") =>

export default function newToDoPrompt(){
	//return the prompt as node


	//create elements
	const promptContainer = divID("newPrompt");

	const input = document.createElement("input");
	input.setAttribute("class","textField");

	const closeButton = document.createElement("button");
	closeButton.setAttribute("id","closeButton");
	closeButton.innerText = "... finishing this to Do!";

	//append elements to container

	for(let i = 1; i<=4;i++){
		let newNode = input.cloneNode(true);
		promptContainer.append(newNode);
	}

	promptContainer.append(closeButton);
	
	//return the container
	return promptContainer;
}