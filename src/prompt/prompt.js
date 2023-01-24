import {divID,divClass} from "../functions/creation.js";

// toDoFactory = (title,description,dueDate,proxTime,priority = "0") =>

export default function newToDoPrompt(){

	const promptContainer = divID("newPrompt");

	const input = document.createElement("input");
	input.setAttribute("class","textField");

	for(let i = 1; i<=4;i++){
		let newNode = input.cloneNode(true);
		promptContainer.append(newNode);
	}
	
	return promptContainer;
}