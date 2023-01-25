import {divID,divClass} from "../creation.js";
import createCloseButton from "../prompDir/closeButton";


export default function createPrompt(){
	//return the prompt as node


	//create elements
	
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

	const promptContainer = divID("newPrompt");

	const title = createInputBlock("title");
	const description = createInputBlock("description");
	const dueDate = createInputBlock("dueDate");
	const proxTime = createInputBlock("proxTime");

	const closeButton = createCloseButton();

	//append elements to container

	promptContainer.append(title,description,dueDate,proxTime,closeButton);
	
	//return the container
	return promptContainer;
}